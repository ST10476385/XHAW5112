import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function DemoPaymentPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialAmount = params.get("amount") || "";
  const [amount, setAmount] = useState(initialAmount);

  return (
    <div style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#f0f4ff" }}>
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 16px #dbeafe", padding: 32, maxWidth: 400, width: "100%", textAlign: "center" }}>
        <h2 style={{ color: "#2563eb", fontWeight: 700, marginBottom: 16 }}>Demo Payment Portal</h2>
        <p style={{ color: "#334155", marginBottom: 24 }}>
          This is a demo payment page. No real transaction will occur.
        </p>
        <form onSubmit={e => { e.preventDefault(); alert(`Thank you for your (demo) donation of R${amount || '0'}!`); }}>
          <input
            type="number"
            placeholder="Donation Amount (R)"
            required
            min="1"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            style={{ width: "100%", padding: 12, marginBottom: 12, borderRadius: 8, border: "1px solid #cbd5e1", fontWeight: 600, fontSize: 18 }}
          />
          <input type="text" placeholder="Card Number" required style={{ width: "100%", padding: 12, marginBottom: 12, borderRadius: 8, border: "1px solid #cbd5e1" }} />
          <input type="text" placeholder="Name on Card" required style={{ width: "100%", padding: 12, marginBottom: 12, borderRadius: 8, border: "1px solid #cbd5e1" }} />
          <input type="text" placeholder="MM/YY" required style={{ width: "48%", padding: 12, marginRight: 8, borderRadius: 8, border: "1px solid #cbd5e1" }} />
          <input type="text" placeholder="CVC" required style={{ width: "48%", padding: 12, borderRadius: 8, border: "1px solid #cbd5e1" }} />
          <button type="submit" style={{ marginTop: 24, width: "100%", background: "#22c55e", color: "#fff", fontWeight: 600, border: "none", borderRadius: 8, padding: 14, fontSize: 18, cursor: "pointer" }}>
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default DemoPaymentPage;
