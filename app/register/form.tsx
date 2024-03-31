"use client";

import Button from "@/components/ui/Button";
import React, { useState } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomTextField from "@/components/ui/CustomTextField";
import { useRouter } from "next/navigation";
import axios from "axios";

const FormRegister = () => {
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

      const res = await axios({
        method: "post",
        data: { username: value.username },
        url: "/api/check",
      }).catch(() => {
        setIsRegistering(false);
        return;
      });

      if (!res) {
        setIsRegistering(false);
        return;
      }

      if (res.data.user) {
        formik.setErrors({ username: "Username already exists" });
        setIsRegistering(false);
        return;
      }

      axios({ method: "post", data: value, url: "/api/register" })
        .then((res) => {
          router.replace("login");
        })
        .catch(() => {
          setIsRegistering(false);
          return;
        });
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
      <div className="flex max-sm:flex-col-reverse gap-2 items-center mt-2">
        <Button
          text="Увійти"
          type="text"
          isWhite
          link="login"
          isSmall
          disabled={isRegistering}
        />
        <Button
          text="Зареєструватися"
          disabled={isRegistering}
          type="solid"
          isWhite
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

export default FormRegister;
