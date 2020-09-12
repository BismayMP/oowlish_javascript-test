import React, { useState } from 'react';

const FilterFields = ({ name, UPIN, onFilterChange }) => {

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