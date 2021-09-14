let p1 = fetch('https://jsonplaceholder.typicode.com/photos');
let p2 = fetch('https://jsonplaceholder.typicode.com/todos');
Promise.all([p1, p2])
.then(respArr =>{
    let arr = [];
    arr.push(respArr[0].json());
    arr.push(respArr[1].json());
    return Promise.all(arr);
})
.then(data =>{
    console.log(data);
})