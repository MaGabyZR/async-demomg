//Synchronous or blocking program. 
//console.log('Before');
//console.log('After'); 

//Asynchronous or nonblocking.

//1. Use the Callback Pattern. 
console.log('Before');
getUser(1, getRepositories);
console.log('After'); 

function getRepositories(user){
    getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repos){
    getCommits(repos, displayCommits);
}

function displayCommits(commits){
    console.log(commits);
}

function getUser(id, callback){
    setTimeout(() => { //Simulate connecting to a DB.
        console.log('Reading a user from a database...'); 
        callback({ id: id, gitHubUsername: 'mg'}); //pass the user object. 
    }, 2000); //After 2000 miliseconds, the code inside the function will be executed.
}

//Get the list of repositories for this user. 
function getRepositories(username, callback){
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}
