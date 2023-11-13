// String Reversal using stack
const reverseString = (str) => {

    let stack = [],
        reversed = "";

    for(const char of str)
    {
        stack.push(char)
    }

    /* Since isEmpty() method is not available as library function in JavaScript,
      here stack.length method is used to check if the stack is empty or not.
      We can use stack.isEmpty() method here as well. */
    
    while(stack.length)
    {
        reversed += stack.pop()
    }

    return reversed;
}