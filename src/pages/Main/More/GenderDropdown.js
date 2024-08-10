import React, { useState } from 'react';

function GenderDropdown() {
    const [gender, setGender] = useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <div className="flex flex-col items-start">
            <select 
                id="gender" 
                name="gender" 
                value={gender} 
                onChange={handleChange} 
                className="w-full p-2 bg-gray-700 text-white rounded-lg appearance-none">
                <option value="" disabled>Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
    );
}

export default GenderDropdown;
