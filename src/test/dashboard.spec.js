import Dashboard from '../Components/dashboard/Dashboard';
// please add your test cases here
import React from 'react';
import {render,unmountComponentAtNode} from 'react-dom';
import { act } from 'react-dom/test-utils';
// please add your test cases here
let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})
it('Card contains p tag with id as title',() => {
    act(() => {
        render(<Dashboard/>,container);
        const dbHeading = document.getElementById('dashBoardHeading');
        expect(dbHeading.className).toBe('MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom MuiTypography-alignCenter')
    })
})
export default Dashboard;