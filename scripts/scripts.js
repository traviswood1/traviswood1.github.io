// Grabs content using the global window.pages object from pages-content.js

// Function to load page content
function loadPage(pageName) {
    // Get the content for the specified page from the global 'pages' object
    const content = pages[pageName];
    if (content) {
        // If content exists, update the 'content' element with the new HTML
        document.getElementById('content').innerHTML = content;
        // Update the page title
        updateTitle(pageName);
        // Update the stylesheet for the new page
        updateStylesheet(pageName);
    } else {
        // Log an error if the page content is not found
        console.error(`Page "${pageName}" not found`);
    }
}

// Function to update the page title
function updateTitle(pageName) {
    // Object containing page-specific titles
    const titles = {
        home: "Travis Wood",
        about_me: "About Travis",
        my_projects: "Travis' Projects"
    };
    // Set the document title to the corresponding title or default to "Travis Wood"
    document.title = titles[pageName] || "Travis Wood";
}

// Function to update the stylesheet based on the current page
function updateStylesheet(pageName) {
    // Select the first <link> element in the document
    const link = document.querySelector('link');
    // Update the href attribute to point to the page-specific CSS file
    link.href = `../styles/${pageName}.css`;
}

// Function to load the home page
function home() {
    loadPage('home');
}

// Function to load the about me page
function aboutMe() {
    loadPage('about_me');
}

// Function to load the my projects page
function myProjects() {
    loadPage('my_projects');
}


