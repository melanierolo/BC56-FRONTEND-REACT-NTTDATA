import { renderHook, act } from "@testing-library/react-hooks";
import useForm from "@root/hooks/useForm";
import { FormEvent } from "react";

const initialValues = { name: "", email: "" };
const validators = {
  name: (value: string) => (value.length < 2 ? "Name must be at least 2 characters" : ""),
  email: (value: string) => (!/\S+@\S+\.\S+/.test(value) ? "Email is invalid" : ""),
};

describe("useForm hook", () => {
  it("should initialize form data and errors", () => {
    const { result } = renderHook(() => useForm(initialValues, validators));

    expect(result.current.formData).toEqual(initialValues);
    expect(result.current.errors).toEqual({});
  });

  it("should change the name of a form", () => {
    const { result } = renderHook(() => useForm(initialValues, validators));

    act(() => {
      result.current.handleInputChange("name", "John");
    });

    expect(result.current.formData.name).toBe("John");
    expect(result.current.errors.name).toBe("");
  });

  it("should validate and set errors on submit", () => {
    const { result } = renderHook(() => useForm(initialValues, validators));

    act(() => {
      result.current.handleSubmit(
        { preventDefault: jest.fn() } as unknown as FormEvent<HTMLFormElement>,
        jest.fn(),
      );
    });

    expect(result.current.errors).toEqual({
      name: "Name must be at least 2 characters",
      email: "Email is invalid",
    });
  });

  it("should call onSubmit if form is valid", () => {
    const { result } = renderHook(() =>
      useForm({ name: "John", email: "john@example.com" }, validators),
    );
    const onSubmit = jest.fn();

    act(() => {
      result.current.handleSubmit(
        { preventDefault: jest.fn() } as unknown as FormEvent<HTMLFormElement>,
        onSubmit,
      );
    });

    expect(result.current.errors).toEqual({});
    expect(onSubmit).toHaveBeenCalled();
  });
});
