const readMore = document.querySelector(".read-more");
const ccContent = document.querySelector(".cc-container");
console.log(readMore);

readMore?.addEventListener('click', () => {
 ccContent?.classList.toggle('expanded');
 if(ccContent.classList.contains("expanded")){
    readMore.innerHTML = 'Read Less';
 } else {
    readMore.innerHTML = 'Read More';
 }
})
// window.alert("Would you like to sign up for our newsletter?");