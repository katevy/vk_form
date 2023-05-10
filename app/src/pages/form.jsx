import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {getElementError} from "@testing-library/react";
import Datepicker from "tailwind-datepicker-react"

const Form = observer (() => {

    const getCurrentDate = () => {
        let defaultDate = new Date()
        let year = defaultDate.getFullYear()
        let month = defaultDate.getMonth()+1
        let day = defaultDate.getDate()
        let current = ""
        if(month < 10)
            return current+year+"-0"+month+"-"+day
        else
            return current+year+"-"+month+"-"+day
    }
    let currentDate = getCurrentDate()
    const {information} = useContext(Context)
    const [building, setBuilding] = useState(null)
    const [floor, setFloor] = useState(null)
    const [room, setRoom] = useState(null)
    const [date, setDate] = useState(currentDate)
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    const [comment, setComment] = useState(null)

    let book = {
        building:building,
        floor: floor,
        room: room,
        date: date,
        startTime: startTime,
        endTime: endTime,
        comment:comment
    }
    const Send = () => {
       console.log(JSON.stringify(book))
    }



    useEffect(() => {
        if(building === null || floor === null || room === null || startTime === null || endTime === null)
            document.getElementById('sendButton').disabled = true
        else
            document.getElementById('sendButton').disabled = false
    })
    const Clear = () =>{
        document.getElementById('buildingSelection').selectedIndex = 0
        setBuilding(null)

        document.getElementById('floorSelection').selectedIndex = 0
        setFloor(null)

        document.getElementById('roomSelection').selectedIndex = 0
        setRoom(null)

        document.getElementById('dateSelection').value = currentDate
        setDate(currentDate)

        document.getElementById('startTimeSelection').value = ''
        setStartTime(null)

        document.getElementById('endTimeSelection').value = ''
        setEndTime(null)

        document.getElementById('comment').value = ''
        setComment(null)
    }

    return (
        <div >
            <div className='flex flex-col сontent-center'>
                <div className='m-1'>
                    <div className='flex justify-center'>
                        Здание
                    </div>
                    <div className='flex justify-center'>
                        <select className='border-2 rounded-md bg-gray-100 text-gray-600' required name="" id="buildingSelection" onChange={(event)=>{setBuilding(event.target.value)}}>
                            <option selected>{building}</option>
                            {
                                information.buildings.map((item) =>(
                                    <option key={item.id}>{item.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className='m-1'>
                    <div className='flex justify-center'>
                        Этаж
                    </div>
                    <div className='flex justify-center'>
                        <select className='border-2 rounded-md bg-gray-100 text-gray-600' required name="" id="floorSelection" onChange={(event)=>{setFloor(event.target.value)}}>
                            <option  selected>{floor}</option>
                            {
                                information.floors.map((item) =>(
                                    <option key={item.id}>{item.name}</option>
                                ))
                            }
                        </select>
                    </div>

                </div>
                <div className=' m-1'>
                    <div className='flex justify-center'>
                        Комната
                    </div>
                    <div className='flex justify-center'>
                        <select className='border-2 rounded-md bg-gray-100 text-gray-600' required name="" id="roomSelection" onChange={(event)=>{setRoom(event.target.value)}}>
                            <option  selected>{room}</option>
                            {
                                information.rooms.map((item) =>(
                                    <option key={item.id}>{item.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className=' m-1 '>
                    <div className='flex justify-center'>
                        Дата и время
                    </div>
                    <div className='flex justify-center'>
                        <input type='date' required className='border-2 rounded-md bg-gray-100 text-gray-600' id='dateSelection' min={currentDate}  defaultValue={currentDate} onChange={(event)=>{setDate(event.target.value)}}/>
                         <p className='p-1'>с</p>
                        <input type='time' required className='border-2 rounded-md bg-gray-100 text-gray-600' id='startTimeSelection' onChange={(event)=>{setStartTime(event.target.value)}}/>
                         <p className='p-1'>по</p>
                        <input type='time' required className='border-2 rounded-md bg-gray-100 text-gray-600' id='endTimeSelection' onChange={(event)=>{setEndTime(event.target.value)}}/>
                    </div>
                </div>
                <div className=' m-1 p-1 '>
                    <div className='flex justify-center'>
                        Комментарий
                    </div>
                    <div className='flex justify-center'>
                        <textarea className='border-2 rounded-md p-1 bg-gray-100 text-gray-600' id='comment' onChange={(event)=>{setComment(event.target.value)}}></textarea>
                    </div>

                </div>
                <div className='flex justify-center m-1 '>
                    <button className='border-2 rounded-md p-1 bg-green-200 text-gray-600' id='sendButton' onClick={Send}>Отправить</button>
                    <button className='border-2 rounded-md p-1 bg-red-300 text-gray-600' onClick={Clear}>Очистить</button>
                </div>
            </div>
        </div>
    );
});

export default Form;