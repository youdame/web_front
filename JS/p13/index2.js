console.log('Start!');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => {
    const users = JSON.parse(result);
    const { id } = users[0];
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  })
  .then((response) => response.text())
  .then((posts) => {
    console.log(posts);
  });

console.log('End');


// Internet Disconnected

fetch('https://www.google.com') // Promise-1
  .then((response) => response.text()) // Promise-2
  .then((result) => { console.log(result) }, (error) => { alert(error) }); 
