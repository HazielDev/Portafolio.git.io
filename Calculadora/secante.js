let stat = 0;
let bar = document.getElementById("bar-text");
let metodo = document.getElementById("metodo");

function add(t) {
  bar.textContent = bar.textContent + t;
}

function del() {
  bar.textContent = bar.textContent.slice(0, -1);
}

function change() {
  if (stat >= 4) {
    stat = 0;
  } else {
    stat++;
  }

  switch (stat) {
    case 0:
      metodo.textContent = "Bisección";
      break;
    case 1:
      metodo.textContent = "Rhapson";
      break;
    case 2:
      metodo.textContent = "Fijo";
      break;
    case 3:
      metodo.textContent = "Secante";
      break;
    case 4:
      metodo.textContent = "Multiples";
      break;
  }
}

function execute() {
  switch (stat) {
    case 0:
      break;
    case 1:
      calcularNewtonRaphson();
      break;
    case 3:
      calcularSecante();
      break;
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
      var fx1 = f.evaluate({ x: x });

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
      var fx1 = f.evaluate({ x: x });

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
