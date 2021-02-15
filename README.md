
# Instruções de instalação e uso da Aplicação ... 

## APPLICATION CREATED WITH REACT.JS
### AMBIENTE DE DESENVOLVIMENTO

* Tecnologias Utilizadas

 -- REACT JS

 -- webpack

 -- babel 

 -- style-loader  
 
 -- css-loader


 #

1. Instalação do WEBPACK
```shell
npm install -D webpack webpack-cli 
```
criar arquivo webpack.config.js no diretório raiz
```webpack.config.js
const path = require('path')
module.exports ={
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}
```
no package.json criar o script 'build'
```package.json
"build": "webpack --config webpack.config.js"
```
executar no shell 
```shell
 npm run build 
```
#
2. Instalação do BABEL

ref: https://babeljs.io/setup#installation

``` shell
npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react
```
criar arquivo babel.config.json no diretório raiz
```babel.config.json
 {
    "presets": ["@babel/preset-env", "@babel/preset-react"]
 }
```
inserir no arquivo webpack.config.js o script 
```webpack.config.js
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
  }
```
 IMPORTANTE! 

 na propriedade 'test' é onde se configura o type de arquivos como js, jsx entre outros.
 >'test: /\.( js | jsx )$/' 
 
 
### executar o script a baixo para inicializar o webpack + babel
```shell
 npm run build 
```

3. Instalação do React 
```shell
 npm install --save react react-dom
```

4. Configuração do style css 
```shell
 npm install -D style-loader css-loader  
```
inserir no arquivo webpack.config.js o script 
```
 {
   test: /\.css$/,
   use: ['style-loader', 'css-loader']
 }
```

# 

## COMO FICA O ARQUIVO FINAL
webpack.config.js 
```
const path = require('path')
module.exports ={
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"]
              }
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      }
}

```