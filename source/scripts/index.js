const slider = document.querySelector('#slider');
const minElement = document.getElementById('min-price');
const maxElement = document.getElementById('max-price');
const toggleButton = document.querySelector('.toggle__button');
const btn = document.querySelector('.toggle__button');
const menu = document.querySelector('#toggle-menu');

const formatForSlider = {
  from: function (formattedValue) {
    return Number(formattedValue);
  },
  to: function (numericValue) {
    return Math.round(numericValue);
  },
};

noUiSlider.create(slider, {
  start: [0, 900],
  connect: true,
  range: {
    min: 0,
    max: 1000,
  },
  format: formatForSlider,
});

const formatValues = [minElement, maxElement];

slider.noUiSlider.on('update', (values, handle) => {
  formatValues[handle].value = values[handle];
});

toggleButton.addEventListener('click', () => {
  btn.classList.toggle('toggle--open');
  menu.classList.toggle('navigation-list--closed');
});
