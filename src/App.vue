<template>
    <div id="app">
        <the-navbar/>
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
    }
}
</script>

<style lang="scss">
#app {
    height: 100%;
}
</style>
