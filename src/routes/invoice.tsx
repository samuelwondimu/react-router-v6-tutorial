import { useNavigate, useParams } from "react-router-dom";
import { deleteInvoice, getInvoice } from "../data";

export default function Invoice() {
  let navigate = useNavigate();
  let params = useParams();
  let invoice = getInvoice(parseInt(`${params.invoiceId}`, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice?.number}</h2>
      <p>
        {invoice?.name}: {invoice?.number}
      </p>
      <p>Due Date: {invoice?.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(parseInt(`${invoice?.number}`, 10));
            navigate("/invoices");
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
