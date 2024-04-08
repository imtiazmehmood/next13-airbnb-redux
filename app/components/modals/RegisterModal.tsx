"use client";

import axios from "axios";
import Modal from "./Modal";
import Button from "../Button";
import { useState } from "react";
import { Heading } from "../Heading";
import { Input } from "../input/Input";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error: any) => {
        toast.error("Something Went Wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className=" flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account!" />
      <Input
        required
        id="email"
        label="Email"
        errors={errors}
        register={register}
        disabled={isLoading}
      />
      <Input
        required
        id="name"
        label="Name"
        errors={errors}
        register={register}
        disabled={isLoading}
      />
      <Input
        required
        id="password"
        type="password"
        label="Password"
        errors={errors}
        register={register}
        disabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        icon={FcGoogle}
        onClick={() => {}}
        label="Continue with Google"
      />
      <div className=" text-neutral-500 text-center mt-4 font-light">
        <div className="flex flex-row items-center gap-2 justify-center">
          <div>Already have an account?</div>
          <div className="text-neutral-800 cursor-pointer hover:underline">
            Login
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      title="Register"
      body={bodyContent}
      disabled={isLoading}
      actionLable="Continue"
      footer={footerContent}
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default RegisterModal;
