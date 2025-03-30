// Exporta la funcionalidad de bulma-lazy
const sass = require('node-sass');
const fs = require('fs');

// Compila el SCSS a CSS
const result = sass.renderSync({
  file: './bulma-lazy.scss',
  outputStyle: 'compressed'
});

// Escribe el CSS compilado en un archivo
fs.writeFileSync('./bulma-lazy.css', result.css);

// Exporta el CSS compilado
module.exports = result.css;
