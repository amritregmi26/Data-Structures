function infixToPrefix(expression)
{
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
    token = token.reverse()

    token.forEach(element => {
        if(!isOperator(element))
        {
            postfix.push(element);
        }

        else if(element === ")")
        {
            stack.push(element);
        }

        else if(element === "(")
        {
            while(stack.length > 0 && stack[stack.length - 1] !== ")")
            {
                postfix.push(stack.pop());
            }
            stack.pop();
        }

        else
        {
            while(stack.length > 0
                && stack[stack.length - 1] !== "("
                && precedence[element] <= precedence[stack[stack.length - 1]])
                {
                    postfix.push(stack.pop());
                }
            
            stack.push(element)
        }
    });

    while(stack.length > 0)
    {
        postfix.push(stack.pop());
    }

    return postfix.reverse().join("");
}


console.log(infixToPrefix("(P+(Q*R)/(S-T))"));
console.log(infixToPrefix("A * B + C / D"));
console.log(infixToPrefix("(A - B/C) * (A/K-L)"));