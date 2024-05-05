document.addEventListener("DOMContentLoaded", function () {
    var menuContainer = document.getElementById("menuContainer");

    // Menü içeriğini belirleme
    menuContainer.innerHTML = `
        <style>
            #menuContainer nav ul li {
                display: inline-block;
                margin-right: 20px; /* İstediğiniz boşluk değeri */
            }
        </style>
        <nav>
            <ul>
            <div class="collapse navbar-collapse justify-content-between px-0 px-lg-3" id="navbarCollapse">
                <div class="navbar-nav mr-auto py-0">
                    <a href="index.html" class="nav-item nav-link active">Anasayfa</a>
                    <a href="category.html" class="nav-item nav-link">Kategoriler</a>
                    <a href="muzik.html" class="nav-item nav-link">Müzik</a>
                    <a href="foto.html" class="nav-item nav-link">Foto</a>
                    <a href="video.html" class="nav-item nav-link">Video</a>
                    <a href="reklam.html" class="nav-item nav-link">Reklam</a>
                    <a href="menajerlik.html" class="nav-item nav-link">Menajerlik</a>
                    <a href="contact.html" class="nav-item nav-link">İletişim</a>
                </div>
                </div>
            </ul>
        </nav>
    `;
});
