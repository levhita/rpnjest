const evalPolish = (expression) => {
    const operations = ['+','-','*','/', '^'];
    const unary = ['sin', 'cos', 'tan', 'log', 'ln', 'exp', 'sqr'];
    const symbols = ['pi', 'e'];
    const tokens = expression.split(" ").filter(el => el!=='');
    const stack = [];
    
    while( token = tokens.shift() ) {
        if ( isNaN(token) && symbols.indexOf(token) ==-1 ){
            
            if (operations.indexOf(token) == -1 && unary.indexOf(token) ==-1) {
                throw new Error('Invalid Operation Token');
            }
            
            if (operations.indexOf(token) !== -1) {
                
                if ( stack.length < 2 ) throw new Error('Unbalanced Expression');

                const second = stack.pop();
                const first = stack.pop();
                
                if (token=="^") token='**';
                stack.push(eval(`${first} ${token} ${second}`));

            } else {
                if ( stack.length < 1 ) throw new Error('Unbalanced Expression');

                const operand = stack.pop();
                
                functions = {
                    sin: 'sin',
                    cos: 'cos',
                    tan: 'tan',
                    ln: 'log',
                    log: 'log10',
                    exp: 'exp',
                    sqr: 'sqrt',
                };
                stack.push(Math[functions[token]](operand));

            }
        } else  {
            if(token=='pi'){
                stack.push(Math.PI);                
            } else if(token=='e'){
                stack.push(Math.E);
            } else {
                stack.push(parseFloat(token));
            }
        }
    }
    
    if (stack.length > 1) throw new Error('Unbalanced Expression');
    if (stack.length == 0) throw new Error('Empty Expression');  
    
    return stack.pop();
};

module.exports = evalPolish;