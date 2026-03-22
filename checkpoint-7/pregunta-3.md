---
description: Documentación sobre JavaScript
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

# Pregunta 3

<details open>

<summary>¿Cuáles son las tres funciones de String en JS?</summary>

Tres funciones fundamentales de cadena (String) en JavaScript para manipular texto son slice(), replace() y trim(). Estas permiten extraer partes, cambiar texto y limpiar espacios, respectivamente.

* slice(inicio, fin): Extrae una sección de una cadena y devuelve una nueva cadena, desde la posición inicio hasta la posición fin (sin incluirla).

_Ejemplo:_

```
"I am happy".slice(0,4); \\Respuesta: "I am"
```

* replace(valorBusqueda, valorNuevo): Busca una subcadena o expresión regular dentro de la cadena y reemplaza la primera coincidencia por un nuevo valor.

_Ejemplo:_

```
"¡Hola mundo!".replace("mundo", "Asier"); //Respuesta: "¡Hola Asier!"
```

* trim(): Elimina los espacios en blanco (espacios, tabulaciones, saltos de línea) tanto del principio como del final de una cadena.

_Ejemplo:_

```
"  hola  ".trim(); //Respuesta: "hola"
```

Otras funciones muy utilizadas incluyen toUpperCase() (a mayúsculas), split() (dividir en array) y concat() (unir cadenas). También existen otras para manipular el texto y convertir todo en mayúsculas o en minúsculas, llamadas toUpperCase() y toLowerCase(), respectivamente.

</details>
