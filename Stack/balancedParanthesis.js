function balancedParanthesis(str)
{ 
    let stack = [];
    let openBrackets = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    for(char of str)
    {
        if(char === "(" || char === "{" || char === "[")
        {
            stack.push(char);
        }

        else
        {
           if(openBrackets[char] === stack[stack.length - 1]) stack.pop();
           else return false;
        }
    }

    return stack.length === 0;
    
}