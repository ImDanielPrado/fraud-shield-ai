import "../styles/login.css";
import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      navigate("/dashboard");

    } catch (error) {
      alert(
        error.response?.data?.message || "Erro ao realizar login"
      );
    }
  }

  return (
  <div className="login-page">
    <div className="login-card">

      <h1 className="login-title">
        🛡️ Fraud Shield AI
      </h1>

      <p className="login-subtitle">
        Plataforma inteligente para monitoramento e detecção de fraudes.
      </p>

      <form onSubmit={handleLogin}>

        <input
          className="login-input"
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="login-input"
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="login-button"
          type="submit"
        >
          Entrar com segurança
        </button>

      </form>

      <div className="login-footer">
        <p>JWT Authentication • Fraud Detection • React + Node.js</p>

        <br />

        <strong>by Daniel Prado</strong>
      </div>

    </div>
  </div>
  );
}