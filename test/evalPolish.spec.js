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

    test('"2 2 ^" should return 1',()=> {
        expect(evalPolish('2 2 ^')).toBe(4);
    });
});

describe('Error Handling', () => {
    test('"¿" should throw an Error', ()=> {
        expect( () => evalPolish('¿') ).toThrow(Error);
    });

    test('"2 2 2 +" should throw an Error', () => {
        expect(() => evalPolish('2 2 2 +')).toThrow(Error);
    });

    test('"2 +" should throw an Error', () => {
        expect(() => evalPolish('2 +')).toThrow(Error);
    });
    
    test('"sqr" should throw an Error', () => {
        expect(() => evalPolish('sqr')).toThrow(Error);
    });
    
    test('"" should throw an Error', () => {
        expect(() => evalPolish('')).toThrow(Error);
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

    test('"0.1 0.2 +" should return 0.3', () => {
        expect(evalPolish('0.1 0.2 +')).toBeCloseTo(0.3);
    });

    test('"20 10 +" should return 30', () => {
        expect(evalPolish('20 10 +')).toBeCloseTo(30);
    });
});

describe('Unitary Operations', () => {

    test('"pi sin" should return 0', () => {
        expect(evalPolish('pi sin')).toBeCloseTo(0);
    });
    
    test('"pi cos" should return -1', () => {
        expect(evalPolish('pi cos')).toBeCloseTo(-1);
    });
    
    test('"pi tan" should return -1', () => {
        expect(evalPolish('pi tan')).toBeCloseTo(0);
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

    test('"1 exp should return E', () => {
        expect(evalPolish('1 exp')).toBeCloseTo(Math.E);
    });
});