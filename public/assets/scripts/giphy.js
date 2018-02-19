(function () {
'use strict';

var GIPHY_API_KEY = "LouXV5IDYNZ3ozPSjsH3aEvFeUZHB68N";

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var Giphy = function () {
  function Giphy() {
    classCallCheck(this, Giphy);
  }

  createClass(Giphy, [{
    key: "search",
    value: function search(query) {
      return fetch("https://api.giphy.com/v1/gifs/search?api_key=" + GIPHY_API_KEY + "&q=" + query).then(function (res) {
        return res.json();
      }).then(function (res) {
        return res;
      });
    }
  }]);
  return Giphy;
}();

var App = function () {
  function App(searchForm) {
    classCallCheck(this, App);

    this.giphy = new Giphy();
    this.searchForm = searchForm;
    this.searchForm.addEventListener('submit', this.onSubmit.bind(this));
  }

  createClass(App, [{
    key: 'onSubmit',
    value: function onSubmit(e) {
      e.preventDefault();
      document.querySelector('.gallery').innerHTML = "";
      document.querySelector('.not-found').innerHTML = '';
      this.giphy.search(e.target[0].value).then(function (res) {
        if (res.data.length == 0) {
          document.querySelector('.not-found').innerHTML = 'No result found for query "' + e.target[0].value + '".';
        } else {
          res.data.forEach(function (img) {
            var vid = document.createElement('video');
            vid.setAttribute('src', img.images.original_mp4.mp4);
            document.querySelector('.gallery').appendChild(vid);
            vid.addEventListener('mouseenter', function (e) {
              e.target.play();
              e.target.setAttribute('loop', 'true');
            });
            vid.addEventListener('mouseleave', function (e) {
              e.target.removeAttribute('loop');
            });
          });
        }
      });
    }
  }]);
  return App;
}();

/*
 * This file is part of Giphy.
 *
 * (c) Yrgo, högre yrkesutbildning.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

var LOADED = false;

/**
 * Bootstrap the application on load.
 *
 * @return {void}
 */
function bootstrap() {
  // We don't want to load our application twice.
  if (LOADED) {
    return;
  }

  LOADED = true;

  console.log('The Giphy application has been loaded.');

  // When the application is loaded we remove the event listeners.
  document.removeEventListener('DOMContentLoaded', bootstrap);
  window.removeEventListener('load', bootstrap);

  window.app = new App(document.forms[0]);

  // document.querySelector(".search__input").addEventListener('keyup', e => {
  //   console.log(Search(e.target.value));
  // });
}

// We setup two listeners for better browser support.
document.addEventListener('DOMContentLoaded', bootstrap);
window.addEventListener('load', bootstrap);

}());
//# sourceMappingURL=giphy.js.map
