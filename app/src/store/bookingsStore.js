import {makeAutoObservable} from "mobx";

export class BookingsStore{

    constructor() {
        this._bookings = [
            {id:1, building:'', floor:'', room:'', date:'', startTime:'', endTime:'', comment:''},
        ]
        makeAutoObservable(this)
    }

    get bookings(){
        return this._bookings
    }

    pushBookings(booking){
        this._bookings.push(booking)
    }
}