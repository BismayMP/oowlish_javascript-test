import React, { useState } from 'react';

const FilterFields = ({ name, UPIN, onFilterChange }) => {

/*    const OnFilterChange = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value.toLowerCase() })
        console.log(state)
        applyFilterToTable()

    }
*/
    return (
        <>
                <input
                    type="text"
                    name='name'
                    placeholder='Name'
                    onChange={onFilterChange}
                    value={name}>
                </input>
                <input
                    type="text"
                    name='UPIN'
                    placeholder='UPIN'
                    onChange={onFilterChange}
                    value={UPIN}
                >
                </input>
        </>
    )
}

export default FilterFields;