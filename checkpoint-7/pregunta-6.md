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

# Pregunta 6

<details open>

<summary>¿Cuál es la diferencia entre una declaración de función y una expresión de función?</summary>

<figure><img src="../.gitbook/assets/intro_3 (1).jpg" alt=""><figcaption></figcaption></figure>

La principal diferencia radica en cómo se definen y cuándo están disponibles en el código: las declaraciones de función se cargan antes de ejecutar el código, permitiendo llamarlas antes de definirlas. Las expresiones de función se cargan al llegar a esa línea, obligando a definirlas antes de su uso. Además, las declaraciones requieren nombre, mientras las expresiones pueden ser anónimas. Para tener una perspectiva más visual, aquí se pueden ver sus diferencias:

Una declaración de función (o _Function Declaration_) se define usando la palabra clave _function_ con un nombre:

_Ejemplo:_

```
function calcRectArea(ancho, alto) {
  return ancho * alto;
}

console.log(calcRectArea(5, 6));
```

_Respuesta:_

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
