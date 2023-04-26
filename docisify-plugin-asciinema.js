(function () {
    var asciinemaPlugin = function (hook, vm) {
      
      // Invoked on each page load after new HTML has been appended to the DOM
      hook.doneEach(function () {
        const asciinemaElements = document.getElementsByClassName('asciinema');
        for (let e of asciinemaElements) {
            AsciinemaPlayer.create(e.dataset.value, e);
        }
      });

    };
  
    // Add plugin to docsify's plugin array
    $docsify = $docsify || {};
    $docsify.plugins = [].concat(asciinemaPlugin, $docsify.plugins || []);

    // add docsify markdown image renderer to generate an asciinema element
    let oldImgRenderer = marked.renderer.image;
    $docsify.markdown.renderer.image = function(href, title, text) {
      if (href.endsWith('.cast')) {
          // generate div for asciinema player
          const attrs = `id=${text} data-value="${href}"`;
          let html = `<div ${attrs} class="asciinema"></div>\n`;
          return html + `<p class="caption">${title}</p>\n`;
      }
      return oldImgRenderer(href, title, text);
    }
  })();
