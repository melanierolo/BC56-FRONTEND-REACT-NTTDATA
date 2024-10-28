import { FC } from "react";
import { useNavigate } from "react-router-dom";

import LoginForm from "@components/organisms/LoginForm/index";

import { loginUser } from "@services/auth.services";

import "./style.css";

const LoginPage: FC = () => {
  const navigate = useNavigate();

  const handleLoginSubmit = async (username: string, password: string) => {
    try {
      const result = await loginUser(username, password);
      if (result.success) {
        alert(`Login successful: ${JSON.stringify(result.data)}`);
        navigate("/products");
      } else {
        console.error(result.message || "Incorrect username or password");
      }
    } catch (error) {
      console.error("An unexpected error ocurred.");
    }
  };

  return (
    <main className="login">
      <div className="login__container">
        <h2 className="login__title">Sign in</h2>
        <LoginForm onSubmit={handleLoginSubmit} />
      </div>
    </main>
  );
};

export default LoginPage;
