$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$(".btn-send").click(function () {
    alert("¡Gracias por enviar tu mensaje! Me pondré en comunicación pronto.");
});