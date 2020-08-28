import React from 'react';
import '@testing-library/jest-dom';
import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme';


describe('pruebas en el componente <GiFGridItem />', () => {

    const title = 'Batman';
    const url = 'https://localhost:3000/batman.png';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    test('comparar contra el snapshot del componente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un parrafo con el titulo', () => {
        const parrfo = wrapper.find('p');
        expect(parrfo.text().trim()).toBe(title)
    });

    test('debe de tener una imagen la url de los props ', () => {
        const img = wrapper.find('img');
        // console.log(img.html()) te va dar la imagen como html y no como Shallow
        // console.log(img.props()) se comvertiarar  en jason y prodas ver la spropiedas
        // console.log(imh.prop(src)) puede poner o evaluar solamente una propiedad
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe de tener la cse fadeInDown el contenedor', () => {
        const container = wrapper.find('div');
        const className = container.prop('className');
        expect( className.includes('animate__fadeInDown')).toBe(true);

    })
    

    
});