/* Panjab Floods Donation Page - Main JavaScript */

// ==================== Global Variables ====================
let selectedAmountValue = 250; // Default to $250 (POPULAR option)
let stickyFooterShown = false;

// Carousel variables
let currentSlide = 0;
let carouselInterval;
let progressInterval;
let progress = 0;
const slideDuration = 4000; // 4 seconds per slide
const progressUpdateInterval = 20; // Update progress every 20ms for smooth animation

// Exit intent variables
let exitIntentShown = false;

// Hero parallax
let ticking = false;

// ==================== Countdown Timer ====================

function updateCountdown() {
    const countdownElement = document.getElementById('countdown-timer');
    if (!countdownElement) return;

    // Target: December 31, 2025 at 23:59:59 local time
    const targetDate = new Date('2025-12-31T23:59:59');
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        countdownElement.textContent = 'Last chance!';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (days > 0) {
        countdownElement.textContent = `${days}d ${hours}h ${minutes}m left`;
    } else if (hours > 0) {
        countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s left`;
    } else {
        countdownElement.textContent = `${minutes}m ${seconds}s left`;
    }
}

// Start countdown on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
});

// ==================== Donation Functions ====================

function selectAmount(amount) {
    selectedAmountValue = amount;
    updateAmountDisplay();

    // Hide custom input if preset selected
    const section = document.getElementById('custom-amount-section');
    section.classList.remove('custom-amount-expanded');
    section.classList.add('custom-amount-collapsed');

    // Visual feedback with border and background
    document.querySelectorAll('.donation-btn').forEach(btn => {
        btn.classList.remove('border-saffron', 'bg-saffron/10');

        // Restore original border colors based on card type (with semi-transparent borders for glassmorphic cards)
        if (btn.classList.contains('glass-gradient-amber')) {
            btn.classList.add('border-orange-500/40');
        } else if (btn.classList.contains('glass-gradient-premium')) {
            btn.classList.add('border-purple-500/40');
        } else if (btn.textContent.includes('POPULAR')) {
            // Keep POPULAR card border as is
        } else {
            btn.classList.add('border-gray-200');
        }
    });

    const selectedBtn = event.target.closest('.donation-btn');

    // Remove original border color before adding saffron
    selectedBtn.classList.remove('border-gray-200', 'border-orange-500/40', 'border-purple-500/40');
    selectedBtn.classList.add('border-saffron');

    // Only add background color to non-gradient cards (preserve glassmorphic effect)
    if (!selectedBtn.classList.contains('glass-gradient-amber') &&
        !selectedBtn.classList.contains('glass-gradient-premium')) {
        selectedBtn.classList.add('bg-saffron/10');
    }

    // Smooth scroll to form
    document.getElementById('donation-form').scrollIntoView({behavior: 'smooth', block: 'center'});
}

function toggleCustomAmount() {
    const section = document.getElementById('custom-amount-section');
    const isCollapsed = section.classList.contains('custom-amount-collapsed');

    if (isCollapsed) {
        // Expand
        section.classList.remove('custom-amount-collapsed');
        section.classList.add('custom-amount-expanded');
        // Focus input after animation starts
        setTimeout(() => {
            document.getElementById('custom-amount').focus();
        }, 150);
    } else {
        // Collapse
        section.classList.remove('custom-amount-expanded');
        section.classList.add('custom-amount-collapsed');
    }
}

function updateAmountDisplay() {
    document.getElementById('selected-amount').textContent = `$${selectedAmountValue.toLocaleString('en-US')}`;
    document.getElementById('matched-amount').textContent = `$${(selectedAmountValue * 2).toLocaleString('en-US')}`;
}

function completeDonation() {
    const btn = event.target;
    const originalHTML = btn.innerHTML;

    // Show loading state
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> <span class="ml-2">Processing...</span>';

    // Simulate processing
    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalHTML;

        // Show success alert
        alert(`Thank you for your donation of $${selectedAmountValue.toLocaleString('en-US')}!\n\nYou will receive:\n✓ Email receipt with 80G certificate\n✓ WhatsApp message with donation ID\n✓ Weekly construction updates\n\nWith matching, your impact is $${(selectedAmountValue * 2).toLocaleString('en-US')}!`);
    }, 1500);
}

// ==================== Animation Functions ====================

// Number Count-Up Animation
function animateNumber(element, target, duration = 2000, suffix = '') {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString('en-IN') + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString('en-IN') + suffix;
        }
    }, 16);
}

// ==================== Video Modal Functions ====================

function openVideoModal() {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('flood-video');
    modal.classList.remove('hidden');
    modal.classList.add('modal-fade-in');
    // Small delay to ensure modal is visible before playing
    setTimeout(() => {
        video.play().catch(err => {
            console.log('Video autoplay prevented:', err);
            // This is normal - browser blocks autoplay, user will click play button
        });
    }, 100);
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('flood-video');
    video.pause();
    video.currentTime = 0; // Reset to beginning
    modal.classList.add('hidden');
    modal.classList.remove('modal-fade-in');
}

// ==================== Social Media Sharing Functions ====================

function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Help rebuild Punjab - 384,000 people need homes after devastating floods. Donations matched 2x! 🏠');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
}

function shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=400');
}

function copyPageLink() {
    const url = window.location.href;

    // Try to use the modern clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
            showCopySuccess();
        }).catch(() => {
            // Fallback for older browsers
            fallbackCopyToClipboard(url);
        });
    } else {
        // Fallback for older browsers
        fallbackCopyToClipboard(url);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
        showCopySuccess();
    } catch (err) {
        alert('Failed to copy link. Please copy manually: ' + text);
    }

    document.body.removeChild(textArea);
}

function showCopySuccess() {
    const btn = document.getElementById('copy-link-text');
    const originalText = btn.textContent;
    btn.textContent = 'Copied!';
    btn.parentElement.classList.add('border-green-600', 'bg-green-50');

    setTimeout(() => {
        btn.textContent = originalText;
        btn.parentElement.classList.remove('border-green-600', 'bg-green-50');
    }, 2000);
}

// ==================== FAQ Accordion ====================

function toggleFAQ(faqNumber) {
    const content = document.getElementById(`faq-content-${faqNumber}`);
    const icon = document.getElementById(`faq-icon-${faqNumber}`);

    // Toggle the clicked FAQ with smooth animation
    if (content.classList.contains('open')) {
        // Closing: set max-height to current scrollHeight, then animate to 0
        const currentHeight = content.scrollHeight;
        content.style.maxHeight = currentHeight + 'px';

        // Force reflow to ensure the height is set before transitioning
        content.offsetHeight;

        content.style.maxHeight = '0';
        content.classList.remove('open');
        icon.style.transform = 'rotate(0deg)';
    } else {
        // Opening: set max-height to scrollHeight (includes all padding)
        content.classList.add('open');
        const fullHeight = content.scrollHeight;
        content.style.maxHeight = fullHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
    }
}

// ==================== Image Carousel ====================

function initCarousel() {
    const carousel = document.getElementById('story-carousel');
    if (!carousel) return; // Exit if carousel not found

    const images = carousel.querySelectorAll('.carousel-image');
    const totalSlides = images.length;

    // Start the carousel
    startCarousel();

    // Pause on hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
        clearInterval(progressInterval);
    });

    // Resume on mouse leave
    carousel.addEventListener('mouseleave', () => {
        startCarousel();
    });
}

function startCarousel() {
    // Reset and start progress bar
    progress = 0;
    updateProgressBar();

    // Clear any existing intervals
    clearInterval(carouselInterval);
    clearInterval(progressInterval);

    // Update progress bar smoothly
    progressInterval = setInterval(() => {
        progress += (progressUpdateInterval / slideDuration) * 100;
        if (progress >= 100) {
            progress = 100;
        }
        updateProgressBar();
    }, progressUpdateInterval);

    // Change slide after duration
    carouselInterval = setInterval(() => {
        nextSlide();
    }, slideDuration);
}

function nextSlide() {
    const carousel = document.getElementById('story-carousel');
    if (!carousel) return;

    const images = carousel.querySelectorAll('.carousel-image');
    const dots = carousel.querySelectorAll('.carousel-dot');
    const totalSlides = images.length;

    // Remove active class from current slide and dot
    images[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    // Move to next slide
    currentSlide = (currentSlide + 1) % totalSlides;

    // Add active class to new slide and dot
    images[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');

    // Reset progress
    progress = 0;
    updateProgressBar();
}

function goToSlide(slideIndex) {
    const carousel = document.getElementById('story-carousel');
    if (!carousel) return;

    const images = carousel.querySelectorAll('.carousel-image');
    const dots = carousel.querySelectorAll('.carousel-dot');

    // Remove active class from current slide and dot
    images[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    // Set new slide
    currentSlide = slideIndex;

    // Add active class to new slide and dot
    images[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');

    // Restart the carousel from this slide
    progress = 0;
    updateProgressBar();
    clearInterval(carouselInterval);
    clearInterval(progressInterval);
    startCarousel();
}

function updateProgressBar() {
    const progressBar = document.getElementById('story-progress');
    if (progressBar) {
        progressBar.style.width = progress + '%';
    }
}

// ==================== Exit Intent Popup ====================

function closeExitIntent() {
    const modal = document.getElementById('exit-intent-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex', 'md:flex');
        modal.style.display = 'none';
    }
}

function closeExitIntentAndDonate() {
    closeExitIntent();
    // Scroll to donation form
    document.getElementById('donation-form').scrollIntoView({behavior: 'smooth'});
}

function showExitIntent() {
    if (!exitIntentShown) {
        exitIntentShown = true;
        const modal = document.getElementById('exit-intent-modal');
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            modal.style.display = 'flex';
        }
    }
}

// ==================== Event Listeners & Initialization ====================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize amount display
    updateAmountDisplay();

    // Update amount when custom input changes
    const customAmountInput = document.getElementById('custom-amount');
    if (customAmountInput) {
        customAmountInput.addEventListener('input', (e) => {
            const value = parseInt(e.target.value) || 0;
            if (value > 0) {
                selectedAmountValue = value;
                updateAmountDisplay();
            }
        });
    }

    // Observe and animate numbers when they enter viewport
    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.dataset.animated = 'true';
                const target = parseInt(entry.target.dataset.target);
                const suffix = entry.target.dataset.suffix || '';
                animateNumber(entry.target, target, 2000, suffix);
            }
        });
    }, { threshold: 0.5 });

    // Apply to stat numbers
    document.querySelectorAll('[data-countup]').forEach(el => {
        numberObserver.observe(el);
    });

    // Scroll-Triggered Fade-In Animations
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, { threshold: 0.1 });

    // Apply to elements that should fade in
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        fadeObserver.observe(el);
    });

    // Close video modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('video-modal');
            if (modal && !modal.classList.contains('hidden')) {
                closeVideoModal();
            }
        }
    });

    // Desktop ONLY: Detect exit intent when mouse leaves viewport from top
    // DISABLED - Not needed as of now
    /*
    document.addEventListener('mouseleave', (e) => {
        // Only trigger on desktop (768px+) and if mouse is leaving from the top
        if (!exitIntentShown && e.clientY <= 0 && window.innerWidth >= 768) {
            showExitIntent();
        }
    });
    */
});

// Window scroll events
window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const stickyFooter = document.getElementById('sticky-footer');

    // Show sticky footer after scrolling 50% (with slide-up animation)
    if (scrollPercent > 50 && window.innerWidth < 768) {
        if (!stickyFooterShown && stickyFooter) {
            stickyFooter.classList.remove('hidden');
            stickyFooter.classList.add('slide-up');
            stickyFooterShown = true;
        }
    } else {
        if (stickyFooterShown && stickyFooter) {
            stickyFooter.classList.add('hidden');
            stickyFooter.classList.remove('slide-up');
            stickyFooterShown = false;
        }
    }

    // Hero Parallax Effect
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const hero = document.querySelector('.hero-background');
            if (hero) {
                const scrolled = window.pageYOffset;
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
            ticking = false;
        });
        ticking = true;
    }
});

// Initialize carousel when page loads
window.addEventListener('load', () => {
    initCarousel();
});

// ==================== Keela Embed Iframe Load Handler ====================

(function initKeelaEmbed() {
    const iframe = document.querySelector('.keela-embed-form iframe');
    const loader = document.querySelector('.keela-loading');

    if (!iframe || !loader) return;

    iframe.addEventListener('load', function() {
        iframe.classList.remove('keela-hidden');
        loader.style.display = 'none';
    });

    // Fallback timeout in case load event doesn't fire
    setTimeout(() => {
        iframe.classList.remove('keela-hidden');
        loader.style.display = 'none';
    }, 5000);
})();

// ==================== Horizontal Gallery Auto-Scroll & Drag ====================

(function initGalleryScroll() {
    const gallery = document.getElementById('image-gallery');
    if (!gallery) return;

    let isDown = false;
    let startX;
    let scrollLeft;
    let autoScrollInterval;
    let isPaused = false;
    const scrollSpeed = 1; // pixels per frame
    const scrollDirection = 1; // 1 = right, -1 = left

    // Check and reset scroll position for seamless loop
    function checkAndResetScroll() {
        const maxScroll = gallery.scrollWidth - gallery.clientWidth;
        const halfScroll = maxScroll / 2;

        if (gallery.scrollLeft >= halfScroll) {
            gallery.scrollLeft = gallery.scrollLeft - halfScroll;
        } else if (gallery.scrollLeft < 0) {
            gallery.scrollLeft = halfScroll + gallery.scrollLeft;
        }
    }

    // Auto-scroll function
    function startAutoScroll() {
        if (autoScrollInterval) return;

        autoScrollInterval = setInterval(() => {
            if (isPaused || isDown) return;

            gallery.scrollLeft += scrollSpeed * scrollDirection;

            // Seamless infinite loop: reset to beginning when halfway through (since images are duplicated)
            const maxScroll = gallery.scrollWidth - gallery.clientWidth;
            const halfScroll = maxScroll / 2;

            if (gallery.scrollLeft >= halfScroll) {
                gallery.scrollLeft = 0;
            }
        }, 30); // ~33fps for smooth scrolling
    }

    function stopAutoScroll() {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            autoScrollInterval = null;
        }
    }

    // Pause on hover/touch
    gallery.addEventListener('mouseenter', () => { isPaused = true; });
    gallery.addEventListener('mouseleave', () => {
        isPaused = false;
        isDown = false;
        gallery.style.cursor = 'grab';
    });

    // Drag functionality
    gallery.addEventListener('mousedown', (e) => {
        isDown = true;
        gallery.style.cursor = 'grabbing';
        startX = e.pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
    });

    gallery.addEventListener('mouseup', () => {
        isDown = false;
        gallery.style.cursor = 'grab';
        checkAndResetScroll();
    });

    gallery.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - gallery.offsetLeft;
        const walk = (x - startX) * 2;
        gallery.scrollLeft = scrollLeft - walk;
    });

    // Touch support for mobile
    let touchStartX = 0;
    let touchScrollLeft = 0;

    gallery.addEventListener('touchstart', (e) => {
        isPaused = true;
        touchStartX = e.touches[0].pageX;
        touchScrollLeft = gallery.scrollLeft;
    }, { passive: true });

    gallery.addEventListener('touchmove', (e) => {
        const touchX = e.touches[0].pageX;
        const walk = (touchStartX - touchX) * 1.5;
        gallery.scrollLeft = touchScrollLeft + walk;
    }, { passive: true });

    gallery.addEventListener('touchend', () => {
        checkAndResetScroll();
        setTimeout(() => { isPaused = false; }, 2000); // Resume after 2s
    }, { passive: true });

    // Start auto-scroll when gallery is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startAutoScroll();
            } else {
                stopAutoScroll();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(gallery);
})();