import { STATUS_COLORS, STATUS_OPTIONS } from "~/constants/options";

export function getStatusLabel(value: string) {
  const item = STATUS_OPTIONS.find((s) => s.value === value);
  return item ? item.label : value;
}

export function getStatusColor(value: string) {
  const item = STATUS_COLORS.find((s) => s.value === value);
  return item ? item.color : "";
}
