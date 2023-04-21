# docsify-plugin-asciinema

Simple asciinema plugin for docsify.

You can include a asciinema player with image syntax

```
![mydemo](demos/demo1.cast "Demo 1: My asciinema demo.")
```

This plugin renders

```
<div id="mydemo" class="asciinema">
  <p>Demo 1: My asciinema demo.</p>
</div>
``` 

The plugin will process all `.asciinema` elements with the javascript player to play the recorded terminal commands.

## Usage

In your `index.html` docsify file, you should include the asciinema css

``` html
<link rel="stylesheet" href="css/asciinema-player.css"/>
```

in the `<head>` section, and the asciinema player and this script as

``` html
<script src="js/asciinema-player.min.js"></script>
<script src="js/docsify-plugin-asciinema.js"></script>
```
in the `<body>` section.

Enjoy!
