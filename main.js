const readMore = document.querySelector(".read-more");
const ccContent = document.querySelector(".cc-container");


// window.alert("Would you like to sign up for our newsletter?");

readMore?.addEventListener('click', () => {
   const isExpanded = ccContent?.classList.toggle('expanded');
   readMore.innerHTML = isExpanded ? 'Read Less' : 'Read More';
})

// Burger Logic

const burgerBtn = document.querySelector('.burger-btn');
const navMenu = document.querySelector('nav');
const body = document.body;
const overlay = document.querySelector('.overlay');
const closeBurgerBtn = document.querySelector('.close-burger');

burgerBtn.addEventListener('click', () => {
   navMenu.classList.add('js-nav')
   overlay.classList.add('js-overlay')
   body.style.overflow = 'hidden'
})

function CloseBurger () {
   navMenu.classList.remove('js-nav')
   overlay.classList.remove('js-overlay')
   body.style.overflow = 'auto'
}
overlay.addEventListener('click', CloseBurger )
closeBurgerBtn.addEventListener('click', CloseBurger )
   

// Filters Logic
function FiltersLogic () {
   const allFilters = document.querySelector('.view-all-filters');
   const allFiltersTitle = document.querySelector('.all-filters');
   const filtersList = document.querySelector('.filters-container');
   const initialFilters = filtersList.querySelectorAll('.filter-box');
   // Number of Items per filter to show
   const itemsToShow = 3;
   // Number of Filters to show
   const filtersToShow = 4;
   const filterBox = document.querySelectorAll('.filter-box');
   const filterTitle = document.querySelectorAll('.filters-title');

   // Close/Open Filter Box
   
   // filterBox.forEach(filter => filter.querySelector('.filters-title').addEventListener('click', e => {
   //    filter.querySelector('.filters-title').classList.toggle('js-filters-title');
   //    filter.querySelector('.filters-list').classList.toggle('js-filters-list');
   // }))
   // filterBox.forEach(filter => {
   //    filter.querySelector('.filters-title').addEventListener('click', () => {
   //          filterBox.forEach(f => f.classList.remove('js-filter-box'));
   //          filter.classList.add('js-filter-box')

   //    })
   // })

   filterTitle && filterTitle.forEach((el) => {
      
      el.addEventListener('click', (e) => {
         
         let filterItem = e.target.parentElement;
         let filterContainer = e.target.parentElement.parentElement;
         let filterList = filterContainer.querySelector('.filters-list');

         filterBox.forEach((el) => {
            if (el == filterContainer) {
               filterItem.classList.toggle('js-filters-title');
               filterList.classList.toggle('js-filters-list');
            } 
             
         });
      });

      if (window.innerWidth < 1024) {
         filterBox.forEach((el) => {
            el.classList.remove('js-filter-box');
         });
      }
   });

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

   // View More/Less Filters
   if (initialFilters >= initialFilters.length) {
      allFilters.classList.add('js-none')
   }

   allFilters && allFilters.addEventListener('click', () => {
     
      if(allFiltersTitle.innerHTML == "View All Filters"){

         for( let i = filtersToShow; i < initialFilters.length; i++){
            initialFilters[i].classList.toggle('js-none')
            
         }
         allFiltersTitle.innerHTML = "View Less Filters"
      } else {
         HideAditionalFilters();

         allFiltersTitle.innerHTML = "View All Filters"
      }
   })
// Show More Filter Items
let moreItems = document.querySelectorAll('.view-all-FI');

for (let i = 0; i < moreItems.length; i++) {
   moreItems[i].addEventListener('click', (e) => {
      
      const items = moreItems[i].parentNode.querySelectorAll('.filters-item');
      if (items.length > itemsToShow && !items[itemsToShow].classList.contains('js-none')) {
         HideAditionalItems(moreItems[i].parentNode);
         moreItems[i].querySelector('.all-FI').innerHTML = 'View More';
      } else {
         let options = moreItems[i].parentNode.querySelectorAll('.filters-item');
         for (let i = 0; i < options.length; i++) {
            options[i].classList.remove('js-none');
         }

         moreItems[i].querySelector('.all-FI').innerHTML = "View Less";
      }
   })
}




}
FiltersLogic();

// Scroll back to Top

const scrollButton = document.getElementById("scrollButton");
window.addEventListener("scroll", (e) => {
  let scroll = this.scrollY;

    if (scroll > 104) {
      scrollButton.classList.add('js-scroll-btn');
    } else {
      scrollButton.classList.remove('js-scroll-btn');
    }
  })

  // Back to top button
  scrollButton.onclick = () => window.scrollTo({
    top: 0,
    behavior: "smooth"
  });