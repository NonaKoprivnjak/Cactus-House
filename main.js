const readMore = document.querySelector(".read-more");
const ccContent = document.querySelector(".cc-container");
console.log(readMore);

// window.alert("Would you like to sign up for our newsletter?");

readMore?.addEventListener('click', () => {
   const isExpanded = ccContent?.classList.toggle('expanded');
   readMore.innerHTML = isExpanded ? 'Read Less' : 'Read More';
})

// Burger Logic

const burgerBtn = document.querySelector('.burger-btn')
const navMemu = document.querySelector('nav')
const body = document.body;
const overlay = document.querySelector('.overlay');
const closeBurgerBtn = document.querySelector('.close-burger');
burgerBtn.addEventListener('click', () => {
   navMemu.classList.add('js-nav')
   overlay.classList.add('js-overlay')
   // body.style.overflow = 'hidden'
})

function CloseBurger () {
   navMemu.classList.remove('js-nav')
   overlay.classList.remove('js-overlay')
   body.style.overflow = 'auto'
}
overlay.addEventListener('click', CloseBurger )
closeBurgerBtn.addEventListener('click', CloseBurger )
   

// Filters Logic
function FiltersLogic () {
   // Number of Items per filter to show
   const itemsToShow = 3;
   // Number of Filters to show
   const filtersToShow = 4;
   const filterBox = document.querySelectorAll('.filter-box');
   filterBox.forEach(filter => filter.querySelector('.filters-title').addEventListener('click', e => {
      filter.querySelector('.filters-title').classList.toggle('js-filters-title');
      filter.querySelector('.filters-list').classList.toggle('js-filters-list');
   }))

   function HideAditionalFilters () {
      for (let i = filtersToShow; i < filterBox.length; i++) {
      filterBox[i].classList.add('js-none');
      }
   }

   function HideAditionalItems (filter) {
let items = filter.querySelectorAll('.filters-item');
if(items.length <= itemsToShow) {
   let moreItems = filter.querySelector('.all-FI');
   moreItems?.classList.add('js-none');

}
 for (let i = itemsToShow; i < items.length; i++) {
   items[i].classList.add('js-none');
 }
   }

   HideAditionalFilters();
   for(let i = 0; i < filterBox.length; i++) {
      HideAditionalItems(filterBox[i]);
   }
}
FiltersLogic();