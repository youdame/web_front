// fetch("https://learn.codeit.kr/api/members")
//   .then((response) => response.text())
//   .then((result) => { console.log(result)});

const Member = {
  name : 'Alice',
  email : 'alice@codeitmall.kr',
  department : 'marketing',
};

fetch('https://learn.codeit.kr/api/members/2', {
  method :'PUT',
  body: JSON.stringify(newMember),
})

.then((response) => response.text())
.then((result) => { console.log(result)});