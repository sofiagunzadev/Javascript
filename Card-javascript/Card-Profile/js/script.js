const theme = document.querySelector(":root");
const btns = document.querySelectorAll(".btn");
btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const color = e.currentTarget.classList;
        if (color.contains("btn1")) { theme.style.setProperty("--theme-color", "#ad947e"); } else if (color.contains("btn2")) { theme.style.setProperty("--theme-color", "#854621"); }
        if (color.contains("btn3")) { theme.style.setProperty("--theme-color", "#000023"); }
        if (color.contains("btn4")) { theme.style.setProperty("--theme-color", "#594a0e"); }


    })
});