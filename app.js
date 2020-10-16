const grayscale = document.querySelector('#grayscale');
const contrast = document.querySelector('#contrast');
const brightness = document.querySelector('#brightness');
const sepia = document.querySelector('#sepia');
const saturate = document.querySelector('#saturate');

const img = document.querySelector('#image');
const reset = document.querySelector('#reset');
const imgUrl = document.querySelector('#img-url');

const defaults = {
  grayscale: 0,
  contrast: 100,
  brightness: 100,
  sepia: 0,
  saturate: 100,
};
grayscale.addEventListener('input', updateFilterValue);
contrast.addEventListener('input', updateFilterValue);
brightness.addEventListener('input', updateFilterValue);
sepia.addEventListener('input', updateFilterValue);
saturate.addEventListener('input', updateFilterValue);

reset.addEventListener('click', resetFilterValue);
imgUrl.addEventListener('change', updateImgUrl);

function resetFilterValue() {
  grayscale.value = defaults.grayscale;
  contrast.value = defaults.contrast;
  brightness.value = defaults.brightness;
  sepia.value = defaults.sepia;
  saturate.value = defaults.saturate;
  setTimeout(() => {
    reset.disabled = true;
    //console.log('btn dasabled');
  }, 3000);
}

function updateFilterValue() {
  reset.disabled = false;
  img.style.filter = `
    grayscale(${grayscale.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    saturate(${saturate.value}%)
  `;
}
function updateImgUrl() {
  //console.log('image changed');
  const imageUrl = imgUrl.value;
  img.setAttribute('src', imageUrl);
}
