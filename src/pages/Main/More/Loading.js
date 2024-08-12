// Loading.js
import React from "react";

function Loading() {
    return (
        <div className="flex justify-center items-center h-full w-full bg-transparent">
            <div className="flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
                <p className="mt-4 text-white">Loading results...</p>
            </div>
        </div>
    );
}

export default Loading;


