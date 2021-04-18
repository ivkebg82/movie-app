const button = document.querySelector('.btn');
const content = document.querySelector('.content-data');

function addClass(rate) {
  if (rate === 'tt7126948') {
    return 'green';
  } else {
    return 'content';
  }
}

button.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('/movies').then((res) => {
    res.json().then((data) => {
      const movieData = data.data.movie_results;

      console.log(movieData);
      movieData.forEach((element) => {
        const { title, year, imdb_id } = element;
        const div = document.createElement('div');
        const paragraph = document.createElement('p');
        paragraph.classList.add('year');
        paragraph.textContent = year;
        div.classList.add(addClass(imdb_id));
        div.textContent = title;
        div.appendChild(paragraph);
        content.appendChild(div);
        //content.insertAdjacentHTML('beforeend', title + ' ' + year + '<br>');
      });
    });
  });
});
