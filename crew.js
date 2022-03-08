/* Slides crew */

let buttonCrew1 = document.querySelector("#button-crew-1")
let buttonCrew2 = document.querySelector("#button-crew-2")
let buttonCrew3 = document.querySelector("#button-crew-3")
let buttonCrew4 = document.querySelector("#button-crew-4")


let crewTroop = document.querySelector("#crew-slide-troop")
let crewName = document.querySelector("#crew-slide-name")
let crewDescription = document.querySelector("#crew-slide-description")
let crewImg = document.querySelector("#crew-slide-img")

buttonCrew1.addEventListener('click', ()=>{

    crewTroop.innerHTML = "Commander"
    crewName.innerHTML = "Douglas Hurley"
    crewDescription.innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    crewImg.src = "./assets/crew/image-douglas-hurley.png"

    buttonCrew1.classList.add("active")
    buttonCrew2.classList.remove("active")
    buttonCrew3.classList.remove("active")
    buttonCrew4.classList.remove("active")

    buttonCrew1.setAttribute("aria-selected", "true")
    buttonCrew2.setAttribute("aria-selected", "false")
    buttonCrew3.setAttribute("aria-selected", "false")
    buttonCrew4.setAttribute("aria-selected", "false")
})

buttonCrew2.addEventListener('click', ()=>{

    crewTroop.innerHTML = "Flight Engineer"
    crewName.innerHTML = "Anousheh Ansari"
    crewDescription.innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    crewImg.src = "./assets/crew/image-anousheh-ansari.png"

    buttonCrew1.classList.remove("active")
    buttonCrew2.classList.add("active")
    buttonCrew3.classList.remove("active")
    buttonCrew4.classList.remove("active")

    buttonCrew1.setAttribute("aria-selected", "false")
    buttonCrew2.setAttribute("aria-selected", "true")
    buttonCrew3.setAttribute("aria-selected", "false")
    buttonCrew4.setAttribute("aria-selected", "false")
})

buttonCrew3.addEventListener('click', ()=>{

    crewTroop.innerHTML = "Pilot"
    crewName.innerHTML = "Victor Glover"
    crewDescription.innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
    crewImg.src = "./assets/crew/image-victor-glover.png"

    buttonCrew1.classList.remove("active")
    buttonCrew2.classList.remove("active")
    buttonCrew3.classList.add("active")
    buttonCrew4.classList.remove("active")

    buttonCrew1.setAttribute("aria-selected", "false")
    buttonCrew2.setAttribute("aria-selected", "false")
    buttonCrew3.setAttribute("aria-selected", "true")
    buttonCrew4.setAttribute("aria-selected", "false")
})

buttonCrew4.addEventListener('click', ()=>{

    crewTroop.innerHTML = "Mission Specialist"
    crewName.innerHTML = "Mark Shuttleworth"
    crewDescription.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    crewImg.src = "./assets/crew/image-mark-shuttleworth.png"

    buttonCrew1.classList.remove("active")
    buttonCrew2.classList.remove("active")
    buttonCrew3.classList.remove("active")
    buttonCrew4.classList.add("active")

    buttonCrew1.setAttribute("aria-selected", "false")
    buttonCrew2.setAttribute("aria-selected", "false")
    buttonCrew3.setAttribute("aria-selected", "false")
    buttonCrew4.setAttribute("aria-selected", "true")
})