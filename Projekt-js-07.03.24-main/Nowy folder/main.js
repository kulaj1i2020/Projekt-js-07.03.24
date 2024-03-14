const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))

let usersArr = [
	{
		userID: '36b8f84d-df4e-ad32-b662-bcde71a8764f',
		userName: 'Jasia',
		userCity: 'Gliwice',
		userAge: 16,	
	},
	{
		userID: '36b8f84d-df4e-4d49-b662-bcde71a87623',
		userName: 'Michał',
		userCity: 'Zabrze',
		userAge: 19,
	},
	{
		userID: '36b8f84d-df4e-s3ae-b662-bcde71a876aa',
		userName: 'Olga',
		userCity: 'Knurów',
		userAge: 23,
	},
	{
		userID: '36b8f84d-df4e-a43w-b662-bcde71a876b3',
		userName: 'Marek',
		userCity: 'Gliwice',
		userAge: 17,
	},
	{
		userID: '36b8f84d-df4e-zfdr-b662-bcde71a876a2',
		userName: 'Józefa',
		userCity: 'Pyskowice',
		userAge: 42,
	},
	{
		userID: '36b8f84d-df4e-adz3-b662-bcde71a87622',
		userName: 'Janek',
		userCity: 'Gliwice',
		userAge: 30,
	},
	{
		userID: '36b8f84d-df4e-bfr3-b662-bcde71a87635',
		userName: 'Hania',
		userCity: 'Toszek',
		userAge: 12,
	},
	{
		userID: '36b8f84d-df4e-n2er-b662-bcde71a87644',
		userName: 'Benek',
		userCity: 'Warszawa',
		userAge: 45,
	},
	{
		userID: '36b8f84d-df4e-ke4q-b662-bcde71a876fa',
		userName: 'Gosia',
		userCity: 'Gliwice',
		userAge: 30,
	},
];





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
    li.innerHTML = `<strong> ${dane.dane_imie} </strong> lat <strong> ${dane.dane_wiek} </strong> z miasta <strong> ${dane.dane_miasto} </strong> <button type="button" class="btn btn-outline-danger">X</button>`;

    display1.append(li)
})

function displayUsers(usersArr){
    display1.innerHTML = " ";
    usersArr.forEach((element)=>{
        const li = document.createElement(`li`)
    li.classList.add(`list-group-item`, `rounded`)
    li.innerHTML = `<strong> ${element.userName} </strong> lat <strong> ${element.userAge} </strong> z miasta <strong> ${element.userCity} </strong> <button type="button" class="btn btn-outline-danger">X</button>`;
        display1.append(li)

    })
}

displayUsers(usersArr) 


