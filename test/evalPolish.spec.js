const evalPolish = require('../js/evalPolish');

describe('evalPolish', () => {
    test(' 2 2 + should return 4',()=>{
        expect(evalPolish('2 2 +')).toBe(4);
    });
});