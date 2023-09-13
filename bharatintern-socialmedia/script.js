var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");



function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function(){
     darkBtn.classList.toggle("dark-btn-on");
}


// ________________________________this is add task js code__________________________________________________________

$(".mail-choice").change(() => {
    if ($(this).is(":checked")) {
        $(this).parent().addClass("selected-bg")
    } else {
        $(this).parent().removeClass("selected-bg")
    }
})

const colorInput = document.getElementById("colorpicker");

colorInput.addEventListener("input", (e) => {
    document.body.style.setProperty("--button-color", e.target.value)
});

$(".inbox-calendar").click(() => {
    $(".calendar-container").toggleClass("calendar-show");
    $(".inbox-container").toggleClass("hide");
    $(".mail-detail").toggleClass("hide");
})