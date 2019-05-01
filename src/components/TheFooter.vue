<template>
    <footer>
        <div class="container py-3">
            <div class="row text-center">
                <div class="col-12 col-lg-4">
                    <span class="mr-1">&copy;</span>
                    <span class="mr-1">{{ currentYear }}</span>
                    <span>Recogna Laboratory</span>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <span class="mr-1">Made with</span>
                    <font-awesome-icon
                    class="text-danger mr-1"
                    :icon="['fas', 'heart']"/>
                    <span>by Gustavo Rosa</span>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <font-awesome-icon
                    class="text-primary mr-1"
                    :icon="['fas', 'envelope']"/>
                    <span>recogna@fc.unesp.br</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'TheFooter',
    data () {
        return {
            currentYear: ''
        }
    },
    mounted () {
        this.currentYear = new Date().getFullYear()
    }
}
</script>

<style lang="scss" scoped>

</style>

