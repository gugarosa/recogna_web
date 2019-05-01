<template>
    <header class="h-100">
        <div class="container h-100">
            <div class="row align-items-center h-100">
                <div class="col text-center">
                    <img
                    class="mb-1"
                    src="../assets/img/full-logo.png"
                    width="200px">
                    <div>
                        <span class="text-white">
                            Biometric & Pattern Recognition Research Group
                        </span>
                    </div>
                    <div class="mt-4" v-scroll-spy-link>
                        <a>
                            <font-awesome-icon
                            class="text-white"
                            :icon="['fas', 'chevron-double-down']"
                            size="2x"
                            pulse/>
                        </a>
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

.fa-pulse {
    animation: pulse 2s infinite linear;
    cursor: pointer;
}

@-webkit-keyframes pulse {
	0% { opacity: 1; }
	50% { opacity: 0; }
	100% { opacity: 1; }
}
@-moz-keyframes pulse {
	0% { opacity: 1; }
	50% { opacity: 0; }
	100% { opacity: 1; }
}
@-o-keyframes pulse {
	0% { opacity: 1; }
	50% { opacity: 0; }
	100% { opacity: 1; }
}
@-ms-keyframes pulse {
	0% { opacity: 1; }
	50% { opacity: 0; }
	100% { opacity: 1; }
}
@keyframes pulse {
	0% { opacity: 1; }
	50% { opacity: 0; }
	100% { opacity: 1; }
}
</style>

