let ekleDOM = document.querySelector('#liveToastBtn')
let taskDOM = document.querySelector('#task')
let listDOM = document.querySelector('#list')

function newElement () {
    if(taskDOM.value){
        task = taskDOM.value
        let liDOM = document.createElement('li')

        liDOM.innerHTML = `${task} <span onclick="this.parentElement.style.display = 'none';" aria-hidden="true" class="close" >&times;</span> `
        listDOM.append(liDOM)
        taskDOM.value = ""
    }
    else {
        $(".error").toast("show");
    }
}




