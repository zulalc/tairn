import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";
import {
  fetchProfile,
  updateProfileAction,
  updateProfileImageAction,
} from "@/utils/actions";

async function ProfilePage() {
  const profile = await fetchProfile();
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font semibold mb-8 capitalize"> User Profile</h1>
      <div className="border p-8 rounded-md max-w-md w-full">
        <div className="flex justify-center mb-4">
          <ImageInputContainer
            image={profile.profileImage}
            name="profileImage"
            action={updateProfileImageAction}
            text="Update Profile Image"
          />
        </div>

        <FormContainer action={updateProfileAction}>
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <FormInput
              type="text"
              name="username"
              label="Username"
              defaultValue={profile.username}
            />
          </div>
          <SubmitButton text="Update Profile" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}

export default ProfilePage;
