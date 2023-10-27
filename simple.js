document.addEventListener('DOMContentLoaded', function () {
    const resumeMain = document.querySelector('.resume-main');
    const profileInfo = document.querySelector('.content-box');
    const profileInfoTitle = document.querySelector('.content-box h2');

    // Change the background color of the resume-main when clicked
    resumeMain.addEventListener('click', function() {
        const colors = ['#FF5733', '#FFD733', '#33FF57', '#337DFF', '#F333FF'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        resumeMain.style.background = randomColor;
    });

    // Toggle the visibility of the Profile Info content when the title is clicked
    profileInfoTitle.addEventListener('click', function() {
        if (profileInfo.style.display === 'none') {
            profileInfo.style.display = 'block';
        } else {
            profileInfo.style.display = 'none';
        }
    });
});
