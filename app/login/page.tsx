"use client";

import Button from "@/components/ui/Button";
import FormsWrapper from "@/components/wrappers/FormsWrapper";
import React from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomTextField from "@/components/ui/CustomTextField";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required()
        .test(
          "latin",
          "Must be latin characters",
          (val) => !/^[a-zA-Z]$/.test(val)
        )
        .test(
          "len",
          "Must be from 2 to 12 characters",
          (val) => val.length >= 2 && val.length <= 12
        ),
      password: Yup.string()
        .required()
        .test(
          "latin",
          "Must be latin characters",
          (val) => !/^[a-zA-Z]$/.test(val)
        )
        .test(
          "len",
          "Must be from 8 to 20 characters",
          (val) => val.length >= 8 && val.length <= 20
        ),
    }),
    onSubmit: (value) => {
      const users = localStorage.getItem("users");

      if (users !== null) {
        const usersList: {
          username: string;
          password: string;
        }[] = JSON.parse(users);

        if (
          usersList.find((e) => value.username === e.username) &&
          usersList.find((e) => value.username === e.username)?.password ==
            value.password
        ) {
          router.replace("/signed/trainers");
        } else {
          formik.setErrors({
            username: " ",
            password: "User or password is correct",
          });
        }
      } else {
        formik.setErrors({ username: "User doesn't exist" });
      }
    },
  });

  function onChange(e: any) {
    formik.handleChange(e);
  }

  return (
    <FormsWrapper title="Login">
      <form onSubmit={formik.handleSubmit}>
        <CustomTextField
          disabled={false}
          error={Boolean(formik.errors.username)}
          helperText={formik.errors.username ? formik.errors.username : ""}
          label="Username"
          name="username"
          type="text"
          value={formik.values.username}
          onChange={onChange}
        />
        <CustomTextField
          disabled={false}
          error={Boolean(formik.errors.password)}
          helperText={formik.errors.password ? formik.errors.password : ""}
          label="Password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={onChange}
        />
        <div className="flex gap-2 items-center mt-2">
          <Button
            text="Зареєструватися"
            type="text"
            isWhite
            link="register"
            isSmall
          />
          <Button
            text="Увійти"
            type="solid"
            isWhite
            isSmall
            isSubmit
            icon={
              <Image
                src="./icons/04.svg"
                alt="arrow right"
                width={32}
                height={24}
                className="min-w-8 h-6"
              />
            }
          />
        </div>
      </form>
    </FormsWrapper>
  );
};

export default RegisterPage;
