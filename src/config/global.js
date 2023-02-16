export default {
  global: {
    componenteFormativo: 'Documentación y diagnóstico de servicios',
    descripcionCurso:
      'En este componente formativo se abordan las transacciones desde el punto de vista del usuario, quien es el actor y conductor de una base de datos. Se puede decir que las transacciones son acciones conjuntas de personas que alimentan la base de datos, con información o datos, transacción que se encarga de organizarla para posteriores operaciones, hablando de consultas en general.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/banner-bg.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Salvaguarda y recuperación',
        desarrolloContenidos: true,
        subMenu: [],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de soporte utilizados para salvaguardar datos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Documentación de control y accesos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Documentación de control y accesos',
      referencia:
        'Capacho, J. y Nieto, W. (2017). <em>Diseño de base de datos</em>. Universidad del Norte.',
      tipo: 'PDF',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/70030?page=129',
    },
    {
      tema: 'Salvaguarda y recuperación ',
      referencia:
        'San Martín, E. (2015). <em>Salvaguarda y seguridad de los datos: administración de bases de datos</em> (UF1473). IC Editorial.',
      tipo: 'PDF',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/44140?page=17',
    },
    {
      tema: 'Tipos de soporte utilizados para salvaguardar datos',
      referencia:
        'San Martín, E. (2015). <em>Salvaguarda y seguridad de los datos: administración de bases de datos</em> (UF1473). IC Editorial.',
      tipo: 'PDF',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/44140?page=71',
    },
    {
      tema: 'Salvaguarda y recuperación',
      referencia:
        'Valderrey, P. (2015). </em>Gestión de bases de datos</em>. RA-MA Editorial.',
      tipo: 'PDF',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/62469?page=179',
    },
  ],
  glosario: [
    {
      termino: 'Accesos autorizados',
      significado:
        'autorizaciones concedidas a un usuario para la utilización de los diversos recursos.',
    },
    {
      termino: 'Autenticación',
      significado:
        'procedimiento de comprobación de la identidad de un usuario en un sistema de base de datos.',
    },
    {
      termino: 'Borrado seguro de datos',
      significado:
        'conjunto de procedimientos que se realizan sobre un dispositivo determinado para impedir la recuperación de los datos.',
    },
    {
      termino: 'Contraseña',
      significado:
        'cadena de caracteres, que puede ser usada en la autenticación de un usuario.',
    },
    {
      termino: 'Copia de respaldo',
      significado:
        'copia de los datos de un fichero automatizado en un soporte que posibilite su recuperación.',
    },
    {
      termino: 'Concurrencia',
      significado:
        'es el registro de transacciones simultánea en una base de datos relacional, que debe ser operada de manera organizada, para no tener pérdidas de integridad de datos.',
    },
    {
      termino: 'Eventos',
      significado:
        'son tareas que se programan en un sistema gestor de base de datos en un momento de tiempo determinado.',
    },
    {
      termino: 'Fichero',
      significado:
        'conjunto organizado de informaciones almacenadas en un soporte común.',
    },
    {
      termino: 'Gestión de incidentes',
      significado:
        'conjunto de acciones y procesos a brindar a las organizaciones, teniendo como objetivo fortalecer y mejorar las capacidades de respuesta, en forma adecuada a la ocurrencia de incidentes de seguridad de la información, que afecten real o potencialmente sus servicios.',
    },
    {
      termino: 'SGBD',
      significado: 'sistema gestor de bases de datos. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Coronel, C., Rob, P. y Morris, S. (2011). Bases de datos: diseño, implementación y administración. Cengage Learning. ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=1280',
    },
    {
      referencia:
        'Lozano, J. M. (2018). Creación y gestión de una base de datos con MySQL y PhpMyAdmin. [Tesis, Universidad de Jaén]. ',
      link: 'https://tauja.ujaen.es/bitstream/10953.1/9445/1/TFG%20%285%29.pdf',
    },
    {
      referencia:
        'Martínez, F. J. y Gallegos, A. (2017). Programación de bases de datos relacionales. Ediciones de la U. ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7970',
    },
    {
      referencia:
        'Capacho, J. y Nieto, W. (2017). Diseño de base de datos. Universidad del Norte. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/70030?page=129',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
