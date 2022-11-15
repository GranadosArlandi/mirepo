const producto = {
    count:3,
    price: 12.55,
    type: "ropa"
};
producto.count = producto.count > 0 ? producto.count : 0;
const getTotal = producto.count * producto.price;
console.log(getTotal);
let getVat;

switch(producto.type){
    case "alimentacion":
        getVat=0.1
        break;
    case "libro":
        getVat=0.04
        break;
    case "ropa":
        getVat=0.21
        break;

}
console.log(getVat)

getTotalconiva = getTotal * getVat + getTotal;

console.log(getTotalconiva)


