document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery img");
    const buttons = document.querySelectorAll(".toggleButton");

    // событие клика для каждого изображения для индивидуального переключения
    images.forEach(img => {
        img.addEventListener("click", function() {
            this.classList.toggle("blackout");
        });
    });

    // событие клика для каждой кнопки для переключения группы
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const group = this.getAttribute("data-group");
            const groupImages = document.querySelectorAll(`.${group}`);
            const allBlackout = Array.from(groupImages).every(img => img.classList.contains("blackout"));

            if (allBlackout) {
                groupImages.forEach(img => img.classList.remove("blackout"));
            } else {
                groupImages.forEach(img => img.classList.add("blackout"));
            }
        });
    });
});
