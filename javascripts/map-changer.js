const torontoButton = document.querySelector('[data-toronto-button]');
const scarboroughButton = document.querySelector('[data-scarborough-button]');
const oshawaButton = document.querySelector('[data-oshawa-button]');
const ajaxButton = document.querySelector('[data-ajax-button]');

const torontoMap = document.querySelector('[data-toronto-map]');
const scarboroughMap = document.querySelector('[data-scarborough-map]');
const oshawaMap = document.querySelector('[data-oshawa-map]');
const ajaxMap = document.querySelector('[data-ajax-map]');

scarboroughMap.hidden = true;
ajaxMap.hidden = true;
oshawaMap.hidden = true;


torontoButton.addEventListener("click", () => {
  torontoMap.hidden = false;
  scarboroughMap.hidden = true;
  ajaxMap.hidden = true;
  oshawaMap.hidden = true;
})

scarboroughButton.addEventListener("click", () => {
  torontoMap.hidden = true;
  scarboroughMap.hidden = false;
  ajaxMap.hidden = true;
  oshawaMap.hidden = true;

})
ajaxButton.addEventListener("click", () => {
  torontoMap.hidden = true;
  scarboroughMap.hidden = true;
  ajaxMap.hidden = false;
  oshawaMap.hidden = true;

})
oshawaButton.addEventListener("click", () => {
  torontoMap.hidden = true;
  scarboroughMap.hidden = true;
  ajaxMap.hidden = true;
  oshawaMap.hidden = false;
})
