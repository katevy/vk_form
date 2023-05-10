import {makeAutoObservable} from "mobx";

export class BookingsStore{

    constructor() {
        this._bookings = [
            {id:1, building:1, floor:1, room:1, date:'', time:''},
        ]
        makeAutoObservable(this)
    }
}