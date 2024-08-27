"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "../components/Card";
import { Pagination } from "../components/Pagination";
import { Loader } from "../components/Loader";
import { Header } from "../components/Header";
import {
  fetchCharacters,
  setPage,
  setQuery,
  resetState,
} from "../store/CharactersSlice";
import { AppDispatch, RootState } from "../store/store";
import { useDebounce } from "../hooks/useDebounce";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const CharactersList: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const { characters, loading, page, pageCount, query, error } = useSelector(
    (state: RootState) => state.characters
  );
  const debouncedQuery = useDebounce(query, 700);
  console.log(page);

  useEffect(() => {
    dispatch(fetchCharacters({ query: debouncedQuery, page }));
  }, [debouncedQuery, page, dispatch]);

  const handlePageChange = (selectedPage: number) => {
    dispatch(setPage(selectedPage + 1));
    console.log(selectedPage);
  };
  const handleSearchChange = (queryValue: string) => {
    setInputValue(queryValue);
    dispatch(setQuery(queryValue));
  };

  const router = useRouter();

  const handleGoBack = () => {
    dispatch(resetState());
    router.push("/");
  };

  return (
    <div className="app">
      {loading ? (
        <Loader />
      ) : (
        <>
          {characters.length > 0 ? (
            <>
              <Header onSearch={handleSearchChange} />
              <div className="card">
                <div className="flex justify-center flex-wrap gap-4 p-4">
                  {characters.map((character) => (
                    <Card character={character} key={character.id} />
                  ))}
                </div>
                <Pagination
                  pageCount={pageCount}
                  onPageChange={handlePageChange}
                  page={page}
                />
              </div>
            </>
          ) : error ? (
            <div className="no-results ">
              <Header onSearch={handleSearchChange} />
              <div className="text-custom-main text-2xl flex items-center justify-center flex-col gap-3">
                <Image
                  src="/notExisting.png"
                  alt="not character"
                  width={300}
                  height={300}
                />
                <p className="text-custom-main text-2xl">
                  The character with that name was not found. Please try a
                  different query.
                </p>
                <button
                  onClick={handleGoBack}
                  className="bg-custom-main text-white p-2 border-2 rounded-md"
                >
                  {" "}
                  Go back
                </button>
              </div>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};
