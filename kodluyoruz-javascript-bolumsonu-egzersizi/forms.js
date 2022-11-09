let formDOM = document.querySelector("#form")
let alertDOM = document.querySelector("#alert")

formDOM.addEventListener('submit', formHandler)

function formHandler(event) {
    event.preventDefault();

    const NAME = document.querySelector("#name")
    const SURNAME = document.querySelector("#surname")

    if(NAME.value && SURNAME.value){
        addItem(NAME.value,SURNAME.value)
        NAME.value = ""
        SURNAME.value = ""
    }else{
        alertDOM.innerHTML = alertFunction("Invalid","primary")
    }
}

const addItem = (name, surname) => {
    const userListDOM = document.querySelector("#userList")

    let liDOM = document.createElement("li")
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
    )
    liDOM.innerHTML = `${name} ${surname}
    <span class="badge badge-primary badge-pill">${chk}</span>`

    userListDOM.append(liDOM)
}

const alertFunction = (msg, className = "warning") => 
    `<div class="alert alert-${className}" role="alert">${msg}</div>`


var chk = ""
let checkboxDom = document.querySelector('#checkbox')

checkboxDom.addEventListener('click', function check(){
    if(checkboxDom.checked){
        chk = "Yes"
    }else{
        chk = "No"
    }
})