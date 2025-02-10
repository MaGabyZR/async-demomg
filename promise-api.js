/* //create a promise that is already resolved, for testing.Use te promise in JS. 
const p = Promise.resolve({ id: 1 });
p.then(result => console.log(result));

//create a promise that is already rejected, for testing.Use te promise in JS. 
const p1 = Promise.reject(new Error('reason for rejection...'));
p.catch(error => console.log(error)); */

//Running promises in parallel
const p1 = new Promise((resolve) =>{
    setTimeout(() => {
        console.log('Async operation 1...')
        resolve(1);
    }, 2000);
});

const p2 = new Promise((resolve) =>{
    setTimeout(() => {
        console.log('Async operation 2...')
        resolve(2);
    }, 2000);
});

Promise.all([p1, p2])
    .then(result => console.log(result));
