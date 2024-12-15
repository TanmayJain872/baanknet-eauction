import React, { useEffect, useRef } from 'react'

const Pagination = ({
    currentPage,
    setCurrentPage,
    itemsPerPage,
    totalPages,
    auctions,
    ...props
}) => {
    const pageInputRef = useRef();
    return (
        <div className="flex items-center justify-between mt-4">
            <span>
                <span className="text-sm text-gray-600">
                    {`${(currentPage - 1) * itemsPerPage + 1} - ${
                    currentPage * itemsPerPage
                    } of ${auctions.length}`}
                </span>
                <input
                    type="number"
                    className='w-1/5 mx-2 p-1 border border-gray-300 rounded-lg text-center text-gray-600'
                    ref={pageInputRef}
                />
                <button 
                    className="p-1 border border-other-purple-600 text-other-purple-600 rounded-lg"
                    onClick={() => setCurrentPage(pageInputRef?.current?.value)}
                >
                    Go to Page
                </button>
            </span>
    
            <div className="flex items-center gap-2">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className={`px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 ${
                        currentPage === 1 && "cursor-not-allowed opacity-50"
                    }`}
                >
                    «
                </button>
    
                {Array.from({ length: 3 }).map((_, index) => (
                    <>
                        {(currentPage > 3 && currentPage < totalPages && index == 2) ?
                            <>
                                <button
                                    className={`px-3 py-1 bg-gray-200 rounded-full cursor-default`}
                                >
                                    ...
                                </button>
                                <button
                                    key={index}
                                    onClick={() => setCurrentPage(index + 1)}
                                    className={`px-3 py-1 ${
                                        (currentPage > 3)
                                            ? "bg-other-purple-600 text-white"
                                            : "bg-gray-200 hover:bg-gray-300"
                                        } rounded-full`
                                    }
                                >
                                    {currentPage}
                                </button>
                            </>
                                :
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`px-3 py-1 ${
                                    (currentPage === index + 1)
                                        ? "bg-other-purple-600 text-white"
                                        : "bg-gray-200 hover:bg-gray-300"
                                    } rounded-full`
                                }
                            >
                                {index + 1}
                            </button>
                        }
                    </>
                ))}
                <button
                    className={`px-3 py-1 bg-gray-200 rounded-full cursor-default`}
                >
                    ...
                </button>

                <button
                    className={`px-3 py-1 ${
                        currentPage === totalPages
                            ? "bg-other-purple-600 text-white"
                            : "bg-gray-200 hover:bg-gray-300"
                        } rounded-full`}
                    onClick={() => setCurrentPage(totalPages)}
                >
                    {totalPages}
                </button>
    
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className={`px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 ${
                        currentPage === totalPages && "cursor-not-allowed opacity-50"
                    }`}
                >
                    »
                </button>
            </div>
        </div>
    )
}

export default Pagination