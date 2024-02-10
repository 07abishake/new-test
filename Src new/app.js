const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translate(${-100 * index}vw)`; 
    });
});
const buyButton = document.querySelector(".buybutton");

buyButton.addEventListener("click", () => {
    // Add your code here to handle the buy button click
    alert("Thank you for your purchase!");
    // You can also perform other actions here, like navigating to a checkout page, etc.
});
