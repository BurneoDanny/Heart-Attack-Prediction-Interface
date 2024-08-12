import React, { useState } from 'react';

function AgeRangeSlider(props) {
    const [age, setAge] = useState(50);

    const handleChange = (event) => {
        setAge(event.target.value)
        props.setAge(event.target.value);
    };

    return (
        <div className="flex flex-col items-center">
            <label htmlFor="ageRange" className="mb-2 font-semibold text-white">
                Age Range: {age}
            </label>
            <input
                type="range"
                id="ageRange"
                name="ageRange"
                min="5"
                max="100"
                value={age}
                onChange={handleChange}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer range-slider"
            />
        </div>
    );
}

export default AgeRangeSlider;
