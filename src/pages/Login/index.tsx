import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "@root/contexts/AuthContext";

import LoginForm from "@components/organisms/LoginForm/index";

import { loginUser } from "@services/auth.services";

import toast, { Toaster } from "react-hot-toast";

import "./style.css";

const LoginPage: FC = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginSubmit = async (username: string, password: string) => {
    try {
      const result = await loginUser(username, password);
      if (result.success) {
        login(result.data.accessToken, result.data.firstName);
        navigate("/products");
      } else {
        if (result.status === 400) {
          toast.error("Incorrect username or password");
        } else {
          toast.error("Error. Please try again.");
        }
      }
    } catch (error) {
      toast.error("An unexpected error ocurred.");
    }
  };

  return (
    <main className="login">
      <div className="login__container">
        <h2 className="login__title">Sign in</h2>
        <LoginForm onSubmit={handleLoginSubmit} />
      </div>
      <Toaster />
    </main>
  );
};

export default LoginPage;
