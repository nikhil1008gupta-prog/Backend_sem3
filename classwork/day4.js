//Event loop
let promiseOne = new Promise((resolve, reject) => {
    let a = 10;
    let b = 20;
    let c = a + b;
    resolve(c);
});

//Create one log
console.log("Promise One created");
function test() {
    console.log("Promise One executed");
}


//Create a function main, settimeout, two promises

function main() {
    setTimeout(() => {
        test();
    }, 1000);
}

main();
