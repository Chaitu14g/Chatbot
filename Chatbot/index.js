let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let userInput = document.getElementById("userInput");

let chatContainer = document.getElementById("chatContainer");

let sendMsgBtn = document.getElementById("sendMsgBtn");

let a=0;

sendMsgBtn.onclick = function() {
    let entered_input = userInput.value;
    let sub_container = document.createElement("div");
    let para = document.createElement("span");
    para.textContent = entered_input;
    sub_container.classList.add("msg-to-chatbot-container");
    para.classList.add("msg-to-chatbot");
    entered_input = "";
    sub_container.appendChild(para);
    chatContainer.appendChild(sub_container);
    let bot_entered_input = chatbotMsgList[a];
    let bot_sub_container = document.createElement("div");
    let bot_para = document.createElement("span");
    bot_para.textContent = bot_entered_input;
    bot_sub_container.classList.add("msg-from-chatbot-container");
    bot_para.classList.add("msg-from-chatbot");
    bot_sub_container.appendChild(bot_para);
    chatContainer.appendChild(bot_sub_container);
    a=a+1;
    if (a===6){
        a=0;
    };
}