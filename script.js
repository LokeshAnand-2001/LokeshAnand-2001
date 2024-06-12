

const scrollLinks = document.querySelectorAll('.scroll-link');

const portfolioProject = document.getElementById('portfolioProject');
const portfolioMessage = document.querySelector('.portfolio-message');



const introVideo = document.getElementById('introVideo');
const siteContent = document.querySelector('.site-content');


scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

portfolioProject.addEventListener('click', () => {
    if (portfolioMessage.style.display === 'none') {
        portfolioMessage.style.display = 'block';
        portfolioMessage.classList.add('animate');
    } else {
        portfolioMessage.classList.remove('animate');
        setTimeout(() => {
            portfolioMessage.style.display = 'none';
        }, 500);
    }
});



introVideo.addEventListener('ended', () => {
    const introVideoContainer = document.querySelector('.intro-video-container');
    introVideoContainer.style.display = 'none';
    siteContent.style.display = 'block';
});

function restartVideo() {
    const introVideoContainer = document.querySelector('.intro-video-container');
    introVideoContainer.style.display = 'block';
    siteContent.style.display = 'none';
    introVideo.currentTime = 0;
    introVideo.play();
}

introVideo.addEventListener('ended', () => {
    const introVideoContainer = document.querySelector('.intro-video-container');
    introVideoContainer.style.display = 'none';
    siteContent.style.display = 'block';
});


function showHireMessage() {
    const overlay = document.getElementById('hire-message-overlay');
    overlay.style.display = 'flex';
}

function hideHireMessage() {
    const overlay = document.getElementById('hire-message-overlay');
    overlay.style.display = 'none';
}