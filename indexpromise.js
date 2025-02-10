console.log('Before');
// getUser(1, (user) => { //replaced with the promise consumed. 
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     })
//   })
// });

//To consume the promises.
getUser(1)
  .then(user => getRepositories(user.gitHubUsername))
  .then(repos => getCommits(repos[0])) 
  .then(commits => console.log('Commits', commits))
  .catch(err => console.log('Error', err.message)); 

console.log('After');

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { //her you kickstart the async work. 
      console.log('Reading a user from a database...');
      resolve({ id: id, gitHubUsername: 'monti' });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);
  });
}

function getCommits(repo,) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['commit']);
    }, 2000);
  });
}