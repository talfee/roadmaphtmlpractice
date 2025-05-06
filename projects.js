const buttons = document.querySelectorAll('button[data-filter]');
const projects = document.querySelectorAll('.card');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        projects.forEach((project) => {
            const tags = project.dataset.tags.split(',');
            project.style.display = (filter === 'all' || tags.includes(filter)) ? 'block' : 'none';
        });
    });
});
