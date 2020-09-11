import React, { useState } from 'react';

const Filter = () => {
    const [state, setState] = useState({ name: '', UPIN: '' });

    return (
        <>
        <input 
        type="text" 
        placeholder='Name' 
        onChange={event => setState({...state, name: event.target.value})}>
        </input>
        <input 
        type="text" 
        placeholder='UPIN' 
        onChange={event => setState({...state, UPIN: event.target.value})}>
        </input>
        </>
    )
}

export default Filter