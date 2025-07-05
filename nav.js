function loadNavigation() {
    const nav = `
    <div class="navigation-bar general-text big-gap">
        <div class="horizontal-even-flex general-text">
            <div class="hoverbutton"><a class="nav-link" href="index.html">Home</a></div>
            <div class="hoverbutton"><a class="nav-link" href="aboutme.html">About Me</a></div>
            <div class="hoverbutton"><a class="nav-link" href="projects.html">Projects</a></div>
            <div class="hoverbutton"><a class="nav-link" href="contact.html">Contact</a></div>
        </div>
        <div class="horizontal-even-flex small-gap">
            <div class="nonbutton"><img src="assets/moon.png" width="20" height="20"></div>
            <div class="nonbutton">Talia Feng</div>
        </div>
    </div>`;
    document.getElementById('nav-placeholder').innerHTML = nav;
}

document.addEventListener('DOMContentLoaded', loadNavigation);