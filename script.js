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