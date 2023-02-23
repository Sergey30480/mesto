let popup = document.querySelector('.popup');
let buttonProfileRectangle = document.querySelector('.profile__button-rectangle');
let closeButton = document.querySelector('.popup__button-close');
let formElement = document.querySelector('.popup__input-container');
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#job');
let profilName = document.querySelector('.profile__name');
let profilText = document.querySelector('.profile__text');

function openPopup() {
  nameInput.value = profilName.textContent;
  jobInput.value = profilText.textContent;
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function handleFormSubmit (evt) {
    evt.preventDefault();
profilName.textContent = nameInput.value;
profilText.textContent = jobInput.value;
closePopup();
}

buttonProfileRectangle.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
formElement.addEventListener('submit', handleFormSubmit);
