const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active');
});

console.log('This site is for educational purposes only. \n All rights belong to their respective owners. I do not own any of this content.')