// Add any custom JS here, e.g., for confirmations
document.addEventListener('DOMContentLoaded', function() {
    // Example: Add confirmation to delete buttons
    const deleteButtons = document.querySelectorAll('button[onclick*="confirm"]');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (!confirm('Are you sure you want to delete this book?')) {
                e.preventDefault();
            }
        });
    });
});