import { RootState } from "../store/store";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";

type Props = {
  onSearch: (value: string) => void;
};

export const Search: React.FC<Props> = ({ onSearch }) => {
  const { query } = useSelector((state: RootState) => state.characters);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onSearch(e.target.value);
    },
    [onSearch]
  );

  return (
    <form className="search w-full flex">
      <input
        className="w-full p-2 border border-text-b rounded"
        onChange={onChange}
        type="text"
        value={query}
        placeholder="Filter by name..."
      />
    </form>
  );
};
