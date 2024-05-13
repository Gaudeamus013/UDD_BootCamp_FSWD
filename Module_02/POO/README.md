![Logo](https://github.com/Gaudeamus013/UDD_BootCamp_FSWD/blob/main/images/banner.png)

# Sistema de Encuestas – Programación Orientada a Objetos

Este es un sistema de encuestas desarrollado en JavaScript con un enfoque de programación orientada a objetos.

## Problema a Resolver

El problema que aborda este sistema es la necesidad de recopilar y analizar datos mediante encuestas sobre diversos temas, desde preferencias personales hasta opiniones sobre productos o servicios. El desafío radica en proporcionar una interfaz fácil de usar para crear, administrar y visualizar encuestas, así como garantizar la precisión y la integridad de los datos recopilados.

## Planteamiento del Problema

El objetivo de este proyecto es crear un sistema que permita gestionar encuestas, incluyendo la creación, votación, visualización de resultados, edición y eliminación de encuestas. Esto se logra a través de una interfaz de usuario intuitiva que guía al usuario a través de cada paso del proceso.

## Detalles de la Implementación

El sistema está implementado en JavaScript y se basa en tres clases principales: `Pregunta`, `Encuesta` y `SistemaEncuestas`.

- La clase `Pregunta` representa una pregunta individual en una encuesta. Permite agregar votos, calcular el porcentaje de votos para cada opción y mostrar la pregunta junto con sus opciones y resultados.
- La clase `Encuesta` representa una encuesta completa, que consta de un título y un conjunto de preguntas. Permite realizar la encuesta, mostrar los resultados generales y realizar acciones como editar y eliminar la encuesta.
- La clase `SistemaEncuestas` gestiona múltiples encuestas y proporciona una interfaz de usuario para interactuar con ellas.

## Clases y Métodos

### Clase Pregunta

La clase `Pregunta` define una pregunta en la encuesta. Cada instancia de esta clase tiene un texto de pregunta, un conjunto de opciones, un Map() para almacenar los votos por cada opción y un contador de votos totales.

```Javascript
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
  ```

- **Constructor**: Recibe el texto de la pregunta y un array de opciones. Inicializa los atributos de la pregunta.
  
  ```Javascript
      // Constructor de la clase Pregunta
      this.pregunta = pregunta; // Texto de la pregunta
      this.opciones = opciones; // Array de opciones para la pregunta
      this.votos = new Map(); // Captura mediante Map() para almacenar los votos por cada opción
      this.votosTotales = 0; // Contador para los votos totales
  ```
  
- **agregarVoto(opcion)**: Incrementa el contador de votos para la opción elegida.
  
   ```Javascript
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
   ```
   
- **obtenerPorcentajeVoto(opcion)**: Calcula y retorna el porcentaje de votos para una opción.
  
   ```Javascript
      // Método para obtener el porcentaje de votos de una opción
      obtenerPorcentajeVoto(opcion) {
        if (this.votosTotales === 0) { // Verifica si no hay votos totales
          return 0; // Retorna 0 si no hay votos
        }
        return ((this.votos.get(opcion) || 0) / this.votosTotales) * 100; // Calcula y retorna el porcentaje de votos para la opción
      }
   ```
- **mostrarPregunta()**: Muestra la pregunta y sus opciones en la consola.
   ```Javascript
       // Método para mostrar la pregunta y sus opciones
      mostrarPregunta() {
        console.log(this.pregunta); // Muestra el texto de la pregunta
        for (let i = 0; i < this.opciones.length; i++) {
          console.log(`${i + 1}. ${this.opciones[i]}`); // Muestra cada opción numerada
        }
      }
   ```
- **mostrarResultados()**: Muestra los resultados de la pregunta, incluyendo la cantidad de votos y el porcentaje para cada opción.
   ```Javascript
       // Método para mostrar los resultados de la pregunta (opciones y cantidad de votos)
       mostrarResultados() {
       console.log("\nResultados:"); // Encabezado de resultados
       for (const [opcion, votos] of this.votos.entries()) {
        const porcentaje = this.obtenerPorcentajeVoto(opcion); // Calcula el porcentaje de votos para la opción
        console.log(`${opcion}: ${votos} votos (${porcentaje.toFixed(1)}%)`); // Muestra la opción, la cantidad de votos y su porcentaje
        }
      }
   ```

### Clase Encuesta

La clase `Encuesta` representa una encuesta que consta de un título y un conjunto de preguntas.

```Javascript
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
```

- **Constructor**: Recibe el título de la encuesta y un array de preguntas. Inicializa los atributos de la encuesta.
  
  ```Javascript
  constructor(titulo, preguntas) {
  // Constructor de la clase Encuesta
    this.titulo = titulo; // Título de la encuesta
    this.preguntas = preguntas; // Array de preguntas de la encuesta
  }
  ```
  
- **realizarEncuesta()**: Realiza la encuesta, mostrando cada pregunta, recogiendo los votos y mostrando los resultados.

  ```Javascript
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
  ```
  
- **mostrarResultados()**: Muestra los resultados generales de la encuesta, incluyendo los resultados de cada pregunta.

  ```Javascript
    // Método para mostrar los resultados de la encuesta (resultados de cada pregunta)
  mostrarResultados() {
    console.log("\nResultados generales de la encuesta:"); // Encabezado de resultados generales
    for (const pregunta of this.preguntas) {
      pregunta.mostrarPregunta(); // Muestra la pregunta
      pregunta.mostrarResultados(); // Muestra los resultados de la pregunta
    }
  }
  ```
  
- **opcionCerrarPrograma()**: Pregunta al usuario si desea cerrar el programa y maneja la respuesta.

    ```Javascript
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
  ```

### Clase SistemaEncuestas

La clase `SistemaEncuestas` gestiona múltiples encuestas.

```Javascript
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
```

- **Constructor**: Inicializa el sistema de encuestas y agrega una encuesta por defecto.

  ```Javascript
  constructor() {
      // Constructor de la clase SistemaEncuestas
      this.encuestas = []; // Array para almacenar las encuestas
      this.agregarEncuestaPorDefecto(); // Agrega una encuesta por defecto al inicializar el sistema
    }
  ```
  
- **agregarEncuestaPorDefecto()**: Agrega una encuesta por defecto al sistema.

  ```Javascript
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
  ```

- **menuPrincipal()**: Muestra el menú principal del sistema y maneja las acciones del usuario.

  ```Javascript
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

  ```
  
- **crearEncuesta()**: Permite al usuario crear una nueva encuesta con un título y un conjunto de preguntas.

  ```Javascript
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
  ```
  
- **votarEncuesta()**: Permite a los participantes votar en una encuesta existente seleccionando opciones para cada pregunta.

  ```Javascript
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
  ```
  
- **mostrarResultadosEncuesta()**: Muestra los resultados de una encuesta seleccionada.

  ```Javascript
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
  ```
  
- **editarEncuesta()**: Permite al usuario editar el título de una encuesta existente.

  ```Javascript
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
  ```
  
- **eliminarEncuesta()**: Permite al usuario eliminar una encuesta existente.

  ```Javascript
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
  ```
  

## Solución Explicada Paso a Paso

1. **Definición de Clases**: Se definen las clases `Pregunta`, `Encuesta` y `SistemaEncuestas`, cada una con sus atributos y métodos correspondientes.
2. **Crear Encuesta por Defecto**: Al inicializar el sistema, se agrega una encuesta por defecto con preguntas predefinidas.
3. **Interacción con el Usuario**: Se proporciona un menú principal que permite al usuario seleccionar diferentes acciones, como crear, votar, editar o eliminar encuestas.
4. **Creación de Encuestas**: El usuario puede crear nuevas encuestas proporcionando un título y una serie de preguntas con opciones.
5. **Votación en Encuestas**: Los participantes pueden votar en las encuestas existentes seleccionando opciones para cada pregunta.
6. **Visualización de Resultados**: Se pueden mostrar los resultados de una encuesta, incluyendo el porcentaje de votos para cada opción.
7. **Edición de Encuestas**: El usuario puede editar el título de una encuesta existente si lo desea.
8. **Eliminación de Encuestas**: Se proporciona la opción de eliminar encuestas existentes si ya no son necesarias.
9. **Cierre del Programa**: Al finalizar, se da al usuario la opción de cerrar el programa.

## Instrucciones de Uso

1. **Instalación de Dependencias**: No es necesario instalar ninguna dependencia. Clona este repositorio a tu máquina local.
2. **Ejecución**: Ejecuta el archivo JavaScript mediante `index.html` en tu navegador web.
3. **Interacción**: Sigue las instrucciones en pantalla para crear, votar, editar o eliminar encuestas mediante la consola.

## Autor

Este proyecto fue creado por [Gaudeamus013](https://github.com/Gaudeamus013).
