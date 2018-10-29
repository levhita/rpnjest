const evalPolish = require('../js/evalPolish');

describe('evalPolish', () => {
    test(' "2" should return 2',()=> {
        expect(evalPolish('2')).toBe(2);
    });
    
    test(' "2 2 +" should return 4',()=> {
        expect(evalPolish('2 2 +')).toBe(4);
    });

    test(' "2 2 -" should return 0',()=> {
        expect(evalPolish('2 2 -')).toBe(0);
    });

    test(' "2 2 *" should return 4',()=> {
        expect(evalPolish('2 2 *')).toBe(4);
    });

    test(' "2 2 /" should return 1',()=> {
        expect(evalPolish('2 2 /')).toBe(1);
    });

    test(' "¿" should throw an Error', ()=> {
        expect( () => evalPolish('¿') ).toThrow(Error);
    });

    test(' "2 4 /" should return 1',()=> {
        expect(evalPolish('2 4 /')).toBe(0.5);
    });
    
    test(' "4 2 /" should return 1',()=> {
        expect(evalPolish('4 2 /')).toBe(2);
    });

    test(' "0.1 0.2 +" should return 0.3',()=> {
        expect(evalPolish('0.1 0.2 +')).toBeCloseTo(0.3);
    });
    
    test(' "+" should throw an Error', () => {
        expect(() => evalPolish('+')).toThrow(Error);
    });
    
    test(' "2 2 2 +" should throw an Error', () => {
        expect(() => evalPolish('+')).toThrow(Error);
    });
});