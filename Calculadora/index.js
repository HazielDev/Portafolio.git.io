
let stat = 0;
let bar = document.getElementById("bar-text");
let metodo = document.getElementById("metodo");

function add(t){

bar.textContent = bar.textContent + t;

}

function del(){

bar.textContent = bar.textContent.slice(0, -1);

}

function change(){

if (stat >= 4){stat = 0;}else{stat++;}

switch(stat){

case 0: metodo.textContent = "Bisección"; break;
case 1: metodo.textContent = "Rhapson"; break;
case 2: metodo.textContent = "Fijo"; break;
case 3: metodo.textContent = "Secante"; break;
case 4: metodo.textContent = "Multiples"; break; 

}

}


function execute(){

switch(stat){

case 0: calcularBisección(); break;
case 1: calcularNewtonRaphson(); break;
case 2: calcularPuntoFijo(); break;
case 3: calcularSecante(); break;
case 4: calcularRaicesMultiples(); break;

}

}

function calcularNewtonRaphson() {
    var funcion = bar.textContent;
    var x = parseFloat(document.getElementById("x").value);
    var errorDeseado = parseFloat(document.getElementById("error").value);
    var iteraciones = parseInt(document.getElementById("iteraciones").value);
    var resultado = document.getElementById("resultado");


    resultado.innerHTML = ""; // Limpiar resultados anteriores

    // Crear función a partir de la expresión ingresada
    var f = math.parse(funcion).compile();

    // Crear función para evaluar la derivada de la función
    var df = math.derivative(funcion, 'x').compile();

    // Aplicar el método de Newton-Raphson
    var error = Number.POSITIVE_INFINITY;
    var i;

    if (!isNaN(iteraciones)) {
      // Realizar iteraciones según el número especificado
      for (i = 0; i < iteraciones && error > errorDeseado; i++) {
        var fx = f.evaluate({ x: x });
        var fpx = df.evaluate({ x: x });

        var iteracionActual = "Iteración " + (i + 1) + ": x = " + x + ", f(x) = " + fx;
        resultado.innerHTML += iteracionActual + "\n";

        if (fpx === 0) {
          resultado.innerHTML += "El método no converge (f'(x) = 0)";
          return;
        }

        var xNuevo = x - (fx / fpx);
        error = Math.abs(xNuevo - x);
        x = xNuevo;
      }
    } else if (!isNaN(errorDeseado)) {
      // Realizar iteraciones hasta que el error sea menor o igual al error deseado
      for (i = 0; error > errorDeseado; i++) {
        var fx = f.evaluate({ x: x });
        var fpx = df.evaluate({ x: x });

        var iteracionActual = "Iteración " + (i + 1) + ": x = " + x + ", f(x) = " + fx;
        resultado.innerHTML += iteracionActual + "\n";

        if (fpx === 0) {
          resultado.innerHTML += "El método no converge (f'(x) = 0)";
          return;
        }

        var xNuevo = x - (fx / fpx);
        error = Math.abs(xNuevo - x);
        x = xNuevo;
      }
    }

    if (error <= errorDeseado) {
      resultado.innerHTML += "La aproximación convergió: x ≈ " + x + " (Error absoluto < " + errorDeseado + " después de " + i + " iteraciones)";
    } else {
      resultado.innerHTML += "El método no converge después de " + i + " iteraciones";
    }
  }

function calcularBisección(){

var funcion = bar.textContent;
var a = parseFloat(document.getElementById("a").value);
var b = parseFloat(document.getElementById("b").value);
var errorDeseado = parseFloat(document.getElementById("error").value);
var iteraciones = parseInt(document.getElementById("iteraciones").value);
var resultado = document.getElementById("resultado");

resultado.innerHTML = ""; // Limpiar resultados anteriores

// Crear función a partir de la expresión ingresada
var f = math.parse(funcion).compile();

var fa = f.evaluate({ x: a });
var fb = f.evaluate({ x: b });

if (fa * fb >= 0) {
  resultado.innerHTML = "Los extremos a y b no encierran una raíz o hay una raíz múltiple en el intervalo.";
  return;
}

var error = Number.POSITIVE_INFINITY;
var i;

for (i = 0; i < iteraciones && error > errorDeseado; i++) {
  var x_medio = (a + b) / 2;
  var fx_medio = f.evaluate({ x: x_medio });

  var iteracionActual = "Iteración " + (i + 1) + ": x = " + x_medio + ", f(x) = " + fx_medio;
  resultado.innerHTML += iteracionActual + "\n";

  if (fx_medio === 0) {
    resultado.innerHTML += "Se encontró una raíz exacta.";
    return;
  }

  if (fa * fx_medio < 0) {
    b = x_medio;
  } else {
    a = x_medio;
  }

  error = Math.abs(b - a);
}

if (error <= errorDeseado) {
  resultado.innerHTML += "La aproximación convergió: x ≈ " + ((a + b) / 2) + " (Error absoluto < " + errorDeseado + " después de " + i + " iteraciones)";
} else {
  resultado.innerHTML += "El método no converge después de " + i + " iteraciones";
}


}

function calcularPuntoFijo() {
  var funcion = bar.textContent;
  var x0 = parseFloat(document.getElementById("x").value);
  var errorDeseado = parseFloat(document.getElementById("error").value);
  var iteraciones = parseInt(document.getElementById("iteraciones").value);
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiar resultados anteriores
  // Crear función a partir de la expresión ingresada
  var f = math.parse(funcion).compile();

  // Aplicar el método de punto fijo
  var error = Number.POSITIVE_INFINITY;
  var i;

  if (!isNaN(iteraciones)) {
    // Realizar iteraciones según el número especificado
    for (i = 0; i < iteraciones && error > errorDeseado; i++) {
      var x1 = f.evaluate({ x: x0 });

      var iteracionActual = "Iteración " + (i + 1) + ": x = " + x1;
      resultado.innerHTML += iteracionActual + "\n";

      error = Math.abs(x1 - x0);
      x0 = x1;
    }
  } else if (!isNaN(errorDeseado)) {
    // Realizar iteraciones hasta que el error sea menor o igual al error deseado
    for (i = 0; error > errorDeseado; i++) {
      var x1 = f.evaluate({ x: x0 });

      var iteracionActual = "Iteración " + (i + 1) + ": x = " + x1;
      resultado.innerHTML += iteracionActual + "\n";

      error = Math.abs(x1 - x0);
      x0 = x1;
    }
  }

  if (error <= errorDeseado) {
    resultado.innerHTML += "La aproximación convergió: x ≈ " + x0 + " (Error absoluto < " + errorDeseado + " después de " + i + " iteraciones)";
  } else {
    resultado.innerHTML += "El método no converge después de " + i + " iteraciones";
  }
}

function calcularRaicesMultiples() {
  var funcion = bar.textContent;
  var x = parseFloat(document.getElementById("x").value);
  var errorDeseado = parseFloat(document.getElementById("error").value);
  var iteraciones = parseInt(document.getElementById("iteraciones").value);

  var resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiar resultados anteriores

  // Crear función a partir de la expresión ingresada
  var f = math.parse(funcion).compile();

  // Crear función para evaluar la derivada de la función
  var df = math.derivative(funcion, 'x').compile();

  // Aplicar el método de raíces múltiples
  var error = Number.POSITIVE_INFINITY;
  var i;

  if (!isNaN(iteraciones)) {
    // Realizar iteraciones según el número especificado
    for (i = 0; i < iteraciones && error > errorDeseado; i++) {
      var fx = f.evaluate({ x: x });
      var fpx = df.evaluate({ x: x });

      var iteracionActual = "Iteración " + (i + 1) + ": x = " + x + ", f(x) = " + fx;
      resultado.innerHTML += iteracionActual + "\n";

      if (fpx === 0) {
        resultado.innerHTML += "El método no converge (f'(x) = 0)";
        return;
      }

      var xNuevo = x - (fx * fpx) / Math.pow(fpx, 2);
      error = Math.abs(xNuevo - x);
      x = xNuevo;
    }
  } else if (!isNaN(errorDeseado)) {
    // Realizar iteraciones hasta que el error sea menor o igual al error deseado
    for (i = 0; error > errorDeseado; i++) {
      var fx = f.evaluate({ x: x });
      var fpx = df.evaluate({ x: x });

      var iteracionActual = "Iteración " + (i + 1) + ": x = " + x + ", f(x) = " + fx;
      resultado.innerHTML += iteracionActual + "\n";

      if (fpx === 0) {
        resultado.innerHTML += "El método no converge (f'(x) = 0)";
        return;
      }

      var xNuevo = x - (fx * fpx) / Math.pow(fpx, 2);
      error = Math.abs(xNuevo - x);
      x = xNuevo;
    }
  }

  if (error <= errorDeseado) {
    resultado.innerHTML += "La aproximación convergió: x ≈ " + x + " (Error absoluto < " + errorDeseado + " después de " + i + " iteraciones)";
  } else {
    resultado.innerHTML += "El método no converge después de " + i + " iteraciones";
  }
}

function calcularSecante() {
  var funcion = bar.textContent;
  var x = parseFloat(document.getElementById("x").value);
  var errorDeseado = parseFloat(document.getElementById("error").value);
  var iteraciones = parseInt(document.getElementById("iteraciones").value);
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiar resultados anteriores
  // Crear función a partir de la expresión ingresada
  var f = math.parse(funcion).compile();

  // Aplicar el método de la secante
  var error = Number.POSITIVE_INFINITY;
  var i;

  if (!isNaN(iteraciones)) {
    // Realizar iteraciones según el número especificado
    for (i = 0; i < iteraciones && error > errorDeseado; i++) {
      var fx0 = f.evaluate({ x: x });
      var fx1 = f.evaluate({ x: x + 0.0001 }); // Usar un pequeño incremento para fx1

      var iteracionActual = "Iteración " + (i + 1) + ": x = " + x + ", f(x) = " + fx0;
      resultado.innerHTML += iteracionActual + "\n";

      var xNuevo = x - ((fx1 * (x - x)) / (fx1 - fx0));
      error = Math.abs(xNuevo - x);
      x = xNuevo;
    }
  } else if (!isNaN(errorDeseado)) {
    // Realizar iteraciones hasta que el error sea menor o igual al error deseado
    for (i = 0; error > errorDeseado; i++) {
      var fx0 = f.evaluate({ x: x });
      var fx1 = f.evaluate({ x: x + 0.0001 }); // Usar un pequeño incremento para fx1

      var iteracionActual = "Iteración " + (i + 1) + ": x = " + x + ", f(x) = " + fx0;
      resultado.innerHTML += iteracionActual + "\n";

      var xNuevo = x - ((fx1 * (x - x)) / (fx1 - fx0));
      error = Math.abs(xNuevo - x);
      x = xNuevo;
    }
  }

  if (error <= errorDeseado) {
    resultado.innerHTML += "La aproximación convergió: x ≈ " + x + " (Error absoluto < " + errorDeseado + " después de " + i + " iteraciones)";
  } else {
    resultado.innerHTML += "El método no converge después de " + i + " iteraciones";
  }
}