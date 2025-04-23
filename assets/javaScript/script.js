let menuctionButton = document.querySelector(".menu-icon")
let menuUL = document.querySelector("#contact-links-header")

menuctionButton.addEventListener("click", ()=>{

    if(menuUL.getAttribute("id") === "contact-links-header"){
        menuUL.setAttribute("id", "contact-links-header-on")
    }

})