// app.js
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const icon = button.querySelector('.plus-icon');
  
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        icon.textContent = '+';
      } else {
        answer.style.display = 'block';
        icon.textContent = '-';
      }
    });
  });
  
  // Function to play video in modal
  function playVideo(videoSrc) {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('movie-video');
    
    video.src = videoSrc;
    modal.style.display = 'flex';
    video.play();
}

// Function to close the video modal
function closeModal() {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('movie-video');
    
    video.pause();
    modal.style.display = 'none';
}

// Function to scroll right
function scrollRight() {
    const activeSection = document.querySelector('.movies.active, .tv-shows.active');
    activeSection.scrollBy(300, 0);
}

// Function to scroll left
function scrollLeft() {
    const activeSection = document.querySelector('.movies.active, .tv-shows.active');
    activeSection.scrollBy(-300, 0);
}

// Function to toggle between movies and TV shows
function toggleMoviesTVShows() {
    const moviesSection = document.querySelector('.movies');
    const tvShowsSection = document.querySelector('.tv-shows');
    const toggleButton = document.getElementById('toggle-button');
    
    if (moviesSection.classList.contains('active')) {
        // Show TV shows, hide movies
        moviesSection.classList.remove('active');
        tvShowsSection.classList.add('active');
        toggleButton.textContent = "Switch to Cinametic";
    } else {
        // Show movies, hide TV shows
        tvShowsSection.classList.remove('active');
        moviesSection.classList.add('active');
        toggleButton.textContent = "Switch to Edits";
    }
}

// Function to open the info modal
function showInfo(title, description, imgSrc) {
  const modal = document.getElementById('info-modal');
  document.getElementById('info-title').textContent = title;
  document.getElementById('info-description').textContent = description;
  document.getElementById('info-image').src = imgSrc;
  modal.style.display = 'flex';
}

// Function to close the info modal
function closeInfoModal() {
  const modal = document.getElementById('info-modal');
  modal.style.display = 'none';
}

// Function to scroll right
function scrollRightContent() {
  const activeSection = document.querySelector('.movie-section.active, .tv-show-section.active');
  activeSection.scrollBy(300, 0);
}

// Function to scroll left
function scrollLeftContent() {
  const activeSection = document.querySelector('.movie-section.active, .tv-show-section.active');
  activeSection.scrollBy(-300, 0);
}

// Function to toggle between movies and TV shows
function toggleMoviesShows() {
  const movieSection = document.querySelector('.movie-section');
  const tvShowSection = document.querySelector('.tv-show-section');
  const toggleButton = document.getElementById('toggle-content-button');
  
  if (movieSection.classList.contains('active')) {
      // Show TV shows, hide movies
      movieSection.classList.remove('active');
      tvShowSection.classList.add('active');
      toggleButton.textContent = "Switch to Cinematographer";
  } else {
      // Show movies, hide TV shows
      tvShowSection.classList.remove('active');
      movieSection.classList.add('active');
      toggleButton.textContent = "Switch to Editor";
  }
}