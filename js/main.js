// Get the current page filename
const currentPage = window.location.pathname.split('/').pop();

// Function to handle previous/next song navigation
function setupNavigation() {
    const songs = [
        'igors-theme.html',
        'earfquake.html',
        'i-think.html',
        'boyfriend.html',
        'exactly-what-you-run-from.html',
        'running-out-of-time.html',
        'new-magic-wand.html',
        'a-boy-is-a-gun.html',
        'puppet.html',
        'whats-good.html',
        'gone-gone-thank-you.html',
        'i-dont-love-you-anymore.html',
        'are-we-still-friends.html'
    ];

    const currentIndex = songs.indexOf(currentPage);
    const prevButton = document.getElementById('prevSong');
    const nextButton = document.getElementById('nextSong');

    if (prevButton && nextButton) {
        // Handle previous button
        if (currentIndex > 0) {
            prevButton.href = songs[currentIndex - 1];
        } else {
            prevButton.style.display = 'none';
        }

        // Handle next button
        if (currentIndex < songs.length - 1) {
            nextButton.href = songs[currentIndex + 1];
        } else {
            nextButton.style.display = 'none';
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setActiveNavItem();
    setupNavigation();
}); 