/* 
    RECURSION
        DEFINE: A function that acts as a loop by calling itself inside of it's function
        USE CASE: Nested objects (or in place of a normal loop, but don't do that)
    STEPS   
        1. Base case to tell the looping of the recursion to stop
        2. the recursive call
        3. return something
        *. anywhere before the return statement, any additional logic you may want to do
*/

//  FACTORIAL: A number multiplied by all numbers before it... ex: Factorial of 4 = 4*3*2*1 = 24
const factorial = (n) => {
    //  1. BASE CASE (stopping point)
    if (n === 1) {
        return 1
    }
    //  *. ADDITIONAL LOGIC
    //  2. RECURSIVE CALL, 3. RETURN
    return n * factorial(n - 1)
}
console.log('Factorial of 4 = ', factorial(4))

//  FACTORIAL but with SUMs: A number summed with all numbers before it... ex: SUMs of 4 = 4+3+2+1 = 10
const sums = (n) => {
    //  1. BASE CASE (stopping point)
    if (n === 1) {
        return 1
    }
    //  *. ADDITIONAL LOGIC
    //  2. RECURSIVE CALL, 3. RETURN
    return n + sums(n - 1)
}
console.log('Sums of 4 = ', sums(4))

//  NESTED OBJECTS: like the movie Inception but with Objects. Unless you dream of Objects, then just like Inception. There are objects in my dreams O.o
const updateTotals = (item) => {
    //  1. BASE CASE
    if (item.children < 1) { return item.total } else { item.total = 0 }
    //  *. ADDITIONAL LOGIC
    for (let property in item) {
        if (item[property].hasOwnProperty("total")) {
            //  2. RECURSIVE CALL
            item.total += updateTotals(item[property])
            //  *. ADDITIONAL LOGIC
        }
    }
    //  3. RETURN
    return item.total
}
expenses = {
    children: 1,
    total: 0,
    needs: {
        children: 2,
        total: 0,
        housing: {
            total: 700,
            children: 2,
            utilities: {
                total: 0,
                children: 1,
                internet: {
                    total: 75,
                    children: 0
                }
            },
            rent: {
                total: 600,
                children: 0
            }
        },
        vehicle: {
            total: 0,
            children: 3,
            payment: {
                total: 135,
                children: 0
            },
            gas: {
                total: 10,
                children: 0
            },
            maintenance: {
                total: 100,
                children: 0
            }
        }
    }
}

updateTotals(expenses)
console.log(JSON.stringify(expenses));