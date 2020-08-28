import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en la aplicacion de <GifExpertApp />', () => {
    test('comparar contra el snapshot', () => {
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar una lista de categorias', () => {
        const categorys = ['dragon ball', 'batman'];
        const wrapper = shallow(<GifExpertApp defaultCategorie={ categorys } />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categorys.length);
    });
});