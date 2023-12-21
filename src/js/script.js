document.addEventListener('DOMContentLoaded', (event) => {
    // Function to show the bubble
    function showBubble(bubble) {
        document.getElementById('page-overlay').style.display = 'block';
        bubble.style.display = 'block';
        bubble.style.opacity = '1';
        bubble.style.visibility = 'visible';
    }

    // Function to hide all bubbles
    function hideBubbles() {
        document.querySelectorAll('.service-description-bubble').forEach(function(bubble) {
            bubble.style.display = 'none';
            bubble.style.opacity = '0';
            bubble.style.visibility = 'hidden';
        });
        document.getElementById('page-overlay').style.display = 'none';
    }

    // Event listeners for each service item
    document.querySelectorAll('.service-item').forEach(function(item) {
        item.addEventListener('click', function(event) {
            // Prevent the click from propagating to the document
            event.stopPropagation();
            hideBubbles(); // Hide any bubbles that might be open
            showBubble(this.querySelector('.service-description-bubble'));
        });
    });

    // Event listener for the overlay to close the bubbles
    document.getElementById('page-overlay').addEventListener('click', hideBubbles);

    // Hide bubbles when clicking anywhere in the document
    document.addEventListener('click', hideBubbles);
});
