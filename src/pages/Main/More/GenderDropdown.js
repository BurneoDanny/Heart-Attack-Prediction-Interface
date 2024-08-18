import React, { useState } from 'react';

function GenderDropdown(props) {

    const handleChange = (event) => {
        props.setGender(event.target.value);
        console.log(event.target.value)
    };

    return (
        <div className="flex flex-col items-start">
            <select
                id="gender"
                name="gender"
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 text-white rounded-lg appearance-none">
                <option value="" disabled>Select the gender</option>
                <option value={1}>Male</option>
                <option value={0}>Female</option>
            </select>
        </div>
    );
}

export default GenderDropdown;
