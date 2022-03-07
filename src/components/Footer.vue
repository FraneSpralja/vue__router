<template>
    <footer class="footer">
        <div class="block__footer">
            <h3 class="footer__title">Síguenos en Redes Sociales</h3>
            <ul class="footer__list">
                <li class="footer__list--item">
                    <a href="#" class="footer__item--link"><i class="fa-brands fa-facebook"></i></a>
                </li>
                <li class="footer__list--item">
                    <a href="#" class="footer__item--link"><i class="fa-brands fa-twitter"></i></a>
                </li>
                <li class="footer__list--item">
                    <a href="#" class="footer__item--link"><i class="fa-brands fa-github"></i></a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data(){
        return {

        }
    },
}
</script>

<style>
    .footer {
        position: relative;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 4em;
        display: flex;
        background-color: #1d1d1d;
    }

    .block__footer{
        margin: auto;
        display: flex;
        flex-flow: column;
    }

    .footer__title{
        text-align: center;
        color: #b3b3b3;
    }

    .footer__list{
        display: flex;
        list-style-type: none;
        padding: 0;
        margin: auto;
    }

    .footer__list--item{
        padding: 1em 2em;
    }

    .footer__item--link{
        text-decoration: none;
        font-size: 3em;
        color: #7a7878;
        transition-property: color, filter;
    }

    .footer__item--link:hover{
        color: #2c3e50;
        filter: drop-shadow(0 0 7px #fff);
    }
</style>