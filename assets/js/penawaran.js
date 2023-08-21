/*==================== PENAWARAN MODAL ====================*/
const modalViews = document.querySelectorAll('.penawaran__modal'),
      modalBtns = document.querySelectorAll('.penawaran__button'),
      modalCloses = document.querySelectorAll('.penawaran__modal-close');

function modal(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

function closeModal() {
    modalViews.forEach((modalView) => {
        modalView.classList.remove('active-modal');
    });
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', closeModal);
});

function selectKomunitas(komunitas) {
    alert("Terimakasih, Anda telah memilih komunitas " + komunitas);
    closeModal();
}

const customDesignView = document.getElementById('customDesign');
const designImageInput = document.getElementById('designImage');

function selectDesign(designType) {
    if (designType === 'Boedhi Harjanto') {
        const designImage = document.createElement("img");
        designImage.src = "assets/img/baju.jpg"; // Ganti dengan path yang sesuai
        designImage.alt = "Desain Kaos dari Boedhi Harjanto";
        designImage.classList.add("design-image");
        customDesignView.parentElement.appendChild(designImage);

        // Tampilkan notifikasi menggunakan alert
        alert("Terimakasih, Anda telah memilih desain kaos dari Boedhi Harjanto.");
    } else if (designType === 'Desain Sendiri') {
        const emailLink = "mailto:boedhiharjanto@gmail.com?subject=Kirim Desain Kaos Sendiri";
        window.location.href = emailLink;
    }
}

function sendDesignByEmail() {
    const emailLink = "mailto:boedhiharjanto@gmail.com?subject=Kirim Desain Kaos Sendiri";
    window.location.href = emailLink;
}

// Menambahkan event listener untuk tombol modal
document.getElementById("showModal").addEventListener("click", showModal);
document.getElementById("closeModal").addEventListener("click", closeModal);

// Fungsi untuk menampilkan modal
function showModal() {
    modal(0); // Ganti angka sesuai dengan indeks modal yang ingin ditampilkan
}

// Menambahkan event listener untuk tombol "Pilih Komunitas"
document.getElementById("pilihKaos").addEventListener("click", showDesignOptions);

// Fungsi untuk menampilkan opsi desain kaos
function showDesignOptions() {
    modal(0); // Menampilkan modal dengan opsi desain kaos
}