document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const contentSection = document.querySelector('.content-section');

    if (scrollIndicator && contentSection) {
        scrollIndicator.addEventListener('click', () => {
            contentSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Add subtle hover effects for category cards
    const cards = document.querySelectorAll('.category-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.card-icon i');
            if(icon) {
                icon.style.transform = 'scale(1.1)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });

        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.card-icon i');
            if(icon) {
                icon.style.transform = 'scale(1)';
            }
        });
        
        // Optional click handler to show it's interactive
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('.card-title').innerText;
            console.log(`Navigating to ${categoryName}...`);
            // In a real app, this would be a link or router navigation
        });
    });
});
