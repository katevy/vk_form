import React from 'react';

const Select = (data) => {
    return (
        <select className='border-2 rounded-md bg-gray-100 text-gray-600' name="" id="">
            {
                data.data.map((item) =>(
                    <option key={item.id}>{item.name}</option>
                ))
            }
        </select>
    );
};

export default Select;