// this will only get the value where input type = checkbox
const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// for light or dark images
function imageMode(color) {
    image1.src = `img/undraw_conceptual_idea_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_proud_coder_${color}.svg`;
}

//Dark Mode Style
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    console.log(toggleIcon);

    toggleIcon.children[0].textContent = 'Dark Mode';
    // instead of adding and removing the class use replace function
    // toggleIcon.children[1].classList.remove('fa-sun');
    // toggleIcon.children[1].classList.add('fa-moon');
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');

    // for images - instead of this repeating code we can seperate this 
    // image1.src = 'img/undraw_conceptual_idea_dark.svg';
    // image2.src = 'img/undraw_feeling_proud_dark.svg';
    // image3.src = 'img/undraw_proud_coder_dark.svg';
    imageMode('dark')
}

function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';

    toggleIcon.children[0].textContent = 'Light Mode';
    // instead of add and remove use replace function to do this
    // toggleIcon.children[1].classList.remove('fa-moon');
    // toggleIcon.children[1].classList.add('fa-sun');
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')

    imageMode('light');
    // image1.src = 'img/undraw_conceptual_idea_light.svg';
    // image2.src = 'img/undraw_feeling_proud_light.svg';
    // image3.src = 'img/undraw_proud_coder_light.svg';
}

//  switch theme dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}

toggleSwitch.addEventListener('change', switchTheme);
