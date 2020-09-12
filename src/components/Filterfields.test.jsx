
import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import FilterFields from './FilterFields';

afterEach(cleanup);
test('Component render', () => {
    expect(renderer.create(
        <FilterFields
            name='mock name'
            UPIN='1234' />).toJSON()).toMatchSnapshot()

})

const mockOnChange = jest.fn()

test('test name input', () => {
    const { getByDisplayValue } = render(<FilterFields
        name='mock name'
        UPIN='1234'
        onFilterChange={mockOnChange} />)
    expect(getByDisplayValue('1234')).toBeTruthy();
})

test('test UPIN input', () => {
    const { getByDisplayValue } = render(<FilterFields
        name='mock name'
        UPIN='1234'
        onFilterChange={mockOnChange} />)
    expect(getByDisplayValue('1234')).toBeTruthy();
})