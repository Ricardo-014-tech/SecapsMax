document.addEventListener("DOMContentLoaded", function () { const ctaButton = document.querySelector(".cta-button");

ctaButton.addEventListener("mouseover", function () {
    ctaButton.style.backgroundColor = "#0088ff";
});

ctaButton.addEventListener("mouseout", function () {
    ctaButton.style.backgroundColor = "#00ff88";
});

ctaButton.addEventListener("click", function () {
    alert("Você será redirecionado para a página de compra!");
    window.location.href = "https://pay.braip.co/ref?pl=plal61yk&ck=cheemgq6&af=afi070pge4";
});

});

