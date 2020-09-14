import React, { useState } from 'react';
import FilterFields from './FilterFields';
import { doctors } from '../index'

const Filter = ({ table, availableFilter }) => {
    const [state, setState] = useState({ name: '', UPIN: '', available: availableFilter.value === 'available' });

    const handleOnNameUpinFilterChange = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value.toLowerCase() })
    }

    const handleAvailableFilterChange = (event) => {
        const { value } = event.target;
        setState({ ...state, available: value === 'available' })
    }

    const applyNameUpinFilter = (tr) => {
        try {
            (`${tr.getAttribute('data-upin')}`.includes(state.UPIN) &&
                tr.cells[0].textContent.toLowerCase().includes(state.name))
                ? tr.removeAttribute('hidden') 
                : tr.setAttribute('hidden', "")
        } catch (error) {
            return error.message
        }

    }

    const applyFilterToTable = () => {
        let availableList = doctors.filter(res => res.available).map(item => `${item.upin}`)
        for (let tr of table) {
            if (state.available) {
                if (!availableList.includes(tr.getAttribute('data-upin'))){
                    tr.setAttribute('hidden', '')
                } else {
                    applyNameUpinFilter(tr)
                }
            } else {
                tr.removeAttribute('hidden')
                applyNameUpinFilter(tr)
            }
        }
    }

    availableFilter.onchange = (event) => handleAvailableFilterChange(event)

    return (
        <>
            <FilterFields
                name={state.name}
                UPIN={state.UPIN}
                onFilterChange={handleOnNameUpinFilterChange}
            />

            {
                applyFilterToTable()
            }
        </>
    )
}

export default Filter