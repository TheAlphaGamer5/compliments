// helper function

var adj1 = ["beautiful","amazing","flame-spitting","famboyant","Gunpowerder Geletin","Chariot","crazy","electric","Royal","outstanding","apraise generating","heroic","trend-setting","high-functioning","rational"];
var adj2 = ["magnifigant","invincible", "spectactular" , "rank 11", "dynamite with a lazer beam","star","platnim","shining","ultimate","earth-shattering","awesome","fluffy","viliante","creative","kind"]
var noun = ["sparten","roamin","paladin","land-shark","sky-torpido", "killer queen","renagade","diamond","Rainbow","Chariot","taco","magician","king","sealion","cyborg","diver"]

function randomNumber(min,max)
{
  return Math.floor(Math.random()*(max-min+1)+min);
}

function submit()
{
  var name = document.getElementById('name').value
  var num1 = randomNumber(0,14)
  var num2 = randomNumber(0,14)
  var num3 = randomNumber(0,14)
  var wordString = name + " you " + adj1[num1] + ", " + adj2[num2] + ", " + noun[num3];
  document.getElementById('complimentcontainer').innerHTML = wordString;
}
