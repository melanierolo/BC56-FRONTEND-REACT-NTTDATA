import { ChangeEvent, FC } from "react";

import Select from "@components/atoms/Select";

import "./style.css";
interface SelectOption {
  value: string;
  label: string;
}
interface FilterByCategorySectionProps {
  options: SelectOption[];
  onCategoryChange: (categoryValue: string) => void;
  selectedCategory: string;
  totalProducts: number;
}
const FilterByCategorySection: FC<FilterByCategorySectionProps> = ({
  options,
  onCategoryChange,
  selectedCategory,
  totalProducts,
}) => {
  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onCategoryChange(event.target.value);
  };

  return (
    <section className="filter">
      <p className="filter__result-text">
        Search Result: <span className="filter__result-number">{totalProducts} products</span>
      </p>
      <div className="filter__input">
        <Select
          label="Filter by:"
          options={options}
          onChange={handleCategoryChange}
          id="category-select"
          value={selectedCategory}
        ></Select>
      </div>
    </section>
  );
};

export default FilterByCategorySection;
