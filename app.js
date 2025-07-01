function agregarProducto() {
  alert("Función para agregar producto pendiente de implementación");
}

function registrarOrden() {
  alert("Función para registrar orden pendiente de implementación");
}

function verFiados() {
  alert("Función para ver fiados pendiente de implementación");
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('service-worker.js')
      .then(function () {
        console.log("Service Worker registrado correctamente");
      })
      .catch(function (error) {
        console.error("Error al registrar Service Worker:", error);
      });
  });
}
