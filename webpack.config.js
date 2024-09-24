const path = require('path');

module.exports = {
  entry: './src/index.js', // Point d'entrée de ta bibliothèque
  output: {
    path: path.resolve(__dirname, 'dist'), // Dossier où les fichiers compilés seront stockés
    filename: '[name].js', // Nom du fichier généré
    library: 'ModaleLibrary', // Nom de la bibliothèque
    libraryTarget: 'umd', // UMD permet d'être compatible avec différents environnements (CommonJS, AMD, ou directement dans le navigateur)
    globalObject: 'this' // Utilisé pour UMD dans les environnements où `window` n'est pas disponible
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Extensions JS ou JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Résolution des extensions
  },
  externals: {
    react: 'react', // Exclut React de la compilation, on suppose que React est fourni par l'application qui utilise la bibliothèque
    'react-dom': 'react-dom'
  },
  mode: 'production', // Mode production pour optimiser le bundle
};
