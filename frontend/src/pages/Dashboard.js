import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get("/transactions");
        setTransactions(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    loadData();
  }, []);

  // 📊 métricas
  const total = transactions.length;

  const frauds = transactions.filter(
    (t) => t.status === "FRAUD"
  ).length;

  const approved = transactions.filter(
    (t) => t.status === "APPROVED"
  ).length;

  const avgRisk =
    total > 0
      ? transactions.reduce((acc, t) => acc + t.riskScore, 0) / total
      : 0;

  return (
    <div style={{ background: "#f5f6fa", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ padding: 20 }}>
        <h1 style={{ marginBottom: 20 }}>Dashboard Fraud Shield</h1>

        {/* 📊 CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 15,
            marginBottom: 30,
          }}
        >
          <div style={cardStyle("#4f46e5")}>
            <h4>Total</h4>
            <h2>{total}</h2>
          </div>

          <div style={cardStyle("#ef4444")}>
            <h4>Fraudes</h4>
            <h2>{frauds}</h2>
          </div>

          <div style={cardStyle("#22c55e")}>
            <h4>Aprovadas</h4>
            <h2>{approved}</h2>
          </div>

          <div style={cardStyle("#f59e0b")}>
            <h4>Risco médio</h4>
            <h2>{avgRisk.toFixed(2)}</h2>
          </div>
        </div>

        {/* 📄 LISTA */}
        <h3 style={{ marginBottom: 15 }}>Transações</h3>

        <div style={{ display: "grid", gap: 12 }}>
          {transactions.map((t) => (
            <div key={t.id} style={transactionStyle}>
              <div>
                <strong>{t.customerName}</strong>
                <p style={{ margin: 0, fontSize: 12, color: "#666" }}>
                  {t.country}
                </p>
              </div>

              <div>
                <span style={statusStyle(t.status)}>
                  {t.status}
                </span>
              </div>

              <div>R$ {t.amount}</div>

              <div>Risk: {t.riskScore}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const cardStyle = (color) => ({
  background: "#fff",
  padding: 20,
  borderRadius: 12,
  borderLeft: `5px solid ${color}`,
  boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
});

const transactionStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 15,
  background: "#fff",
  borderRadius: 12,
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const statusStyle = (status) => ({
  padding: "4px 10px",
  borderRadius: 8,
  fontSize: 12,
  fontWeight: "bold",
  color:
    status === "FRAUD"
      ? "#ef4444"
      : status === "APPROVED"
      ? "#22c55e"
      : "#f59e0b",
  background:
    status === "FRAUD"
      ? "#fee2e2"
      : status === "APPROVED"
      ? "#dcfce7"
      : "#fef3c7",
});