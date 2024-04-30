export const formatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

// Función para formatear y ajustar el formato de la moneda
export function formatCLP(value) {
  // Formatear el valor como moneda
  let formatted = formatter.format(value);

  // Reemplazar comas por puntos
  formatted = formatted.replace(/,/g, ".");

  return formatted;
}
