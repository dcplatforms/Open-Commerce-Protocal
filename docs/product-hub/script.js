document.addEventListener('DOMContentLoaded', () => {
    const contentArea = document.getElementById('content-area');
    const navLinks = document.querySelectorAll('.main-nav a[data-path]');
    const siteTitle = document.querySelector('.site-title');
    const currentYearSpan = document.getElementById('current-year');

    currentYearSpan.textContent = new Date().getFullYear();

    // Initialize marked.js (Assuming it's loaded from lib/marked.min.js)
    if (typeof marked === 'undefined') {
        console.error("marked.js library not loaded. Please ensure lib/marked.min.js is accessible.");
        contentArea.innerHTML = marked.parse('# Error\nMarkdown parser not loaded. Cannot display content.');
        return;
    }

    const loadContent = async (path) => {
        let filePath = `/docs/product-hub/content/`;
        if (path === 'home') {
            // For home, we'll manually set content or fetch a specific home markdown if exists
            contentArea.innerHTML = `
                <h2>Welcome to the Open Commerce Protocol Product Hub</h2>
                <p>Explore the SDK, API documentation, integration guides, and security best practices for building secure and efficient open commerce applications.</p>
                <p>The Open Commerce Protocol (OCP) is an open-source SDK designed to revolutionize commerce enablement by providing a secure, tokenized payment system. It powers the Open Commerce Initiative (OCI), focusing on next-generation financial applications, particularly in "Agentic Commerce" and Web3-integrated wallets.</p>
                <p>OCP transforms traditional payment processing into a dynamic commerce layer, enabling businesses and developers to create autonomous agents with predefined spending limits, authorized counterparties, and trustless automation.</p>
                <h3>Get Started Today!</h3>
                <p>Head over to the <a href="#" data-path="getting-started">Getting Started</a> guide to begin your journey with OCP.</p>
            `;
            // Update browser history
            history.pushState({ path: 'home' }, '', '/');
            return;
        }

        filePath += `${path}.md`;

        try {
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`Failed to fetch ${filePath}: ${response.statusText}`);
            }
            const markdownText = await response.text();
            contentArea.innerHTML = marked.parse(markdownText); // Use marked.parse to convert markdown to HTML

            // Update browser history
            history.pushState({ path }, '', `?doc=${path}`);
            window.scrollTo(0, 0); // Scroll to top on new content load
        } catch (error) {
            console.error("Error loading markdown content:", error);
            contentArea.innerHTML = marked.parse(`# Error\nFailed to load documentation for "${path}".\nPlease check the URL or try navigating from the home page.`);
            // Update browser history for error state
            history.pushState({ path: 'error' }, '', `?doc=error&path=${path}`);
        }
    };

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const path = link.getAttribute('data-path');
            loadContent(path);
        });
    });

    siteTitle.addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('home');
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.path) {
            loadContent(event.state.path);
        } else if (window.location.search) {
            const params = new URLSearchParams(window.location.search);
            const docPath = params.get('doc');
            if (docPath) {
                loadContent(docPath);
            }
        } else {
            loadContent('home');
        }
    });

    // Initial content load based on URL or default to home
    const initialPath = new URLSearchParams(window.location.search).get('doc');
    if (initialPath) {
        loadContent(initialPath);
    } else {
        loadContent('home');
    }
});
