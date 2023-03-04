let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank you for addressing your concern, our team will look into it and get back to you"];

let userInput = document.getElementById("userInput");

let chatContainer = document.getElementById("chatContainer");

let sendMsgBtn = document.getElementById("sendMsgBtn");

let b = 0;
let a = "";

sendMsgBtn.onclick = function() {
    let entered_input = userInput.value;
    let sub_container = document.createElement("div");
    let para = document.createElement("span");
    para.textContent = entered_input;
    sub_container.classList.add("msg-to-chatbot-container", "mt-5", "md-5");
    para.classList.add("msg-to-chatbot");
    sub_container.appendChild(para);
    chatContainer.appendChild(sub_container);
    if (b === 0) {
        if (userInput.value === "Hi" || userInput.value === "Hey") {
            a = "Hi, How can I help you?";
        } else if (userInput.value === "Good Morning") {
            a = "Good Morning, How can I help you?";
        } else if (userInput.value === "Good Evening") {
            a = "Good Evening, How can I help you?";
        } else {
            a = "Hi, How can I help you?";
        }
    } else if (b >= 1) {
        a = "Thank you for addressing your concern, our team will look into it and get back to you";
    }
    userInput.value = "";
    let bot_entered_input = a;
    let bot_sub_container = document.createElement("div");
    let bot_para = document.createElement("span");
    bot_para.textContent = bot_entered_input;
    bot_sub_container.classList.add("msg-from-chatbot-container", "mt-5", "md-5");
    bot_para.classList.add("msg-from-chatbot");
    bot_sub_container.appendChild(bot_para);
    chatContainer.appendChild(bot_sub_container);
    b = b + 1;
};