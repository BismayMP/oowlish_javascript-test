import "./index.css";
import React from "react";
import ReactDOM from 'react-dom';
import Filter from "./components/Filter";
import { AddOnClickAndInitialStyle } from "./utils";

const table = document.getElementById('doctors').children
const availableFilter = document.getElementById('availabilityFilterSelect')
export const doctors = []

fetch('http://localhost:3030/doctors')
    .then(response => response.json())
    .then(response => {
        doctors.push(...response)

    },
        (error => console.log(error)))

AddOnClickAndInitialStyle(table, doctors)

ReactDOM.render(<Filter table={table} availableFilter={availableFilter}></Filter>, document.getElementById('searchContainer'))