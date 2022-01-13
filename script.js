const left = document.querySelector(".left"),
    right = document.querySelector(".right"),
    bar = document.querySelector(".bar"),
    btn = document.querySelector(".btn-Run"),
    dark = document.querySelector(".btn-dark"),
    light = document.querySelector(".btn-light"),
    iframe = document.querySelector(".iframe"),
    editor = document.querySelector(".editor");

// Resizing
const drag = (e) => {
    e.preventDefault();
    document.selection ? document.selection.empty() : window.getSelection().removeAllRanges();
    left.style.width = (e.pageX - bar.offsetWidth / 3) + "px";
    editor.resize();
}

bar.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", drag);
});

bar.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", drag);
});

// Run 
btn.addEventListener("click", () => {
    const html = editor.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});

// Set Dark Mode
dark.addEventListener("click", () => {
    editor.style.backgroundColor = "rgb(40, 44, 52)";
    editor.style.color = '#eee';
});

// Set Light Mode
light.addEventListener("click", () => {
    editor.style.backgroundColor = "";
    editor.style.color = '';
});

// Live
document.getElementById("live").onclick = function () {
    if (this.checked) {
        editor.addEventListener("keyup", () => {
            const html = editor.textContent;
            iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
        });
    }
}