<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Documentación de control y accesos


    .row.justify-content-around.align-items-center.mt-5
      .col-10.px-5.py-4
        .row
          .col-12.d-lg-block
            .bloque-texto-x.fad.p-3.p-sm-4.p-md-5.mb-5
              .bloque-texto-x__img(data-aos='fade-right')(
                :style="{'background-image': `url(${require('@/assets/curso/temas/T3/img-1.png')})`}"
              )
              .bloque-texto-a__texto.p-4
                p.mb-3 En la base de datos, se asocia frecuentemente la seguridad de los datos con la de la integridad de los mismos. Usualmente, es una percepción que se tiene entre administradores de SGBD, pero ambos conceptos son bastante diferentes. Si bien la seguridad hace referencia a la protección de los datos, es decir, que los datos que estén dentro de una base de datos no tengan cambios si no están permitidos; visto desde el punto de vista de su alteración o destrucción, no autorizadas por parte del administrador. Por otra parte, la integridad hace referencia a la precisión o validez de esos datos.
                p.mb-5 A continuación, se muestran los significados de seguridad e integridad:


    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-around.align-items-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/T3/img-2.svg', alt='Texto que describa la imagen')
        h4.text-center Seguridad
        p  protección de datos ante usuarios no autorizados.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-around.align-items-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/T3/img-3.svg', alt='Texto que describa la imagen')
        h4.text-center Integridad
        p protección de usuarios autorizados. 



    .row.justify-content-around.align-items-center.mb-5
      
      .col-md.col-lg-8
        p Según el concepto anterior, la seguridad es la encargada de garantizar que los usuarios tengan el permiso de realizar tareas específicas; mientras que la integridad, involucra asegurar que las tareas que están gestionando, se realicen de forma correcta.
        .cajon.color-acento-contenido.p-4.mb-4.color-botones-amarillo
          p Como son conceptos que interfieren en un mismo objetivo existen similitudes: en los dos casos el sistema necesita registrar restricciones para los usuarios. Además para ambos casos, estas restricciones deben ser especificadas por el administrador de base de datos en un lenguaje adecuado y deben estar dentro del catálogo del sistema. Adicionalmente, en ambos casos el SGBD vigila las operaciones del usuario, para asegurarse que cumpla las restricciones impuestas. 
 


      .col-4.col-sm-6.col-md-4.mb-4.mb-md-0
        img(src='@/assets/curso/temas/T3/img-4.png')




    .bloque-texto-a.faf.p-4.p-md-5.mb-5.img-bg-seg
      .row.m-0.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-3 La seguridad de los registros en un Sistema Gestor de Base de Datos (SGBD) es un aspecto importante para las organizaciones, su objetivo es proteger los datos de personas que no están autorizadas para el uso de ellos. 
            p Claramente, la información es un elemento que debe tener especial cuidado, porque representa un valor importante para las empresas, perderla significa una disminución en las operaciones del negocio. Se debe recordar que la información les da la posibilidad a las empresas de gestionar negocios entre sus clientes. 


    p.mb-5 A continuación, se ven algunos aspectos importantes que, si no se tienen en cuenta, pueden vulnerar la seguridad de los datos en una empresa:



    .titulo-sexto.color-acento-contenido
      p.mb-0 
        p <b> Figura 2. </b> <i>Seguridad de los registros en un Sistema Gestor de Base de Datos (SGBD)</i>


    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/T3/img-6.png', alt='Texto que describa la imagen')

      .tarjeta.color-botones-calientes-seg.p-3(x="5.6%" y="31%" numero="1")
        .h5.mb-2 Aspectos legales, sociales y éticos
        p Por ejemplo, la persona que hace la petición ¿tiene derecho legal para conocer la información solicitada como, el crédito de un cliente?

      .tarjeta.color-botones-calientes-seg.p-3(x="21.2%" y="71.5%" numero="2")
        .h5.mb-2 Controles físicos
        p Por ejemplo, ¿el lugar en donde se encuentra la computadora o terminal está bajo llave o con alguna otra protección?

      .tarjeta.color-botones-calientes-seg.p-3(x="35.6%" y="31%" numero="3")
        .h5.mb-2 Cuestiones de política
        p Por ejemplo, ¿cómo decide la empresa propietaria del sistema a quién y a qué se le permite tener acceso?

      .tarjeta.color-botones-calientes-seg.p-3(x="50.8%" y="71.5%" numero="4")
        .h5.mb-2 Problemas operacionales
        p Por ejemplo, si se utiliza un esquema de contraseñas, ¿cómo se les mantiene en secreto? ¿CON cuánta frecuencia son cambiadas?

      .tarjeta.color-botones-calientes-seg.p-3(x="65.2%" y="31%" numero="5")
        .h5.mb-2 Controles de <i>hardware</i>
        p Por ejemplo, ¿la unidad de procesamiento proporciona alguna característica de seguridad, como claves de protección de almacenamiento o un modo de operación protegida?

      .tarjeta.color-botones-calientes-seg.p-3(x="80%" y="71.5%" numero="6")
        .h5.mb-2 Soporte del sistema operativo
        p Por ejemplo, ¿el sistema operativo subyacente borra el contenido de la memoria principal y los archivos de disco, cuando ha terminado de utilizarlos?

      .tarjeta.color-botones-calientes-seg.p-3(x="94.5%" y="31%" numero="7")
        .h5.mb-2 Los asuntos que conciernen únicamente al sistema de base de datos
        p Por ejemplo, ¿tiene el sistema de base de datos un concepto de propiedad de los datos?



    .row.justify-content-around.align-items-center.mb-5
      .col-1
        img(src='@/assets/curso/temas/T3/img-7.svg')

      .col-md.col-lg-11
        p.mb-4 Hay dos enfoques que dirigen la seguridad de los datos, los cuales buscan proteger los datos de una base de datos de usuarios mal intencionados, o simplemente de cometer errores de borrado de registros. Estos controles se conocen como: 
        



    .tarjeta.tarjeta-slyder.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h3.mb-3 Control de acceso discrecional 
            p.mb-3 El control de acceso discrecional (DAC) es un mecanismo de <i>software</i> o del SGBD, para controlar el acceso de los usuarios a archivos y directorios. Además, el control de acceso discrecional deja que la configuración de protecciones para archivos y directorios, sean realizadas por el administrador de la base de datos según su criterio. Hay dos formas para ejercer el control de acceso discrecional, una son los <i>bits</i> de permisos UNIX y las listas de control de acceso (ACL).
            p Los <i>bits</i> permiten que el administrador establezca protección de lectura, escritura y ejecución, si así lo desea por propietario, grupo y otros usuarios. Por otra parte, el sistema UNIX, permite al superusuario o usuario <i>root</i> registrar la protección de DAC.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/T3/img-8.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h3.mb-3 Control de acceso obligatorio
            p.mb-4 para las copias de seguridad completas de base de datos, se utiliza la sentencia <i>RESTORE DATABASE</i>, usando como configuración o sentencia el nombre de la base de datos que se va a restaurar y el dispositivo de copia de seguridad donde se restaurará la copia de seguridad de la base de datos. 
            p Adicionalmente, se utiliza la sentencia <i>NORECOVERY</i>, esto con el fin de aplicar una copia de seguridad de registro de transacciones o una copia de seguridad diferencial de base de datos, después de restaurar la copia de seguridad de la base de datos. 
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T3/img-9.png', alt='Texto que describa la imagen')









</template>

<script>
export default {
  name: 'Tema3',
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
