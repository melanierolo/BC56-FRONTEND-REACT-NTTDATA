import { useEffect, useState } from "react";
import districtsData from "../data/districts-data.js";

interface SelectOption {
  value: string;
  label: string;
}

const useDistricts = () => {
  const [districts, setDistricts] = useState<SelectOption[]>([]);

  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        setDistricts(districtsData);
      } catch (error) {
        console.error("Error fetching districts:", error);
      }
    };

    fetchDistricts();
  }, []);

  return districts;
};

export default useDistricts;
