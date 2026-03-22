function calcular(a, b, c, d) {
  const suma1 = a + b;
  const suma2 = c + d;
  const resultado = suma1 * suma2;

  if (resultado > 50) {
    console.log("¡El número es mayor que 50!");
  } else if (resultado < 50) {
    console.log("¡El número es menor que 50!");
  } else {
    console.log("¡El número es exactamente 50!");
  }

  return resultado;
}

// Ejemplo de uso:
calcular(5, 5, 3, 2); // ¡El número es exactamente 50! - 50

calcular(1, 1, 3, 5); // ¡El número es menor que 50! - 16

calcular(8, 3, 3, 8);// ¡El número es mayor que 50! - 121