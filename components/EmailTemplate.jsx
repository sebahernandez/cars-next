export const EmailTemplate = ({ firstName, message, email }) => (
  <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
    <h1> Nuevo Contacto </h1>
    <p>Nombre:{firstName}</p>
    <p>Correo Electrónico: {email}</p>
    <p>{message}</p>
  </div>
);
