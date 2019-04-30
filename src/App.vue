<template>
    <div id="app">
        <the-navbar @scroll="handleScroll"/>
        <div v-scroll-spy="{allowNoActive: true}">
            <the-dataset/>
            <the-contact/>
        </div>
        <the-footer/>
    </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheDataset from '@/components/TheDataset'
import TheContact from '@/components/TheContact'
import TheFooter from '@/components/TheFooter'

export default {
    name: "App",
    components: {
        TheNavbar,
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
#app {
    height: 100%;
}

.scrolled {
    padding: 0.25rem 1rem !important;
    
}
</style>
