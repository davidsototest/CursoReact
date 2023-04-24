Todo el material, desarrollos y ejemplos del curso de Udemy. React. de cero a experto. 

link importantes:
1. https://gist.github.com/Klerith/4a4abfd88a88b2d1f16efd95fea41362
2. https://gist.github.com/Klerith/b0111f52ba16451d095f38d4c995605b
3. https://create-react-app.dev/

instalar los prop-types
nos sirve para declarar el tipo a las properis
- yarn add prop-types

instalar las dependencias de jest
jest: para las pruebas unitarias. 
- yarn add --dev jest
agregar en el package.json:
{
  "scripts": {
    "test": "jest"
  }
}

instalar el menu de intelicence para que muestre
la ayuda al momento de escribir codigo.
- yarn add -D @types/jest

instalar esta dependencia: para poder usar yard
- yarn add --dev babel-jest @babel/core @babel/preset-env

luego: Configure Babel para orientar su versión actual de Node creando un archivo babel.config.js en la raíz de su proyecto:
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

