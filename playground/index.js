function serveCustomer (customer) {
    let order = customer.placeOrder(menu)
    let food = cook.prepareFood(order)
    let tip = customer.eatAndPay(food)
    return tip
}

//christmas tree problem reduces cognitive load 
//asynchronous -- less time taken //nested
function serveCustomer(customer, done) {
    customer.placeOrder(menu, (error, order) => {
        cook.prepareFood(order, (error, food) => {
            customer.eatAndPay(food, done)
        })
    })
}

//promises & Async/Await 
function serveCustomer(customer) {
    return customer.placeholder(menu)
    .then(order => cook.prepareFood(order))
    .then(food => customer.eatAndPay(food))
}

//go to approach easy to read 
const serveCustomer = async (customer) => {
    let order = await customer.placeOrder(menu)
    let food = await cook.prepareFood(order)
    let tip = await customer.eatAndPay(food)
    return tip
}
//spend good on the code specifying where and when
//not common to write code like this on your own
// but you'll come across high order constructors built on event emittors
//its good to know they exist
const serveCustomer = (customer, done) => {
    customer.on('decided', order => {
        order.on('prepared', food => customer.eatAndPay(food))
        cook.prepareFood(order)
    })
    customer.on('leaving', tip => done(null, tip))
    customer.placeOrder(menu)
}