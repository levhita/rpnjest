const evalPolish = (expression) => {
    const operations = ['+','-','*','/'];
    const tokens = expression.split(" ");
    const stack = [];
    
    while( token = tokens.shift() ) {
        if ( isNaN(token) ){
            
            if (operations.indexOf(token) == -1) {
                throw new Error('Invalid Operation Token');
            }

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

        } else  {
            stack.push(parseFloat(token));
        }
    }
    if (stack.length > 1){
        throw new Error('Unbalanced Expression');  
    }
    return stack.pop();
};

module.exports = evalPolish;