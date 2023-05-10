import {makeAutoObservable} from "mobx";

export class InformationStore{
    constructor() {
        this._buildings = [
            {id: 1, name:'А'},
            {id: 2, name:'Б'},
        ]

        this._floors = [
            {id: 1, name:'3'},
            {id: 2, name:'4'},
            {id: 3, name:'5'},
            {id: 4, name:'6'},
            {id: 5, name:'7'},
            {id: 6, name:'8'},
            {id: 7, name:'9'},
            {id: 8, name:'10'},
            {id: 9, name:'11'},
            {id: 10, name:'12'},
            {id: 11, name:'13'},
            {id: 12, name:'14'},
            {id: 13, name:'15'},
            {id: 14, name:'16'},
            {id: 15, name:'17'},
            {id: 16, name:'18'},
            {id: 17, name:'19'},
            {id: 18, name:'20'},
            {id: 19, name:'21'},
            {id: 20, name:'22'},
            {id: 21, name:'23'},
            {id: 22, name:'24'},
            {id: 23, name:'25'},
            {id: 24, name:'26'},
            {id: 25, name:'27'},
        ]

        this._rooms = [
            {id: 1, name:'1'},
            {id: 2, name:'2'},
            {id: 3, name:'3'},
            {id: 4, name:'4'},
            {id: 5, name:'5'},
            {id: 6, name:'6'},
            {id: 7, name:'7'},
            {id: 8, name:'8'},
            {id: 9, name:'9'},
            {id: 10, name:'10'},
        ]
        makeAutoObservable(this)
    }

    get buildings(){
        return this._buildings
    }

    get floors(){
        return this._floors
    }

    get rooms(){
        return this._rooms
    }
}