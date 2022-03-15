///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

let totalPrice = 0
const summedPrice = cart.reduce((prev, current) => prev + current.price, totalPrice)
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => {return (cartTotal * (tax + 1.00)) - couponValue}
console.log(calcFinalPrice(summedPrice, 3, .05))



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    The customer object will have 3 main properties:
        - An email for sending any docs or contacting the customer. This will be stored as a string
        - A phone number, could also be used for contacting but would mainly be used to look up loyalty accounts this will be a int
        - Loyalty balance to keep track of points or however else they reward the customer
    Then they will have 2 other properties that are more niche but still potential useful:
        - A date of when they signed up for any long time customer benefits and rewards. This will be a string of nums or possibly could type it out if desired.
        - A date of when they last visted the store. Could use this for any auto campaigns used for customer retention. This will also be a string of nums.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    email: "example@gmail.com",
    phoneNumber: 12345678910,
    loyaltyBalance: 100,
    signUpDate: "12/24/18",
    lastVisit: "03/10/22"
}
