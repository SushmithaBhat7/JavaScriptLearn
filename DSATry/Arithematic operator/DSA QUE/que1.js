/* Create a function named getGreetings()*/
/*Create a let variable with default name "user" in that function when you dont get any input*/
/*  */ 

function getGreetings(greetUser){
    if(greetUser != null){

       console.log("Hello "+ greetUser.charAt(0).toUpperCase()+ greetUser.slice(1).toLowerCase() + ", Welcome to the team.");
    }else{
        console.log(" Hello User, Welcome to the team.")
    }


}

getGreetings();
getGreetings("Sushmitha");
getGreetings("aNkit");
getGreetings(1);