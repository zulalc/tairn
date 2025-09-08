"use server";
import db from "./db";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import {
  clubSchema,
  imageSchema,
  profileSchema,
  validateWithZodSchema,
} from "./schemas";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { uploadImage } from "./supabase";

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) throw new Error("Please login to access this page");
  if (!user.privateMetadata?.hasProfile) redirect("/profile/create");
  return user;
};

export const fetchProfile = async () => {
  const user = await getAuthUser();
  const profile = await db.user.findUnique({
    where: { clerkId: user.id },
  });
  if (!profile) return redirect("/profile/create");
  return profile;
};

export const createProfileAction = async (
  prevState: { message?: string; error?: Record<string, string[]> },
  formData: FormData
) => {
  try {
    const user = await getAuthUser();

    const values = Object.fromEntries(formData);
    const validatedData = validateWithZodSchema(profileSchema, values);

    await db.user.create({
      data: {
        clerkId: user.id,
        username: validatedData.username,
        image: user.imageUrl ?? "",
      },
    });

    const client = await clerkClient();

    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
    console.log("Profile created successfully");
  } catch (error) {
    console.error("Validation failed:", error);
    return { message: "Profile creation failed", error };
  }
  redirect("/");
};

export const updateProfileAction = async (
  prevState: { message?: string; error?: Record<string, string[]> },
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    const values = Object.fromEntries(formData);
    const validatedData = validateWithZodSchema(profileSchema, values);

    if (validatedData.username) {
      const existingUser = await db.user.findUnique({
        where: { username: validatedData.username },
      });

      if (existingUser && existingUser.clerkId !== user.id) {
        return { message: "That username is already taken." };
      }
    }

    await db.user.update({
      where: { clerkId: user.id },
      data: validatedData,
    });
    revalidatePath("/profile");
    return { message: "Profile updated successfully" };
  } catch (error) {
    console.error("Profile update failed:", error);
    return { message: "Profile update failed" };
  }
};

export const fetchProfileImage = async () => {
  const user = await currentUser();
  if (!user) return null;

  const profile = await db.user.findUnique({
    where: { clerkId: user.id },
    select: { image: true },
  });

  return profile?.image;
};

export const updateProfileImageAction = async (
  prevState: { message?: string; error?: Record<string, string[]> },
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    const image = formData.get("image") as File;
    const validatedData = validateWithZodSchema(imageSchema, { image });
    const fullPath = await uploadImage(validatedData.image);

    await db.user.update({
      where: { clerkId: user.id },
      data: { image: fullPath },
    });
    revalidatePath("/profile");
    return { message: "Profile image updated successfully" };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "An error occurred",
    };
  }
};

export const createClubAction = async (
  prevState: { message?: string; error?: Record<string, string[]> },
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    const values = Object.fromEntries(formData);
    const validatedData = validateWithZodSchema(clubSchema, {
      ...values,
      creatorId: user.id,
    });
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "An error occurred",
    };
  }
  redirect("/");
};
