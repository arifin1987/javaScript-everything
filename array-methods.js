const products = [
    {brand: 'Dell', price: 23000, color:'red'},
    {brand: 'Lenovo', price: 33000, color: 'blue'},
    {brand: 'Asus', price: 43000, color: 'green'},
    {brand: 'Hp', price: 55000, color: 'orange'},
    {brand: 'Samsung', price: 65000, color: 'green'},
]

// We will use map() when we need to return a array
const brands = products.map(product=> product.name)
const price = products.map(product => product.price)

// we will use forEach() when we do not need to return anything.
products.forEach(prd=> prd.color)

// Filter
// finlter() will give single or more than one element when it matched
const cheap = products.filter(product => product.price <= 35000);
const specificName = products.filter(product => product.brand.includes('n'));

// Find
// find() will give you a single value, which will find it at the begining.
const special = products.find(product=> product.brand.includes('n'))

console.log(special)