(function () {
'use strict';

var search_timeout = void 0;

var Search = function Search(query) {
  clearTimeout(search_timeout);
  if (query.length < 1) return;
  return "Searcging for " + query;
};

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

  document.querySelector(".search__input").addEventListener('keyup', function (e) {
    console.log(Search(e.target.value));
  });
}

// We setup two listeners for better browser support.
document.addEventListener('DOMContentLoaded', bootstrap);
window.addEventListener('load', bootstrap);

}());
//# sourceMappingURL=giphy.js.map
