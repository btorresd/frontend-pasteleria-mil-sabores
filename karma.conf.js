// karma.conf.js (Ejemplo Básico)
module.exports = function(config) {
  config.set({
    // 1. Frameworks
    frameworks: ['jasmine'],

    // 2. Archivos a cargar
    files: [
      // Archivo de la lógica a probar
      'src/utils/validacionRegistro.js', 
      // Archivo de las pruebas
      'spec/validacionRegistro.spec.js'  
    ],

    // 3. Preprocesadores (necesario si usas 'export' o 'import')
    preprocessors: {
      'src/utils/validacionRegistro.js': ['webpack'],
      'spec/validacionRegistro.spec.js': ['webpack']
    },

    // 4. Configuración de Webpack (para manejar imports/exports)
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
    },

    // 5. Opciones de salida
    reporters: ['progress'],
    browsers: ['Chrome'],
    // ... otras opciones
  });
};