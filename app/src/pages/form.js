import React from 'react';

const Form = () => {
    return (
        <div className='flex flex-col сontent-center'>
            <div className='flex justify-center m-3'>
                <div className='text-gray-700'>Здание</div>
                <select className='border-2 rounded-md bg-gray-100 text-gray-600' id='1'>
                    <option>
                        А
                    </option>
                    <option>
                        Б
                    </option>
                </select>
            </div>
            <div className='flex justify-center m-3 '>
                <select className='border-2 rounded-md bg-gray-100 text-gray-600'>
                    Этаж
                    <option>
                        1
                    </option>
                    <option>
                        2
                    </option>
                </select>
            </div>
            <div className='flex justify-center m-3 '>
                <select className='border-2 rounded-md bg-gray-100 text-gray-600'>
                    Переговорка
                    <option>
                        1
                    </option>
                    <option>
                        2
                    </option>
                </select>
            </div>
            <div className='flex justify-center m-3 '>
                <input type='date' className='border-2 rounded-md bg-gray-100 text-gray-600'/>
            </div>
            <div className='flex justify-center m-3 p-1 '>
                <textarea className='border-2 rounded-md p-1 bg-gray-100 text-gray-600'></textarea>
            </div>
            <div className='flex justify-center m-3 '><button className='border-2 rounded-md p-1 bg-cyan-600 text-amber-100'>Отправить</button></div>
            <div className='flex justify-center m-3 '><button className='border-2 rounded-md p-1 bg-cyan-600 text-amber-100'>Очистить</button></div>


        </div>
    );
};

export default Form;