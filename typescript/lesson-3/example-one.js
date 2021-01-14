function isAvailable(obj, key) {
    return key in obj;
}
// console.log(isAvailable('A string', 'length'));
// console.log(isAvailable(123123, 'parseInt'));
console.log(isAvailable({ name: "Ashari" }, 'name'));
