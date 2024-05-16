export const EmailTemplate = ({ firstName, message, email, tel }) => (
  <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
    <h1> Nuevo Contacto desde sitio web Buycars </h1>
    <p>Nombre:{firstName}</p>
    <p>Teléfono: {tel}</p>
    <p>Correo Electrónico: {email}</p>
    <p>{message}</p>
  </div>
);
