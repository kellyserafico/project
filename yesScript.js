document.getElementById("sign").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get the value entered in the input field
    var name = document.getElementById("nameInput").value.toLowerCase();

    // Check if the name is "gabe"
    let gabe = ["gabe", "gabriel", "gibba", "gibby", "gibber", "gab", "gib", "gibb"];
    let goodEnding = gabe.includes(name);
    // if (gabe.includes(name)) {
    //     alert("Congratulations! You are officially my valentine!");
    // } else {
    //     alert("Sorry, only Gabe can be my valentine.");
    // }

    toHide = document.getElementsByClassName('toHide')[0];

    let possum = document.createElement("h");
    let verify = document.createElement("h");
    possum.innerText = "awe sum possum";
    verify.innerText = "kely will now verify if u are gabe";
    verify.classList.add("verify");
    
    newDiv = document.createElement("div");
    newDiv.classList.add("hStuff");
    newDiv.appendChild(possum);
    newDiv.appendChild(verify);

    toHide.appendChild(newDiv);
    // vefiry = main.getElementsByClassName('verify')[0];
    // Add a period every second for 3 seconds
    let count = 0;
    const interval = setInterval(() => {
        if (count < 3) {
            verify.innerText += ".";
            count++;
        } else {
            if (goodEnding) {
                window.location.href = "goodEnding.html";
            } else {
                
                badEnding();
                window.close();
                // window.location.href = "badEnding.html";
                // setTimeout(function() {
                //     window.close();
                // }, 5250); // Move this timeout outside of the else block
            }
            clearInterval(interval); // Clear the interval when redirection occurs
        }
    }, 1000);


});

function badEnding() {
   // Open a new window and redirect it to "badEnding.html"
   let newWindow = window.open("badEnding.html");
   // Close the new window after 5.25 seconds
   setTimeout(function() {
       newWindow.close();
   }, 5250);

   window.close();


   gif = document.getElementsByClassName('gif')[0];
   gif.src = "./media/gif3.gif";
   toHide = document.getElementsByClassName('toHide')[0];
   toHide.innerHTML="<h1>you are not gabe. leave now</h1>";



}

