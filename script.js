  let input1 = document.querySelector(".questionOne");
  let input2 = document.querySelector(".questionTwo");
  let button = document.querySelector("button");
  let resultMessage = document.querySelector(".result-message");
  let turtlesImage = document.querySelector(".turtles");
  let questions = document.querySelector(".questions");
  let background = document.querySelector(".background") 

  button.onclick = function(){

    console.log("button check");
  
    let answer1 = input1.value;
    console.log(answer1);
  
    let answer2 = input2.value;
    console.log(answer2);
  
    if(answer1 === "Katana" && answer2 === "Pepperoni"){
      resultMessage.innerHTML = "LEONARDO";
      turtlesImage.src = "leo.webp";
      questions.style.display = "none";
      resultMessage.style.color = "blue";
      button.style.display = "none";
      function setBgBlue() {
    document.body.style.backgroundColor = 'blue';
}
      setBgBlue();

    } else if(answer1 === "Sai" && answer2=== "Meat Lovers"){
      turtlesImage.src = "raph.webp";
      resultMessage.innerHTML = "RAPHAEL";
      questions.style.display = "none";
      resultMessage.style.color = "red";
      button.style.display = "none";
      function setBgRed() {
    document.body.style.backgroundColor = 'red';
}
      setBgRed();

    } else if(answer1 === "Nunchucks" && answer2 === "ANYTHING"){
      turtlesImage.src = "Mikey.webp";
      resultMessage.innerHTML = "MICHELANGELO";
      questions.style.display = "none";
      resultMessage.style.color = "orange";
      button.style.display = "none"
      function setBgOrange() {
    document.body.style.backgroundColor = 'orange';
}
      setBgOrange();  

    } else if(answer1 === "Staff" && answer2 === "Anchovies and Peanut Butter"){
      turtlesImage.src = "Donatello.webp";
      resultMessage.innerHTML = "DONATELLO";
      questions.style.display = "none";
      resultMessage.style.color = "purple";
      button.style.display = "none";
      function setBgPurple() {       
    document.body.style.backgroundColor = 'purple';
}
      setBgPurple();

    } else{
      resultMessage.innerHTML = "None, Try a different combination!";
      resultMessage.style.color = "#333";
    }
  };

 
  



