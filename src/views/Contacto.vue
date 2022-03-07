<template>
    <Header :text="titulo">

    </Header>

    <form action="#" id="form">
        <div class="form__block">
            <label class="label__form" for="name">Nombre</label>
            <input class="input__form" type="text" name="name" id="nameForm">
        </div>
        <div class="form__block">
            <label class="label__form" for="email">Correo</label>
            <input class="input__form" type="email" name="email" id="emailForm">
        </div>
        <div class="form__block">
            <label class="label__form" for="phone">Correo</label>
            <input class="input__form" type="number" name="phone" id="phoneForm">
        </div>
        <div class="form__block">
            <label class="label__form" for="subject">Asunto</label>
            <input class="input__form" type="text" name="subject" id="subjectForm">
        </div>
        <div class="form__block">
            <label class="label__form" for="textArea">Asunto</label>
            <textarea class="textArea" name="textArea" id="messageForm" cols="30" rows="10"></textarea>
        </div>
        <button class="submiteBtn" type="submit">Enviar Mensaje</button>
    </form>
    <Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
name: 'Contacto',
components: {
    Header,
    Footer,
},
data(){
    return{
        titulo: 'Contáctanos para saber más',
    }
},
}
</script>

<style scoped>
    .header{
        background-image: url('../../public/assets/image/contact-bg.jpg');
    }

    #form{
        width: 45%;
        margin: 40px auto;
        padding: 1em;
        border-radius: 15px;
        box-shadow: 0 0 4px #000;
        display: flex;
        flex-flow: column;
    }

    .form__block{
        display: flex;
        flex-flow: column;
    }

    .label__form{
        text-align: left;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 1.3em;
    }

    .input__form{
        border-radius: 7px;
        height: 35px;
    }

    .textArea{
        border-radius: 7px;
        margin-bottom: 20px;
    }

    .submiteBtn{
        width: 45%;
        margin: 0 auto;
        border-radius: 7px;
        padding: 7px 1em;
    }

</style>