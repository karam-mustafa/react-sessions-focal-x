export default function Services() {
  const services = [
    {
      image: "https://via.placeholder.com/150",
      title: "Service 1",
    },
    {
      image: "https://via.placeholder.com/160",
      title: "Service 2",
    },
    {
      image: "https://via.placeholder.com/170",
      title: "Service 3",
    },
  ];
  // npm run dev

  return (
    <section
      id="services"
      style={{
        padding: "40px 20px",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {services.map((service, index) => {
        return (
          <div
            key={index}
            style={{
              width: "300px",
              margin: "10px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              textAlign: "center",
              boxSizing: "border-box",
            }}
          >
            <img
              src={service.image}
              alt={service.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h2>{service.title}</h2>
          </div>
        );
      })}
    </section>
  );
}
