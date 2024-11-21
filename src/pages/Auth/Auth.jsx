import { redirect, useSearchParams, useActionData } from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import ForgetPassword from "./ForgetPassword";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  let initialResponse = {
    success: true,
    message: "Signed up successfully!",
  };
  const response = useActionData();

  if (mode === "login") {
    return <LogIn response={response || initialResponse} />;
  }
  if (mode === "signup") {
    return <SignUp response={response || initialResponse} />;
  }
  if (mode === "forgetPassword") {
    return <ForgetPassword />;
  }
};
export default Auth;

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode");
  const type = localStorage.getItem("type");

  const data = await request.formData();
  const formattedExhibit = data.get("event")?.toLowerCase().replace(/\s/g, "_");

  const authLoginData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const authSignupData = {
    firstname: data.get("firstname"),
    lastname: data.get("lastname"),
    email: data.get("email"),
    type: type,
    exhibit: formattedExhibit,
    password: data.get("password"),
  };

  const token = resData.data.access_token;
  toast.success(resData.message);

  localStorage.setItem("token", token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());
  localStorage.setItem("profile", JSON.stringify(resData.data));

  if (type === "host") {
    return redirect("/home");
  }
  return redirect("/");
};
