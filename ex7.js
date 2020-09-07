let autoIncrement = (function () {
    let number = 0
    let decrement = 1
    return function () {
        number += decrement;
        return number;
    }
})()
console.log("Working in my computer");
console.info(autoIncrement());