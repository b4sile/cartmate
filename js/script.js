const signUpBtn = document.querySelector('.header__sighup');
const signUpModal = document.querySelector('.modal');

signUpBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  signUpModal.classList.add('modal--visible');
  document.body.style.overflow = 'hidden';
});

document.body.addEventListener('click', (e) => {
  const path = e.path || (e.composedPath && e.composedPath());
  if (!path.includes(document.querySelector('.modal__content'))) {
    signUpModal.classList.remove('modal--visible');
    document.body.style.overflow = '';
  }
});
