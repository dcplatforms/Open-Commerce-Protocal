document.addEventListener('DOMContentLoaded', () => {
    const contentArea = document.getElementById('content-area');
    const navLinks = document.querySelectorAll('.main-nav a[data-path]');
    const siteTitle = document.querySelector('.site-title');
    const currentYearSpan = document.getElementById('current-year');

    currentYearSpan.textContent = new Date().getFullYear();

    // Initialize marked.js
    if (typeof marked === 'undefined') {
        console.error("marked.js library not loaded.");
        contentArea.innerHTML = '<h1>Error</h1><p>Markdown parser not loaded. Cannot display content.</p>';
        return;
    }

    const getBasePath = () => {
        // For GitHub Pages, the base path is often /repository-name/
        const pathParts = window.location.pathname.split('/');
        // Assuming the product-hub is at /Open-Commerce-Protocol/product-hub/index.html
        // We want the base to be /Open-Commerce-Protocol/product-hub/
        const repoName = 'Open-Commerce-Protocol';
        const productHubDir = 'product-hub';

        const repoIndex = pathParts.indexOf(repoName);
        const hubIndex = pathParts.indexOf(productHubDir);

        if (repoIndex !== -1 && hubIndex !== -1 && hubIndex > repoIndex) {
            return pathParts.slice(0, hubIndex + 1).join('/') + '/';
        }
        // Fallback for local testing or different deployment
        return window.location.pathname.replace(/index\.html$/, '');
    };

    const BASE_URL = getBasePath();

    const loadContent = async (path) => {
        contentArea.innerHTML = '<div class="loading-spinner"></div>'; // Show loading spinner
        let markdownPath = `${BASE_URL}content/`;

        if (!path || path === 'home') {
            path = 'home'; // Ensure 'home' is the path if not specified or explicitly home
        }

        markdownPath += `${path}.md`;

        try {
            const response = await fetch(markdownPath);
            if (!response.ok) {
                throw new Error(`Failed to fetch ${markdownPath}: ${response.statusText}`);
            }
            const markdownText = await response.text();
            contentArea.innerHTML = marked.parse(markdownText);
        } catch (error) {
            console.error("Error loading markdown content:", error);
            contentArea.innerHTML = marked.parse(`# Error\nFailed to load documentation for "${path}".\nPlease check the URL or try navigating from the home page.`);
        } finally {
            window.scrollTo(0, 0); // Scroll to top after loading content or error
        }
    };

    // Handle navigation clicks (using hash for routing)
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const path = link.getAttribute('data-path');
            window.location.hash = path;
        });
    });

    siteTitle.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.hash = 'home';
    });

    // Handle hash changes for routing
    const handleHashChange = () => {
        const hash = window.location.hash.substring(1); // Remove '#'
        if (hash) {
            loadContent(hash);
        } else {
            loadContent('home'); // Default to home if no hash
        }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Initial content load based on hash or default to home
    if (window.location.hash) {
        handleHashChange();
    } else {
        loadContent('home');
    }
});