let main = document.getElementsByClassName("main")[0];
let parent = document.createElement("div");
parent.classList.add("parent");
for(let i = 1; i <= 23; i++){
    let newDiv = document.createElement("div");
    newDiv.classList.add("div" + i)
    let src = "./media/g/g" + i + ".jpg";
    console.log(src);
    newDiv.innerHTML = "<img src= " + src + ">";
    parent.appendChild(newDiv);
}
main.appendChild(parent);
window.onload = function() 
  { document.getElementById("hideAll").style.display = "none"; }