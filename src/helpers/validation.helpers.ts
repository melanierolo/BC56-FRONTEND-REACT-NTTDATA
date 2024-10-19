export const isValidPersonName = (personName: string) =>
  /^([A-Za-záéíóúÁÉÍÓÚñÑ\s]{2,})?$/.test(personName);

export const isValidAddress = (address: string) => address.length >= 10 && address.length <= 100;

export const isValidReference = (reference: string) =>
  reference.length >= 10 && reference.length <= 50;

export const isValidPhone = (phone: string) => /^9\d{8}$/.test(phone);
