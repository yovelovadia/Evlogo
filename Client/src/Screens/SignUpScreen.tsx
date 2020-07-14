import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import fetchData from "../customeFunctions/fetchData";
import { UserInfo } from "../Types";
import TextInput from "../Components/Home/TextInput";

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
  const handleChange = (action: string, data: string | boolean): void => {
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
        <h1 className={"header"}>Sign up!</h1>
        <form className={"inputsContainer"}>
          <TextInput
            name={"Name"}
            placeholder={"e.g. Thomas"}
            handleChange={(data: string | boolean) =>
              handleChange("name", data)
            }
          />
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
            value={"Submit"}
            onClick={submitForm}
          />
        )}

        <Link to={"login"}>
          <h5>Already got user?</h5>
        </Link>
        {message ? (
          <h1 className={"messageResponse"}>{message.replace(/"/g, "")}</h1>
        ) : null}
      </div>
    </div>
  );
};

export default SignUpScreen;
