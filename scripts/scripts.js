// The pages object will be available from pages-content.js
// which we'll include in the HTML file
function loadPage(pageName) {
    const content = pages[pageName];
    if (content) {
        document.getElementById('content').innerHTML = content;
        updateTitle(pageName);
        updateStylesheet(pageName);
    } else {
        console.error(`Page "${pageName}" not found`);
    }
}

function updateTitle(pageName) {
    const titles = {
        home: "Travis Wood",
        about_me: "About Travis",
        my_projects: "Travis' Projects"
    };
    document.title = titles[pageName] || "Travis Wood";
}

function updateStylesheet(pageName) {
    const link = document.querySelector('link');
    link.href = `../styles/${pageName}.css`;
}

function home() {
    loadPage('home');
}

function aboutMe() {
    loadPage('about_me');
}

function myProjects() {
    loadPage('my_projects');
}


