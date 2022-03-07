<template>

  <Header :text="titulo" :subtext="subtitulo">

  </Header>
  <div class="home">
  
  </div>

  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
  },
  data(){
    return{
      titulo: 'V8',
      subtitulo: 'Noticias y reseñas de automóviles'
    }
  }
}
</script>

<style scoped>
      .header{
        background-image: url('../../public/assets/image/home-bg.jpg');
    }


</style>
