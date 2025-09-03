"use client";
import { actionFunction } from "@/utils/types";
import Image from "next/image";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Button } from "../ui/button";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import { SubmitButton } from "./Buttons";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

function ImageInputContainer(props: ImageInputContainerProps) {
  const { image, name, action, text, children } = props;
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
  const userIcon = (
    <FaRegUserCircle className="w-4 h-4 bg-primary rounded-full text-white" />
  );
  return (
    <div className="flex flex-col items-center">
      {image ? (
        <Image
          src={image}
          width={200}
          height={200}
          alt={name}
          className="rounded-full w-32 h-32 object-cover mb-4"
        />
      ) : (
        userIcon
      )}

      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>

      {isUpdateFormVisible && (
        <div className="max-w-lg mt-4">
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <div className="flex justify-center">
              <SubmitButton text="Save Image" className="mt-4" />
            </div>
          </FormContainer>
        </div>
      )}
    </div>
  );
}

export default ImageInputContainer;
