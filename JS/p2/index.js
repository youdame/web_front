const members = ['고은', '이현', '윤지', '민영'];

members.forEach((member) => {
  console.log(`${member}님이 입장하셨습니다.`);
  members.pop();
});

console.log(members);