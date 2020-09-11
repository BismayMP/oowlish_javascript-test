import "./index.css";
import React from "react";
import ReactDOM from 'react-dom';
import Filter from "./components/Filter";

const table = document.getElementById('doctors').children
const availableFilter = document.getElementById('availabilityFilterSelect')

const handleAvailableFilterChange = (event, availableList) => {
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
    .then(response => availableFilter.onchange = (event) => handleAvailableFilterChange(event, response.filter(res => res.available).map(res => `${res.upin}`)),
        (error => console.log(error)))


ReactDOM.render(<Filter table={table}></Filter>, document.getElementById('searchContainer'))