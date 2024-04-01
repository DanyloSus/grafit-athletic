//import from libraries
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

//internal imports
import { authOptions } from "@/modules/next-auth/authOptions";
import FormsWrapper from "@/components/wrappers/FormsWrapper";
import FormRegister from "@/components/FormRegister";

const RegisterPage = async () => {
  const session = await getServerSession(authOptions); //get user's session

  if (session) redirect("/signed/trainers"); //if user signed then redirect

  return (
    <FormsWrapper title="Register">
      <FormRegister />
    </FormsWrapper>
  );
};

export default RegisterPage;
