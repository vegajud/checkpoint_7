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

# Pregunta 7

<details open>

<summary>¿Qué es la palabra clave "this" en JS?</summary>

<figure><img src="../.gitbook/assets/intro_4 (1).jpg" alt=""><figcaption></figcaption></figure>

La palabra clave `this` en JavaScript hace referencia al objeto actual que está ejecutando o llamando a una función en un momento determinado. Su valor no es fijo: depende de cómo se invoca la función, no de dónde está escrita, actuando como el contexto de ejecución.

_Ejemplo:_

```
var persona = {
  nombre: "Laura",
  decirNombre: function() {
    console.log(this.nombre);
  }
};

persona.decirNombre();
```

_Respuesta:_

```
Laura
```

En el ejemplo, `this` se refiere al objeto que llama al método, en este caso `persona`.

</details>
