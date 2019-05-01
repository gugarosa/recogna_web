<template>
    <div
    class="h-100"
    id="app">
        <the-navbar @scroll="handleScroll"/>
        <the-header/>
        <div v-scroll-spy="{allowNoActive: true}">
            <the-about-us/>
            <the-team/>
            <the-library/>
            <the-dataset/>
            <the-contact/>
        </div>
        <the-footer/>
    </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheHeader from '@/components/TheHeader'
import TheAboutUs from '@/components/TheAboutUs'
import TheTeam from '@/components/TheTeam'
import TheLibrary from '@/components/TheLibrary'
import TheDataset from '@/components/TheDataset'
import TheContact from '@/components/TheContact'
import TheFooter from '@/components/TheFooter'

export default {
    name: 'App',
    components: {
        TheNavbar,
        TheHeader,
        TheAboutUs,
        TheTeam,
        TheLibrary,
        TheDataset,
        TheContact,
        TheFooter
    },
    methods: {
        handleScroll () {
            let navbar = document.querySelector('.navbar')
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled')
            }
            else {
                navbar.classList.remove('scrolled')
            }
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="scss">
.scrolled {
    background: linear-gradient(to right, $primary-color 10%, $secondary-color 110%) !important;
    padding: 10px 65px !important;
    .nav-link {
        font-size: 14px !important;
    }
}

@media screen and (max-width: $view-sm) {
    .scrolled {
        padding: 10px 0 !important;
        .navbar-brand {
            padding: 0px 15px;
        }
    }
}
</style>
