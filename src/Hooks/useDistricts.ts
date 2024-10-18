import { useEffect, useState } from "react";

interface SelectOption {
  value: string;
  label: string;
}

const useDistricts = () => {
  const [districts, setDistricts] = useState<SelectOption[]>([]);

  useEffect(() => {
    const fetchDistricts = async () => {
      const data = [
        { label: "District 1", value: "district-1" },
        { label: "District 2", value: "district-2" },
        { label: "District 3", value: "district-3" },
        { label: "District 4", value: "district-4" },
      ];
      setDistricts(data);
    };

    fetchDistricts();
  }, []);

  return districts;
};

export default useDistricts;
