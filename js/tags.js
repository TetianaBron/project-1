const tagsContainer = document.querySelector('.js-tags');
tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log(evt.target);
  evt.target.classList.add('tags__btn--active');
}
