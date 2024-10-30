import { FC, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "@root/contexts/AuthContext";

import LoginForm from "@components/organisms/LoginForm/index";
import Dialog from "@components/molecules/Dialog";

import { loginUser } from "@root/services/auth.service";

import toast, { Toaster } from "react-hot-toast";

import "./style.css";
import ForgotPasswordForm from "@root/components/organisms/ForgotPasswordForm";

const LoginPage: FC = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);

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

  const handleForgotPasswordOpen = () => {
    setForgotPasswordOpen(true);
  };

  const handleForgotPasswordSubmit = async (email: string) => {
    toast.success("Information sent to the provided email address.");
    setForgotPasswordOpen(false);
  };

  return (
    <main className="login">
      <div className="login__container">
        <h2 className="login__title">Sign in</h2>
        <LoginForm onSubmit={handleLoginSubmit} onForgotPassword={handleForgotPasswordOpen} />
      </div>
      <Toaster />
      <Dialog
        open={isForgotPasswordOpen}
        onClose={() => {
          setForgotPasswordOpen(false);
        }}
        size="medium"
        title="Forgot Password"
        message="Please enter your email"
      >
        <ForgotPasswordForm
          onSubmit={handleForgotPasswordSubmit}
          onCancel={() => setForgotPasswordOpen(false)}
        />
      </Dialog>
    </main>
  );
};

export default LoginPage;
