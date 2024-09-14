let goToTopButton = document.querySelector("#goToTop")

goToTopButton.addEventListener("click",(e)=>{
     e.preventDefault();
     window.scrollTo({top: 0, behavior: 'smooth'});
});