(() => {
    "use strict";

    function downloadBerkas() {
        const nama = document.getElementById("nama").value.trim();
        const kontingen = document.getElementById("kontingen").value.trim();
        const hp = document.getElementById("hp").value.trim();

        if (nama === "" || kontingen === "" || hp === "") {
            alert("Silakan isi Nama, Kontingen, dan Nomor HP.");
            return;
        }

        if (!/^[0-9]{10,15}$/.test(hp)) {
            alert("Nomor HP harus terdiri dari 10–15 digit angka.");
            return;
        }

        const submitBtn = document.querySelector("#download .btn");
        const originalText = submitBtn ? submitBtn.innerHTML : "";
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = "⌛ Mengirim...";
        }

        fetch(
            "https://script.google.com/macros/s/AKfycbxlXccfmf4x6Tm2-aTgf5DR0ykGEhG4a0vsMGTLnxQXgr-n2_Y1mpPyR9KYgijE4N7k/exec",
            {
                method: "POST",
                body: JSON.stringify({
                    nama: nama,
                    kontingen: kontingen,
                    hp: hp
                })
            }
        )
        .then(response => response.text())
        .then(() => {
            document.getElementById("downloadModal").style.display = "flex";
        })
        .catch(() => {
            alert("Gagal menyimpan data. Silakan coba lagi.");
        })
        .finally(() => {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        });
    }

    function countdown(targetDate, prefix) {
        const now = new Date().getTime();
        const gap = targetDate - now;

        if (gap <= 0) {
            document.getElementById("days" + prefix).innerHTML = "00";
            document.getElementById("hours" + prefix).innerHTML = "00";
            document.getElementById("minutes" + prefix).innerHTML = "00";
            document.getElementById("seconds" + prefix).innerHTML = "00";
            return;
        }

        const days = Math.floor(gap / (1000 * 60 * 60 * 24));
        const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((gap % (1000 * 60)) / 1000);

        document.getElementById("days" + prefix).innerHTML = days.toString().padStart(2, '0');
        document.getElementById("hours" + prefix).innerHTML = hours.toString().padStart(2, '0');
        document.getElementById("minutes" + prefix).innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById("seconds" + prefix).innerHTML = seconds.toString().padStart(2, '0');
    }

    function getUpcomingDate(targetMonthDayString) {
        const currentYear = new Date().getFullYear();
        let targetDate = new Date(`${targetMonthDayString}, ${currentYear} 00:00:00`).getTime();
        const now = new Date().getTime();
        if (targetDate - now <= 0) {
            targetDate = new Date(`${targetMonthDayString}, ${currentYear + 1} 00:00:00`).getTime();
        }
        return targetDate;
    }

    // Historis Championship
    const historisDate = getUpcomingDate("August 14");
    // Swarnadwipa Championship
    const swarnadwipaDate = getUpcomingDate("September 18");

    setInterval(() => {
        countdown(historisDate, 1);
        countdown(swarnadwipaDate, 2);
    }, 1000);

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

    function showSlide(i) {
        stopAllVideos();
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));
        if (slides[i]) slides[i].classList.add("active");
        if (dots[i]) dots[i].classList.add("active");
    }

    function stopAllVideos() {
        document.querySelectorAll("video").forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
    }

    function nextSlide() {
        stopAllVideos();
        index++;
        if (index >= slides.length) {
            index = 0;
        }
        showSlide(index);
    }

    function prevSlide() {
        stopAllVideos();
        index--;
        if (index < 0) {
            index = slides.length - 1;
        }
        showSlide(index);
    }

    if (next) next.onclick = nextSlide;
    if (prev) prev.onclick = prevSlide;

    dots.forEach((dot, i) => {
        dot.onclick = () => {
            index = i;
            showSlide(index);
        };
    });

    function startSlide() {
        autoSlide = setInterval(nextSlide, 3000);
    }

    function stopSlide() {
        clearInterval(autoSlide);
    }

    if (slider) {
        slider.addEventListener("mouseenter", stopSlide);
        slider.addEventListener("mouseleave", startSlide);
    }
    startSlide();

    // =======================
    // CLOSE MODAL
    // =======================
    function closeModal() {
        document.getElementById("downloadModal").style.display = "none";
    }

    // =======================
    // MOBILE NAVIGATION MENU
    // =======================
    const mobileMenu = document.getElementById("mobile-menu");
    const navList = document.querySelector("nav ul");

    if (mobileMenu && navList) {
        mobileMenu.addEventListener("click", () => {
            mobileMenu.classList.toggle("active");
            navList.classList.toggle("active");
        });

        navList.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.remove("active");
                navList.classList.remove("active");
            });
        });
    }

    // Export functions globally to allow inline event bindings to work
    window.downloadBerkas = downloadBerkas;
    window.closeModal = closeModal;
})();