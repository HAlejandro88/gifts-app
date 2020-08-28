
import '@testing-library/jest-dom';
import { getGifs } from '../../helpers/getGifs';

describe('pruebas con getGifs FETCH', () => {
    test('debe de trer 25 elementos', async() => {
        const gifs = await getGifs('batman');
        expect(gifs.length).toBe(25)
    });

    test('prueba sin mandar ningun argumento', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});