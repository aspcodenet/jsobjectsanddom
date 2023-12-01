const kategori = document.getElementById("kategori")
const sak = document.getElementById("sak")
const wish = document.getElementById("wish")
const lightrope = document.getElementById("lightrope")
const hunden  = document.getElementById("hunden")

const Product = function(name,category){
    this.name = name
    this.category = category
}

const products=[
    new Product("Javascript for Dummies", "Böcker"),
    new Product("Javascript for Christmas Lovers", "Böcker"),
    new Product("Strumpor", "Kläder"),
    new Product("Skor", "Kläder"),
    new Product("Mössa", "Kläder"),
    new Product("Playstation 5", "Leksaker"),
    new Product("Hockeyspel Stiga", "Leksaker"),
];

// skulle kunna loopa igenom och skapa en ny array med UNIKA kategories
//men mer modernt 
const uniqueCategories = [...new Set(products.map(function(item){return item.category}))];
uniqueCategories.forEach(function(catNamn){
    kategori.add(new Option(catNamn))
})


const onFocusWish =  function(){
    lightrope.style.display = "block";
}
const onBlurWish =  function(){
    lightrope.style.display = "none";
}

const onChangeWish = function(){
    alert("Hej")
}


const onInputWish = function(){
    const inmatningen = wish.value.toLowerCase()    
    if(inmatningen.includes("hund")){
        hunden.style.display="block";
    } else{
        hunden.style.display="none";
    }
}

const onKategoriChange = function(){
    sak.innerHTML = "" // rensa alla options


    let matchingProducts = products.filter(c=>c.category === kategori.value)
    matchingProducts.forEach(item=>{
        let opt = document.createElement('option');
        opt.innerText = item.name;
        sak.appendChild(opt);    
    });

    // let opt = document.createElement('option');
    // opt.value = "Defence";
    // opt.innerText = "Defence2";
    // sak.appendChild(opt);    
}

kategori.addEventListener("change",onKategoriChange)

wish.addEventListener("focus",onFocusWish)
wish.addEventListener("blur",onBlurWish)
//wish.addEventListener("change",onChangeWish)
wish.addEventListener("input",onInputWish)

kategori.dispatchEvent(new Event('change'))
//onKategoriChange() - SAMMA FUNKAR LIKA BRA!!

/*
-addEventListener
			vad finns? "click"
		
`			click - when the element clicked
			dbclick - when the element double clicked
			mouseout -when the mouse pointer out from the element
			change -when value change on input field
            input - när en input blivit ändrad - vid "keypress"
			blur -when the element is not focused
            focus - 
			keydown - when a key is down
			keyup - when a key is up
			keypress - when we press any key


*/



// const allPlayersTBody = document.querySelector("#allPlayers tbody")
// const searchPlayer = document.getElementById("searchPlayer")
// const position = document.getElementById("position")

// function Player(id, name,jersey,team, position){
//     this.id = id
//     this.name = name
//     this.jersey = jersey
//     this.team = team
//     this.position = position
//     this.visible = true
// }

// // I VERKLIGA LIVET - Vi "fetchar" från API
// const players = [
//     new Player(1,"Peter Forsberg",21,"Colorado", "Forward"),
//     new Player(2,"Mats Sundin",13,"Toronto", "Forward"),
//     new Player(3,"Niklas Lidström",5,"Detroit","Defence"),
//     new Player(4,"Mikko Rantanen",96,"Colorado", "Forward"),
//     new Player(5,"Jack Johnson",3,"Colorado","Defence"),
// ]

// // "change" -> triggas när man LÄMNAR rutan
// // keypress, keyup
// searchPlayer.addEventListener("input", function() {
//     const searchFor = searchPlayer.value.toLowerCase() 
//     for(let i = 0; i < players.length;i++){ // TODO add a matches function
//         if(players[i].name.toLowerCase().includes(searchFor) || players[i].position.toLowerCase().includes(searchFor) || players[i].team.toLowerCase().includes(searchFor) ){
//             players[i].visible = true                            
//         }else{
//             players[i].visible = false 
//         }
//     }
//     updateTable()

// });


// const updateTable = function(){
//     // while(allPlayersTBody.firstChild)
//     //     allPlayersTBody.firstChild.remove()
//     allPlayersTBody.innerHTML = ""

//     // först ta bort alla children
//     for(let i = 0; i < players.length;i++) { // hrmmm you do foreach if you'd like, much nicer! 
//         if(players[i].visible == false){
//             continue
//         }
//         let tr = document.createElement("tr")

//         let th = document.createElement("th")
//         th.scope = "row"
//         th.textContent = players[i].name
//         tr.appendChild(th)

//         let td = document.createElement("td")
//         td.textContent = players[i].jersey
//         tr.appendChild(td)

//         td = document.createElement("td")
//         td.textContent = players[i].position
//         tr.appendChild(td)

//         td = document.createElement("td")
//         td.textContent = players[i].team
//         tr.appendChild(td)





//         allPlayersTBody.appendChild(tr)
//     }

//     // innerHTML och backticks `
//     // Problem - aldrig bra att bygga strängar som innehåller/kan innehålla html
//     //    injection
//     // for(let i = 0; i < players.length;i++) { // hrmmm you do foreach if you'd like, much nicer! 
//     //                                         // I will show you in two weeks
//     //                                         //  or for p of players     
//     //     let trText = `<tr><th scope="row">${players[i].name}</th><td>${players[i].jersey}</td><td>${players[i].position}</td><td>${players[i].team}</td></tr>`
//     //     allPlayersTBody.innerHTML += trText
//     // }
//     // createElement
// }


// const fillOptions = function(){
//     let opt = document.createElement('option');
//     opt.value = "Defence";
//     opt.innerText = "Defence2";
//     position.appendChild(opt);
    
//     opt = document.createElement('option');
//     opt.value = "Forward";
//     opt.innerText = "Forward";
//     position.appendChild(opt);

//     opt = document.createElement('option');
//     opt.value = "Goalie";
//     opt.innerText = "Goalie";
//     position.appendChild(opt);

// }

// fillOptions()
// updateTable()





// // // Status???

// // // 1 OBJECT ???
// // // a) unnamed class
// // // let player = {
// // //     name: "Stefan",
// // //     age:51
// // // };

// // // let player2 = {
// // //     name: "Oliver",
// // //     age:15
// // // };

// // // player.jersey = 21

// // // console.log(player)
// // // console.log(player2)

// // // let allPlayers = [player,player2,12,"2"]
// // // console.log(allPlayers)

// // // b) "new" function - Constructor function 
// // function Player(name,age){
// //     this.name = name
// //     this.age = age
// //     this.jersey = 0
// // }



// // player = new Player("Stefan",51)
// // player.jersey = 21
// // console.log(player.name)

// // player2 = new Player("Oliver",51)
// // player2.jersey = 21

// // //console.log(player)


// // document.getElementById("searchPlayer")

// // // c) class and constructor etc
// // const lista =  document.getElementsByClassName("container")
// // const lista2 =  document.getElementsByTagName("div")

// // const l3 = document.querySelectorAll("#preview table tr")

// // //testPreview.innerText = "Test"
// // testPreview.innerHTML = "Test<br />Test2"

// // //some basic selectors, VISA Dagens övningar
// // const searchPlayer =  document.getElementById("searchPlayer")
// // searchPlayer.value = "whatever"
// // searchPlayer.style.fontSize="40px"
// // searchPlayer.style.backgroundColor = "#aaa"
// // //searchPlayer.classList.add("visible")
// // //searchPlayer.classList.remove("visible")
// // console.log(searchPlayer)
// //                     // GetElementById() ==================================================
// //                     // GetElementByClassName() ===========================================
// //                     // GetElementByTagName() =============================================
// //                     // QuerySelector() - Väljer den FÖRSTA element som matchar  ==========



// // // sätta lite styles etc!                    

// // // array till table rows
// // // på två olika sätt såklart

// // // filter - när man skriver i Search så ska raderna automatiskt filtreras
// // //    tjuvstart "events" - mer imorgon

// // // (i morgon)
// // // vid klick på en rad ska vi visa ett formulär (poppa upp en modal dialog) ( = edit )

// // // om vi hinner idag?
// // // skapa options -> select

// // //egen tid = komma igång med övningarna