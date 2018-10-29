const evalPolish = (expression) => {
    const tokens = expression.split(" ");
    const stack = [];
    while( token = tokens.shift() ) {
       
        if ( !isNaN(token) ) {
            stack.push(parseInt(token));
        }
    }
    return stack.pop();
};

module.exports = evalPolish;