const initSlider = () => {
    const imageList = document.querySelector(".gallery-items");
    const slideButtons = document.querySelectorAll(".slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    slideButtons.forEach(buttons => {

        buttons.addEventListener("click", () => {
            const direction = buttons.id === "gallery-btn-prv" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth"});
        });

        const handleSlideButton = () => {
            slideButtons[0].classList = imageList.scrollLeft <= 0 ? "h3 slide-button gallery-button off" : "h3 slide-button gallery-button";
            slideButtons[1].classList = imageList.scrollLeft >= maxScrollLeft ? "h3 slide-button gallery-button off" : "h3 slide-button gallery-button";
        }

        imageList.addEventListener("scroll", () => {
            handleSlideButton();
        });
        
    });
}
window.addEventListener("load", initSlider);


const renderGallery = (items) => {
    const itemsInGallery = document.querySelector(".gallery-items");

    for(let i = 0; i < items.length; i++) {
        const newGalleryItem = document.createElement("div");
        newGalleryItem.className = "gallery-item";
        newGalleryItem.innerHTML = `
        <div class="gallery-item">
            <img src="${items[i].image}">
            <div class="gallery-item-com">
                <p class="gallery-item-name h4">${items[i].name}</p>
                <div>
                    <p class="gallery-item-price h4">${items[i].price}</p>
                    <p class="gallery-item-price-cut">${items[i].saleAmount}</p>
                </div>
            </div>
        </div> 
        `;
        itemsInGallery.appendChild(newGalleryItem);
    }

};
window.addEventListener("load", renderGallery(products));

