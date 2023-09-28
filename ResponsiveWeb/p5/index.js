function calculateChange(payment, cost) {
  // 여기에 코드를 작성하세요

  let payPair = {
    "50000" : 0,
    "10000" : 0,
    "5000" : 0,
    "1000" : 0
  }

  let remain = payment - cost;
  // console.log(remain);
  
  for (let i in payPair){
    if (remain < 0){
      break;
    }

    if (payPair[i] <= remain){
      remain = remain - payPair[i];
      
    }
  }

  
  while (remain > 0){
    
    if(pay[i] <= remain){
      remain = remain - pay[i];
      count[i]++;
      
    } else {
      i++;
    
    }
    // console.log(remain);
    
  }
  
  for (let element of count){
    console.log(element);
  }

}

// 테스트 코드
calculateChange(100000, 33000);
console.log('');
// calculateChange(500000, 378000);