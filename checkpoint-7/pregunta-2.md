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

# Pregunta 2

<details open>

<summary>¿Cuáles son algunos tipos de datos JS?</summary>

En JavaScript, los tipos de datos son las distintas formas en que se puede almacenar información. Se dividen en dos grandes grupos: primitivos y objetos.

**Tipos de Datos Primitivos**

* String: Cadenas de caracteres, generalmente palabras o frases formadas entre comillas `""` o `''`.

_Ejemplo:_

```
var saludo = "Hello world."
```

* Number: Valores numéricos enteros o decimales.

_Ejemplo:_

```
var edad = 25;
var precio = 19.99;
```

* Boolean: responde a los valores true o false.

_Ejemplo:_

```
var menorQue = true;
```

* Null: Representa un valor nulo o vacío intencional.

_Ejemplo:_

```
var resultado = null;
```

* Undefined: Valor automático de una variable declarada pero no inicializada.

_Ejemplo:_

```
var x;
console.log(x); // undefined
```

* BigInt: Números enteros extremadamente grandes que\
  superan el límite de Number.

_Ejemplo:_

```
var numeroGrande = 123456789012345678901234567890n;
```

* Symbol (poco común): Identificadores únicos y anónimos, a menudo usados como claves de propiedades.

_Ejemplo:_

```
var id = Symbol("id");
```

**Tipos de Datos Referenciales (Objetos)**

* Object: Estructuras de datos complejas que agrupan pares clave-valor.

_Ejemplo:_

```
var usuario = {
  nombre: "Ana",
  edad: 25
};
```

* Array: Un tipo especial de objeto para almacenar listas ordenadas de valores.

_Ejemplo:_

```
var numeros = [1, 2, 3, 4];
```

* Function/función: Bloques de código ejecutables que también son objetos.

_Ejemplo:_

```
function saludar() {
  console.log("Hola");
}
```

<figure><img src="../.gitbook/assets/datos_js.jpg" alt=""><figcaption></figcaption></figure>

[Fuente: video Youtube](https://www.youtube.com/watch?v=sJtBOfj9fpM)

</details>
