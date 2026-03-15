const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach(button => {
    button.addEventListener("click", function() {
        // Toggle the "active" class for styling (the blue highlight)
        this.classList.toggle("active");
        
        const content = this.nextElementSibling;

        if (content.style.maxHeight) {
            // Close the card
            content.style.maxHeight = null;
            // Optionally clear the padding after the transition for a cleaner look
            setTimeout(() => {
                content.style.padding = "0 1.5rem";
            }, 300);
        } else {
            // Open the card
            // We set the padding first so scrollHeight calculates correctly
            content.style.padding = "1.5rem";
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});