<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Salvaguarda y recuperación

    .bloque-texto-a.invert.p-4.p-md-5.mb-5.fnd-izq
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 Las bases de datos tienen diariamente altas cargas de trabajo, debido a que el procesamiento de la información es constante. Por esta razón, sus sistemas deben estar siempre en óptimas condiciones para que sus tareas se ejecuten con normalidad. Sin embargo y dada la naturaleza de los sistemas, con el tiempo empiezan a deteriorarse, presentando lentitudes en el procesamiento de la información, hecho que es natural. Ante este suceso se presentan fallos del sistema, siendo una prioridad y un reto para el administrador de datos que la información y sus procesos estén operando de manera normal. Estas acciones son diarias, convirtiendo en un desafío y una responsabilidad, implementar acciones que permitan el funcionamiento normal de los datos. Por este motivo, se invierten recursos en conseguir sistemas cada vez más seguros y eficientes, que limiten daños en los sistemas gestores de datos. Estos sistemas deben capaces de sobreponerse por sí solos a los fallos que pueden presentar los sistemas de información. 
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/T1/img-1.png', alt='')



    .row.justify-content-around.align-items-center.mb-5
      
      .col-4.col-sm-6.col-md-4.mb-4.mb-md-0
        img(src='@/assets/curso/temas/T1/img-2.png')

      .col-md.col-lg-8
        p Durante los últimos años los sistemas de información como las bases de datos, han visto un crecimiento exponencial en el tratamiento de datos nuevos, que se han convertido en una tarea titánica, tanto en su organización como su protección. Por este motivo, han surgido nuevas tecnologías que permiten salvaguardar la información incluso cuando la base de datos está en operación, o se encuentra con fallas dentro de ella. El objetivo principal es prestar el servicio, aun así, se estén presentando problemas con el sistema. Es así como, salvaguardar la información es un tema recurrente para el administrador, ya que son acciones que no se deben pasar por alto, deben ser cuidadosos y manejar constantemente procesos seguros. 
        .cajon.color-acento-botones.p-4.mb-4.color-botones
          p La prevención en la asignación de usuarios, roles, privilegios, seguridad de acceso, entre otros, son temas del diario vivir que debe atender un administrador. Adicionalmente, debe tener planes de resguardo de información que eviten pérdidas definitivas; cuando se presentan fallos totales de información, la prioridad es que a pesar de los problemas que se presenten, los sistemas de información trabajen con normalidad. Con todo esto, surgen medidas para mitigar el impacto negativo si ocurre un fallo en el sistema de base de datos. 
    


    p.mb-5 A continuación, se mencionan las acciones que se deben tomar en caso de fallo en el sistema, como evaluación de concurrencia, descripción de fallos, control y acceso; por último, enumeración y descripción de los elementos de recuperación ante fallos lógicos.



    Separador.p3.mb-5

    #t_1_1.titulo-segundo.color-acento-contenido.mb-5
      h2 1.1 Evaluación de concurrencia



    .row.justify-content-around.align-items-center.mb-5
      
      .col-6 
        p.mb-4 El objetivo principal del control de concurrencia es asegurar la seriación de las transacciones en la base de datos multiusuarios. El control de concurrencia es importante porque los procesos simultáneos de transacciones en una base de datos compartida, pueden crear varios problemas de integridad de datos afectando su consistencia. Debido a esto, la labor diaria del administrador de bases de datos se centra en la preservación, consistencia y corrección de los datos que se almacenan diariamente. Un Sistema de Administración de Base de Datos (DBMS) relacional impone generalmente una o más restricciones sobre la integridad de datos. Estas restricciones impiden que los valores que son insertados en la base de datos o duplicados mediante las actualizaciones permanentes de la base de datos, tengan parámetros restrictivos dentro de los gestores. 
        p A continuación, se encuentran los diferentes tipos de restricciones de integridad de datos encontrados en las bases de datos relacionales:

      .col-6
        img(src='@/assets/curso/temas/T1/img-3.png')


    .row.justify-content-center.mb-3
      .col-5
        figure
          img(src="@/assets/curso/temas/T1/img-4.png", alt="Texto que describa la imagen")
      .col-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Datos requeridos")
            p algunas columnas en una base de datos deben contener un valor de dato válido en cada fila. Es decir, no se permite que contengan valores NULL o que falten. Este elemento es importante para la integridad de los datos. Es labor del diseñador de bases de datos especificar en qué columna es requerido el valor cuando se crea una tabla, el DBMS debe impedir valores NULL o nulos en esas columnas.

          .row(titulo="Chequeo de validez")
            p para los gestores cada columna de una base de datos debe contener un dominio propio, o sea, valores que identifiquen la columna como tal. El sistema administrador de base de datos está configurado para impedir valores diferentes de datos en estas columnas.

          .row(titulo="Integridad de entidad")
            p la clave primaria de una tabla se identifica por tener un valor único en cada fila, a diferencia de los otros valores de la tabla. Los registros duplicados no deben ser permitidos y el DBMS debe estar configurado para impedir la duplicidad de los registros, permitiendo registros únicos en cada tabla. Las restricciones de integridad de entidad aseguran que la clave primaria identifique unívocamente a cada tabla representada en la base de datos.

          .row(titulo="Integridad referencia")
            p las claves secundarias o foránea, en una base de datos relacional establecen la relación entre la tabla hija con la tabla padre, a su vez, cada una de ellas contiene clave primaria correspondiente. El DBMS se puede configura para registrar la restricción de clave foránea/clave primaria. Las restricciones de integridad referencial de datos aseguran que las relaciones entre tablas, en la base de datos, se preserven durante las actualizaciones.

          .row(titulo="Consistencia")
            p la cantidad de registros nuevos que operan en cuestiones de segundos y la cantidad de procesos que se registran, producen múltiples actualizaciones en la base de datos. Las sintaxis INSERT (insertar) y UPDATE (actualizar) se ejecutan de modo que la base de datos continúe en un estado correcto y consistente de procesamiento de la información. El DBMS se configura para registrar este tipo de regla de consistencia o para soportar aplicaciones externas que implementen tales reglas. 





    Separador.p3.mb-5

    #t_1_2.titulo-segundo.color-acento-contenido.mb-5
      h2 1.2 Descripción de fallos, control y acceso





    .row.justify-content-around.align-items-center.mb-5
      
      .col-md.col-lg-8
        p Toda operación que se haga en un sistema de información requiere de mantenimiento, respaldo y recuperación, constituyen un componente vital para el buen funcionamiento en los Sistemas Gestores de Base de Datos (SGBD) actuales. Algunos SGBD proporcionan herramientas para que se puedan ejecutar de manera programada respaldos automáticos en los dispositivos de almacenamiento con el fin de evitar pérdidas que afecten la operación.
        .cajon.color-acento-contenido.p-4.mb-4.color-botones-amarillo
          p Las bases de datos son sistemas de almacenamientos de información digital que están susceptibles a fallo o perdidas de información por distintos motivos; es labor del Administrador del sistema, evitar que esto suceda, tiene a su alcance una serie de herramientas que le permiten proteger la información. A continuación, se mencionan los factores o fallos más comunes que se presentan en los SGBD.

      .col-4.col-sm-6.col-md-4.mb-4.mb-md-0
        img(src='@/assets/curso/temas/T1/img-5.png')

    
    .titulo-sexto.color-acento-contenido
      p.mb-0 
        p <b> Figura 1. </b> <i>Fallos más comunes en un sistema de información</i>


    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/T1/img-6.png', alt='Texto que describa la imagen')

      .tarjeta.color-botones-calientes.p-3(x="11.5%" y="93%" numero="1")
        .h5.mb-2 Desastres naturales
        p son hechos impredecibles que suceden en un momento determinado. Aunque son poco probables, ocurren eliminando por completo sistemas de información físicamente.

      .tarjeta.color-botones-calientes.p-3(x="36.8%" y="93%" numero="2")
        .h5.mb-2 Errores humanos
        p el desconocimiento en los sistemas de información o los accesos permitidos en ciertas tablas o ficheros llevan a cometer errores, registrando pérdidas de información ya sea parcial o total.

      .tarjeta.color-botones-calientes.p-3(x="62.3%" y="92%" numero="3")
        .h5.mb-2 Daños de <i>hardware</i> y <i>software</i>
        p con el tiempo los sistemas de información se vuelven lentos por su alto trabajo, que es constante. Por lo cual están expuestos a daños de discos duros, tarjetas madre, aplicaciones de la base de datos, ficheros, entre otros.

      .tarjeta.color-botones-calientes.p-3(x="87.5%" y="93%" numero="4")
        .h5.mb-2 Virus
        p la importancia de los datos es un elemento deseado por delincuentes informáticos que buscan la forma de robar información, por esta razón los SGBD están expuestos constantemente a los ataques cibernéticos. 

      

    .row.justify-content-around.align-items-center.mb-5
      .col-1
        img(src='@/assets/curso/temas/T1/img-7.svg')

      .col-md.col-lg-11
        p.mb-4 La función del Sistema Gestor de Base de Datos (SGBD) es garantizar que los datos puedan ser recuperados en su totalidad, en caso de una pérdida física o lógica en la que se pierda la integridad de la base de datos.
        p.mb-5 Hay dos formas de pérdidas de datos, una puede ser parcial y la más delicada que afecta la operación, sería la pérdida total.

      

    .row.mb-5
      .row.justify-content-center(data-aos="fade-down").mt-5
        .col-10.col-lg-4
          .row.px-2.pt-2.h-100
            .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
              figure
                img(src="@/assets/curso/temas/T1/img-8.png", alt="Texto que describa la imagen")
              .text.p-lg-3.p-4
                .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                  .h4.small-text.mt-sm-3.mt-md-0 Pérdida total
                  p.mt-3.small-text puede ocurrir por una pérdida de integridad de toda la base de datos, pero que esta físicamente, continúe existiendo o que se haya perdido por completo. Esto sucede cuando ocurren desastres naturales, en otras ocasiones por los virus severos que dañan la base de datos en su totalidad y en una medida menos probable, un error humano que elimine la base de datos o ficheros sin autorización.

        .col-10.col-lg-4
          .row.px-2.pt-2.h-100
            .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
              figure
                img(src="@/assets/curso/temas/T1/img-9.png", alt="Texto que describa la imagen")
              .text.p-lg-3.p-4
                .row.text-center.px-1.pt-1.mt-1.mt-md-4.mt-lg-3.mt-xl-4.pt-md-0
                  .h4.small-text.mt-1.mt-md-0 Pérdida parcial 
                  p.mt-3.small-text provocada por la pérdida física de una parte de la base de datos, o por la pérdida de integridad de una parte de la misma. También puede ocurrir un daño en algún componente del servidor, como lo es uno de sus discos duros.


      
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    



    Separador.p3.mb-5

    #t_1_3.titulo-segundo.color-acento-contenido.mb-5
      h2 1.3 Enumeración y descripción de los elementos de recuperación ante fallos lógicos

    p.mb-5 El objetivo de la administración de base de datos siempre es mantener una armonía en el procesamiento de la información de los SGBD. Por tanto, no se espera encontrar con tablas corruptas o destruidas, si esto ocurre se hace necesario seguir las siguientes estrategias:



    .row.mb-5
      .col-12.mt-3
        .row.p-4.bg-celeste
          .col-3.d-none.d-lg-flex.position-relative.mt-5
            figure.position-absolute(style="top:-75%;")
              img(src='@/assets/curso/temas/T1/img-10.png', alt='Texto que describa la imagen')
          .col-12.col-lg-8.offset-lg-1.mt-3
            h3.mb-4 Recuperar datos
            p.mb-4 Cuando hay caídas del sistema se debe conocer cómo restaurar y, si es necesario reparar tablas, recuperar archivos de respaldo que se ejecutan diariamente y utilizar los registros de actualización para recuperar los cambios que se hayan hecho desde la última copia de seguridad. Las copias de seguridad son determinantes a la hora de reestablecer nuevamente la base de datos a su estado original, cuando se presente algún fallo.
        .row.p-4.bg-azul
          .col-3.d-none.d-lg-flex.position-relative.mt-5
          .col-12.col-lg-8.offset-lg-1.mt-3
            h3.mb-4 Disminuir caídas de mantenimiento preventivo
            p.mb-4 Siempre se hace necesario tener programas de mantenimiento preventivo. Cabe resaltar, que con el tiempo los sistemas se saturan de información, presentan lentitudes, sus sistemas se hacen más vulnerables. Con estos mantenimientos se actualizan los sistemas, se borran ejecuciones ya obsoletas, se libera espacio en el disco, que puede servir para nueva información, en pocas palabras se vuelve un sistema nuevo.



    p.mb-5 Dentro de la planificación y organización de la administración de datos, se incluyen los respaldos, pruebas y recuperación. Se identifican las siguientes acciones para esto:




    .row.justify-content-around.align-items-center.mb-5
      .col-md-8.mb-5.mb-md-0
        LineaTiempoD.color-secundario
          p.mb-2.text-small(numero="1" titulo="Respaldos periódicos de datos") Los respaldos periódicos de datos en los SGBD, incorporan herramientas para realizar diferentes tipos de recuperación: total o incremental.
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | <b>Respaldo total:</b> son aquellos que registran una copia completa de toda la base de datos.
              li 
                i.fas.fa-angle-right
                | <b>Respaldo incremental:</b> son aquellos que registran una copia de respaldo, desde el momento en que se registró la última copia.
              li 
                i.fas.fa-angle-right
                | <b>Respaldo concurrente:</b> son copias constantes, cuando el usuario realiza registros va realizando copias.
          
          p.text-small(numero="2" titulo="Seleccionar el respaldo adecuado") descripción detallada, hora y fecha.
          
          p.text-small(numero="3" titulo="Copia de respaldo en almacenamiento seguro") cada copia de respaldo debe guardarse en un lugar diferente, que tenga todas las condiciones de seguridad, además, el sitio debe ser apropiado en cuanto a humedad y temperatura. Hoy en día hay empresas encargadas de guardar copias de seguridad, de forma remota, periódica, automática y segura.
          
          p.text-small(numero="4" titulo="Protección física de <i>hardware</i> y <i>software</i>") son lugares que deben ser adecuados para el trabajo de los componentes, donde están la base de datos, con aire acondicionado, protección contra incendios, un SGBD de respaldo, etc.
          
          p.text-small(numero="5" titulo="Control del acceso") del personal al <i>software</i> mediante contraseñas y sistemas de privilegios multinivel.
          
          p.text-small(numero="6" titulo="Cobertura de seguro") para los datos, en la base de datos, para contar con protección financiera. 

      .col-4
        img(src='@/assets/curso/temas/T1/img-11.png')








</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
