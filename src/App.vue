<template>
    <div id="app">
        <the-contact/>
        <the-footer/>
    </div>
</template>

<script>
import TheContact from '@/components/TheContact'
import TheFooter from '@/components/TheFooter'

export default {
    name: "App",
    components: {
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
