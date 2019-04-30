<template>
    <header class="h-100">
        <div class="container h-100">
            <div class="row align-items-center h-100">
                <div class="col text-center">
                    <img
                    class="mb-3"
                    src="../assets/img/full-logo.png"
                    width="200px">
                    <div>
                        <h5 class="text-white">
                            Biometric & Pattern Recognition Research Group
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'TheHeader'
}
</script>

<style lang="scss" scoped>
header {
    background-attachment: scroll;
    background-image: url('../assets/img/header.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>

