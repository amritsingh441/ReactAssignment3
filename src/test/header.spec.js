import Header from '../Components/header/Header';
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

it('Header1 text test',() => {
    act(() => {
        render(<Header />,container);
        const header1 = document.getElementById("tHeader1");
        expect(header1.innerHTML).toBe('The Telegraph Header 1')
    })
})
it('Header1 class test',() => {
    act(() => {
        render(<Header />,container);
        const header1 = document.getElementById("tHeader1");
        expect(header1.className).toBe('MuiTypography-root MuiTypography-h3 MuiTypography-gutterBottom MuiTypography-alignCenter')
    })
})
it('Header2 text test',() => {
    act(() => {
        render(<Header />,container);
        const header2 = document.getElementById("tHeader2");
        expect(header2.innerHTML).toBe('The Telegraph Header 2')
    })
})
it('Header 2 class test',() => {
    act(() => {
        render(<Header />,container);
        const header2 = document.getElementById("tHeader2");
        expect(header2.className).toBe('MuiTypography-root MuiTypography-h5 MuiTypography-gutterBottom MuiTypography-alignCenter')
    })
})
export default Header;