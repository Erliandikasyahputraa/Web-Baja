function downloadBerkas(){

const nama =
document.getElementById("nama").value;

const kontingen =
document.getElementById("kontingen").value;

const hp =
document.getElementById("hp").value;

if (
    nama === "" ||
    kontingen === "" ||
    hp === ""
){
    alert("Silakan isi Nama, Kontingen, dan Nomor HP.");
    return;
}

if (!/^[0-9]{10,15}$/.test(hp)) {
    alert("Nomor HP harus terdiri dari 10–15 digit angka.");
    return;

}

fetch(
"https://script.google.com/macros/s/AKfycbxlXccfmf4x6Tm2-aTgf5DR0ykGEhG4a0vsMGTLnxQXgr-n2_Y1mpPyR9KYgijE4N7k/exec",
{
method:"POST",

body:JSON.stringify({

nama:nama,
kontingen:kontingen,
hp:hp

})

}
)
.then(response=>response.text())
.then(data=>{

document.getElementById(
"downloadModal"
).style.display="flex";

})
.catch(error=>{

    alert("Gagal menyimpan data");

});

} // <-- function baru ditutup di sini
function countdown(targetDate, prefix){

    const now = new Date().getTime();

    const gap = targetDate - now;

    if(gap <= 0){

        document.getElementById("days"+prefix).innerHTML="00";
        document.getElementById("hours"+prefix).innerHTML="00";
        document.getElementById("minutes"+prefix).innerHTML="00";
        document.getElementById("seconds"+prefix).innerHTML="00";

        return;
    }

    const days = Math.floor(gap/(1000*60*60*24));

    const hours = Math.floor((gap%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((gap%(1000*60*60))/(1000*60));

    const seconds = Math.floor((gap%(1000*60))/1000);

    document.getElementById("days"+prefix).innerHTML = days;
    document.getElementById("hours"+prefix).innerHTML = hours;
    document.getElementById("minutes"+prefix).innerHTML = minutes;
    document.getElementById("seconds"+prefix).innerHTML = seconds;
}

// Historis Championship
const historisDate = new Date("August 14, 2026 00:00:00").getTime();

// Swarnadwipa Championship
const swarnadwipaDate = new Date("September 18, 2026 00:00:00").getTime();

setInterval(function(){

    countdown(historisDate,1);

    countdown(swarnadwipaDate,2);

},1000);

// =======================
// PORTFOLIO SLIDER
// =======================

const slides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dot");

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

const slider = document.getElementById("slider");

let index = 0;

let autoSlide;

function showSlide(i){

    stopAllVideos();

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    dots.forEach(dot=>{
        dot.classList.remove("active");
    });

    slides[i].classList.add("active");
    dots[i].classList.add("active");

}

function stopAllVideos(){

    document.querySelectorAll("video").forEach(video => {
        video.pause();
        video.currentTime = 0;
    });

}

function nextSlide(){

    stopAllVideos();

    index++;

    if(index >= slides.length){

        index = 0;

    }

    showSlide(index);

}

function prevSlide(){

    stopAllVideos();

    index--;

    if(index < 0){

        index = slides.length-1;

    }

    showSlide(index);

}

next.onclick = nextSlide;

prev.onclick = prevSlide;

dots.forEach((dot,i)=>{

    dot.onclick = ()=>{

        index = i;

        showSlide(index);

    }

});

function startSlide(){

    autoSlide = setInterval(nextSlide,3000);

}

function stopSlide(){

    clearInterval(autoSlide);

}

slider.addEventListener("mouseenter",stopSlide);

slider.addEventListener("mouseleave",startSlide);

startSlide();

// =======================
// CLOSE MODAL
// =======================

function closeModal() {
    document.getElementById("downloadModal").style.display = "none";
}