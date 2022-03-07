<template>
<Header :text="titulo">

</Header>
<div class="container">
  <div class="row">
      <div class="col-md-10 col-lg-8 mx-auto">
          <p>Este es un blog dedicado al mundo automotor, en el cual te mostraré las últimas novedades de automóviles, los lanzamientos más recientes y te enseñaremos algunos tips para cuidar tu vehículo.</p>
          <p>Este es un medio independiente. Si te gusta nuestro contenido, ayúdanos en Patreon o haciendo una donación a través de PayPal. Te lo agradeceré mucho.</p>
      </div>
  </div>
</div>
<hr>
<Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'

export default {
  components:{
    Header,
    Footer,
  },
  data(){
    return{
      titulo: 'Sobre mí',
    }
  },
}
</script>

<style scoped>
  .header{
    background-image: url('../../public/assets/image/about-bg.jpg');
}
</style>