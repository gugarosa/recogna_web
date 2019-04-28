<template>
    <div id="app">
        <the-footer/>
    </div>
</template>

<script>
import TheFooter from '@/components/TheFooter'

export default {
    name: "App",
    components: {
        TheFooter
    }
}
</script>

<style lang="scss">
#app {
    height: 100%;
}
</style>
