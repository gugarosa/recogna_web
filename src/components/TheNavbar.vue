<template>
    <b-navbar
    class="fixed-top"
    toggleable="md">
        <b-navbar-brand href="#">
            <img
            src="../assets/img/logo.png"
            width="40"
            alt="Recogna">
            Recogna
        </b-navbar-brand>
        <b-navbar-toggle target="collapse"/>
        <b-collapse
        id="collapse"
        is-nav>
            <b-navbar-nav class="ml-auto" v-scroll-spy-active v-scroll-spy-link>
                <b-nav-item>About Us</b-nav-item>
                <b-nav-item>Team</b-nav-item>
                <b-nav-item>Research</b-nav-item>
                <b-nav-item>Libraries</b-nav-item>
                <b-nav-item>Datasets</b-nav-item>
                <b-nav-item>Contact</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: 'TheNavbar'
}
</script>

<style lang="scss" scoped>
.navbar {
    padding: 0.75rem 1rem;
    transition: all 0.5s;
}
</style>
