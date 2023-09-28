const chatBox = document.querySelector('#chat-box');
const input = document.querySelector('#input');
const send = document.querySelector('#send');

function sendMyText() {
  const newMessage = input.value;
  if (newMessage) {
    const div = document.createElement('div');
    div.classList.add('bubble', 'my-bubble');
    div.innerText = newMessage;
    chatBox.append(div);
    
  } else {
    alert('메시지를 입력하세요...');
  }
  
  input.value = '';
}

send.addEventListener('click', sendMyText);

// 여기에 코드를 작성하세요


function sendUsingEnter(e){

  if(e.key === "Enter" && e.shiftKey){
    return;

  } else if (e.key === "Enter"){
    e.preventDefault();
    sendMyText();
    input.textContent = "";
  } 
  

}

input.addEventListener('keypress', sendUsingEnter);
