   function start(){
    
    var value = prompt("Guess a number between 1 and 10: ");
    var secretnumber = 7;
    
    //var num1 = Math.random(1); 
    if(value == secretnumber){

        alert("Correct!");
        document.getElementById("message").innerHTML += "Congratulations! You won";
    }
    else{

        alert("Sorry! ");
    }

    // we use plus symbol(+) to add two or more elements

    while(value != secretnumber){
        
        var value = prompt("Guess a number between 1 and 10: ");
        if(value != secretnumber){
            alert("Incorect!");
        }
        
        if(value == secretnumber){

            document.getElementById("message").innerHTML += "Congratulations! You won";
        }

    }

   }


   
/*
   function myguess(){

    var answer = prompt("Please guess a number between 0 and 10");
    answer = Number(answer);
    checkanswer(answer);;

   }
   function checkanswer(){

if (guess === secret){

    document.getElementById().innerHTML += "congrats"
}
else if(guess < secret){
alert("incorrect");
myguess();

}
else if(guess > secret){

    alert("too high");
}
else{
    alert("incorrect");
    myguess();
}

   }*/
