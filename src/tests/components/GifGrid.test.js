import React from 'react';
import '@testing-library/jest-dom';
import { GifGrid } from '../../components/GifGrid';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')


describe('Pruebas en el componente GigGrid', () => {

    const categoria = 'batman';
    test('comparar contra el snapshot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow(<GifGrid category={ categoria } />)
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost:3000/batman.jpg',
            title: 'Batman'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        const wrapper = shallow(<GifGrid category={ categoria } />)
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
        
    });
});