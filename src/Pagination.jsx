import React from 'react'

function Pagination({page, totalPages, onPageChange}) {
    return (
        <div>
            <div className="flex justify-center items-center gap-4 mt-4">
                <button
                    onClick={() => { onPageChange(page - 1) }}
                    disabled={page <= 1}
                    className="px-4 py-2 bg-red-500 text-white rounded-xl disabled:opacity-50">Previous

                </button>
                <span>page {page}of {totalPages}</span>
                <button onClick={() => { onPageChange(page + 1) }}
                    disabled={page >= totalPages}
                    className="px-4 py-2 bg-red-500 text-white rounded-xl disabled:opacity-50">
                    Next
                </button>
            </div>
        </div>
    )
}

export default Pagination