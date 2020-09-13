import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Filter from './Filter'

jest.mock('./FilterFields', () => 'FilterFields')


test('component render', () => {
    const tree = renderer.create(<Filter></Filter>).toJSON()
    expect(tree).toMatchSnapshot()

})
