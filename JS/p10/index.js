function printWinners([macbook, ipad, airpods, ...coupon]) {
  console.log('이벤트 결과를 알려드립니다!');
  console.log(`맥북의 주인공은 ${macbook}님 입니다.`);
  console.log(`아이패드의 주인공은 ${ipad}님 입니다.`);
  console.log(`에어팟 주인공은 ${airpods}님 입니다.`);
  console.log('코드잇 3개월 수강권 주인공은:');
  
  for (let user of coupon) {
    console.log(`${user}`);
  }
  
  console.log(`이상 총 ${coupon.length}명 입니다.`);
}

const ranks = ['효준', '효신', '재훈', '소원', '현승', '종훈']; 
printWinners(ranks);
