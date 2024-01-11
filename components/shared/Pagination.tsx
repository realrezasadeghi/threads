"use client";

import {useRouter} from "next/navigation";

import {Button} from "../ui/button";

interface Props {
    pageNumber: number;
    isNext: boolean;
    path: string;
}

function Pagination({pageNumber, isNext, path}: Props) {
    const router = useRouter();

    const paginateToNextPage = () => {
        const nextPageNumber = pageNumber + 1;

        if (nextPageNumber > 1)
            router.push(`/${path}?page=${nextPageNumber}`);
    }

    const paginateToPrevPage = () => {
        const prevPageNumber = Math.max(1, pageNumber - 1);

        if (prevPageNumber <= 1)
            router.push(`/${path}`);
    }

    if (!isNext && pageNumber === 1) return null;

    return (
        <div className='pagination'>
            <Button
                onClick={paginateToPrevPage}
                disabled={pageNumber === 1}
                className='!text-small-regular text-light-2'
            >
                Prev
            </Button>
            <p className='text-small-semibold text-light-1'>{pageNumber}</p>
            <Button
                onClick={paginateToNextPage}
                disabled={!isNext}
                className='!text-small-regular text-light-2'
            >
                Next
            </Button>
        </div>
    );
}

export default Pagination;
