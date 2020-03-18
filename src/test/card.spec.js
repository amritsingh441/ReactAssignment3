
import Card from '../Components/card/Card';
import React from 'react';
import {render,unmountComponentAtNode} from 'react-dom';
import { act } from 'react-dom/test-utils';
import News from '../model/News';

// please add your test cases here
let newsObj = new News("urlToImage","title","author");
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
        render(<Card nData = {newsObj}/>,container);
        const title = document.getElementById('title');
        expect(title.id).toBe('title')
    })
})
it('Card contains Anchor tag with id as imageUrl',() => {
    act(() => {
        render(<Card nData = {newsObj}/>,container);
        const imageUrl = document.getElementById("imageUrl");
        expect(imageUrl.id).toBe('imageUrl')
    })
})
it('Card contains div tag with id as author',() => {
    act(() => {
        render(<Card nData = {newsObj}/>,container);
        const author = document.getElementById("author");
        expect(author.id).toBe('author')
    })
})
it('Card has a button',() => {
    act(() => {
        render(<Card nData = {newsObj}/>,container);
        const button =  container.querySelector('button');
        expect(button.type).toBe('button')
    })
})
it('Card has a span inside button',() => {
    act(() => {
        render(<Card nData = {newsObj}/>,container);
        const span =  container.querySelector('span');
        expect(span.innerHTML).toBe('Add To Favourites')
    })
})

export default Card;