

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