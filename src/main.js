document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('[data-tab-button]');
  const questions = document.querySelectorAll('[data-faq-question]')
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (btn) {
      const tabTarget = btn.target.dataset.tabButton; 
      const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);

      hideAllTabs();
      tab.classList.add('shows__list--is-active');
      removeActiveButton();
      btn.target.classList.add('shows__tabs__button--is-active');
    });
  }

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', toggleAnswer);
  }
});

function removeActiveButton() {
  const buttons = document.querySelectorAll('[data-tab-button');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('shows__tabs__button--is-active');
  }
}

function hideAllTabs() {
  const tabContainer = document.querySelectorAll('[data-tab-id');

  for (let i = 0; i < tabContainer.length; i++) {
    tabContainer[i].classList.remove('shows__list--is-active')
  }
}

function toggleAnswer(element) {
  const thisClass = 'faq__questions__item--is-open';
  const parentElement = element.target.parentNode;

  parentElement.classList.toggle(thisClass);
}