export default function Header() {
  return (
    <div
      style={{
        backgroundImage: "url(https://via.placeholder.com/1200x400)",
        height: "400px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        textAlign: "center",
        padding: "0 20px",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          color: "#fff",
          fontSize: "48px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "10px 20px",
          borderRadius: "8px",
          maxWidth: "90%",
        }}
      >
        Welcome to Our Services
      </h1>
    </div>
  );
}
