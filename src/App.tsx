import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>BookKeeper!</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/invoices">Invo hajhaj ices</Link>
        <Link to="/expense">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}
