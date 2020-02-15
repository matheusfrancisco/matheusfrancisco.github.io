webpackHotUpdate("styles",{

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"menu":"menu___1A-oB","content":"content___jjEJ5","profile":"profile___3hpHJ","profile__img":"profile__img___2o6-n","profile__info":"profile__info___34gEJ","profile__info__name":"profile__info__name___2x6MI","profile__info__work":"profile__info__work___1XbrG","profile__info__contact":"profile__info__contact___XNpmm","profile__info__social":"profile__info__social___3g1P8","contacts__list":"contacts__list___1EA5y"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1581647526955");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.ea9c15cafe032a7f7872.hot-update.js.map