// Importar el SDK de Airtable
const Airtable = require('airtable');

// Configurar las credenciales de la API de Airtable
Airtable.configure({
  apiKey: 'keyMs7bm1KckCNBCz',
});

// Crear una instancia del objeto base de Airtable
const base = Airtable.base('tblgsANVPiw4vidr8');

// Manejar el envío del formulario
document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const celular = document.getElementById('celular').value;
  const email = document.getElementById('email').value;
  const fechaCheckin = document.getElementById('fecha-checkin').value;
  const tipoPlan = document.getElementById('tipo-plan').value;
  const codigoDescuento = document.getElementById('codigo-descuento').value;

  // Crear un objeto con los datos del formulario
  const datosFormulario = {
    "Nombre": nombre,
    "Apellido": apellido,
    "Celular": celular,
    "Email": email,
    "Fecha Check-in": fechaCheckin,
    "Tipo de plan": tipoPlan,
    "Código de descuento": codigoDescuento
  };

  // Enviar los datos a Airtable
  base('Ventas').create(datosFormulario, function(err, record) {
    if (err) {
      console.error(err);
      return;
    }

    console.log('Datos enviados correctamente:', record.getId());
    // Aquí puedes agregar una lógica adicional, como mostrar un mensaje de éxito o redirigir al usuario a una página de confirmación.
  });
});