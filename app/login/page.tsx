//import from libraries
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

//internal imports
import { authOptions } from "@/modules/next-auth/authOptions";
import FormsWrapper from "@/components/wrappers/FormsWrapper";
import Form from "@/components/FormLogin";

const RegisterPage = async () => {
  const session = await getServerSession(authOptions); //get user's session

  if (session) redirect("/signed/trainers"); //if user signed then redirect

  return (
    <FormsWrapper title="Login">
      <Form />
    </FormsWrapper>
  );
};

export default RegisterPage;
