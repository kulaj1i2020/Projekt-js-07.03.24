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

const nazwa=document.querySelector("#nazwa");
const display1=document.querySelector("#display1");
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")

btn1.addEventListener("click", function(k){
    k.preventDefault();
    usersArr.forEach(element => {
            if(nazwa.value == element.userName){
                const elem= document.createElement("p");
                elem.innerHTML += `${element.userName} pochodzi z ${element.userCity}`;
                display1.appendChild(elem);
            }
    })
})

function displayUsers(usersArr){
    display1.innerHTML = " ";
    usersArr.forEach(element)=>{
        const elem = document.createElement("p");
        elem.innerHTML = `${element.userName} pochodzi z ${element.userCity}`;
        display1.appendChild(elem);

    }
}

displayUsers(usersArr)

btn2.addEventListener