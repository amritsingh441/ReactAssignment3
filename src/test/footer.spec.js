import Footer from '../Components/footer/Footer';
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

it('footer1 class test',() => {
    act(() => {
        render(<Footer />,container);
        const footer1 = document.getElementById("footer1");
        expect(footer1.className).toBe('MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary MuiTypography-gutterBottom MuiTypography-alignCenter')
    })
})
it('footer1 text test',() => {
    act(() => {
        render(<Footer />,container);
        const footer1 = document.getElementById("footer1");
        expect(footer1.innerHTML).toBe('Copyright info @Telegraph')
    })
})
it('footer2 class test',() => {
    act(() => {
        render(<Footer />,container);
        const footer2 = document.getElementById("footer2");
        expect(footer2.className).toBe('MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary MuiTypography-alignCenter')
    })
})
it('footer2 text test',() => {
    act(() => {
        render(<Footer />,container);
        const footer2 = document.getElementById("footer2");
        expect(footer2.innerHTML).toBe('All Rights Reserved @The Telegraph &amp; co. 2020.')
    })
})
export default Footer;