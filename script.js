window.onload = loadPage
 
function loadPage() {
    new Date()
}
 
const date1 = new Date('4/25/1994');
const date2 = new Date();
const diffTime = Math.abs(date2 - date1);
const myAge = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
console.log (myAge)
 
 
function omMig()  {
    const aboutMe = document.getElementById("aboutMe");
 
    if (!aboutMe.style.maxHeight) {
        aboutMe.style.maxHeight = '10rem';
    } else {
        aboutMe.style.maxHeight = null;
    }
       
}
 
function kunskap()  {
    const knowleageID = document.getElementById("knowleageID");
 
    if (!knowleageID.style.maxHeight) {
        knowleageID.style.maxHeight = '10rem';
    } else {
        knowleageID.style.maxHeight = null;
    }
       
}
 
function erfarenhet()  {
    const expreienceeID = document.getElementById("expreienceeID");
 
    if (!expreienceeID.style.maxHeight) {
        expreienceeID.style.maxHeight = '130rem';
    } else {
        expreienceeID.style.maxHeight = null;
    }
       
}
 
function utbildning()  {
    const edjucationnID = document.getElementById("edjucationnID");
 
    if (!edjucationnID.style.maxHeight) {
        edjucationnID.style.maxHeight = '70rem';
    } else {
        edjucationnID.style.maxHeight = null;
    }
       
}
 
function utbildning()  {
    const edjucationnID = document.getElementById("edjucationnID");
 
    if (!edjucationnID.style.maxHeight) {
        edjucationnID.style.maxHeight = '30rem';
    } else {
        edjucationnID.style.maxHeight = null;
    }
       
}
 
function sprak()  {
    const laungeugeeID = document.getElementById("laungeugeeID");
 
    if (!laungeugeeID.style.maxHeight) {
        laungeugeeID.style.maxHeight = '10rem';
    } else {
        laungeugeeID.style.maxHeight = null;
    }
       
}