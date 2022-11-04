/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var speakers = document.querySelectorAll('.speaker');
  speakers.forEach(function (speaker) {
    configureSpeaker(speaker);
  });

  function configureSpeaker(speaker) {
    var bioLink = speaker.querySelector('.js-speaker-bio-link');
    var abstractLink = speaker.querySelector('.js-speaker-abstract-link');
    var bioContent = speaker.querySelector('.js-speaker-bio-content');
    var abstractContent = speaker.querySelector('.js-speaker-abstract-content');
    var lightboxContainer = speaker.querySelector('.speaker-lightbox-content');
    var dismissLightbox = speaker.querySelector('.dismiss');
    bioLink.addEventListener('click', function (e) {
      e.preventDefault();
      launchLightbox(lightboxContainer);
      openBio(bioContent, abstractContent);
    }, false);
    abstractLink.addEventListener('click', function (e) {
      e.preventDefault();
      launchLightbox(lightboxContainer);
      openAbstract(bioContent, abstractContent);
    }, false);
    dismissLightbox.addEventListener('click', function (e) {
      e.preventDefault();
      closeLightbox(lightboxContainer);
    });
  }

  function openBio(bioContent, abstractContent) {
    bioContent.style.display = "block";
    abstractContent.style.display = "none";
  }

  function openAbstract(bioContent, abstractContent) {
    bioContent.style.display = "none";
    abstractContent.style.display = "block";
  }

  function launchLightbox(lightboxContainer) {
    lightboxContainer.classList.add('open');
    document.addEventListener('keyup', function (e) {
      closeLightbox(lightboxContainer);
    }, false);
  }

  function closeLightbox(lightboxContainer) {
    lightboxContainer.classList.remove('open');
    lightboxContainer.querySelector(".js-speaker-bio-content").style.display = "none";
    lightboxContainer.querySelector(".js-speaker-abstract-content").style.display = "none";
  }
})();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyJdLCJuYW1lcyI6WyJzcGVha2VycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJzcGVha2VyIiwiY29uZmlndXJlU3BlYWtlciIsImJpb0xpbmsiLCJxdWVyeVNlbGVjdG9yIiwiYWJzdHJhY3RMaW5rIiwiYmlvQ29udGVudCIsImFic3RyYWN0Q29udGVudCIsImxpZ2h0Ym94Q29udGFpbmVyIiwiZGlzbWlzc0xpZ2h0Ym94IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxhdW5jaExpZ2h0Ym94Iiwib3BlbkJpbyIsIm9wZW5BYnN0cmFjdCIsImNsb3NlTGlnaHRib3giLCJzdHlsZSIsImRpc3BsYXkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FB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anMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9idW5kbGUuanNcIik7XG4iLCIoZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc3BlYWtlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3BlYWtlcicpO1xuXG5cbiAgICBzcGVha2Vycy5mb3JFYWNoKHNwZWFrZXIgPT4ge1xuICAgICAgICBjb25maWd1cmVTcGVha2VyKHNwZWFrZXIpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gY29uZmlndXJlU3BlYWtlcihzcGVha2VyKSB7XG4gICAgICAgIGxldCBiaW9MaW5rID0gc3BlYWtlci5xdWVyeVNlbGVjdG9yKCcuanMtc3BlYWtlci1iaW8tbGluaycpO1xuICAgICAgICBsZXQgYWJzdHJhY3RMaW5rID0gc3BlYWtlci5xdWVyeVNlbGVjdG9yKCcuanMtc3BlYWtlci1hYnN0cmFjdC1saW5rJyk7XG5cbiAgICAgICAgbGV0IGJpb0NvbnRlbnQgPSBzcGVha2VyLnF1ZXJ5U2VsZWN0b3IoJy5qcy1zcGVha2VyLWJpby1jb250ZW50Jyk7XG4gICAgICAgIGxldCBhYnN0cmFjdENvbnRlbnQgPSBzcGVha2VyLnF1ZXJ5U2VsZWN0b3IoJy5qcy1zcGVha2VyLWFic3RyYWN0LWNvbnRlbnQnKTtcblxuICAgICAgICBsZXQgbGlnaHRib3hDb250YWluZXIgPSBzcGVha2VyLnF1ZXJ5U2VsZWN0b3IoJy5zcGVha2VyLWxpZ2h0Ym94LWNvbnRlbnQnKTtcbiAgICAgICAgbGV0IGRpc21pc3NMaWdodGJveCA9IHNwZWFrZXIucXVlcnlTZWxlY3RvcignLmRpc21pc3MnKTtcblxuICAgICAgICBiaW9MaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGF1bmNoTGlnaHRib3gobGlnaHRib3hDb250YWluZXIpO1xuICAgICAgICAgICAgb3BlbkJpbyhiaW9Db250ZW50LCBhYnN0cmFjdENvbnRlbnQpO1xuICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgYWJzdHJhY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGF1bmNoTGlnaHRib3gobGlnaHRib3hDb250YWluZXIpO1xuICAgICAgICAgICAgb3BlbkFic3RyYWN0KGJpb0NvbnRlbnQsIGFic3RyYWN0Q29udGVudCk7XG4gICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICBkaXNtaXNzTGlnaHRib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7IFxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VMaWdodGJveChsaWdodGJveENvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBvcGVuQmlvKGJpb0NvbnRlbnQsIGFic3RyYWN0Q29udGVudCkge1xuICAgICAgICBiaW9Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGFic3RyYWN0Q29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3BlbkFic3RyYWN0KGJpb0NvbnRlbnQsIGFic3RyYWN0Q29udGVudCkge1xuICAgICAgICBiaW9Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgYWJzdHJhY3RDb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGF1bmNoTGlnaHRib3gobGlnaHRib3hDb250YWluZXIpIHtcbiAgICAgICAgbGlnaHRib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGNsb3NlTGlnaHRib3gobGlnaHRib3hDb250YWluZXIpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VMaWdodGJveChsaWdodGJveENvbnRhaW5lcikge1xuICAgICAgICBsaWdodGJveENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgIGxpZ2h0Ym94Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuanMtc3BlYWtlci1iaW8tY29udGVudFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGxpZ2h0Ym94Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuanMtc3BlYWtlci1hYnN0cmFjdC1jb250ZW50XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==