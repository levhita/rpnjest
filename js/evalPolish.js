const evalPolish = (expression) => {
    const tokens = expression.split(" ");
    const stack = [];
    while( token = tokens.shift() ) {
        if ( isNaN(token) ){
            if (token == '+'){
                const first = stack.pop();
                const second = stack.pop();
                stack.push( first + second );
            }

            if (token == '-'){
                const first = stack.pop();
                const second = stack.pop();
                stack.push( first - second );
            }

            if (token == '*'){
                const first = stack.pop();
                const second = stack.pop();
                stack.push( first * second );
            }

            if (token == '/'){
                const first = stack.pop();
                const second = stack.pop();
                stack.push( first / second );
            }
        } else  {
            stack.push(parseInt(token));
        }
    }
    return stack.pop();
};

module.exports = evalPolish;