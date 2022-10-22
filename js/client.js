const nicknameList = [
	"Alpha",
	"Foxy Lady",
	"Cheeto",
	"DJ",
	"Psycho",
	"Lefty",
  "Boo Boo",
	"Coyote",
	"Crow",
	"Madmax",
	"Blackbeard",
	"Gigadude",
	"Megalith",
	"Slim",
	"Joker",
  "Marshmallow",
	"Invictus",
  "Supernova",
	"Outlaw",
	"Shockwave",
	"Starfire",
	"Tootsie",
	"Llama Drama",
	"Chicken Wing",
	"Vegas",
	"Moonshine",
	"Thunderbolt",
	"Shorty",
	"Black Widow",
	"Robbing Hood"
];

const button = document.querySelector("button");
const nickname = document.querySelector("p");

button.addEventListener('click', generate);

function generate() {
  const randomNickname = nicknameList[Math.floor(Math.random() * nicknameList.length)];
  nickname.innerHTML = `<p>Your nickname is:</p> "${randomNickname.toUpperCase()}"`;
};

// Prompt
const enterName = prompt('Please enter your name');
document.querySelector('#name').innerHTML = `Welcome ${enterName}!`;
