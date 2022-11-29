function showMenu() {
    document.getElementById("kruh").classList.remove("kruh-open");
    document.getElementById("kruh").classList.add("kruh-close");
    document.getElementById("menu-section").classList.remove("menu-section-style");
    document.getElementById("menu-section").classList.add("menu-show");
    document.getElementById("info").classList.add("info-hide");
    document.getElementById("info").classList.remove("info");
    document.getElementById("contacts").classList.add("contacts-hide");
    document.getElementById("contacts").classList.remove("contacts");
}