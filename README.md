# Sofka: crud-react-example

Proyecto básico que implementa un CRUD con React apoyándose de React-hook-forms.

# Tecnologías utilizadas
- Visual Studio Code: 1.64.2
- NodeJS: 16.14.0
- React-Form-hook: 7

# Inicio del programa

Se ejecuta la aplicación con el comando: npm run start o npm start, abriendose en el navegador como: localhost:3000

![Submenu algoritmos](https://github.com/mdyagual/crud-react-example/blob/master/ss/main.JPG)

## Ingreso de nuevo usuario

![Submenu algoritmos](https://github.com/mdyagual/crud-react-example/blob/master/ss/addUser.JPG)

## Edición de usuario

- Antes

![Submenu algoritmos](https://github.com/mdyagual/crud-react-example/blob/master/ss/main.JPG)

- Después

![Submenu algoritmos](https://github.com/mdyagual/crud-react-example/blob/master/ss/editUser.JPG)

## Eliminar usuario

![Submenu algoritmos](https://github.com/mdyagual/crud-react-example/blob/master/ss/deleteUser.JPG)

# Validaciones

## Name y username son obligatorios

- Si estos campos no llegan a ingresarse, se muestra el mensaje 'Required'

![Submenu algoritmos](https://github.com/mdyagual/crud-react-example/blob/master/ss/addUserCtrl.JPG)

## Si el arreglo inicial estuviera vacío

- Al suceder esto se muestra lo siguiente (Importante: Esto pierde efecto más adelante por el useEffect())

![Submenu algoritmos](https://github.com/mdyagual/crud-react-example/blob/master/ss/initial-users-noUsers.JPG)

# Extra (voluntario)

## useffect()

- Se agregó useEffect() para no perder datos almacenados al momento de recargar la página. Se ingresa un usuario, se recarga la página y este continúa existiendo.

![Submenu algoritmos](https://github.com/mdyagual/crud-react-example/blob/master/ss/extraUseEffect.JPG)

![Submenu algoritmos](https://github.com/mdyagual/crud-react-example/blob/master/ss/extraUseEffect2.JPG)


# Conclusiones
- React hooks form ofrece facilidades durante el maquetado sencillo de cualquier aplicación, permitiendo aplicar la separación por componentes de acuerdo con las buenas prácticas de programación actuales.
- useState() permite aplicar la deconstrucción para poder manipular el estado y modificación del arreglo de forma rápida y sencilla al mezclarse incluso con arrow functions.
- El concepto de 'props' da vida al uso de componentes, ya que se comporta implicitamente como un conector al momento de crear el componente en el main, permitiendo utilizar funciones definidas en el mismo, o acceder a elementos de los objetos en cuestión

# Comentarios adicionales

- La guía perdió su valor introductorio cuando se detectó que la versión de react-hook-forms era inferior a la personalmente instalada, teniendo que tratar los componentes de Edit y Add cuando se usaba useForm() diferente a lo mostrado en el video al momento de validar los campos obligatorios; provocando pérdida de tiempo en la funcionalidad designada en estos componentes.

- Se presta para mejoras la aplicación de useEffect() en este escenario, ya que pruebas posteriores hacen que estos conceptos choquen con la validación de 'No users' mostrada anteriormente.

# Preguntas

- ¿Por qué existe preferencia en las arrow functions versus las funciones clásicas?
Porque permiten escribir de forma simplificada. Esto da lugar a ocasiones donde puede ser escrita en una línea de código (si es lo suficientemente simple), adicionalmente entre otras reducciones de texto como: No necesitas escribir la palabra clave function, escribir return (ya que hace return implicito de ser necesario) o escribir las llaves {}

- ¿Cómo se terminó resolviendo la particularidad de eliminación presentada al inicio de video?
Generando ids automáticamente con uuid; el problema era que cada que reiniciaba la página, se reiniciaba el contador designado a ser el id de cada usuario.

- ¿Cuál es el propósito del uso de componentes?
Aplicar el dicho de 'Divide y vencerás', dando lugar a buenas prácticas de programación y re-utilización de código. Además de facilitar la maquetación e integración de funcionalidades que javascript ofrece a cualquier página web.

- ¿Varía el concepto de componentes en otros frameworks de js como por ejemplo Angular?
No, realmente lo que varía es cómo se crear/programan dichos componentes para posteriormente integrarlo al resultado final.

#

Hecho con mucho entusiasmo para Sofka U~ (◕‿◕✿)

