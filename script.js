const allPlayersTBody = document.querySelector("#allPlayers tbody")

function Player(id, name,jersey,team, position){
    this.id = id
    this.name = name
    this.jersey = jersey
    this.team = team
    this.position = position
    this.visible = true
}

// I VERKLIGA LIVET - Vi "fetchar" från API
const players = [
    new Player(1,"Peter Forsberg",21,"Colorado", "Forward"),
    new Player(2,"Mats Sundin",13,"Toronto", "Forward"),
    new Player(3,"Niklas Lidström",5,"Detroit","Defence"),
    new Player(4,"Mikko Rantanen",96,"Colorado", "Forward"),
    new Player(5,"Jack Johnson",3,"Colorado","Defence"),
]

const fillTable = function(){
    // innerHTML och backticks `
    for(let i = 0; i < players.length;i++) { // hrmmm you do foreach if you'd like, much nicer! 
                                            // I will show you in two weeks
                                            //  or for p of players     
        let trText = `<tr><th scope="row">${players[i].name}</th><td>${players[i].jersey}</td><td>${players[i].position}</td><td>${players[i].team}</td></tr>`
        allPlayersTBody.innerHTML += trText
    }
    // createElement
}

fillTable()





// // Status???

// // 1 OBJECT ???
// // a) unnamed class
// // let player = {
// //     name: "Stefan",
// //     age:51
// // };

// // let player2 = {
// //     name: "Oliver",
// //     age:15
// // };

// // player.jersey = 21

// // console.log(player)
// // console.log(player2)

// // let allPlayers = [player,player2,12,"2"]
// // console.log(allPlayers)

// // b) "new" function - Constructor function 
// function Player(name,age){
//     this.name = name
//     this.age = age
//     this.jersey = 0
// }



// player = new Player("Stefan",51)
// player.jersey = 21
// console.log(player.name)

// player2 = new Player("Oliver",51)
// player2.jersey = 21

// //console.log(player)


// document.getElementById("searchPlayer")

// // c) class and constructor etc
// const lista =  document.getElementsByClassName("container")
// const lista2 =  document.getElementsByTagName("div")

// const l3 = document.querySelectorAll("#preview table tr")

// //testPreview.innerText = "Test"
// testPreview.innerHTML = "Test<br />Test2"

// //some basic selectors, VISA Dagens övningar
// const searchPlayer =  document.getElementById("searchPlayer")
// searchPlayer.value = "whatever"
// searchPlayer.style.fontSize="40px"
// searchPlayer.style.backgroundColor = "#aaa"
// //searchPlayer.classList.add("visible")
// //searchPlayer.classList.remove("visible")
// console.log(searchPlayer)
//                     // GetElementById() ==================================================
//                     // GetElementByClassName() ===========================================
//                     // GetElementByTagName() =============================================
//                     // QuerySelector() - Väljer den FÖRSTA element som matchar  ==========



// // sätta lite styles etc!                    

// // array till table rows
// // på två olika sätt såklart

// // filter - när man skriver i Search så ska raderna automatiskt filtreras
// //    tjuvstart "events" - mer imorgon

// // (i morgon)
// // vid klick på en rad ska vi visa ett formulär (poppa upp en modal dialog) ( = edit )

// // om vi hinner idag?
// // skapa options -> select

// //egen tid = komma igång med övningarna