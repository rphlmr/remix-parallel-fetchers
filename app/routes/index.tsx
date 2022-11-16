import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Fetch All</h1>
      <Link to="simple">Simple</Link>
      <br />
      <Link to="deep">Deep</Link>
    </div>
  );
}
