/* Buttons Technology */

let btnTechnology1 = document.querySelector("#btn-technology-1")
let btnTechnology2 = document.querySelector("#btn-technology-2")
let btnTechnology3 = document.querySelector("#btn-technology-3")

let subtitleTechnology = document.querySelector("#subtitle-technology")
let paragraphTechnology = document.querySelector("#paragraph-technology")
let imgTechnology = document.querySelector("#img-technology")


btnTechnology1.addEventListener('click', ()=>{
    console.log("click");
    subtitleTechnology.innerHTML = "Space capsule"
    paragraphTechnology.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    imgTechnology.src = "./assets/technology/image-launch-vehicle-portrait.jpg"

    btnTechnology3.classList.remove("active")
    btnTechnology2.classList.remove("active")
    btnTechnology1.classList.add("active")

    btnTechnology3.setAttribute("aria-selected", "false")
    btnTechnology2.setAttribute("aria-selected", "false")
    btnTechnology1.setAttribute("aria-selected", "true")
})

btnTechnology2.addEventListener('click', ()=>{
    console.log("click");
    subtitleTechnology.innerHTML = "Spaceport"
    paragraphTechnology.innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    imgTechnology.src = "./assets/technology/image-spaceport-portrait.jpg"

    btnTechnology3.classList.remove("active")
    btnTechnology1.classList.remove("active")
    btnTechnology2.classList.add("active")

    btnTechnology3.setAttribute("aria-selected", "false")
    btnTechnology1.setAttribute("aria-selected", "false")
    btnTechnology2.setAttribute("aria-selected", "true")
})

btnTechnology3.addEventListener('click', ()=>{
    console.log("click");
    subtitleTechnology.innerHTML = "Launch vehicle"
    paragraphTechnology.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    imgTechnology.src = "./assets/technology/image-space-capsule-portrait.jpg"

    btnTechnology1.classList.remove("active")
    btnTechnology2.classList.remove("active")
    btnTechnology3.classList.add("active")

    btnTechnology1.setAttribute("aria-selected", "false")
    btnTechnology2.setAttribute("aria-selected", "false")
    btnTechnology3.setAttribute("aria-selected", "true")
})