imie=document.querySelector("#imie")
wiek=document.querySelector("#wiek")
miasto=document.querySelector("#miasto")
btn1=document.querySelector("#btn1")
const display1=document.querySelector(".display1")

btn1.addEventListener("click", function(evt){
    evt.preventDefault

    const dane={
        dane_imie: imie.value,
        dane_wiek: wiek.value,
        dane_miasto: miasto.value
        
    }
    const li = document.createElement(`li`)
    li.classList.add(`list-group-item`, `rounded`)
    li.innerHTML = `<strong> ${dane.dane_imie} </strong> lat <strong> ${dane.dane_wiek} </strong> z miasta <strong> ${dane.dane_miasto} </strong>`

    display1.append(li)
})