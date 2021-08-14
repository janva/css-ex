document.addEventListener('DOMContentLoaded', (params) => {
  //Init page things goes here
});

let pageHeadingElement =
  document.getElementsByClassName('page-heading')[0].firstElementChild;
let menuElement = document.querySelector('div.menu > ul');

menuElement.addEventListener('click', (event) => {
  newPageHeader = event.target.dataset.pageheader;
  pageHeadingElement.textContent = newPageHeader;
});

function swapToPage(page) {}
