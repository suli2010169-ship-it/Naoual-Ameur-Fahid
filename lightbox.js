const viewer = document.querySelector("#imageViewer");

if (viewer) {
    const viewerImage = viewer.querySelector("img");
    const viewerText = viewer.querySelector("p");
    const closeButton = viewer.querySelector(".image-viewer-close");
    const selectableImages = document.querySelectorAll(".art-card img, .obra img, .slides img, .bio-portada img, .hero-media img");

    const closeViewer = () => {
        viewer.classList.remove("is-open");
        viewer.setAttribute("aria-hidden", "true");
        viewerImage.src = "";
        viewerImage.alt = "";
        viewerText.textContent = "";
    };

    selectableImages.forEach((image) => {
        image.tabIndex = 0;
        image.addEventListener("click", () => {
            viewerImage.src = image.currentSrc || image.src;
            viewerImage.alt = image.alt || "Imagen ampliada";
            viewerText.textContent = image.alt || "";
            viewer.classList.add("is-open");
            viewer.setAttribute("aria-hidden", "false");
            closeButton.focus();
        });

        image.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                image.click();
            }
        });
    });

    closeButton.addEventListener("click", closeViewer);
    viewer.addEventListener("click", (event) => {
        if (event.target === viewer) {
            closeViewer();
        }
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && viewer.classList.contains("is-open")) {
            closeViewer();
        }
    });
}
