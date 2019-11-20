window.onload = loadPage
 
function loadPage() {
    updateAge()
}
 
function updateAge() {
    const now = new Date().getFullYear()
    const birth = new Date('1994-04-25').getFullYear()
 
    console.log(now - birth)
}
 
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
        expreienceeID.style.maxHeight = '33rem';
    } else {
        expreienceeID.style.maxHeight = null;
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