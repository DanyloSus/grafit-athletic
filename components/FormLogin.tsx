//hooks need SSR
"use client";

//import from libraries
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";

//internal imports
import CustomTextField from "@/ui/CustomTextField";
import Button from "@/ui/buttons/Button";

const Form = () => {
  //is action active
  const [isRegistering, setIsRegistering] = useState(false);
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
    validateOnChange: false,
    onSubmit: async (value) => {
      setIsRegistering(true);

      //sign in action
      const res = await signIn("credentials", {
        username: value.username,
        password: value.password,
        redirect: false,
      }).catch((err) => console.log(err));

      if (res?.status !== 401 && !res?.ok) {
        //if res has errors
        setIsRegistering(false);
        return;
      }

      if (res?.status === 401) {
        formik.setErrors({
          username: " ",
          password: "Username or password is wrong!",
        });
        setIsRegistering(false);
        return;
      }

      router.replace("signed/trainers");
    },
  });

  function onChange(e: any) {
    formik.handleChange(e);
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-5 w-full sm:max-w-[399px] items-center"
    >
      <CustomTextField
        disabled={isRegistering}
        error={Boolean(formik.errors.username)}
        helperText={formik.errors.username ? formik.errors.username : ""}
        label="Username"
        name="username"
        type="text"
        value={formik.values.username}
        onChange={onChange}
      />
      <CustomTextField
        disabled={isRegistering}
        error={Boolean(formik.errors.password)}
        helperText={formik.errors.password ? formik.errors.password : ""}
        label="Password"
        name="password"
        type="password"
        value={formik.values.password}
        onChange={onChange}
      />
      <div className="flex gap-2 items-center mt-2 max-sm:flex-col-reverse">
        <Button
          text="Зареєструватися"
          type="text"
          disabled={isRegistering}
          isWhite
          link="register"
          isSmall
        />
        <Button
          text="Увійти"
          type="solid"
          isWhite
          disabled={isRegistering}
          isSmall
          isSubmit
          icon={
            <Image
              src="./04.svg"
              alt="arrow right"
              width={32}
              height={24}
              className="min-w-8 h-6"
            />
          }
        />
      </div>
    </form>
  );
};

export default Form;
