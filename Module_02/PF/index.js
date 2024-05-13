// Función para crear una pregunta
function crearPregunta(pregunta, opciones, respuestaCorrecta) {
    return {
      // Propiedades de la pregunta
      pregunta, // La pregunta en sí misma
      opciones, // Array de opciones de respuesta
      votos: new Map(), // Mapa para almacenar los votos para cada opción
      votosTotales: 0, // Contador para el total de votos

      // Método para agregar un voto a una opción
      agregarVoto(opcion) {
        if (this.opciones.includes(opcion)) {
          // Si la opción es válida, se registra el voto
          if (this.votos.has(opcion)) {
            this.votos.set(opcion, this.votos.get(opcion) + 1);
          } else {
            this.votos.set(opcion, 1);
          }
          // Se incrementa el contador de votos totales
          this.votosTotales++;
        }
      },

      // Método para obtener el porcentaje de votos para una opción
      obtenerPorcentajeVoto(opcion) {
        if (this.votosTotales === 0) {
          return 0; // Retorna 0 si no hay votos registrados
        }
        // Calcula y retorna el porcentaje de votos para la opción dada
        return ((this.votos.get(opcion) || 0) / this.votosTotales) * 100;
      },

      // Método para mostrar la pregunta y sus opciones
      mostrarPregunta() {
        console.log(this.pregunta); // Muestra la pregunta
        // Muestra cada opción enumerada
        this.opciones.forEach((opcion, index) => {
          console.log(`${index + 1}. ${opcion}`);
        });
      },

      // Método para mostrar los resultados de la pregunta
      mostrarResultados() {
        console.log("\nResultados:");
        // Itera sobre cada opción y muestra la cantidad de votos y su porcentaje
        for (const [opcion, votos] of this.votos.entries()) {
          const porcentaje = this.obtenerPorcentajeVoto(opcion);
          console.log(`${opcion}: ${votos} votos (${porcentaje.toFixed(1)}%)`);
        }
      }
    };
  }
  
  // Función para crear una encuesta
  function crearEncuesta(titulo, preguntas) {
    return {
      // Propiedades de la encuesta
      titulo, // El título de la encuesta
      preguntas, // Array de preguntas
      
      // Método para realizar la encuesta
      realizarEncuesta() {
        console.log(`\nEncuesta: ${this.titulo}`); // Muestra el título de la encuesta
        // Itera sobre cada pregunta, muestra la pregunta y permite al usuario votar
        this.preguntas.forEach(pregunta => {
          pregunta.mostrarPregunta();
          let opcionElegida = parseInt(prompt("Ingrese el número de su opción: "));
          while (isNaN(opcionElegida) || opcionElegida < 1 || opcionElegida > pregunta.opciones.length) {
            opcionElegida = parseInt(prompt("Opción inválida. Ingrese el número de su opción: "));
          }
          pregunta.agregarVoto(pregunta.opciones[opcionElegida - 1]);
        });
        console.log("\nGracias por participar!"); // Mensaje de agradecimiento
        this.mostrarResultados(); // Muestra los resultados de la encuesta
      },

      // Método para mostrar los resultados de la encuesta
      mostrarResultados() {
        console.log("\nResultados generales de la encuesta:");
        // Itera sobre cada pregunta y muestra sus resultados
        this.preguntas.forEach(pregunta => {
          pregunta.mostrarPregunta();
          pregunta.mostrarResultados();
        });
      }
    };
  }
  
  // Función para crear un sistema de encuestas
  function crearSistemaEncuestas() {
    const encuestas = []; // Array para almacenar las encuestas
    
    // Función para agregar una serie de encuestas por defecto al sistema
    function agregarEncuestaPorDefecto() {
      const preguntasPorDefecto = [
        crearPregunta("¿Cuál es tu serie de anime favorita de los 90?", ["Dragon Ball Z", "Sailor Moon", "Slam Dunk", "Saint Seiya"]),
        crearPregunta("En términos generales, ¿cuál es el género de series que te agrada?", ["Acción", "Comedia", "Romance", "Drama"]),
        crearPregunta("¿De qué plataforma sueles ver anime?", ["Streaming (Netflix, Crunchyroll, etc.)","Canal de TV","DVD/Blu-ray","Descarga directa"]),
        crearPregunta("¿Con qué frecuencia ves anime?", ["Diariamente", "Semanalmente", "Mensualmente", "Anualmente"]),
        crearPregunta("¿Quién es tu personaje de anime favorito?", ["Goku", "Seiya", "Sakuragi", "Kenshin"]),
        crearPregunta("¿Cuál es el mejor estudio de animación que conoces?", ["Toei Animation", "Bones", "Studio Ghibli", "Mappa"]),
        crearPregunta("¿Qué tipo de mercancía de anime consumes?", ["Peluches", "Ropa", "Videojuegos", "Figuras/Estatuillas"]),
        crearPregunta("A tu gusto, ¿quién es el mejor autor de Manga?", ["Akira Toriyama", "Masami Kurumada", "Eiichirō Oda", "Hajime Isayama"])
      ];
      encuestas.push(crearEncuesta("Anime, conocimiento general", preguntasPorDefecto)); // Crea y agrega una encuesta por defecto
    }
  
    // Función para mostrar el menú principal del sistema
    function menuPrincipal() {
      console.log("1. Crear Encuesta");
      console.log("2. Votar Encuesta");
      console.log("3. Mostrar Resultados de Encuesta");
      console.log("4. Editar Encuesta");
      console.log("5. Eliminar Encuesta");
      console.log("6. Salir");
      const opcion = parseInt(prompt("Seleccione una opción: "));
      switch (opcion) {
        case 1:
          crearNuevaEncuesta(); // Invoca la función para crear una nueva encuesta
          break;
        case 2:
          votarEncuesta(); // Invoca la función para votar en una encuesta
          break;
        case 3:
          mostrarResultadosEncuesta(); // Invoca la función para mostrar los resultados de una encuesta
          break;
        case 4:
          editarEncuesta(); // Invoca la función para editar una encuesta
          break;
        case 5:
          eliminarEncuesta(); // Invoca la función para eliminar una encuesta
          break;
        case 6:
          console.log("¡Hasta luego!"); // Mensaje de despedida
          break;
        default:
          console.log("Opción no válida.");
          menuPrincipal(); // Vuelve a mostrar el menú principal si la opción no es válida
          break;
      }
    }
  
    // Función para crear una nueva encuesta
    function crearNuevaEncuesta() {
      const titulo = prompt("Ingrese el título de la encuesta: ");
      const preguntas = [];
      let continuar = true;
      while (continuar) {
        const pregunta = prompt("Ingrese la pregunta: ");
        const opciones = prompt("Ingrese las opciones separadas por coma: ").split(",");
        preguntas.push(crearPregunta(pregunta, opciones)); // Crea una nueva pregunta y la agrega a la encuesta
        continuar = confirm("¿Desea agregar otra pregunta?");
      }
      encuestas.push(crearEncuesta(titulo, preguntas)); // Crea y agrega una nueva encuesta al sistema
      console.log("Encuesta creada exitosamente.");
      menuPrincipal(); // Vuelve al menú principal
    }
  
    // Función para votar en una encuesta
    function votarEncuesta() {
      if (encuestas.length === 0) {
        console.log("No hay encuestas disponibles para votar.");
        menuPrincipal(); // Vuelve al menú principal si no hay encuestas disponibles
        return;
      }
      console.log("Seleccione una encuesta para votar:");
      encuestas.forEach((encuesta, index) => {
        console.log(`${index + 1}. ${encuesta.titulo}`);
      });
      const seleccion = parseInt(prompt("Ingrese el número de la encuesta: "));
      if (seleccion > 0 && seleccion <= encuestas.length) {
        encuestas[seleccion - 1].realizarEncuesta(); // Invoca el método para realizar la encuesta seleccionada
      } else {
        console.log("Selección no válida.");
      }
      menuPrincipal(); // Vuelve al menú principal
    }
  
    // Función para mostrar los resultados de una encuesta
    function mostrarResultadosEncuesta() {
      if (encuestas.length === 0) {
        console.log("No hay encuestas disponibles para mostrar resultados.");
        menuPrincipal(); // Vuelve al menú principal si no hay encuestas disponibles
        return;
      }
      console.log("Seleccione una encuesta para mostrar resultados:");
      encuestas.forEach((encuesta, index) => {
        console.log(`${index + 1}. ${encuesta.titulo}`);
      });
      const seleccion = parseInt(prompt("Ingrese el número de la encuesta: "));
      if (seleccion > 0 && seleccion <= encuestas.length) {
        encuestas[seleccion - 1].mostrarResultados(); // Invoca el método para mostrar los resultados de la encuesta seleccionada
      } else {
        console.log("Selección no válida.");
      }
      menuPrincipal(); // Vuelve al menú principal
    }
  
    // Función para editar una encuesta
    function editarEncuesta() {
      if (encuestas.length === 0) {
        console.log("No hay encuestas disponibles para editar.");
        menuPrincipal(); // Vuelve al menú principal si no hay encuestas disponibles para editar
        return;
      }
      console.log("Seleccione una encuesta para editar:");
      encuestas.forEach((encuesta, index) => {
        console.log(`${index + 1}. ${encuesta.titulo}`);
      });
      const seleccion = parseInt(prompt("Ingrese el número de la encuesta: "));
      if (seleccion > 0 && seleccion <= encuestas.length) {
        const nuevaEncuesta = encuestas[seleccion - 1];
        const nuevoTitulo = prompt("Ingrese el nuevo título de la encuesta: ");
        nuevaEncuesta.titulo = nuevoTitulo; // Actualiza el título de la encuesta seleccionada
        console.log("Encuesta editada correctamente.");
      } else {
        console.log("Selección no válida.");
      }
      menuPrincipal(); // Vuelve al menú principal
    }
  
    // Función para eliminar una encuesta
    function eliminarEncuesta() {
      if (encuestas.length === 0) {
        console.log("No hay encuestas disponibles para eliminar.");
        menuPrincipal(); // Vuelve al menú principal si no hay encuestas disponibles para eliminar
        return;
      }
      console.log("Seleccione una encuesta para eliminar:");
      encuestas.forEach((encuesta, index) => {
        console.log(`${index + 1}. ${encuesta.titulo}`);
      });
      const seleccion = parseInt(prompt("Ingrese el número de la encuesta a eliminar: "));
      if (seleccion > 0 && seleccion <= encuestas.length) {
        encuestas.splice(seleccion - 1, 1); // Elimina la encuesta seleccionada del array
        console.log("Encuesta eliminada correctamente.");
      } else {
        console.log("Selección no válida.");
      }
      menuPrincipal(); // Vuelve al menú principal
    }
  
    // Agregar encuesta por defecto al iniciar el sistema
    agregarEncuestaPorDefecto();
  
    // Retornar funciones públicas del sistema
    return {
      menuPrincipal
    };
  }
  
  // Iniciar el sistema de encuestas
  const sistema = crearSistemaEncuestas();
  sistema.menuPrincipal();// Llama al método para mostrar el menú principal y comenzar la interacción
  
