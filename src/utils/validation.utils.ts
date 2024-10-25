export const RegexPatterns = {
  PERSON_NAME: /^([A-Za-záéíóúÁÉÍÓÚñÑ\s]{2,})?$/,
  PERU_PHONE_NUMBER: /^9\d{8}$/,
};

export const isValidPersonName = (personName: string) => RegexPatterns.PERSON_NAME.test(personName);

export const isValidAddress = (address: string) => address.length >= 10 && address.length <= 100;

export const isValidReference = (reference: string) =>
  reference.length >= 10 && reference.length <= 50;

export const isValidPhoneNumber = (phone: string) => RegexPatterns.PERU_PHONE_NUMBER.test(phone);
