document.addEventListener('DOMContentLoaded', function() {
    // Gallery data
    const galleryItems = [
        {
            title: "This Minigame Idea Does Not Exist",
            description: "AI-generated minigame concepts that never existed",
            url: "https://websim.ai/@api/this-minigame-idea-does-not-exist",
            color: "#FF6B6B",
            bgImage: createPatternSVG('#FF6B6B', 'gamepad')
        },
        {
            title: "This Programming Language Does Not Exist",
            description: "Imaginary programming languages created by AI",
            url: "https://websim.ai/@api/this-programming-language-does-not-exist",
            color: "#4ECDC4",
            bgImage: createPatternSVG('#4ECDC4', 'code')
        },
        {
            title: "This Date Does Not Exist",
            description: "AI-generated date ideas that never happened",
            url: "https://websim.ai/@api/this-date-does-not-exist",
            color: "#FF8C94",
            bgImage: createPatternSVG('#FF8C94', 'heart')
        },
        {
            title: "This Soda Does Not Exist",
            description: "Fictional soda flavors dreamed up by AI",
            url: "https://websim.ai/@api/this-soda-does-not-exist",
            color: "#F9DC5C",
            bgImage: createPatternSVG('#F9DC5C', 'bottle')
        },
        {
            title: "This Cat Does Not Exist",
            description: "AI-generated cats that aren't real",
            url: "https://websim.ai/@api/this-cat-does-not-exist",
            color: "#CDDAFD",
            bgImage: createPatternSVG('#CDDAFD', 'paw')
        },
        {
            title: "This Wireframe Does Not Exist",
            description: "AI-created wireframes for non-existent interfaces",
            url: "https://websim.ai/@api/this-wireframe-does-not-exist/1",
            color: "#6B705C",
            bgImage: createPatternSVG('#6B705C', 'grid')
        },
        {
            title: "This Classic Arcade Game Does Not Exist",
            description: "Fictional arcade games from an alternate timeline",
            url: "https://websim.ai/@api/this-classic-arcade-game-does-not-exist/",
            color: "#9D4EDD",
            bgImage: createPatternSVG('#9D4EDD', 'joystick')
        },
        {
            title: "This Slideshow Cartoon Does Not Exist",
            description: "AI-generated cartoon slides that never aired",
            url: "https://websim.ai/@api/this-slideshow-cartoon-does-not-exist",
            color: "#06D6A0",
            bgImage: createPatternSVG('#06D6A0', 'tv')
        }
    ];

    const gallery = document.getElementById('gallery');
    const overlay = document.getElementById('fullscreen-overlay');
    const iframe = document.getElementById('content-frame');
    const closeButton = document.getElementById('close-button');

    // Create gallery items
    galleryItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <div class="gallery-item-content" style="background-image: url('data:image/svg+xml;utf8,${encodeURIComponent(item.bgImage)}')">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => {
            openFullscreen(item.url);
        });
        
        gallery.appendChild(galleryItem);
    });

    // Open fullscreen view
    function openFullscreen(url) {
        iframe.src = url;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    // Close fullscreen view
    function closeFullscreen() {
        overlay.classList.remove('active');
        // Wait for transition to complete, then unload iframe
        setTimeout(() => {
            if (!overlay.classList.contains('active')) {
                iframe.src = '';
                document.body.style.overflow = '';
            }
        }, 300);
    }

    // Event listeners
    closeButton.addEventListener('click', closeFullscreen);
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeFullscreen();
        }
    });

    // Function to create SVG pattern backgrounds
    function createPatternSVG(color, icon) {
        const iconPaths = {
            'gamepad': 'M6,9H8V11H10V13H8V15H6V13H4V11H6V9M18.5,9A1.5,1.5 0 0,1 20,10.5A1.5,1.5 0 0,1 18.5,12A1.5,1.5 0 0,1 17,10.5A1.5,1.5 0 0,1 18.5,9M15.5,12A1.5,1.5 0 0,1 17,13.5A1.5,1.5 0 0,1 15.5,15A1.5,1.5 0 0,1 14,13.5A1.5,1.5 0 0,1 15.5,12M17,5A7,7 0 0,1 24,12A7,7 0 0,1 17,19C15.04,19 13.27,18.26 12,17H12C10.73,18.26 8.96,19 7,19A7,7 0 0,1 0,12A7,7 0 0,1 7,5H17M7,7A5,5 0 0,0 2,12A5,5 0 0,0 7,17C8.64,17 10.09,16.21 11,15H13C13.91,16.21 15.36,17 17,17A5,5 0 0,0 22,12A5,5 0 0,0 17,7H7Z',
            'code': 'M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z',
            'heart': 'M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z',
            'bottle': 'M20.832 4.555A1 1 0 0 0 20 4h-3V2h-2v2H9V2H7v2H4a1 1 0 0 0-.832.445l-3 5A1 1 0 0 0 0 10v10a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V10a1 1 0 0 0-.168-.555l-3-4.89zM5.535 6h12.93l2.135 3.478L20.917 10H3.083l.317-.522L5.535 6z',
            'paw': 'M8.35,3C9.53,2.83 10.78,4.12 11.14,5.9C11.5,7.67 10.85,9.25 9.67,9.43C8.5,9.61 7.24,8.32 6.87,6.54C6.5,4.77 7.17,3.19 8.35,3M15.5,3C16.69,3.19 17.35,4.77 17,6.54C16.62,8.32 15.37,9.61 14.19,9.43C13,9.25 12.35,7.67 12.72,5.9C13.08,4.12 14.33,2.83 15.5,3M3,7.6C4.14,7.11 5.69,8 6.5,9.55C7.26,11.13 7,12.79 5.87,13.28C4.74,13.77 3.2,12.89 2.41,11.32C1.62,9.75 1.9,8.08 3,7.6M21,7.6C22.1,8.08 22.38,9.75 21.59,11.32C20.8,12.89 19.26,13.77 18.13,13.28C17,12.79 16.74,11.13 17.5,9.55C18.31,8 19.86,7.11 21,7.6M19.33,18.38C19.37,19.32 18.65,20.36 17.79,20.75C16,21.57 13.88,19.87 11.89,19.87C9.9,19.87 7.76,21.64 6,20.75C5,20.26 4.31,18.96 4.44,17.88C4.62,16.39 6.41,15.59 7.47,14.5C8.88,13.09 9.88,10.44 11.89,10.44C13.89,10.44 14.95,13.05 16.3,14.5C17.41,15.69 19.26,16.68 19.33,18.38Z',
            'grid': 'M10,4V8H14V4H10M16,4V8H20V4H16M16,10V14H20V10H16M16,16V20H20V16H16M14,20V16H10V20H14M8,20V16H4V20H8M8,14V10H4V14H8M8,8V4H4V8H8M10,14H14V10H10V14M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2Z',
            'joystick': 'M13,9H11V7H13V9M13,17H11V11H13V17M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z',
            'tv': 'M21,17H3V5H21M21,3H3A2,2 0 0,0 1,5V17A2,2 0 0,0 3,19H8V21H16V19H21A2,2 0 0,0 23,17V5A2,2 0 0,0 21,3Z'
        };

        const baseColor = color;
        const darkerColor = darkenColor(color, 30);
        
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="120" viewBox="0 0 200 120">
            <defs>
                <pattern id="pattern-${color.substr(1)}" patternUnits="userSpaceOnUse" width="50" height="50" patternTransform="rotate(45)">
                    <rect width="100%" height="100%" fill="${baseColor}"/>
                    <path d="${iconPaths[icon]}" fill="${darkerColor}" transform="translate(13, 13) scale(1)" opacity="0.7"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern-${color.substr(1)})"/>
        </svg>
        `;
    }

    // Helper function to darken a color
    function darkenColor(color, percent) {
        const num = parseInt(color.substring(1), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) - amt;
        const G = (num >> 8 & 0x00FF) - amt;
        const B = (num & 0x0000FF) - amt;
        
        return '#' + (
            0x1000000 + 
            (R < 0 ? 0 : R) * 0x10000 + 
            (G < 0 ? 0 : G) * 0x100 + 
            (B < 0 ? 0 : B)
        ).toString(16).slice(1);
    }
});

