const evalPolish = require('../js/evalPolish');



describe('Basic Operations', () => {
    test('"2" should return 2',()=> {
        expect(evalPolish('2')).toBe(2);
    });

    test('"2 2 +" should return 4',()=> {
        expect(evalPolish('2 2 +')).toBe(4);
    });

    test('"2 2 -" should return 0',()=> {
        expect(evalPolish('2 2 -')).toBe(0);
    });

    test('"2 2 *" should return 4',()=> {
        expect(evalPolish('2 2 *')).toBe(4);
    });

    test('"2 2 /" should return 1',()=> {
        expect(evalPolish('2 2 /')).toBe(1);
    });
});

describe('Error Handling', () => {
    test('"¿" should throw an Error', ()=> {
        expect( () => evalPolish('¿') ).toThrow(Error);
    });

    test('"2 2 2 +" should throw an Error', () => {
        expect(() => evalPolish('+')).toThrow(Error);
    });

    test('"+" should throw an Error', () => {
        expect(() => evalPolish('+')).toThrow(Error);
    });
});

describe('Order does matter', () => {
    test('"2 4 /" should return 0.5', () => {
        expect(evalPolish('2 4 /')).toBe(0.5);
    });
    
    test('"4 2 /" should return 2',()=> {
        expect(evalPolish('4 2 /')).toBe(2);
    });
});

    
describe('Edge Cases', () => {
    test('"-1 2 *" should return -2', () => {
        expect(evalPolish('-1 2 *')).toBe(-2);
    });

    test('"pi sin" should return 0', () => {
        expect(evalPolish('pi sin')).toBeCloseTo(0);
    });
    test('"pi cos" should return -1', () => {
        expect(evalPolish('pi cos')).toBeCloseTo(-1);
    });

    test('"4 sqr" should return 2', () => {
        expect(evalPolish('4 sqr')).toBeCloseTo(2);
    });

    test('"e ln" should return 1', () => {
        expect(evalPolish('e ln')).toBeCloseTo(1);
    });

    test('"10 log" should return 1', () => {
        expect(evalPolish('10 log')).toBeCloseTo(1);
    });  
});