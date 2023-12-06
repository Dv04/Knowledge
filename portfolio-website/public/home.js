// script.js
document.addEventListener('DOMContentLoaded', () => {
    const homeSection = document.querySelector('#home h1');
    homeSection.textContent = '';
    const text = "Welcome to Dev Sanghvi's Portfolio";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            homeSection.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
});
