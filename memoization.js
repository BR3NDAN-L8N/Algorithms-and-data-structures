/* 
    MEMOIZATION
        DEFINE: Saved data, to access later in recursive functions
        USES: Used in Recursion when the same computation happens more than once. Quicker to access saved data than to recompute.

    STEPS
        1. initialize saving data structure in function's params
        2. check saved data structure
        3. pass saved DS to recursive call
        4. save result to DS
*/

/* 
    FIBONACCI 
*/
const fibonacci = (n) => {
    if (n <= 2 && n >= 1) { return 1 }
    else {
        return fibonacci(n-1) + fibonacci(n-2)
    }
}
console.log('Fibonacci 6 = 8 ? ', fibonacci(6))

/* 
    FIBONACCI w/ MEMOIZATION - prevValues{} playing the part of Memoization. This is a reenactment, based on a true story. 
*/ 
//  1. INITIALIZE SAVING DATA STRUCTURE
const fibonacci = (n, prevValues = {}) => {
    //  -recursion- ADDITIONAL LOGIC
    //  2. CHECK SAVED DATA
    if (prevValues[n] != null) { return prevValues[n] }
    let result
    //  -recursion- BASE CASE
    if (n <= 2 && n >=1) { result = 1 }
    else {
        //  -recursion- RECURSIVE CALL
        //  3. PASS SAVED DATA TO RECURSION
        result = fibonacci(n - 1, prevValues) + fibonacci(n - 2, prevValues)
    }
    //  -recursion- ADDITIONAL LOGIC
    //  4. SAVE RESULT TO DS
    prevValues[n] = result
    //  -recursion- RETURN
    return result
}
console.log('Fibonacci 6 = 8 ? ', fibonacci(6))