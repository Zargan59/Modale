const path = require('path');

module.exports = {
  entry: './src/index.js', // Point d'entrée de ta bibliothèque
  output: {
    path: path.resolve(__dirname, 'dist'), // Dossier où les fichiers compilés seront stockés
    filename: 'bundle.js', // Nom du fichier généré
    library: 'ModaleLibrary', // Nom de la bibliothèque
    libraryTarget: 'umd', // UMD permet d'être compatible avec différents environnements (CommonJS, AMD, ou directement dans le navigateur)
    globalObject: 'this' // Utilisé pour UMD dans les environnements où `window` n'est pas disponible
  },

  
  externals: {
    react: 'React',
    'react-dom/client': 'ReactDOM'
  },

  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,  // Ajout du CSS loader
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
  };
