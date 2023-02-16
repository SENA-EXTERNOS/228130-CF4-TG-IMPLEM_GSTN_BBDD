<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca(style="overflow:hidden").p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipos de soporte utilizados para salvaguardar datos

    .bloque-texto-a.invert.p-4.p-md-5.mb-5.fnd-izq
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-3 Las bases de datos son programas que guardan Información o registros organizados, que, en su conjunto, se convierten en un elemento del negocio para las empresas. Estos datos, aunque son digitales necesitan tener un componente físico (<i>hardware</i>) que permite el almacenamiento de datos. 
            p.mb-5 Los elementos de <i>hardware</i> que escriben o leen datos en los medios de almacenamiento, se conocen como dispositivos o unidades de almacenamiento. Estos elementos hacen parte de un sistema que, en su conjunto, realiza una tarea, para el caso, la gestión de datos.
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/T2/img-1.png', alt='')

    p.mb-5 Ejemplos de estos elementos son:


    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.config-slyder-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T2/img-2.svg' alt='AvatarTop')
        h4.text-center.text-white Discos magnéticos

      .tarjeta.config-slyder-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T2/img-3.svg' alt='AvatarTop')
        h4.text-center.text-white.mb-3 Discos ópticos  
        p.text-center.text-white (CD, DVD)

      .tarjeta.config-slyder-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T2/img-4.svg' alt='AvatarTop')
        h4.text-center.text-white.mb-3 Cintas magnéticas

      .tarjeta.config-slyder-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T2/img-5.svg' alt='AvatarTop')
        h4.text-center.text-white.mb-3 Discos magneto-ópticos 
        p.text-center.text-white (discos <i>Zip</i>, discos <i>Jaz</i>, <i>SuperDisk</i>).

      .tarjeta.config-slyder-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T2/img-6.svg' alt='AvatarTop')
        h4.text-center.text-white Tarjetas de memoria

    p.mb-5 El objetivo de los dispositivos de almacenamiento es almacenar y permitir la recuperación de información en caso de fallos. Estos almacenamientos están relacionados con dos procesos:



    .row.justify-content-around.align-items-center.mb-5
      .col-2 
        img(src='@/assets/curso/temas/T2/img-7.png')
        
      .col-9
        .col-md-10.mx-absolute.mb-5
          .p-4.faa
            .bloque-texto-a__texto.p-4
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta.fab
                    span 1
                  | Ingreso y lectura de información almacenados, para luego transferirlos a la memoria de la computadora.

                li 
                  .lista-ol--cuadro__vineta.fab
                    span 2
                  | Ingreso y escritura o grabación de datos, para que más tarde se puedan utilizar y realizar un proceso determinado. 


    .row.justify-content-around.align-items-center.mb-5
      
      .col-8
        p.mb-3 Debido a los avances que han surgido a través de la historia, los medios de almacenamiento han evolucionado en forma visible, acompañados de la evolución de las computadoras. Al inicio se contaba con muy pocos elementos de almacenamiento, prácticamente solo eran los que venían predeterminados en las computadoras. Hoy en día, además de estos, existe una diversa gama de almacenamientos externos.
        p.mb-4 A continuación, se muestra la clasificación de los soportes de almacenamiento en cuanto a su evolución histórica. En este listado, el primero de ellos se cuenta como el más antiguo y el último como el más reciente:

      .col-4
        img(src='@/assets/curso/temas/T2/img-8.png')



    .titulo-sexto.color-acento-contenido
      p.mb-0 
        b Tabla 1 
      p.mb-0 <i>Elementos de almacenamientos externos</i>

    .row.justify-content-around.align-items-center.mb-5
      .tabla-a.color-acento-contenido.mb-5 
        table
          thead
            tr
              td 1. Tarjetas perforadas
              td 10.	CD-R
              td 19.	<i>Memory Stick</i> (MS)
              
          tbody
            tr
              td.fac 2.	Cintas perforadas
              td.fac 11.	CD-RW
              td.fac 20.	<i>CompactFlash</i>
            tr
              td 3.	Cintas magnéticas
              td 12.	DVD
              td 21.	<i>Microdrive</i> (MD)
            tr
              td.fac 4.	Discos magnéticos
              td.fac 13.	DVD-R
              td.fac 22.	<i>SmartMedia</i>
            tr
              td 5.	Disquetes
              td 14.	DVD-RW
              td 23.	<i>XD-Picture Card</i>
            tr
              td.fac 6.	Discos duros
              td.fac 15.	<i>Blu Ray</i>
              td.fac 24.	Disco de estado sólido
            tr
              td 7.	Discos duros externos
              td 16.	Tarjetas de memoria
              td 25.	Espacio en la nube
            tr
              td.fac 8.	Discos ópticos
              td.fac 17.	Seguridad Digital (SD)
              td.fac 
            tr
              td 9.	CD-ROM
              td 18.	<i>MutiMediaCard</i> (MMC)
              td 
            

      p.mb-4 Las siguientes son las ventajas de salvaguardar datos en soportes:

      .tarjeta
        .row.justify-content-around.align-items-center.mb-5
          .col-12.mt-3
            .row.p-4.bg-celeste
              .col-12.col-lg-8.offset-lg-1.mt-3
                p.mb-4 La copia de seguridad se registra en un menor tiempo, porque los registros que se han hecho desde la última copia de seguridad son menos. Es decir se toma el tiempo de registrar solo los datos que han cambiado.
              .col-3.d-none.d-lg-flex.position-relative.mt-5
                figure.position-absolute(style="top:-75%;")
                  img(src='@/assets/curso/temas/T2/img-9.png', alt='Texto que describa la imagen')
            .row.justify-content-around.align-items-center.p-4.bg-azul
              .col-3.d-none.d-lg-flex.position-absolute.mt-5
              .col-12.col-lg-11.offset-lg-1.mt-3
                p.mb-4 El espacio de almacenamiento que se debe usar es pequeño.

            .row.justify-content-around.align-items-center.p-4.bg-celeste
              .col-3.d-none.d-lg-flex.position-absolute.mt-5
              .col-12.col-lg-11.offset-lg-1.mt-3
                p.mb-4 Se pueden guardar varias versiones de un archivo.

          
      p Así mismo, la acción de salvaguardar datos en soportes, puede traer consigo algunas desventajas, como:
      p.mb-4 Desventajas de salvaguardar datos en soportes:


      .row.justify-content-around.align-items-center.mb-5
        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                p La recuperación es más lenta. Ya que para restaurar la copia de un determinado día, se tiene que restaurar la última copia completa, adicional a todos los incrementos posteriores, hasta llegar a la copia del día que se desea.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/T2/img-10.png')})`}")

        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                p Para la recuperación se hace necesario la copia completa y las copias incrementales posteriores. 
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/T2/img-11.png')})`}")

        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                p Para la restauración de un archivo en particular, porque necesita buscar todas las copias incrementales para revisar cuál archivo fue el que cambio.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/T2/img-10.png')})`}")

        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                p Si falla alguna de las copias de seguridad, la recuperación no es posible.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/T2/img-11.png')})`}")


      #t_2_3.mb-3
        h3 Tipos de Recuperación de datos

      p La recuperación de datos es un elemento fundamental en las bases de datos, ya que se encarga de registrar el recuperado del archivo. Por tal razón, la recuperación es vital a la hora en que se presentan fallos en los gestores de bases de datos; si los datos son muy importantes para la operación del negocio se hace de forma instantánea. La realización de la restauración de bases de datos resulta útil para copiar una base de datos de un servidor a otro, disponiendo protección para los datos almacenados en bases de datos. 


    .bloque-texto-a.invert.p-4.p-md-5.mb-5.fnd-izq-sec
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-3 Si el administrador cuenta con una planificación adecuada, se recuperan muchos errores de medios, de usuarios y de pérdida permanente en los gestores de las bases de datos. Para desarrollar un plan de copia de seguridad y restauración correcto, se deben analizar cuáles datos son sensibles para la operación del negocio de la empresa y qué posible impacto de la pérdida generan esos datos. También es conveniente crear un plan de recuperación de desastres, para garantizar que todos los sistemas y datos puedan recuperarse rápidamente. Es obligación del administrador de datos, tener esa planificación, para realizar su operación en caso de algún fallo en los SGBD. 
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/T2/img-12.png', alt='')


    .row.justify-content-around.align-items-center.mb-5
      .col-1
        img(src='@/assets/curso/temas/T2/img-13.svg')

      .col-md.col-lg-11
        p Para el servidor SQL existen tres formas de recuperación de registros para cada base de datos. Cada una de ellas determina la lógica de cómo se realizan las copias de seguridad de los datos y cuál es el riesgo de perder datos. El primer modelo de recuperación simple, permite recuperar la base de datos hasta la última copia de seguridad que se había registrado en ella. Por otra parte, el modelo de recuperación completa realiza la recuperación de la base de datos, hasta el momento del error y las operaciones de log hasta el momento de la caída y, en la forma de recuperación de registro masivo, recupera hasta el último registro del 
          em log. 
        p.mb-4 A continuación, se explican cada una de ellas:






    .row.justify-content-center.mb-5
      .col-5
        figure
          img(src="@/assets/curso/temas/T2/img-14.png", alt="Texto que describa la imagen")
      .col-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Recuperación simple")
            p Para esta recuperación, solo se genera la copia de seguridad de los datos que han cambiado desde el último 
              em backup 
              | que se haya registrado en la base de datos. Con este método, se pueden realizar copias de seguridad más constantes, porque estas copias de seguridad diferenciales son más pequeñas y rápidas, que las copias de seguridad de toda una base de datos. Es importante recordar que, realizando copias de seguridad con frecuencia, se disminuye el riesgo de perder datos.

          .row(titulo="Recuperación completa")
            p En las copias de seguridad completas de base de datos, se utiliza la sentencia RESTORE DATABASE, usando como configuración o sentencia, el nombre de la base de datos que se va a restaurar y el dispositivo de copia de seguridad, donde se restaurará la copia de seguridad de la base de datos. Adicionalmente, se utiliza la sentencia NORECOVERY, con el fin de aplicar una copia de seguridad de registro de transacciones, o una copia de seguridad diferencial de base de datos, después de restaurar la copia de seguridad de la base de datos.

          .row(titulo="Recuperación de registro masivoo")
            p  Permite realizar operaciones de recuperación con lotes de alto rendimiento. Son necesarias las copias de seguridad de registros de transacciones, pero la recuperación solo se extiende hasta el momento de efectuar la copia de seguridad.



    #t_2_4.mb-4
      h3 Mecanismos de verificación de la integridad de copias de seguridad


    .row.justify-content-around.align-items-center.mb-5
      
      .col-md.col-lg-8
        p Las bases de datos realizan altos procesamientos de registros, para lo cual son necesarias las copias de seguridad o <i>backup</i>. Estas se realizan con el objetivo de tener copias fieles de los datos originales de un sistema en un momento determinado y tener la posibilidad de gestionar su recuperación, en caso de producirse fallos que generen pérdidas y a su vez, generen inconsistencia de datos. Dichas pérdidas se pueden dar por desastres naturales, que no se pueden evitar, errores humanos o deterioros de <i>software</i> o <i>hardware</i>, que enmarcan agentes tanto externos como internos, como podrían ser los virus informáticos o archivos corrompidos, o las no maliciosas, en las que normalmente son usuarios que no están capacitados, para el manejo de la base de datos o usuarios bien intencionados que eliminan datos.
        .cajon.color-acento-contenido.p-4.mb-4.color-botones-amarillo
          p Por lo anterior, es necesario tener mecanismos de copia de seguridad que garanticen que los datos estén siempre disponibles, como debe ser. Las copias de seguridad no tendrían sentido si no existe un sistema de restauración de datos, si no existieran estas opciones en los SGDB, simplemente los sistemas de información serían muy vulnerables, porque al dañarse una base de datos dejaría de existir. En consecuencia, muchas empresas tendrían que parar sus operaciones. 


      .col-4.col-sm-6.col-md-4.mb-4.mb-md-0
        img(src='@/assets/curso/temas/T2/img-15.png')



    p.mb-5 El mecanismo diseñado para la copia de seguridad es fundamental en la protección de datos o registros para la continuidad y recuperación de los datos de una empresa sin alteraciones. Los mecanismos de copia de seguridad siguen estos factores que se muestran a continuación:



    .row.justify-content-around.align-items-center.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjetas-botones-f.color-primario.p-4
          .row.justify-content-around.align-items-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/T2/img-16.svg', alt='Texto que describa la imagen')

          p.text-small Cantidad de tiempo para realizar las copias de seguridad.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjetas-botones-f.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/T2/img-17.svg', alt='Texto que describa la imagen')

          p.text-small Metodología para registrar copias de seguridad.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjetas-botones-f.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/T2/img-18.svg', alt='Texto que describa la imagen')

          p.text-small Según el fallo, cuál sería el plan de recuperación a seguir para restablecer el funcionamiento.



    .bloque-texto-a.fae.p-4.p-md-5.mb-5.img-bg
      .row.m-0.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-3 Es importante anotar que las copias de seguridad son parte de las tareas de un administrador de base de datos, siendo esta una labor constante. Este hecho se da porque los datos de las organizaciones están expuestos a fallos o daños irreparables, que deben ser recuperados de manera inmediata, una empresa no permite datos eliminados por fallos porque esto se traduciría en pérdidas económicas y desconfianza de sus clientes, por esta razón las copias de seguridad son tareas permanentes.
            p A continuación, se identifican los tipos de copias de seguridad:





    .row.justify-content-center.mb-3
      .col-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Copia de seguridad completa")
            p El objetivo es realizar una copia en otro medio de almacenamiento. Al copiar todos los datos, la copia de seguridad completa puede llegar a presentar lentitud en la operación de la base de datos. Además de necesitar grandes dispositivos de almacenamiento. Este tipo de copia es recomendable realizarla cada mes.

          .row(titulo="Copia de seguridad incremental")
            p Son las copias que se realizan con más frecuencia, ya que se hace la copia desde el punto donde se registró la última copia de seguridad, haciéndola más rápida que la anterior, puesto que se hace copia de los nuevos datos registrados. Si en algún momento se hiciera necesario una copia completa, se necesitan todas las copias anteriores para dejar los datos originalmente. Este hecho se daría en caso de pérdida absoluta de datos dentro de una base de datos.

          .row(titulo="Copia de seguridad diferencial")
            p La copia de seguridad diferencial se enfoca únicamente en los registros nuevos o los que fueron modificados. Es una copia más básica, se registran en algunas situaciones desde la última copia en modo incremental.  
          
          .row(titulo="Copia de seguridad delta")
            p.mb-3 Son copias de seguridad que se van dando cuando la base de datos tiene incrementos en sus registros, estas guardan bloques de datos en archivos individuales.
            p.mb-2 Se debe tener resuelto el problema de la planificación de cada cuánto tiempo se va a hacer una copia de seguridad. Esto va a depender de la importancia que se le dé a la información almacenada en el equipo y del mayor o menor movimiento que se realice de los datos.

      .col-5
        figure
          img(src="@/assets/curso/temas/T2/img-20.png", alt="Texto que describa la imagen")









</template>

<script>
export default {
  name: 'Tema2',
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
