const no = document.getElementsByClassName('no')[0];
no.addEventListener('mouseover', () => {
    no.style.position = 'absolute';
    no.style.transition = "left .5s, top .5s"; // Add transition for left and top properties
    no.style.left = `${Math.ceil(Math.random() * 90)}%`;
    no.style.top = `${Math.ceil(Math.random() * 90)}%`;
});
// let gifArray = ["./media/gif1.gif", "./media/gif2.gif", "./media/gif3.gif", "./media/gif4.gif"];
// let gif = document.getElementsByClassName('gif')[0];
// let i = 0;
// gif.addEventListener('click', () => {
//     i++;
//     if(i >= gifArray.length) i = 0;
//     gif.src = gifArray[i];
//     console.log("sjdklf")
// });

