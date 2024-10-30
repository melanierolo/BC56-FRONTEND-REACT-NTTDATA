import {
  isValidPersonName,
  isValidAddress,
  isValidReference,
  isValidPhoneNumber,
  isValidUsername,
  isValidPassword,
  isValidEmail,
} from "@root/utils/validation.utils";

describe("Validation Functions", () => {
  describe("isValidPersonName", () => {
    it("should return true for valid person names", () => {
      expect(isValidPersonName("Juan Pérez")).toBe(true);
      expect(isValidPersonName("María López")).toBe(true);
    });

    it("should return false for invalid person names", () => {
      expect(isValidPersonName("J")).toBe(false);
      expect(isValidPersonName("123")).toBe(false);
    });
  });
  describe("isValidAddress", () => {
    it("should return true for valid addresses", () => {
      expect(isValidAddress("123 Main St, Lima")).toBe(true);
      expect(isValidAddress("Av. Siempre Viva 742")).toBe(true);
    });

    it("should return false for invalid addresses", () => {
      expect(isValidAddress("Short")).toBe(false);
      expect(isValidAddress("")).toBe(false);
      // too long
      expect(isValidAddress("A".repeat(101))).toBe(false);
    });
  });

  describe("isValidReference", () => {
    it("should return true for valid references", () => {
      expect(isValidReference("Near the big park")).toBe(true);
      expect(isValidReference("Next to the supermarket")).toBe(true);
    });

    it("should return false for invalid references", () => {
      expect(isValidReference("Short")).toBe(false);
      expect(isValidReference("")).toBe(false);
      // too long
      expect(isValidReference("A".repeat(51))).toBe(false);
    });
  });

  describe("isValidPhoneNumber", () => {
    it("should return true for valid phone numbers", () => {
      expect(isValidPhoneNumber("912345678")).toBe(true);
    });

    it("should return false for invalid phone numbers", () => {
      // does not start with 9
      expect(isValidPhoneNumber("812345678")).toBe(false);
      // too short
      expect(isValidPhoneNumber("12345678")).toBe(false);
      expect(isValidPhoneNumber("")).toBe(false);
    });
  });

  describe("isValidUsername", () => {
    it("should return true for valid usernames", () => {
      expect(isValidUsername("user123")).toBe(true);
    });

    it("should return false for invalid usernames", () => {
      expect(isValidUsername("")).toBe(false);
      // only spaces
      expect(isValidUsername("   ")).toBe(false);
    });
  });

  describe("isValidPassword", () => {
    it("should return true for valid passwords", () => {
      expect(isValidPassword("password123")).toBe(true);
    });

    it("should return false for invalid passwords", () => {
      // empty password
      expect(isValidPassword("")).toBe(false);
    });
  });

  describe("isValidEmail", () => {
    it("should return true for valid emails", () => {
      expect(isValidEmail("test@example.com")).toBe(true);
      expect(isValidEmail("user.name+tag+sorting@example.com")).toBe(true);
    });

    it("should return false for invalid emails", () => {
      expect(isValidEmail("plainaddress")).toBe(false);
      expect(isValidEmail("@missingusername.com")).toBe(false);
      expect(isValidEmail("username@.com")).toBe(false);
    });
  });
});
