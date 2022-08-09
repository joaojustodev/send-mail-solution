export function validatePhoneNumber(phone: string) {
  const phoneNumberTest = new RegExp(
    /^[(]{0,1}\d{2}[)]{0,1}[\s]{0,1}\d{5}[-]{0,1}\d{4}/gm
  );

  return phoneNumberTest.test(phone);
}
