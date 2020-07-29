import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import fetchData from "../customeFunctions/fetchData";
import { UserInfo } from "../Types";
import TextInput from "../Components/Home/TextInput";
import GoogleLogin from "react-google-login";
import LoadingIndicator from "../Components/Both/LoadingIndicator";

const SignUpScreen: React.FC = () => {
  const history = useHistory();
  const [message, setMessage] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [info, setInfo] = useState<UserInfo>({
    name: "",
    email: "",
    password: "",
    admin: false,
  });
  const handleChange = (action: string, data: string): void => {
    setInfo({ ...info, [action]: data });
  };

  const submitForm = async (): Promise<any> => {
    let mounted: boolean = true;
    try {
      setLoading(true);
      const response: any = await fetchData(
        "http://localhost:5000/users/signup",
        "post",
        info
      );
      if (mounted) {
        setMessage(response.data.message);
        setTimeout(() => {
          history.push("/login");
        }, 1000);
        setLoading(false);
      }

      return () => (mounted = false);
    } catch (err) {
      setLoading(false);
      if (err.response) {
        setMessage(err.response.data.error);
      } else {
        setMessage("Error accoured try again later");
      }
    }
  };
  return (
    <div className={"background"}>
      <div className={"signupLoginContainer"}>
        <h1 className={"loginSignupHeader"}>Signup</h1>
        <h3 className={"loginSignupSubHeader"}>
          Already have an account?
          <Link className={"loginSignupLink"} to={"login"}>
            Login
          </Link>
        </h3>
        <form className={"form"}>
          <div className={"inputsContainer"}>
            <TextInput
              name={"Name"}
              placeholder={"e.g. Thomas"}
              handleChange={(data: string) => handleChange("name", data)}
              type={"text"}
            />

            <TextInput
              name={"Email"}
              placeholder={"e.g. demo@email.com"}
              handleChange={(data: string) => handleChange("email", data)}
              type={"email"}
            />
            <TextInput
              name={"Password"}
              placeholder={"password"}
              handleChange={(data: string) => handleChange("password", data)}
              type={"password"}
            />
          </div>
          <div className={"separatorLine"}></div>
          <div className={"loginOtherWay"}>
            <GoogleLogin
              buttonText={"Continue with Google"}
              clientId={"sdsdasd"}
            />
          </div>
        </form>
        {loading ? (
          <LoadingIndicator color={"black"} />
        ) : (
          <input
            className={"submitButton submitButtonHome"}
            type={"button"}
            value={"Submit"}
            onClick={submitForm}
          />
        )}

        {message ? (
          <h1 className={"messageResponse"}>{message.replace(/"/g, "")}</h1>
        ) : (
          <h1 className={"messageResponse"}>{"    "}</h1>
        )}
      </div>
    </div>
  );
};

export default SignUpScreen;
