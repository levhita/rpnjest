const evalPolish = require('../js/evalPolish');

describe('evalPolish', () => {
    test(' "2" should return 2',()=>{
        expect(evalPolish('2')).toBe(2);
    });
    
    test(' "2 2 +" should return 4',()=>{
        expect(evalPolish('2 2 +')).toBe(4);
    });

    test(' "2 2 -" should return 0',()=>{
        expect(evalPolish('2 2 -')).toBe(0);
    });

    test(' "2 2 *" should return 4',()=>{
        expect(evalPolish('2 2 *')).toBe(4);
    });

    test(' "2 2 /" should return 1',()=>{
        expect(evalPolish('2 2 /')).toBe(1);
    });
});