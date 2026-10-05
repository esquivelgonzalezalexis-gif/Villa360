// ===== ARTESANOS =====
const f = document.getElementById("form");

if (f) {
  f.addEventListener("submit", (e) => {
    e.preventDefault();

    if (nombre.value.trim().split(" ").length < 2) {
      alert("Escribe nombre y un apellido");
      return;
    }

    const datos = JSON.parse(localStorage.getItem("artesanos")) || [];

    datos.push({
      nombre: nombre.value,
      telefono: telefono.value,
      comunidad: comunidad.value,
      producto: producto.value,
      correo: correo.value,
      comentario: comentario.value
    });

    localStorage.setItem("artesanos", JSON.stringify(datos));

    alert("¡Información enviada y guardada correctamente!");
    f.reset();
    mostrarArtesanos();
  });
}

function mostrarArtesanos() {
  const lista = document.getElementById("lista");
  if (!lista) return;

  const datos = JSON.parse(localStorage.getItem("artesanos")) || [];
  lista.innerHTML = "";

  datos.forEach(x => {
    lista.innerHTML += `
      <div class="card">
        <h3>${x.nombre}</h3>
        <p>📞 ${x.telefono}</p>
        <p>📍 ${x.comunidad}</p>
        <p>🧺 ${x.producto}</p>
        <p>✉️ ${x.correo}</p>
        <p>📝 ${x.comentario}</p>
      </div>`;
  });
}
// =====================================================
// VILLA 360 - SCRIPT.JS
// =====================================================


// ==================== ARTESANOS ====================

const f = document.getElementById("form");

if (f) {

  f.addEventListener("submit", function(e) {

    e.preventDefault();

    const nombre = document.getElementById("nombre");
    const telefono = document.getElementById("telefono");
    const comunidad = document.getElementById("comunidad");
    const producto = document.getElementById("producto");
    const correo = document.getElementById("correo");
    const comentario = document.getElementById("comentario");


    // Verificar nombre y apellido
    if (nombre.value.trim().split(/\s+/).length < 2) {
      alert("Debes escribir tu nombre completo y al menos un apellido.");
      nombre.focus();
      return;
    }


    // Verificar teléfono
    if (!/^[0-9]{10}$/.test(telefono.value)) {
      alert("El teléfono debe tener exactamente 10 dígitos.");
      telefono.focus();
      return;
    }


    // Verificar que todos estén completos
    if (
      !nombre.value.trim() ||
      !telefono.value.trim() ||
      !comunidad.value.trim() ||
      !producto.value ||
      !correo.value.trim() ||
      !comentario.value.trim()
    ) {
      alert("Debes completar todos los campos.");
      return;
    }


    // Obtener registros anteriores
    const datos =
      JSON.parse(localStorage.getItem("artesanos")) || [];


    // Agregar nuevo artesano
    datos.push({
      nombre: nombre.value.trim(),
      telefono: telefono.value.trim(),
      comunidad: comunidad.value.trim(),
      producto: producto.value,
      correo: correo.value.trim(),
      comentario: comentario.value.trim()
    });


    // Guardar
    localStorage.setItem(
      "artesanos",
      JSON.stringify(datos)
    );


    alert("¡Artesano registrado y guardado correctamente!");


    f.reset();

    mostrarArtesanos();

  });
}


// Mostrar artesanos
function mostrarArtesanos() {

  const lista = document.getElementById("lista");

  if (!lista) return;


  const datos =
    JSON.parse(localStorage.getItem("artesanos")) || [];


  lista.innerHTML = "";


  datos.forEach((x, index) => {

    lista.innerHTML += `
      <div class="card">

        <h3>👤 ${x.nombre}</h3>

        <p>📞 ${x.telefono}</p>

        <p>📍 ${x.comunidad}</p>

        <p>🧺 ${x.producto}</p>

        <p>✉️ ${x.correo}</p>

        <p>📝 ${x.comentario}</p>

        <button
          type="button"
          class="boton eliminar"
          onclick="eliminarArtesano(${index})">
          🗑️ Eliminar
        </button>

      </div>
    `;

  });
}


mostrarArtesanos();


// ===== GASTRONOMÍA =====
function mostrar(id){
  ["bebidas","postres","platillos"].forEach(sec=>{
    const el=document.getElementById(sec);
    if(el) el.style.display="none";
  });

  const actual=document.getElementById(id);
  if(actual) actual.style.display="block";
}


// ===== ARTESANÍAS =====
function mostrarArtesania(id){

  const secciones = [
    "ceramica",
    "figuras",
    "accesorios",
    "cesteria"
  ];

  secciones.forEach(sec=>{
    const el = document.getElementById(sec);
    if(el) el.style.display="none";
  });

  const actual = document.getElementById(id);
  if(actual) actual.style.display="block";
}


// ===== CONTACTO =====
function guardarContacto(){

  const nom=document.getElementById("nom");
  const tel=document.getElementById("tel");
  const correo=document.getElementById("correo");
  const mensaje=document.getElementById("mensaje");

  if(!nom.value || !tel.value || !correo.value || !mensaje.value){
    alert("Debes completar todos los campos");
    return;
  }

  let contactos=JSON.parse(localStorage.getItem("contactos")) || [];

  contactos.push({
    nombre:nom.value,
    telefono:tel.value,
    correo:correo.value,
    mensaje:mensaje.value
  });

  localStorage.setItem("contactos", JSON.stringify(contactos));

  alert("Mensaje enviado correctamente");

  nom.value="";
  tel.value="";
  correo.value="";
  mensaje.value="";

  mostrarContactos();
}

function mostrarContactos(){

  const lista=document.getElementById("listaContactos");
  if(!lista) return;

  const contactos=JSON.parse(localStorage.getItem("contactos")) || [];

  lista.innerHTML="";

  contactos.forEach(c=>{
    lista.innerHTML += `
      <div class="card">
        <h3>${c.nombre}</h3>
        <p>📞 ${c.telefono}</p>
        <p>✉️ ${c.correo}</p>
        <p>${c.mensaje}</p>
      </div>`;
  });
}

mostrarContactos();
