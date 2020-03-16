const menu = document.getElementById("menu");
const leftPhone = document.getElementById("leftPhone");
const horizontalPhone = document.querySelector("#horizontal-phone")
const portfollio = document.querySelector('.portfollio_work-samples');
const portfollioNavigation = document.querySelector('#portfollio');
const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');
const firstFigure = document.querySelector('#firstFigure');
const secondFigure = document.querySelector('#secondFigure');
const contactFormButton = document.querySelector('#contactFormButton');
const modalSection = document.querySelector('#modalSection');
const modalWindowButton = document.querySelector('#modalWindowButton');
const contactName = document.querySelector('#contactName');
const contactDescription = getElement('#contactDescription');
const contactFormInputs = document.querySelectorAll('.contact_form-input');


function getElement (selector) {
    return document.querySelector(selector);
}




menu.addEventListener('click', (event) => {
    menu.querySelectorAll('a').forEach(ev => ev.classList.remove('navigation_list-active'));
    event.target.classList.add('navigation_list-active'); 
})

leftArrow.addEventListener('click', (e) => {
    firstFigure.classList.toggle('hidden');
    secondFigure.classList.toggle('hidden');
});

rightArrow.addEventListener('click', (e) => {
    firstFigure.classList.toggle('hidden');
    secondFigure.classList.toggle('hidden');
});

horizontalPhone.addEventListener('click', (e) => {
    applyNextImg(e.target);
});

leftPhone.addEventListener('click', (e) => {
    applyNextImg(e.target);
});

portfollioNavigation.addEventListener('click' , (e) => {
    portfollioNavigation.querySelectorAll('li');
    let portfollioImages = portfollio.querySelectorAll('li');
    let portfolioImagesArray = [...portfollioImages];
    let cutPortfolioImage = portfolioImagesArray.shift();
    portfolioImagesArray.push(cutPortfolioImage);
    portfollioImages.forEach((x) => {
        x.remove();
    })
    for (let i = 0; i <= portfolioImagesArray.length; i++ ) {
        portfollio.appendChild(portfolioImagesArray[i]);
    }
})

portfollio.addEventListener('click' , (n) => {
    portfollio.querySelectorAll('li img').forEach((x) => {
        x.classList.remove('portfollio_click');
    });
    n.target.classList.add('portfollio_click');
});

function applyNextImg(imgNode) {
    const imagePathArr = imgNode.src.split('/');
    const previousImage = imagePathArr[imagePathArr.length - 1];

    imagePathArr[imagePathArr.length - 1] = imgNode.dataset.nextImg;
    imgNode.dataset.nextImg = previousImage;
    imgNode.src = imagePathArr.join('/'); 
}



modalWindowButton.addEventListener('click', (e) => {
    modalSection.classList.add('hidden');
})

const addTextModal = (subj, comment) => {
    modalSubject.innerText = ''
    modalMessage.innerText = ''
    modalSubject.innerText = subj ? `Тема: ${subj}` : `Без темы`;
    modalMessage.innerText = comment ? `Описание: ${comment}` :  `Без описания`;
}

contactFormButton.addEventListener('click' , (e) => {
    let subject = contactName.value;
    let message = contactDescription.value;
    let requiredValue = [...document.querySelectorAll("[required]")];


    if (requiredValue.every(value => value.checkValidity())) {
        modalSection.classList.remove('hidden');
        e.preventDefault();
        addTextModal(subject, message);
        contactFormInputs.forEach((e) => e.value = '');
    }
})