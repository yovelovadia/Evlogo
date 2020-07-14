import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import fetchData from "../customeFunctions/fetchData";
import { UserInfo } from "../Types";
import TextInput from "../Components/Home/TextInput";

const LoginScreen: React.FC = () => {
  const history = useHistory();
  const [message, setMessage] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [info, setInfo] = useState<UserInfo>({
    name: "",
    email: "",
    password: "",
    admin: false,
  });

  const handleChange = (action: string, data: string | boolean): void => {
    setInfo({ ...info, [action]: data });
  };

  const submitForm = async (): Promise<void> => {
    try {
      setLoading(true);
      const response: any = await fetchData(
        "http://localhost:5000/users/login",
        "post",
        info
      );
      setMessage(response.data.message);
      localStorage.setItem("jwt", response.data.token);
      setTimeout(() => {
        setLoading(false);
        history.push("/");
      }, 1000);
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
        <h1 className={"header"}>Login</h1>
        <form className={"inputsContainer"}>
          <TextInput
            name={"Email"}
            placeholder={"e.g. demo@email.com"}
            handleChange={(data: string | boolean) =>
              handleChange("email", data)
            }
            type={"email"}
          />
          <TextInput
            name={"Password"}
            placeholder={"password"}
            handleChange={(data: string | boolean) =>
              handleChange("password", data)
            }
            type={"password"}
          />
        </form>
        {loading ? (
          <div className="loadingIndicator">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <input
            className={"submitButton"}
            type={"button"}
            value={"Login"}
            onClick={submitForm}
          />
        )}

        <Link to={"signup"}>
          <h5>No user?</h5>
        </Link>
        {message ? (
          <h1 className={"messageResponse"}>{message.replace(/"/g, "")}</h1>
        ) : null}
      </div>
    </div>
  );
};

export default LoginScreen;
