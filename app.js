// ----- Inventario de Productos -----
let productos = JSON.parse(localStorage.getItem("productos")) || [];

function renderProductos() {
  const lista = document.getElementById("lista-productos");
  lista.innerHTML = productos.map((p, index) => `
    <div class="producto">
      <strong>${p.nombre}</strong> - Stock: ${p.stock}
      <button onclick="eliminarProducto(${index})">❌</button>
    </div>
  `).join("");
  localStorage.setItem("productos", JSON.stringify(productos));
}

function agregarProducto() {
  const nombre = prompt("Nombre del producto:");
  const stock = parseInt(prompt("Cantidad inicial:"), 10);
  if (nombre && !isNaN(stock)) {
    productos.push({ nombre, stock });
    renderProductos();
  }
}

function eliminarProducto(index) {
  if (confirm("¿Eliminar producto?")) {
    productos.splice(index, 1);
    renderProductos();
  }
}

// ----- Registro de Fiados -----
let fiados = JSON.parse(localStorage.getItem("fiados")) || [];

function registrarOrden() {
  const cliente = prompt("Nombre del cliente:");
  const deuda = parseFloat(prompt("¿Cuánto debe?"), 10);
  if (cliente && !isNaN(deuda)) {
    fiados.push({ cliente, deuda, abono: 0 });
    renderFiados();
  }
}

function verFiados() {
  renderFiados();
}

function renderFiados() {
  const div = document.getElementById("control-fiados");
  div.innerHTML = fiados.map((f, index) => `
    <div class="fiado">
      <strong>${f.cliente}</strong><br>
      Deuda: $${f.deuda.toFixed(2)}<br>
      Abonado: $${f.abono.toFixed(2)}<br>
      <button onclick="abonar(${index})">Abonar</button>
      <button onclick="borrarFiado(${index})">Eliminar</button>
    </div>
  `).join("");
  localStorage.setItem("fiados", JSON.stringify(fiados));
}

function abonar(index) {
  const abono = parseFloat(prompt("¿Cuánto desea abonar?"), 10);
  if (!isNaN(abono) && abono > 0) {
    fiados[index].abono += abono;
    renderFiados();
  }
}

function borrarFiado(index) {
  if (confirm("¿Eliminar registro de fiado?")) {
    fiados.splice(index, 1);
    renderFiados();
  }
}

// Cargar datos al inicio
document.addEventListener("DOMContentLoaded", () => {
  renderProductos();
  renderFiados();
});
