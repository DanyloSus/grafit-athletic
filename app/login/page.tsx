import Form from "./form";

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/next-auth/authOptions";
import FormsWrapper from "@/components/wrappers/FormsWrapper";

const RegisterPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/signed/trainers");

  return (
    <FormsWrapper title="Login">
      <Form />
    </FormsWrapper>
  );
};

export default RegisterPage;
