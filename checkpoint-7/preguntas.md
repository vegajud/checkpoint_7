---
description: Documentación sobre JavaScript
hidden: true
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
---

# Preguntas

<details>

<summary>¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?</summary>

JavaScript se distingue principalmente por ser el lenguaje nativo e indispensable de los navegadores web, permitiendo interactividad en tiempo real (lado del cliente) sin necesidad de compilación previa. A diferencia de lenguajes compilados, es interpretado, dinámico y asíncrono, ejecutándose directamente donde el usuario interactúa. JavaScript no debe confundirse con Java; son lenguajes distintos con enfoques diferentes, siendo JS más ligero y flexible.

**Se ejecuta en cualquier navegador.**\
JavaScript es el único lenguaje que todos los principales navegadores web (como Google Chrome o Safari) entienden de forma nativa. No requiere instalación y se ejecuta instantáneamente en cualquier sitio web, lo que lo convirtió en el lenguaje predeterminado de la web.\
Otros lenguajes (como Python) necesitan capas adicionales para ejecutarse en los navegadores.

_Ejemplo de uso de Javascript en el navegador Chrome_

**Su diseño se basa en eventos.**\
JavaScript se creó para páginas web interactivas.\
Reacciona a eventos (clics, escritura, desplazamiento).\
Gestiona acciones como las llamadas a la API sin bloquear la aplicación.

**Utiliza herencia basada en prototipos.**\
A diferencia de lenguajes como Java o C++ (que usan clases), JavaScript se basa en prototipos.\
Los objetos heredan directamente de otros objetos.\
Es más flexible, pero también puede resultar confuso al principio. El JavaScript moderno tiene sintaxis de clases, aunque internamente sigue utilizando prototipos.

**Es de flexible y dinámico.**\
No se declaran los tipos de las variables lo que lo hace flexible y rápido de escribir, pero también puede causar errores inesperados. Lenguajes como Java o C# son más estrictos en este aspecto.

**Las funciones son elementos fundamentales.**\
En JavaScript, las funciones pueden almacenarse en variables, pasarse como argumentos y ser devueltas por otras funciones, haciéndolas elementos clave.

_Estructura de una función en JavaScript_\
\
[Fuente: centrogeo](https://centrogeo.github.io/JSvis/12-Funciones.html)

**Cuenta con un ecosistema enorme (especialmente para la web).**\
No se limita a los navegadores, puede ejecutarse en servidores backend, aplicaciones móviles y de escritorio.

\
[Fuente: interviewbit](https://www.interviewbit.com/blog/javascript-applications/)

En resumen, JavaScript es diferente porque es el lenguaje de la web, está diseñado para la interacción y la capacidad de respuesta, prioriza la flexibilidad sobre la rigidez y puede ejecutarse tanto del lado del cliente como del servidor.

_Esquema de diferencias entre Javascript y Python, otro lenguaje aprendido en el curso:_

\
[Fuente:openxcell](https://www.openxcell.com/blog/javascript-vs-python/)

</details>

<details>

<summary>¿Cuáles son algunos tipos de datos JS?</summary>

En JavaScript, los tipos de datos son las distintas formas en que se puede almacenar información. Se dividen en dos grandes grupos: primitivos y objetos.

**Tipos de Datos Primitivos**

* String: Cadenas de caracteres, generalmente palabras o frases formadas entre comillas `""` o `''`.

Ejemplo:

```
var saludo = "Hello world."
```

* Number: Valores numéricos enteros o decimales.

Ejemplo:

```
var edad = 25;
var precio = 19.99;
```

* Boolean: responde a los valores true o false.

Ejemplo:

```
var menorQue = true;
```

* Null: Representa un valor nulo o vacío intencional.

Ejemplo:

```
var resultado = null;
```

* Undefined: Valor automático de una variable declarada pero no inicializada.

Ejemplo:

```
var x;
console.log(x); // undefined
```

* BigInt: Números enteros extremadamente grandes que\
  superan el límite de Number.

Ejemplo:

```
var numeroGrande = 123456789012345678901234567890n;
```

* Symbol (poco común): Identificadores únicos y anónimos, a menudo usados como claves de propiedades.

Ejemplo:

```
var id = Symbol("id");
```

**Tipos de Datos Referenciales (Objetos)**

* Object: Estructuras de datos complejas que agrupan pares clave-valor.

Ejemplo:

```
var usuario = {
  nombre: "Ana",
  edad: 25
};
```

* Array: Un tipo especial de objeto para almacenar listas ordenadas de valores.

Ejemplo:

```
var numeros = [1, 2, 3, 4];
```

* Function/función: Bloques de código ejecutables que también son objetos.

Ejemplo:

```
function saludar() {
  console.log("Hola");
}
```

\
[Fuente: video Youtube](https://www.youtube.com/watch?v=sJtBOfj9fpM)

</details>

<details>

<summary>¿Cuáles son las tres funciones de String en JS?</summary>

Tres funciones fundamentales de cadena (String) en JavaScript para manipular texto son slice(), replace() y trim(). Estas permiten extraer partes, cambiar texto y limpiar espacios, respectivamente.

* slice(inicio, fin): Extrae una sección de una cadena y devuelve una nueva cadena, desde la posición inicio hasta la posición fin (sin incluirla).

Ejemplo:

```
"I am happy".slice(0,4); \\Respuesta: "I am"
```

* replace(valorBusqueda, valorNuevo): Busca una subcadena o expresión regular dentro de la cadena y reemplaza la primera coincidencia por un nuevo valor.

Ejemplo:

```
"¡Hola mundo!".replace("mundo", "Asier"); //Respuesta: "¡Hola Asier!"
```

* trim(): Elimina los espacios en blanco (espacios, tabulaciones, saltos de línea) tanto del principio como del final de una cadena.

Ejemplo:

```
"  hola  ".trim(); //Respuesta: "hola"
```

Otras funciones muy utilizadas incluyen toUpperCase() (a mayúsculas), split() (dividir en array) y concat() (unir cadenas). También existen otras para manipular el texto y convertir todo en mayúsculas o en minúsculas, llamadas toUpperCase() y toLowerCase(), respectivamente.

</details>

<details>

<summary>¿Qué es un condicional?</summary>

Los condicionales en JavaScript (if, else, else if, switch) permiten controlar el flujo de ejecución del programa, tomando decisiones basadas en condiciones verdaderas o falsas. Evalúan expresiones lógicas (comparando valores con ==, ===, >, <, etc.) para ejecutar bloques de código específicos.

_Esquema del funcionamiento de los condicionales_

\
[Fuente: Javascript info](https://es.javascript.info/ifelse)

**if**\
Ejecuta código solo si se cumple una condición.

Ejemplo:

```
if (age > 18) {
  console.log("Puede votar");
}
```

**else**\
Define un bloque de código a ejecutar si la condición del if es falsa.

Ejemplo:

```
if (age > 20) {
  console.log("Puede votar");
} else {
  console.log("Aún no puede votar");
}
```

**else if**\
Para múltiples condiciones, comprueba una nueva condición si la anterior fue falsa.

Ejemplo:

```
var nota = 7;

if (nota >= 9) {
  console.log("Sobresaliente");
} else if (nota >= 5) {
  console.log("Aprobado");
} else {
  console.log("Suspenso");
}
```

</details>

<details>

<summary>¿Qué es un operador ternario?</summary>

El operador ternario en JavaScript es una forma concisa de escribir sentencias _if...else_ en una sola línea. Evalúa una condición y devuelve un valor si es verdadera, u otro si es falsa. Se llama “ternario” porque utiliza tres partes: `condición ? valor_si_verdadero : valor_si_falso`.

Primero evalúa la condición. Si es verdadera, entonces devolverá el primer valor; si es falsa devolverá el segundo valor.

Ejemplo:

```
var edad = 18;
var menu = (edad >= 12) ? "Estándar" : "Niños";

console.log(menu);
```

Sin ser un operador ternario, el código se vería de la siguiente manera:

```
var edad = 18 // Respuesta: Estándar
var menu;
if (edad >= 12) {
  menu = "Estándar";
} else {
  menu = "Niños";
}
```

En resumen, los operadores ternarios hacen el código más conciso, lo cual es útil para asignaciones rápidas basadas en condiciones simples, aunque se recomienda evitarlo si la lógica es compleja, porque puede dificultar la lectura.

</details>

<details>

<summary>¿Cuál es la diferencia entre una declaración de función y una expresión de función?</summary>

La principal diferencia radica en cómo se definen y cuándo están disponibles en el código: las declaraciones de función se cargan antes de ejecutar el código, permitiendo llamarlas antes de definirlas. Las expresiones de función se cargan al llegar a esa línea, obligando a definirlas antes de su uso. Además, las declaraciones requieren nombre, mientras las expresiones pueden ser anónimas. Para tener una perspectiva más visual, aquí se pueden ver sus diferencias:

Una declaración de función (o _Function Declaration_) se define usando la palabra clave _function_ con un nombre:

Ejemplo

```
function calcRectArea(ancho, alto) {
  return ancho * alto;
}

console.log(calcRectArea(5, 6));
```

_Respuesta_

```
30
```

Por lo tanto, tienen obligatoriamente un nombre, y se pueden usar antes de declararlas (gracias al _hoisting_ o _elevación_).

Por otro lado, con una expresión de función (o Function Expression), se asigna una función a una variable:

Ejemplo

```
var getRectArea = function (ancho, alto) {
  return ancho * alto;
};

console.log(getRectArea(5, 6));
```

_Respuesta_

```
30
```

Al contrario que una declaración de función, las expresiones de función pueden ser anónimas (sin asignar nombre), pero se pueden usar antes de declararlas.

Cada una tiene su modo de uso y su lugar, en resumen una declaración se “carga” antes de ejecutar el código, lo que la hace más flexible, mientras que una expresión se crea en tiempo de ejecución, ofreciendo mayor control.

</details>

<details>

<summary>¿Qué es la palabra clave "this" en JS?</summary>

La palabra clave `this` en JavaScript hace referencia al objeto actual que está ejecutando o llamando a una función en un momento determinado. Su valor no es fijo: depende de cómo se invoca la función, no de dónde está escrita, actuando como el contexto de ejecución.

Ejemplo

```
var persona = {
  nombre: "Laura",
  decirNombre: function() {
    console.log(this.nombre);
  }
};

persona.decirNombre();
```

_Respuesta_

```
Laura
```

En el ejemplo, `this` se refiere al objeto que llama al método, en este caso `persona`.

</details>
