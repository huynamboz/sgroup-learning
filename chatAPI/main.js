const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
let PERSON_NAME = get(".msger-name");
function checkName(){
  if(localStorage.getItem("name") == null){
    alert("Please enter your name");
  }
    else{
        
      localStorage.setItem("name", PERSON_NAME.value);
    }
}
checkName();
const BOT_MSGS = [
  "Hi, how are you?",
  "Ohh... I can't understand what you trying to say. Sorry!",
  "I like to play games... But I don't know how to play!",
  "Sorry if my answers are not relevant. :))",
  "I feel sleepy! :("
];
setInterval(() => {
    fetchMessage();
}, 5000);
// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const BOT_NAME = "BOT";

fetchMessage()
msgerForm.addEventListener("submit", event => {
    event.preventDefault();
    console.log(msgerInput.value);
  console.log(PERSON_NAME);
  PERSON_NAME = PERSON_NAME.value;
  if(msgerInput.value == "") return;
  send().then(res => {
    fetchMessage();
  })
});
async function fetchMessage(){
    await axios.get("https://63e393dec919fe386c09bbaa.mockapi.io/sgroup/message").then(res => {
        res.data.forEach(element => {
            appendMessage(element.name, element.name == "BOT" ? BOT_IMG : PERSON_IMG, element.name != PERSON_NAME ? "left" : "right", element.content,element.createdAt)
        });
    })
}

async function send(){
    res = await axios.post("https://63e393dec919fe386c09bbaa.mockapi.io/sgroup/message", {name: `${PERSON_NAME}`, content: `${msgerInput.value}`, createdAt: new Date()})
console.log(res)
}
function appendMessage(name, img, side, text,time) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${time}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
  }, delay);
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
