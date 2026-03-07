let userscore=0
let computerscore=0


let choices=document.querySelectorAll(".choice")
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let choiceid =choice.getAttribute("id")
        console.log("clicked",choiceid)
    })
})