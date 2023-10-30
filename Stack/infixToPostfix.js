function infixToPostfix(expression) {

    let isOperator = (operator) => (/[+\-*/^()]/g).test(operator),
        stack = [], postfix = [],
        precedence = {
        "+": 1,
        "-": 1,
        "*": 2,
        "/": 2,
        "^": 3
    };

    let token = expression.match(/[\w\d]|[+\-*/^()]/g);

    token.forEach(element => {
        // Check for operand
        if (!isOperator(element)) {
            postfix.push(element);
        }

        else if (element === "(") {
            stack.push(element)
        }
        else if (element === ")") {

            while (stack.length > 0 && stack[stack.length - 1] !== "(") {
                postfix.push(stack.pop());
            }

            stack.pop()
        }
        else {
            while (precedence[stack[stack.length - 1]] >= precedence[element]
                && stack[stack.length - 1] !== "(") {
                postfix.push(stack.pop())
            }
            stack.push(element);
        }
    });

while (stack.length > 0) {
    postfix.push(stack.pop())
}

return postfix.join("");

}

console.log(infixToPostfix("(A+B/C*(D+E)-F)"));