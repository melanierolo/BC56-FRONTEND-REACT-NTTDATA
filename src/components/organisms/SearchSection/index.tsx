import { FC } from "react";

import searchIcon from "@root/assets/icons/search-icon.svg";

import TextInput from "@root/components/atoms/TextInput";

import "./style.css";

interface SearchSectionProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchSection: FC<SearchSectionProps> = ({ searchTerm, setSearchTerm }) => {
  const searchSectionText = {
    title: "All You Need, Right Here",
    paragraph:
      "Find a wide range of products tailored just for you! Explore and filter to discover your favorites",
    placeholder: "Search ...",
  };
  return (
    <section className="search">
      <div className="search__container">
        <h2 className="search__title">{searchSectionText.title}</h2>
        <p className="search__paragraph">{searchSectionText.paragraph}</p>
        <TextInput
          startIcon={searchIcon}
          placeholder={searchSectionText.placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </section>
  );
};

export default SearchSection;
