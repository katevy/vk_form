import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {InformationStore} from "./store/informationStore";
import {BookingsStore} from "./store/bookingsStore";
export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider className="Provider" value={
        {
            information: new InformationStore(),
            bookings: new BookingsStore()
        }
    }>
        <App />
    </Context.Provider>
);

