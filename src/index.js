import "./index.css";
import React from "react";
import ReactDOM from 'react-dom';
import Filter from "./components/Filter";

const table = document.getElementById('doctors').children
const availableFilter = document.getElementById('availabilityFilterSelect').children

availableFilter.setO


ReactDOM.render(<Filter table={table}></Filter>, document.getElementById('searchContainer'))



//const res = filterbyNameAndUpin(doctors, {name: '', upin: ''})
