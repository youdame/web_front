// Internet Disconnected

fetch('<https://jsonplaceholder.typicode.com/users>')
  .then((response) => response.text(), (error) => { console.log(error); })
  .then((result) => { console.log(result); });

