// Definición de la clase Pregunta
class Pregunta {
  constructor(pregunta, opciones) {
    // Constructor de la clase Pregunta
    this.pregunta = pregunta; // Texto de la pregunta
    this.opciones = opciones; // Array de opciones para la pregunta
    this.votos = new Map(); // Captura mediante Map() para almacenar los votos por cada opción
    this.votosTotales = 0; // Contador para los votos totales
  }

  // Método para agregar un voto a una opción
  agregarVoto(opcion) {
    if (this.opciones.includes(opcion)) { // Verifica si la opción es válida
      if (this.votos.has(opcion)) {
        this.votos.set(opcion, this.votos.get(opcion) + 1); // Incrementa el contador de votos para la opción
      } else {
        this.votos.set(opcion, 1); // Inicializa el contador de votos para la opción
      }
      this.votosTotales++; // Incrementa el contador de votos totales
    }
  }

  // Método para obtener el porcentaje de votos de una opción
  obtenerPorcentajeVoto(opcion) {
    if (this.votosTotales === 0) { // Verifica si no hay votos totales
      return 0; // Retorna 0 si no hay votos
    }
    return ((this.votos.get(opcion) || 0) / this.votosTotales) * 100; // Calcula y retorna el porcentaje de votos para la opción
  }

 // Método para mostrar la pregunta y sus opciones
 mostrarPregunta() {
  console.log(this.pregunta); // Muestra el texto de la pregunta
  for (let i = 0; i < this.opciones.length; i++) {
    console.log(`${i + 1}. ${this.opciones[i]}`); // Muestra cada opción numerada
    }
  }

 // Método para mostrar los resultados de la pregunta (opciones y cantidad de votos)
 mostrarResultados() {
  console.log("\nResultados:"); // Encabezado de resultados
  for (const [opcion, votos] of this.votos.entries()) {
    const porcentaje = this.obtenerPorcentajeVoto(opcion); // Calcula el porcentaje de votos para la opción
    console.log(`${opcion}: ${votos} votos (${porcentaje.toFixed(1)}%)`); // Muestra la opción, la cantidad de votos y su porcentaje
    }
  }
}


// Definición de la clase Encuesta
class Encuesta {
  constructor(titulo, preguntas) {
    // Constructor de la clase Encuesta
    this.titulo = titulo; // Título de la encuesta
    this.preguntas = preguntas; // Array de preguntas de la encuesta
  }

  // Método para realizar la encuesta (mostrar preguntas, recoger votos y mostrar resultados)
  realizarEncuesta() {
    console.log(`\nEncuesta: ${this.titulo}`); // Muestra el título de la encuesta
    for (const pregunta of this.preguntas) {
      pregunta.mostrarPregunta(); // Muestra la pregunta y sus opciones
      let opcionElegida = parseInt(prompt("Ingrese el número de su opción: ")); // Solicita al usuario que elija una opción
      while (isNaN(opcionElegida) || opcionElegida < 1 || opcionElegida > pregunta.opciones.length) {
        opcionElegida = parseInt(prompt("Opción inválida. Ingrese el número de su opción: ")); // Verifica que la opción sea válida
      }
      pregunta.agregarVoto(pregunta.opciones[opcionElegida - 1]); // Agrega el voto a la opción elegida
    }
    console.log("\nGracias por participar!"); // Mensaje de agradecimiento al participante
    this.mostrarResultados(); // Muestra los resultados de la encuesta
    this.opcionCerrarPrograma(); // Solicita al usuario si desea cerrar el programa
  }

  // Método para mostrar los resultados de la encuesta (resultados de cada pregunta)
  mostrarResultados() {
    console.log("\nResultados generales de la encuesta:"); // Encabezado de resultados generales
    for (const pregunta of this.preguntas) {
      pregunta.mostrarPregunta(); // Muestra la pregunta
      pregunta.mostrarResultados(); // Muestra los resultados de la pregunta
    }
  }

  // Método para solicitar al usuario si desea cerrar el programa
  opcionCerrarPrograma() {
    const opcion = prompt("¿Desea cerrar el programa (Sí/No)?").toLowerCase(); // Solicita al usuario su elección
    if (opcion === "si" || opcion === "sí") {
      console.log("¡Hasta luego!"); // Mensaje de despedida
      return; // Termina la función sin hacer nada más 
    } else if (opcion === "no") {
      return; // Vuelve al menú principal
    } else {
      console.log("Opción inválida. Por favor, ingrese 'Sí' o 'No'."); // Mensaje de opción inválida
      this.opcionCerrarPrograma(); // Vuelve a solicitar la opción al usuario
    }
  }
}

// Definición de la clase SistemaEncuestas
class SistemaEncuestas {
  constructor() {
    // Constructor de la clase SistemaEncuestas
    this.encuestas = []; // Array para almacenar las encuestas
    this.agregarEncuestaPorDefecto(); // Agrega una encuesta por defecto al inicializar el sistema
  }

  // Método para agregar una encuesta por defecto al sistema
  agregarEncuestaPorDefecto() {
    const preguntasPorDefecto = [ // Array de preguntas por defecto
      new Pregunta("¿Cuál es tu serie de anime favorita de los 90?", ["Dragon Ball Z", "Sailor Moon", "Slam Dunk", "Saint Seiya"]),
      new Pregunta("En términos generales, ¿cuál es el género de series que te agrada?", ["Acción", "Comedia", "Romance", "Drama"]),
      new Pregunta("¿De qué plataforma sueles ver anime?", ["Streaming (Netflix, Crunchyroll, etc.)","Canal de TV","DVD/Blu-ray","Descarga directa"]),
      new Pregunta("¿Con qué frecuencia ves anime?", ["Diariamente", "Semanalmente", "Mensualmente", "Anualmente"]),
      new Pregunta("¿Quién es tu personaje de anime favorito?", ["Goku", "Seiya", "Sakuragi", "Kenshin"]),
      new Pregunta("¿Cuál es el mejor estudio de animación que conoces?", ["Toei Animation", "Bones", "Studio Ghibli", "Mappa"]),
      new Pregunta("¿Qué tipo de mercancía de anime consumes?", ["Peluches", "Ropa", "Videojuegos", "Figuras/Estatuillas"]),
      new Pregunta("A tu gusto, ¿quién es el mejor autor de Manga?", ["Akira Toriyama", "Masami Kurumada", "Eiichirō Oda", "Hajime Isayama"])
      // Las siguientes líneas definen las preguntas y opciones de la encuesta por defecto
      // Se utiliza la clase Pregunta para crear las preguntas y almacenarlas en un array
    ];
    this.encuestas.push(new Encuesta("Anime, conocimiento general", preguntasPorDefecto));// Agrega la encuesta por defecto al array de encuestas
  }

  // Método para mostrar el menú principal del sistema
  menuPrincipal() {
    // Muestra las opciones del menú
    console.log("1. Crear Encuesta");
    console.log("2. Votar Encuesta");
    console.log("3. Mostrar Resultados de Encuesta");
    console.log("4. Editar Encuesta");
    console.log("5. Eliminar Encuesta");
    console.log("6. Salir");
    const opcion = parseInt(prompt("Seleccione una opción: ")); // Solicita al usuario que seleccione una opción
    switch (opcion) {
      // Realiza una acción dependiendo de la opción seleccionada por el usuario
      case 1:
        this.crearEncuesta(); // Llama al método para crear una nueva encuesta
        break;
      case 2:
        this.votarEncuesta(); // Llama al método para votar en una encuesta existente
        break;
      case 3:
        this.mostrarResultadosEncuesta(); // Llama al método para mostrar los resultados de una encuesta
        break;
      case 4:
        this.editarEncuesta(); // Llama al método para editar una encuesta existente
        break;
      case 5:
        this.eliminarEncuesta(); // Llama al método para eliminar una encuesta existente
        break;
      case 6:
        console.log("¡Hasta luego!"); // Mensaje de despedida
        // No hay necesidad de hacer nada más aquí
        break;
      default:
        console.log("Opción no válida."); // Mensaje de opción no válida
        this.menuPrincipal(); // Vuelve a mostrar el menú principal
        break;
    }
  }

  // Método para crear una nueva encuesta
  crearEncuesta() {
    const titulo = prompt("Ingrese el título de la encuesta: "); // Solicita al usuario el título de la encuesta
    const preguntas = []; // Array para almacenar las preguntas de la encuesta
    let continuar = true; // Variable para controlar si se agregan más preguntas
    while (continuar) {
      const pregunta = prompt("Ingrese la pregunta: "); // Solicita al usuario la pregunta
      const opciones = prompt("Ingrese las opciones separadas por coma: ").split(","); // Solicita al usuario las opciones separadas por coma
      preguntas.push(new Pregunta(pregunta, opciones)); // Crea una nueva pregunta y la agrega al array de preguntas
      continuar = confirm("¿Desea agregar otra pregunta?"); // Pregunta al usuario si desea agregar otra pregunta
    }
    this.encuestas.push(new Encuesta(titulo, preguntas)); // Crea una nueva encuesta con el título y las preguntas ingresadas y la agrega al array de encuestas
    console.log("Encuesta creada exitosamente."); // Mensaje de éxito
    this.menuPrincipal(); // Vuelve al menú principal
  }

  // Los métodos que prosiguen son similares para votar en una encuesta existente, mostrar los resultados de una encuesta, editar una encuesta y eliminar una encuesta
  votarEncuesta() {
    if (this.encuestas.length === 0) {
      console.log("No hay encuestas disponibles para votar.");
      this.menuPrincipal();
      return;
    }
    console.log("Seleccione una encuesta para votar:");
    this.encuestas.forEach((encuesta, index) => {
      console.log(`${index + 1}. ${encuesta.titulo}`);
    });
    const seleccion = parseInt(prompt("Ingrese el número de la encuesta: "));
    if (seleccion > 0 && seleccion <= this.encuestas.length) {
      this.encuestas[seleccion - 1].realizarEncuesta();
    } else {
      console.log("Selección no válida.");
    }
    this.menuPrincipal();
  }

  mostrarResultadosEncuesta() {
    if (this.encuestas.length === 0) {
      console.log("No hay encuestas disponibles para mostrar resultados.");
      this.menuPrincipal();
      return;
    }
    console.log("Seleccione una encuesta para mostrar resultados:");
    this.encuestas.forEach((encuesta, index) => {
      console.log(`${index + 1}. ${encuesta.titulo}`);
    });
    const seleccion = parseInt(prompt("Ingrese el número de la encuesta: "));
    if (seleccion > 0 && seleccion <= this.encuestas.length) {
      this.encuestas[seleccion - 1].mostrarResultados();
    } else {
      console.log("Selección no válida.");
    }
    this.menuPrincipal();
  }

  editarEncuesta() {
    if (this.encuestas.length === 0) {
      console.log("No hay encuestas disponibles para editar.");
      this.menuPrincipal();
      return;
    }
    console.log("Seleccione una encuesta para editar:");
    this.encuestas.forEach((encuesta, index) => {
      console.log(`${index + 1}. ${encuesta.titulo}`);
    });
    const seleccion = parseInt(prompt("Ingrese el número de la encuesta: "));
    if (seleccion > 0 && seleccion <= this.encuestas.length) {
      const nuevaEncuesta = this.encuestas[seleccion - 1];
      const nuevoTitulo = prompt("Ingrese el nuevo título de la encuesta: ");
      nuevaEncuesta.titulo = nuevoTitulo;
      console.log("Encuesta editada correctamente.");
    } else {
      console.log("Selección no válida.");
    }
    this.menuPrincipal();
  }

  eliminarEncuesta() {
    if (this.encuestas.length === 0) {
      console.log("No hay encuestas disponibles para eliminar.");
      this.menuPrincipal();
      return;
    }
    console.log("Seleccione una encuesta para eliminar:");
    this.encuestas.forEach((encuesta, index) => {
      console.log(`${index + 1}. ${encuesta.titulo}`);
    });
    const seleccion = parseInt(prompt("Ingrese el número de la encuesta a eliminar: "));
    if (seleccion > 0 && seleccion <= this.encuestas.length) {
      this.encuestas.splice(seleccion - 1, 1);
      console.log("Encuesta eliminada correctamente.");
    } else {
      console.log("Selección no válida.");
    }
    this.menuPrincipal();
  }
}

// Creación de una instancia de SistemaEncuestas y llamada al método menuPrincipal para iniciar el sistema
const sistema = new SistemaEncuestas();
sistema.menuPrincipal();
