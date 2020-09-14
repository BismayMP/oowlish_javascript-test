import "./index.css";
import React from "react";
import ReactDOM from 'react-dom';
import Filter from "./components/Filter.jsx";
import { AddOnClickAndInitialStyle } from "./utils";

const isDevEnv = process.env.NODE_ENV === 'development'

const table = document.getElementById('doctors').children
const availableFilter = document.getElementById('availabilityFilterSelect')
export const doctors = []

const fetchData = () => {
    fetch('http://localhost:3030/doctors')
        .then(response => response.json())
        .then(response => {
            doctors.push(...response)

        },
            (error => console.log(error)))
}

(isDevEnv) ? fetchData() : doctors.push(
    { "upin": 202029, "name": "John Doe", "available": false },
    { "upin": 402910, "name": "Nick Ramsen", "available": true },
    { "upin": 910291, "name": "Liz Redfield", "available": true },
    { "upin": 202914, "name": "Javier Garcia", "available": false },
    { "upin": 394840, "name": "Harry Bone", "available": true },
    { "upin": 982170, "name": "Kevin Lamkin", "available": true },
    { "upin": 393920, "name": "Andrew Stuart", "available": true },
    { "upin": 655942, "name": "Maggie Willians", "available": true }
)

AddOnClickAndInitialStyle(table, doctors)

ReactDOM.render(<Filter table={table} availableFilter={availableFilter}></Filter>, document.getElementById('searchContainer'))