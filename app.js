let images = [
	"dice-1.svg",
	"dice-2.svg",
	"dice-3.svg",
	"dice-4.svg",
	"dice-5.svg",
	"dice-6.svg",
];

let dice=document.querySelectorAll("img");
function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        })
        let dieOneValue=Math.floor(Math.random()*6);
        let dieTwoValue=Math.floor(Math.random()*6);
        document.querySelector("#dice-1").setAttribute("src",images[dieOneValue]);
        document.querySelector("#dice-2").setAttribute("src",images[dieTwoValue]);
        document.querySelector("#total").innerHTML="Your roll is "+ (dieOneValue+1 + dieTwoValue+1);
    },1000);

}
roll();