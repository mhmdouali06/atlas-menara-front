export const monthOptions = [
  { option: "Enero", value: "enero" },
  { option: "Febrero", value: "febrero" },
  { option: "Marzo", value: "marzo" },
  { option: "Abril", value: "abril" },
  { option: "Mayo", value: "mayo" },
  { option: "Junio", value: "junio" },
  { option: "Julio", value: "julio" },
  { option: "Agosto", value: "agosto" },
  { option: "Septiembre", value: "septiembre" },
  { option: "Octubre", value: "octubre" },
  { option: "Noviembre", value: "noviembre" },
  { option: "Diciembre", value: "diciembre" },
];
export const positionOptions = [
  {
    label: "Todo",
    value: "all",
  },
  {
    label: "Cerca del HARAM",
    value: "near-haram",
  },
  {
    label: "Cerca del Makkah",
    value: "near-makkah",
  },
  {
    label: "Cerca del Medina",
    value: "near-medina",
  },
];
export const optionHabitation = [
  {
    option: "Simple",
    value: "simple",
  },
  {
    option: "Doble",
    value: "doble",
  },
  {
    option: "Triple",
    value: "triple",
  },
];
const habitationMap = Object.fromEntries(
  optionHabitation.map((item) => [item.value, item.option])
);
export const getHabitationLabel = (value: string) => {
  return habitationMap[value] || value;
};
export const servicesMenu = [
  { label: "Billetes avión", slug: "venta-de-billetes-aereos" },
  {
    label: "Billetes barco",
    slug: "billetes-de-barco-entre-algeciras-tarifa-y-tanger",
  },
  { label: "Hoteles", slug: "reserva-de-hoteles" },
  { label: "Visados", slug: "tramitacion-de-visados-umrah-y-turista" },
];
