const evalPolish = (expression) => {
    const operations = ['+','-','*','/', '^'];
    const unary = ['sin', 'cos', 'tan', 'log', 'ln', 'exp', 'sqr'];
    const symbols = ['pi', 'e'];
    const tokens = expression.split(" ");
    const stack = [];
    
    while( token = tokens.shift() ) {
        if ( isNaN(token) && symbols.indexOf(token) ==-1 ){
            
            if (operations.indexOf(token) == -1 && unary.indexOf(token) ==-1) {
                throw new Error('Invalid Operation Token');
            }
            
            if (operations.indexOf(token) !== -1) {
                
                if ( stack.length < 2 ) {
                    throw new Error('Unbalanced Expression');
                }

                const second = stack.pop();
                const first = stack.pop();
                
                if (token == '+'){
                    stack.push( first + second );
                }
                
                if (token == '-'){     
                    stack.push( first - second );
                }
                
                if (token == '*'){
                    stack.push( first * second );
                }
                
                if (token == '/'){
                    stack.push( first / second );
                }
                if (token == '^'){
                    stack.push( Math.pow(first, second) );
                }
            } else {
                
                if ( stack.length < 1 ) {
                    throw new Error('Unbalanced Expression');
                }

                const operand = stack.pop();
                
                if (token == 'sin'){
                    stack.push( Math.sin(operand) );
                }

                if (token == 'cos'){
                    stack.push( Math.cos(operand) );
                }

                if (token == 'tan'){
                    stack.push( Math.tan(operand) );
                }
               
                if (token == 'log'){
                    stack.push( Math.log10(operand) );
                }
                if (token == 'ln'){
                    stack.push( Math.log(operand) );
                }

                if (token == 'exp'){
                    stack.push( Math.exp(operand) );
                }   
               
                if (token == 'sqr'){
                    stack.push( Math.sqrt(operand) );
                }
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
    
    if (stack.length > 1){
        throw new Error('Unbalanced Expression');  
    }
    
    return stack.pop();
};

module.exports = evalPolish;