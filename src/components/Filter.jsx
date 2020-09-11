import React, { useState } from 'react';

const Filter = ({ table }) => {
    const [state, setState] = useState({ name: '', UPIN: '' });

    const OnFilterChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value })
        for (let tr of table) {
                (`${tr.getAttribute('data-upin')}`.includes(state.UPIN) && 
                `${tr.cells[0].textContent}`.includes(state.name))
                ? tr.removeAttribute('hidden') : tr.setAttribute('hidden', "")

        }
    }

    return (
        <>
            <input
                type="text"
                name='name'
                placeholder='Name'
                onChange={OnFilterChange}>
            </input>
            <input
                type="text"
                name='UPIN'
                placeholder='UPIN'
                onChange={OnFilterChange}>
            </input>
        </>
    )
}

export default Filter