// Coming Soon Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Notify Me Button Functionality
    const notifyBtn = document.getElementById('notify-btn');
    let isSubscribed = false;

    notifyBtn.addEventListener('click', function() {
        if (!isSubscribed) {
            // Show subscription success
            showNotification('🎉 Great! You\'ll be notified when it\'s ready!');
            
            // Update button state
            notifyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Subscribed';
            notifyBtn.classList.add('subscribed');
            isSubscribed = true;
            
            // Store subscription (you can integrate with your backend)
            localStorage.setItem('comingSoonSubscribed', 'true');
        } else {
            showNotification('✅ You\'re already subscribed!');
        }
    });

    // Check if user was previously subscribed
    if (localStorage.getItem('comingSoonSubscribed') === 'true') {
        notifyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Subscribed';
        notifyBtn.classList.add('subscribed');
        isSubscribed = true;
    }

    // Animate progress bar on page load
    setTimeout(() => {
        const progressFill = document.querySelector('.progress-fill');
        const progress = progressFill.getAttribute('data-progress');
        progressFill.style.width = progress + '%';
    }, 500);

    // Add entrance animations
    animateElements();
});

// Show notification toast
function showNotification(message) {
    // Remove existing toast if any
    const existingToast = document.querySelector('.notification-toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Create new toast
    const toast = document.createElement('div');
    toast.className = 'notification-toast';
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Animate elements on scroll or page load
function animateElements() {
    const elements = [
        '.coming-soon-icon',
        '.coming-soon-title',
        '.coming-soon-description',
        '.progress-container',
        '.features-list',
        '.coming-soon-actions',
        '.estimated-time'
    ];

    elements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 200 + (index * 100));
        }
    });
}

// Optional: Add some interactive particles or floating elements
function createFloatingElements() {
    const container = document.querySelector('.coming-soon-container');
    
    for (let i = 0; i < 5; i++) {
        const floatingElement = document.createElement('div');
        floatingElement.style.position = 'absolute';
        floatingElement.style.width = '4px';
        floatingElement.style.height = '4px';
        floatingElement.style.backgroundColor = 'var(--main-color)';
        floatingElement.style.borderRadius = '50%';
        floatingElement.style.opacity = '0.3';
        floatingElement.style.left = Math.random() * 100 + '%';
        floatingElement.style.top = Math.random() * 100 + '%';
        floatingElement.style.animation = `dotFloat ${3 + Math.random() * 2}s ease-in-out infinite`;
        floatingElement.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(floatingElement);
    }
}

// Initialize floating elements (optional - uncomment if you want more decorative elements)
// createFloatingElements();