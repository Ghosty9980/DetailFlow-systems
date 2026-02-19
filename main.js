// Animation and UI Interaction
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply styles for animation
    const animatedElements = document.querySelectorAll('.glass-card, .step-card, .result-item, .hero-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });

    // Handle intake form submission
    const form = document.querySelector('.intake-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;

            // Simulate submission
            setTimeout(() => {
                form.innerHTML = `
                    <div style="text-align: center; padding: 20px;">
                        <h3 style="margin-bottom: 12px;">Audit Requested</h3>
                        <p style="color: var(--text-secondary);">We will review your submission and contact you via email within 24 hours.</p>
                    </div>
                `;
            }, 1500);
        });
    }

    // Hero Video Background (HLS)
    const video = document.getElementById('hero-video');
    const videoSrc = 'https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8';

    if (video) {
        const initVideo = () => {
            video.playbackRate = 0.6; // Slow down the video

            if (typeof Hls !== 'undefined' && Hls.isSupported()) {
                const hls = new Hls();
                hls.loadSource(videoSrc);
                hls.attachMedia(video);
                hls.on(Hls.Events.MANIFEST_PARSED, () => {
                    video.play().catch(e => console.error("Video play failed:", e));
                });
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = videoSrc;
                video.addEventListener('loadedmetadata', () => {
                    video.play().catch(e => console.error("Video play failed:", e));
                });
            }
        };

        // If Hls script is still loading, wait a bit
        if (typeof Hls === 'undefined') {
            setTimeout(initVideo, 500);
        } else {
            initVideo();
        }
    }

    // Parallax Effect for Hero
    const parallaxItem = document.getElementById('hero-parallax');
    if (parallaxItem) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.4;
            parallaxItem.style.transform = `translateY(${rate}px)`;
        }, { passive: true });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
