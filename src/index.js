import "./index.css";
import React from "react";
import ReactDOM from 'react-dom';
import Filter from "./components/Filter";
import { AddOnClick } from "./utils";

const table = document.getElementById('doctors').children
const availableFilter = document.getElementById('availabilityFilterSelect')
export const doctors = []

const handleAvailableFilterChange = (event) => {
    let availableList = doctors.filter(res => res.available).map(item => `${item.upin}`)
    for (let tr of table) {
        if (event.target.value === 'available') {
            if (!availableList.includes(tr.getAttribute('data-upin')))
                tr.setAttribute('hidden', '')
        } else {
            tr.removeAttribute('hidden')
        }
    }
}

fetch('http://localhost:3030/doctors')
    .then(response => response.json())
    .then(response => {
        doctors.push(...response)
        availableFilter.onchange = (event) => handleAvailableFilterChange(event)
    },
        (error => console.log(error)))

AddOnClick(table, doctors)


ReactDOM.render(<Filter table={table}></Filter>, document.getElementById('searchContainer'))