import React from "react";

function ValidationMessages({ errors }) {
    return (
        <div className="text-xs text-red-500 max-w-[200px] mt-1">
            {Object.keys(errors).map((key) => (
                <p key={key} className="mt-1">{errors[key]}</p>
            ))}
        </div>
    );
}

export default ValidationMessages;
