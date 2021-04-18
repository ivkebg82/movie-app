const button = document.querySelector('.btn');
const content = document.querySelector('.content-data');

button.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('/movies').then((res) => {
    res.json().then((data) => {
      const movieData = data.data.movie_results;
      movieData.forEach((element) => {
        const { title, year, imdb_id } = element;
        const div = document.createElement('div');
        const paragraph = document.createElement('p');
        paragraph.classList.add('year');
        paragraph.textContent = year;
        div.classList.add('content');
        div.textContent = title;
        div.appendChild(paragraph);
        content.appendChild(div);
        //content.insertAdjacentHTML('beforeend', title + ' ' + year + '<br>');
      });
    });
  });
});
