let notesContainer=document.querySelector('.notes-container')
let createBtn=document.querySelector('.btn')

window.onload=()=>{
    if(localStorage.getItem("notes")){
        notesContainer.innerHTML=localStorage.getItem("notes")
    }
}
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML)
}


createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p")
    inputBox.className="input-box"
    inputBox.setAttribute("contenteditable","true")
    inputBox.setAttribute("placeholder","Type Something...")
    let img=document.createElement("img")
    img.src="delete-icon.png"
    let note=document.createElement("div")
    note.className="note"
    note.appendChild(inputBox)
    note.appendChild(img)
    notesContainer.appendChild(note)
})

notesContainer.addEventListener("click",(e)=>{
    if(e.target.tagName=="IMG"){
        e.target.parentElement.remove()
        updateStorage()
    }
    else if(e.target.tagName=="p"){
        notes=document.querySelectorAll('.input-box')
        notes.forEach(nt=>{
            nt.onkeyup=()=>{
                updateStorage()
            }
        })
    }
})
