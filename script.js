

const dropDown= () => {
 
    const dropContent = document.querySelectorAll(".drop-container .drop-item")
    const sideBarNav = document.querySelectorAll(".drop-container .side-bar-item")
    const downIcon = document.querySelectorAll(".down-icon")
    const rightIcon = document.querySelectorAll(".right-icon")

   
    dropContent.forEach((content, index) => {

    const eachSideBar= sideBarNav[index]
    const eachDownIcon = downIcon[index]
    const eachRightIcon = rightIcon[index]
    

    eachSideBar.addEventListener('click' , (e) => {
        e.preventDefault()
        content.classList.toggle("show-drop-item")
        eachRightIcon.classList.toggle("hideIcon")
        eachDownIcon.classList.toggle("showIcon")
       
    })

        console.log(content, eachSideBar)
    })
}

dropDown()


 if(location.pathname === "/packagesToConsolidated.html"){
    const modal= document.querySelector(".searchShipmentModal")
    const searchBtn = document.querySelector(".consolidation-search-shipment")
    const removeModal = document.querySelector(".removeModal")

    searchBtn.addEventListener("click" , (e) => {
        e.preventDefault()

        modal.style.display="block"
    })

    removeModal.addEventListener("click" , (e) => {
        e.preventDefault()

        modal.style.display="none"
    })

    const consolidateModal = document.querySelector(".consolidateModal")
    const ok = document.querySelector(".ok")
    const consolidatBtn = document.querySelector(".consolidateBtn")

    consolidatBtn.addEventListener("click" , (e) => {
        e.preventDefault()

        consolidateModal.style.display="block";
    })

    ok.addEventListener("click" , (e) => {
        e.preventDefault()

        consolidateModal.style.display="none";
    })
 }



if (location.pathname==="/packageLists.html" || location.pathname ==="/listOfPreAlert.html"){

    const optionBtn = document.querySelectorAll(".option")
    const dropOption = document.querySelectorAll(".dropOption")


    optionBtn.forEach((button, index) => {

        const eachOption = dropOption[index]

        button.addEventListener("click" , (e) => {
            e.preventDefault()
            eachOption.classList.toggle("showOption")
            button.classList.toggle("toggleBackground")
        })
    })
   
}
