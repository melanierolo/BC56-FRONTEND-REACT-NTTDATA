import { renderHook, act } from "@testing-library/react-hooks";
import useDistricts from "@root/hooks/useDistricts";
import districtsData from "@root/data/districts-data.js";

test("should return the list of districts", () => {
  const { result } = renderHook(() => useDistricts());

  expect(result.current).toEqual(districtsData);
});
