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
export const STATUS_OPTIONS = [
  { label: "Disponible", value: "available" },
  { label: "Plazas limitadas", value: "limited" },
  { label: "Sin plazas", value: "sold_out" },
  { label: "Agotado", value: "unavailable" },
  { label: "Últimas plazas", value: "last_spots" },
  { label: "Confirmado", value: "confirmed" },
  { label: "Cancelado", value: "cancelled" },
  { label: "Próximamente", value: "coming_soon" },
  { label: "En revisión", value: "reviewing" },
  { label: "Finalizado", value: "ended" },
];

export const STATUS_COLORS = [
  { value: "available", color: "bg-green-600 text-white" },

  {
    value: "limited",
    color: "bg-yellow-300 text-gray-800 border border-yellow-500",
  },

  { value: "sold_out", color: "bg-red-600 text-white" },

  { value: "unavailable", color: "bg-gray-500 text-white" },

  {
    value: "last_spots",
    color: "bg-yellow-400 text-gray-900 border border-yellow-600",
  },

  { value: "confirmed", color: "bg-blue-600 text-white" },

  { value: "cancelled", color: "bg-gray-400 text-gray-900" },

  { value: "coming_soon", color: "bg-purple-500 text-white" },

  { value: "reviewing", color: "bg-indigo-500 text-white" },

  { value: "ended", color: "bg-zinc-700 text-white" },
];
