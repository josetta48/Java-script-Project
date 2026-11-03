var navigate = document.getElementsByClassName("Navigation")[0];
if (window.location.pathname.includes("index.html")) {
let names = sessionStorage.getItem("name");
var changeName = document.createElement("button")

changeName.innerHTML= "Change your name"
changeName.addEventListener("click",function(){
let newName = prompt("What would you like to change your name to?");
if (newName != null){
names = newName;
sessionStorage.setItem("name", names);
document.getElementById("Introduction").innerHTML =
"Greetings " + names + ", " + introduction;
alert("Hello " + names + ", Your name has been changed now")
}
})
navigate.appendChild(changeName);
console.log(navigate)
if (names == null) {
names = prompt("Hello, what is your name?");
sessionStorage.setItem("name", names);
}
var introduction = document.getElementById("Introduction").innerHTML;
document.getElementById("Introduction").innerHTML =
"Greetings " + names + ", " + introduction;
var list = document.createElement("ul");
var item1 = document.createElement("li");
item1.innerHTML = "M - HomePage";
var item2 = document.createElement("li");
item2.innerHTML = "P - Places";
var item3 = document.createElement("li");
item3.innerHTML = "S - Series";
var item4 = document.createElement("li");
item4.innerHTML = "H - Hobbies";
list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);
list.appendChild(item4);
var instructions = document.createElement("p");
instructions.setAttribute("style", "font-size: 18px; ")
instructions.innerHTML = " you can press keys to go to different websites"
list.setAttribute("style", "font-size: 18px;")
navigate.appendChild(instructions);
navigate.appendChild(list);

}

var MainTextStyle = document.querySelectorAll(".Main");
MainTextStyle.forEach((Main) => {
Main.setAttribute("style", "Font-size:60px; border: solid;")    
Main.addEventListener("mouseover", function(){
    this.style.backgroundColor = "yellow";
});
Main.addEventListener("mouseout", function(){
    this.style.backgroundColor = "";
});
});

var MyTopics = document.querySelectorAll(".Topics");
MyTopics.forEach((Topics) =>{
    Topics.addEventListener("mouseover", function(){
        this.style.backgroundColor = "lightblue";
    });
    Topics.addEventListener("mouseout", function(){
        this.style.backgroundColor = "";
    })
});

var MyImages = document.querySelectorAll(".Images");

MyImages.forEach((Images)=>{
    Images.addEventListener("mouseover", function(){
        this.style.transform = "scale(1.2)";
        this.style.border = "2px solid black";
    });
    Images.addEventListener("mouseout", function(){
        this.style.transform = "scale(1)";
        this.style.border = "";
    })
})

document.addEventListener("keydown", function(event){
    if (event.key == "m"){
        window.location.href = "index.html";
    }
    if (event.key == "p"){
        window.location.href = "places.html";
    }
    if (event.key == "s"){
        window.location.href = "series.html";
    }
    if (event.key == "h"){
        window.location.href = "hobbies.html";
    }
})


if(window.location.pathname.includes("hobbies.html")) {
    var hobby = sessionStorage.getItem("hobby");
    if (hobby == null){
    hobby = prompt("What is your favourite hobby?");
    sessionStorage.setItem("hobby", hobby);    
    }
    var hobbyElement = document.createElement("p");
    hobbyElement.innerHTML = "Your favourite hobby is: " + hobby;
    document.body.appendChild(hobbyElement);
}

if(window.location.pathname.includes("places.html")){
 var place = sessionStorage.getItem("place");
 if (place == null){
    place = prompt("What places have you been to before?");
    sessionStorage.setItem("place", place);
 }
 var placeElement = document.createElement("p");
 placeElement.innerHTML = "You have been to: " + place;
 document.body.appendChild(placeElement);
}

if(window.location.pathname.includes("series.html")){
    var series = sessionStorage.getItem("series");
    if(series == null){
        series = prompt("What is your favourite movie/serie?");
        sessionStorage.setItem("series", series);
    }
    var seriesElement = document.createElement("p");
    seriesElement.innerHTML = "Your favorite show is: " + series;
    document.body.appendChild(seriesElement);
}
