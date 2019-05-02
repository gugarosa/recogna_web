<template>
    <section id="library">
        <div class="container">
            <div class="row text-center">
                <div class="col">
                    <h2 class="title">
                        Libraries
                        <hr class="divider">
                    </h2>
                </div>
            </div>
            <div class="row text-center">
                <div class="col">
                    <h6 class="subtitle">
                        Glance at everything we have created so far.
                    </h6>
                </div>
            </div>
            <div class="row text-center mt-5">
                <div
                class="col-12 col-sm-6 col-md-4 mb-4"
                v-for="library in libraries"
                :key="library.id">
                    <a
                    :href="library.url"
                    target="_blank">
                        <b-card
                        :title="library.title"
                        :style="{'background-color': library.color}">
                            <b-card-text>
                                <img
                                :src="getLibraryImage(library.img)"
                                width="40px">
                                <div class="mt-3">
                                    {{ library.description }}
                                </div>
                            </b-card-text>
                        </b-card>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { libraries } from '@/configs/library'

export default {
    name: 'TheLibrary',
    data () {
        return {
            libraries: libraries
        }
    },
    methods: {
        getLibraryImage (image) {
            return require('../assets/img/library/' + image)
        }
    }
}
</script>

<style lang="scss" scoped>
#library {
    background-color: $bg-light-color;
    padding: 150px 0
}

a {
    &:hover {
        text-decoration: none;
    }
}

.card {
    color: $white-color;
    opacity: $opacity;
    transition: $transition;
    &:hover {
        cursor: pointer;
        opacity: 1;
    }
}

@media screen and (min-width: $view-xs) {
    .card {
        height: 250px;
    }
}

@media screen and (min-width: $view-sm) {
    .card {
        height: 275px;
    }
}

@media screen and (min-width: $view-md) {
    .card {
        height: 225px;
    }
}

@media screen and (min-width: $view-lg) {
    .card {
        height: 210px;
    }
}
</style>
