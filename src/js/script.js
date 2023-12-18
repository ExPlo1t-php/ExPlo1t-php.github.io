const words = ["Hello, World!"];
let i = 0;
let j = 0;
let currentWord = "";
// let isDeleting = false;

function type() {
  currentWord = words[i];
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    setTimeout(type, 100);
}

type();