function greetUser(UserName){
    document.getElementById('output').innerText = "Hello," + UserName;
}

greetUser('Harry');





function updatebutton(){
    document.getElementById('message').innerText = "Hello, World";
}







const sum=(value1,value2)=>{
   var value1 = document.getElementById('inputField1').value;
   var value2 = document.getElementById('inputField2').value;
   document.getElementById('result').innerText = sum(value1 + value2);
}









function updatebutton3(){
    document.getElementById('title2').innerText = document.getElementById('inputField3').value;
    
}






function updatebutton4(){
    var value4 = document.getElementById('inputField4').value;
    var value5 = document.getElementById('inputField5').value;
    document.getElementById('combinedText').innerText = value4 + value5;
}



function updatebackground(){
    document.getElementById('colorBox').style.backgroundColor = 'blue';
}
