let inputDOM = document.querySelector('.form-control')

let addButtonDOM = document.querySelector('#add-button')
addButtonDOM.addEventListener('click', clickHandler)

// Input with Enter
inputDOM.addEventListener("keypress",(event) =>{
  if(event.key === "Enter"){
    event.preventDefault();
    addButtonDOM.click();
  }
})

function clickHandler(event){
  event.preventDefault();
  if(inputDOM.value.trim() == ''){
    let alertDOM = document.querySelector('.alert-div')
    alertDOM.innerHTML = `
      <div class="alert ml-4 m-0 p-0">
      <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;
      </span>
      Hatalı giriş yaptınız!</div>`
  }else{
    addItem(inputDOM.value);
    inputDOM.value = ""
  }
}

function addItem(item){
  let ulDOM = document.querySelector('#list-group');
  let listItem = document.createElement('li')
  listItem.id = "list-item"
  listItem.classList.add(
    'list-group-item', 'd-flex','p-1'
  )
  listItem.innerHTML = `
    <span class="ml-2" id="thick">
      <svg class="mb-1" id="i-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="15" height="15" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M2 20 L12 28 30 4"/>
      </svg>
    </span>
    <p class="ml-3">${item}</p>
    <span class="badge ml-auto" style="float:right; " id="span">
      <svg class="mt-1" id="i-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="15" height="15" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="svg">
        <path d="M2 30 L30 2 M30 30 L2 2" />
      </svg>
    </span>`
  ulDOM.append(listItem)

  listItem.addEventListener('click',function strikeOut(){
    if(listItem.classList.contains('strike')){
      listItem.classList.remove('strike')
    }else{
      listItem.classList.add('strike')
    }
  })
 
  let span = listItem.childNodes[5]
  console.log(listItem.childNodes)
  console.log(span)
  span.addEventListener('click',(event) => {
    listItem.remove();
  })
}