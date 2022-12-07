<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
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
        p Durante los últimos años los sistemas de información c








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
