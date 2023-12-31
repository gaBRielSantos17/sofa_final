const icon360 = document.querySelector('#icon-360');
const iconClosed = document.querySelector('#icon-closed');

function handleClickActive360() {
  let productImage = document.querySelector('#image');

  if (productImage.src === productImage.src) {
    productImage.setAttribute('src', './img/Sofa.gif');
    icon360.classList.add('hide');
    iconClosed.classList.remove('hide');
  }
}

function handleClickDeactive360() {
  let productImage = document.querySelector('#image');

  if (productImage.src === productImage.src) {
    productImage.setAttribute('src', './img/image-sofa (1).png');
    iconClosed.classList.add('hide');
    icon360.classList.remove('hide');
  }
}

icon360.addEventListener('click', () => {
  handleClickActive360();
});

iconClosed.addEventListener('click', () => {
  handleClickDeactive360();
});