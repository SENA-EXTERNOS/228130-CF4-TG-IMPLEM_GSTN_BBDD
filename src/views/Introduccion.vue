<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-a.p-4.p-md-5.mb-5.fnd-izq-pri
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/introduccion/img-1.svg", alt="imagen relacionada")
        .col-lg-8
          .contenedor-dashed.p-3          
            .bloque-texto-a__texto.p-4
              p.mb-4 Estimado aprendiz, bienvenido a este componente formativo, donde podrá adquirir conocimientos relacionados con la protección y recuperación de datos, transacción en una base de datos, soportes, documentación respectiva para el control y acceso a la información. Todos estos elementos claves, tanto para las organizaciones, como para los administradores de bases de datos, quienes serán los encargados de generar acciones que permiten salvaguardar la información. 
              p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/xSXqy53GiJI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    






</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
