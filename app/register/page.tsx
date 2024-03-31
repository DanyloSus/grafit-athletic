import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/next-auth/authOptions";
import FormsWrapper from "@/components/wrappers/FormsWrapper";
import FormRegister from "./form";

const RegisterPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/signed/trainers");

  return (
    <FormsWrapper title="Register">
      <FormRegister />
    </FormsWrapper>
  );
};

export default RegisterPage;
