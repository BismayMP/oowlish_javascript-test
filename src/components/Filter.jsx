import React, { useState } from 'react';
import FilterFields from './FilterFields';

const Filter = ({ table }) => {
    const [state, setState] = useState({ name: '', UPIN: '' });

    const handleOnFilterChange = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value.toLowerCase() })
    }

    const applyFilterToTable = () => {
        try {
            for (let tr of table) {
                (`${tr.getAttribute('data-upin')}`.includes(state.UPIN) &&
                    tr.cells[0].textContent.toLowerCase().includes(state.name))
                    ? tr.removeAttribute('hidden') : tr.setAttribute('hidden', "")
    
            }
        } catch (error) {
            return error.message
        }
        
    }

    return (
        <>
            <FilterFields
                name={state.name}
                UPIN={state.UPIN}
                onFilterChange={handleOnFilterChange}
            />

            {
                applyFilterToTable()
            }
        </>
    )
}

export default Filter