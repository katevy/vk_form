import React, {useContext} from 'react';
import {Context} from "../index";
import Select from "../components/select";
import {observer} from "mobx-react-lite";

const Form = observer (() => {

   const {information} = useContext(Context)
    console.log(information.buildings)
    return (
        <div className='flex flex-col сontent-center'>
            <div className='flex justify-center m-3'>
                <Select  data={information.buildings}></Select>
            </div>
            <div className='flex justify-center m-3'>
                <Select  data={information.floors}></Select>
            </div>
            <div className='flex justify-center m-3'>
                <Select  data={information.rooms}></Select>
            </div>
            <div className='flex justify-center m-3 '>
                <input type='date' className='border-2 rounded-md bg-gray-100 text-gray-600'/>
                <input type='time' className='border-2 rounded-md bg-gray-100 text-gray-600'/>
                <input type='time' className='border-2 rounded-md bg-gray-100 text-gray-600'/>
            </div>
            <div className='flex justify-center m-3 p-1 '>
                <textarea className='border-2 rounded-md p-1 bg-gray-100 text-gray-600'></textarea>
            </div>
            <div className='flex justify-center m-3 '>
                <button className='border-2 rounded-md p-1 bg-green-200 text-gray-600'>Отправить</button>
                <button className='border-2 rounded-md p-1 bg-red-300 text-gray-600'>Очистить</button>
            </div>
            <div className='flex justify-center m-3 '></div>
        </div>


        // <div >
        //     <div className='flex justify-center m-3'>
        //         <div className='text-gray-700'>Здание</div>
        //         <select className='border-2 rounded-md bg-gray-100 text-gray-600' id='1'>
        //             <option>
        //                 А
        //             </option>
        //             <option>
        //                 Б
        //             </option>
        //         </select>
        //     </div>
        //     <div className='flex justify-center m-3 '>
        //         <select className='border-2 rounded-md bg-gray-100 text-gray-600'>
        //             Этаж
        //             <option>
        //                 1
        //             </option>
        //             <option>
        //                 2
        //             </option>
        //         </select>
        //     </div>
        //     <div className='flex justify-center m-3 '>
        //         <select className='border-2 rounded-md bg-gray-100 text-gray-600'>
        //             Переговорка
        //             <option>
        //                 1
        //             </option>
        //             <option>
        //                 2
        //             </option>
        //         </select>
        //     </div>


        //
        //
        // </div>
    );
});

export default Form;