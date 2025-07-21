# LIRA: Aplicación de Traducción LESSA-Español


LIRA es una aplicación diseñada para la traducción bidireccional en tiempo real del Lenguaje de Señas Salvadoreña (LESSA) al español y viceversa, utilizando inteligencia artificial para facilitar la comunicación entre personas sordas y oyentes.

## Tabla de Contenidos

- [Documentación del Proyecto](#documentación-del-proyecto)
  - [Características Principales](#características-principales)
  - [Misión, Objetivo y Visión](#misión-objetivo-y-visión)
  - [Planes de Precios](#planes-de-precios)
  - [Noticias](#noticias)
- [Funcionamiento](#funcionamiento)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instrucciones de Ejecución](#instrucciones-de-ejecución)
- [Uso de la Aplicación](#uso-de-la-aplicación)
- [Demo de la Aplicación](#demo-de-la-aplicación)
- [Equipo de Desarrollo](#equipo-de-desarrollo)
- [Preguntas Frecuentes (FAQ)](#preguntas-frecuentes-faq)
- [Contacto](#contacto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

---

## Documentación del Proyecto

Esta sección proporciona una visión general de las funcionalidades y aspectos clave de LIRA.

### Características Principales

LIRA ofrece funcionalidades esenciales para la comunicación inclusiva:

* **Traducción Bidireccional en Tiempo Real**: Permite la comunicación instantánea entre LESSA y español.
* **Reconocimiento de Movimiento y Voz**: Interpreta señas y voz con alta precisión mediante IA.
* **Avatar Interactivo LESSA**: Un avatar 3D traduce texto en español a LESSA visualmente.
* **Aprendizaje Continuo**: La IA de LIRA mejora su precisión y vocabulario con cada interacción.

### Misión, Objetivo y Visión

* **Misión**: Promover la inclusión y la igualdad comunicativa entre personas sordas y oyentes.
* **Objetivo**: Facilitar la comunicación y la igualdad a través de la innovación tecnológica, eliminando barreras.
* **Visión**: Transformar la experiencia de vida de personas sordas y oyentes, fomentando la pertenencia e igualdad en la comunicación diaria.

Trabajamos en colaboración con organizaciones de la comunidad sorda para asegurar la relevancia cultural y la utilidad de la solución.

### Planes de Precios

LIRA ofrece planes adaptados a diferentes usuarios:

* **Plan Gratuito**: Traducción básica, funcionalidades esenciales, límite diario de traducciones.
* **Plan Premium**: Traducción ilimitada, acceso completo a características, soporte prioritario por **$9.99/mes**.
* **Plan Institucional**: Soluciones personalizadas, integraciones API, capacitaciones y administrador de cuentas dedicado. Contactar para cotización.

### Noticias

Manténgase informado sobre LIRA y temas relacionados con inclusión y tecnología:

* **LIRA en las Noticias: Lanzamiento Exitoso** (15 de Julio, 2025)
* **La IA y LESSA: Un Futuro de Conexión** (10 de Julio, 2025)
* **Historias de Impacto: Voces Conectadas por LIRA** (5 de Julio, 2025)

---

## Funcionamiento

LIRA actúa como un puente de comunicación bidireccional en tiempo real, impulsado por inteligencia artificial.

1.  **Captura de Entrada**:
    * **LESSA a Español**: La cámara del dispositivo captura movimientos y gestos de LESSA. Algoritmos de visión por computadora procesan el video.
    * **Español a LESSA**: El micrófono del dispositivo capta la voz en español. Algoritmos de reconocimiento de voz (ASR) transcriben el audio a texto.

2.  **Procesamiento por Inteligencia Artificial**:
    * **Para señas**: Los datos de video son analizados por una red neuronal (CNN) entrenada en LESSA para reconocer configuración de manos, movimiento, ubicación y expresiones faciales.
    * **Para voz**: El texto transcrito en español es procesado por un modelo de lenguaje natural (NLP) para su traducción a LESSA.

3.  **Traducción y Salida en Tiempo Real**:
    * **Salida en Español (para oyentes)**: Las señas interpretadas por la IA se traducen a texto en español, que se muestra en pantalla o se convierte a voz (TTS).
    * **Salida en LESSA (para sordos)**: El texto traducido a LESSA es interpretado por un **avatar 3D interactivo** en pantalla, que reproduce las señas, incluyendo movimientos faciales y corporales.

4.  **Aprendizaje Continuo**:
    * El modelo de IA de LIRA mejora constantemente. Datos de uso y retroalimentación refinan los algoritmos, expanden el vocabulario de señas y optimizan la precisión y fluidez de la traducción.

Este proceso es casi instantáneo, buscando una comunicación fluida y natural.

---

## Tecnologías Utilizadas

El proyecto LIRA se basa en las siguientes tecnologías frontend:

* **HTML5**: Estructura y contenido semántico de la página.
* **CSS3**: Estilos visuales, diseño responsivo y variables CSS.
* **JavaScript (ES6+)**: Interactividad del lado del cliente (navegación, FAQ).
* **Bootstrap (Clases)**: Convenciones de clases y diseño responsivo.
* **Font Awesome**: Iconos escalables.
* **Google Fonts**: Tipografías 'Poppins' y 'Newsreader'.

---

## Estructura del Proyecto

├── assets/
│   ├── img/                  # Imágenes del proyecto (banners, capturas de pantalla, fotos de equipo).
│   └── favicon.ico           # Icono de la página.
├── main.html                 # Archivo HTML principal.
├── script.js                 # Lógica JavaScript para la interactividad.
├── style.css                 # Hoja de estilos CSS.
└── README.md                 # Este archivo de documentación.

---

## Instrucciones de Ejecución

Para ejecutar este proyecto localmente, solo se necesita un navegador web.

1.  **Obtener los Archivos**:
    * **Clonar Repositorio**: Si el proyecto está en Git:
        ```bash
        git clone [https://github.com/Camp0sAlvar0/LIRA-SV.git](https://github.com/Camp0sAlvar0/LIRA-SV.git)
        ```
    * **Archivos Directos**: Asegúrese de tener la carpeta completa del proyecto.

2.  **Abrir `main.html` en el Navegador**:
    * Localice `main.html` en la carpeta raíz.
    * Haga doble clic en `main.html` o arrástrelo a la ventana de su navegador (Chrome, Firefox, Edge, Safari).

3.  **Interacción**:
    La página web de LIRA cargará y podrá interactuar con ella localmente.

### Requisitos del Sistema

* Navegador web moderno y actualizado.
* Conexión a Internet (inicialmente para cargar CDN de fuentes/iconos).

---

## Uso de la Aplicación

La página web de LIRA es un portal informativo y de demostración:

* **Navegación**: Utilice la barra superior para saltar a secciones específicas.
* **Exploración**: Vea las funcionalidades en "Características Principales".
* **Demostración**: Reproduzca el video en la sección principal o "App Demo".
* **Información Detallada**: Revise "Misión, Objetivo y Visión" y "Preguntas Frecuentes (FAQ)".
* **Equipo**: Conozca a los desarrolladores en la sección "Equipo".
* **Noticias**: Manténgase informado en "Noticias".
* **Contacto**: Use los enlaces en el pie de página para comunicarse.

---

## Demo de la Aplicación

Vea un video de demostración de LIRA y explore el código en GitHub:

* **[Ver Demo y Código en GitHub](https://github.com/Lira-SV)** (Actualice este enlace con su repositorio real).

---

## Equipo de Desarrollo

El equipo de LIRA de desarrollo está formado por:

* **Álvaro Campos**
* **Cristina Alfaro**
* **Michelle García**
* **Brandon Reyes**

---

## Preguntas Frecuentes (FAQ)

* **¿Qué es LIRA y cómo funciona?**
    LIRA es una aplicación móvil con IA que traduce LESSA a español y viceversa en tiempo real, usando reconocimiento de gestos y voz, y un avatar interactivo.
* **¿Es LIRA compatible con todos los dispositivos?**
    Compatible con la mayoría de smartphones y tablets iOS y Android. Verifique requisitos mínimos en tiendas de aplicaciones.
* **¿Qué idiomas soporta LIRA además del español y LESSA?**
    Actualmente, se enfoca en LESSA y español. Se planean expansiones futuras a otros lenguajes de señas y hablados.
* **¿Cómo puedo contribuir a mejorar LIRA o reportar un error?**
    Use la función "Feedback" en la app o contáctenos por correo/redes sociales.
* **¿Hay una versión de escritorio de LIRA?**
    Actualmente solo móvil. Se evalúa una versión de escritorio o web futura.

---

## Contacto

Para preguntas o comentarios:

* **WhatsApp**: [+503 7490 - 7986](https://wa.me/50374907986)
* **Correo Electrónico**: [lirasv24@gmail.com](mailto:lirasv24@gmail.com)
* **Instagram**: [@lira_sv](https://instagram.com/lira_sv)
* **Facebook**: [@lira_sv](https://facebook.com/lira_sv)
* **TikTok**: [@lira_sv.25](https://www.tiktok.com/@lira_sv.25)
* **LinkedIn**: [Enlace a LinkedIn de LIRA o del equipo]

---

## Contribuciones

Las contribuciones son bienvenidas. Siga estas directrices:

1.  **Fork el Repositorio**.
2.  **Cree una Rama**: `git checkout -b feature/nombre-de-tu-caracteristica`.
3.  **Realice sus Cambios**.
4.  **Realice un Commit**: `git commit -m 'feat: Añade [Descripción de la característica]'`.
5.  **Envíe sus Cambios**: `git push origin feature/nombre-de-tu-caracteristica`.
6.  **Abra un Pull Request (PR)**: Describa los cambios detalladamente.

---

## Licencia

Este proyecto está bajo la Licencia MIT. Consulte [LICENSE.md](LICENSE.md) para más detalles.

---

© 2025 LIRA TEAM. Todos los derechos reservado