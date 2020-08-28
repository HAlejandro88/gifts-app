import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en el componente AddCategory', () => {
    const setCategorys = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategorys } />);

    beforeEach(() => {
        jest.clearAllMocks(); // para resetear tadas las funciones que tiene jest
        wrapper = shallow(<AddCategory setCategories={ setCategorys } />);
    });
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'hola';

        input.simulate('change',{ target: { value } }); // despues lleva si tiene un argumento
        expect(wrapper.find('p').text().trim()).toBe(value)
    });

    /* test('custom test', () => {
        const input = wrapper.find('input');
        const value = 'hola';
        input.simulate('change',{ target: { value } });
        expect(input.prop('value')).toBe(value);
    }); */

    test('No debe de postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategorys).not.toHaveBeenCalled();
    });

    test('debe de llamar a setCategorys y limpoar la caaja de texto', () => {
        const value = 'Hola';
        wrapper.find('input').simulate('change', { target: { value } })
        wrapper.find('form').simulate('submit', { preventDefault(){} })
        expect( setCategorys ).toHaveBeenCalled();
        expect( setCategorys ).toHaveBeenCalledTimes(1);
        expect( setCategorys ).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('')
    });
});