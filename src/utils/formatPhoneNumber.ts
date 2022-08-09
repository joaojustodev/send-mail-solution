export function formatPhoneNumber(phone: string) {
  return phone.replace(/(^[0-9]{2})([0-9]{5})/, "($1) $2-");
}
