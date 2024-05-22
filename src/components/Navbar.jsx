export default function Navbar() {
  return (
    <nav
      style={{
        padding: "10px 20px",
        backgroundColor: "#333",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>Logo</div>
      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#services" style={{ color: "#fff", textDecoration: "none" }}>
          Services
        </a>
        <a href="#about" style={{ color: "#fff", textDecoration: "none" }}>
          About Us
        </a>
      </div>
    </nav>
  );
}
