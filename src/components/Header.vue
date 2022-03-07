<template>
  <header class="header">
    <h1 class="title">{{text}}</h1>
    <span class="subtitle">{{subtext}}</span>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    text: String,
    subtext: String,
  }
  }

</script>

<style>
  .header{
    width: 100%;
    height: 75vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 2em;
}

.title{
  position: relative;
  top: 45%;
  font-size: 4em;
  font-weight: bold;
  color: #000;
  text-shadow: 0 0 7px #b6b6b6;
}

.subtitle{
  position: relative;
  top: 46%;
  font-size: 2em;
  font-weight: bold;
  color: #fff;
  text-shadow: 0px 0px 4px #000;
}
</style>