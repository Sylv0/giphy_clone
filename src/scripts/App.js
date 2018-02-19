import Giphy from './utils/Giphy';

export default class App {
  constructor(searchForm) {
    this.giphy = new Giphy();
    this.searchForm = searchForm;
    this.searchForm.addEventListener('submit', this.onSubmit.bind(this));
  }

  onSubmit(e) {
    e.preventDefault();
    document.querySelector('.gallery').innerHTML = "";
    document.querySelector('.not-found').innerHTML = '';
    this.giphy.search(e.target[0].value).then(res => {
      if (res.data.length == 0) {
        document.querySelector('.not-found').innerHTML = `No result found for query "${e.target[0].value}".`;
      } else {
        res.data.forEach(img => {
          let vid = document.createElement('video');
          vid.setAttribute('src', img.images.original_mp4.mp4);
          document.querySelector('.gallery').appendChild(vid);
          vid.addEventListener('mouseenter', e => {
            e.target.play();
            e.target.setAttribute('loop', 'true');
          });
          vid.addEventListener('mouseleave', e => {
            e.target.removeAttribute('loop');
          });
        });
      }
    });

  }
}