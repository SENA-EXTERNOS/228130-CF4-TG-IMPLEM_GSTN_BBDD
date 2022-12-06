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
          .bloque-texto-a__texto.p-4
            p.mb-4 Estimado aprendiz, bienvenido a este componente formativo donde podrá adquirir conocimientos relacionados con la protección y recuperación de datos, además conocerá el término transacción en una base de datos, el cual se refiere a un conjunto de operaciones que forman una única unidad lógica de trabajo. Un ejemplo sencillo son las transferencias de dinero que realiza un usuario de una cuenta a otra, esta acción se considera como una transacción que consta de dos actualizaciones, una para cada cuenta. Estos temas por tratar son muy relevantes tanto para las organizaciones, como para los administradores de bases de datos quienes serán los encargados de generar acciones que permiten salvaguardar la información.
            p.mb-4 En este componente se abordan varios autores conocidos, de quienes se han citado y referenciado conceptos y ejemplos, que se enfocan en las transacciones y las acciones que debe tener el administrador para que los datos conserven su atomicidad.
            p.mb-4 Se espera que este documento sea útil para todos los aprendices que estén interesados en la administración de base de datos, tanto SQL como NoSQL.
    

    p.mb-5 A continuación, se presenta el vídeo de introducción donde podrá conocer lo que se trabajará durante esta etapa formativa. Deseamos que pueda culminar este componente apropiándose de todos los conceptos. <b>Muchos éxitos.</b>


    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    






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
