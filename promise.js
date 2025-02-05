//create a promise object
const p = new Promise((resolve, reject) => {
    //do some async job
    setTimeout(() => {
        //resolve(1); //the state goes from pending to fulfilled
        reject(new Error('message')); //the state goes from pending to rejected.
    }, 2000);
});

//consume the promise. 
p
    .then(result => console.log('Result', result))
    .catch(err => console.log('Error', err.message));