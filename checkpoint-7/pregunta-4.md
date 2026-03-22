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

# Pregunta 4

<details open>

<summary>¿Qué es un condicional?</summary>

<figure><img src="../.gitbook/assets/intro_1.jpg" alt=""><figcaption></figcaption></figure>

Los condicionales en JavaScript (if, else, else if, switch) permiten controlar el flujo de ejecución del programa, tomando decisiones basadas en condiciones verdaderas o falsas. Evalúan expresiones lógicas (comparando valores con ==, ===, >, <, etc.) para ejecutar bloques de código específicos.

_Esquema del funcionamiento de los condicionales_

![](../.gitbook/assets/esquema_js_condicionales.png)\
[Fuente: Javascript info](https://es.javascript.info/ifelse)

**if**\
Ejecuta código solo si se cumple una condición.

_Ejemplo:_

```
if (age > 18) {
  console.log("Puede votar");
}
```

**else**\
Define un bloque de código a ejecutar si la condición del if es falsa.

_Ejemplo:_

```
if (age > 20) {
  console.log("Puede votar");
} else {
  console.log("Aún no puede votar");
}
```

**else if**\
Para múltiples condiciones, comprueba una nueva condición si la anterior fue falsa.

_Ejemplo:_

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
