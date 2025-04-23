let menuctionButton = document.querySelector(".menu-iconIMG")
let menuUL = document.querySelector("#contact-links-header")

menuctionButton.addEventListener("click", ()=>{

    if(menuctionButton.getAttribute("src") === "assets/icons/barra-de-menu.png" ){
        menuctionButton.setAttribute("src", "assets/icons/marca-x.png")
        menuUL.style.display = "flex"
    }else {
        menuctionButton.setAttribute("src", "assets/icons/barra-de-menu.png")
        menuUL.style.display = "none"
    }

})