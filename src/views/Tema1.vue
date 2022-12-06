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
