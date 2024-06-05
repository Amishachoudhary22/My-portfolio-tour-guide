document.addEventListener('DOMContentLoaded', function() {
    const loadContentButton = document.getElementById('load-content');
    const dynamicSection = document.getElementById('dynamic-section');
    const modal = document.getElementById('feedback-modal');
    const closeModal = document.getElementsByClassName('close')[0];

    loadContentButton.addEventListener('click', function() {
        dynamicSection.innerHTML = '<p>Dynamic content loaded!</p>';
    });

    document.getElementById('feedback-form').addEventListener('submit', function(event) {
        event.preventDefault();
        modal.style.display = 'none';
        alert('Thank you for your feedback!');
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
