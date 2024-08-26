import ReactPaginate from "react-paginate";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useEffect, useState } from "react";

type PaginationProps = {
  pageCount: number;
  onPageChange: (selectedPage: number) => void;
  page: number;
};
export const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  onPageChange,
  page
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={(e) => onPageChange(e.selected)}
      // pageRangeDisplayed={3}
      previousLabel={
        <span className="bg-custom-main w-10 h-10 flex items-center justify-center rounded-md">
          <SlArrowLeft color="white" />
        </span>
      }
      nextLabel={
        <span className="bg-custom-main w-10 h-10 flex items-center justify-center rounded-md">
          <SlArrowRight color="white" />
        </span>
      }
      containerClassName="flex items-center justify-center mt-8 mb-4 text-white"
      pageClassName="block border-solid border-text-b
         hover:bg-custom-main hover:text-white w-10 h-10 flex
         items-center justify-center rounded-md m-2
         "
      // breakLabel={
      //   <span className="mr-4">...</span>
      // }
      activeClassName="bg-custom-main text-white"
      forcePage={page - 1}
      pageRangeDisplayed={isMobile ? 1 : 3}
      marginPagesDisplayed={isMobile ? 1 : 2}
    />
  );
};
