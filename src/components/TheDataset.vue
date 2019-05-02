<template>
    <section id="dataset">
        <div class="container">
            <div class="row text-center">
                <div class="col">
                    <h2 class="title">
                        Datasets
                        <hr class="divider">
                    </h2>
                </div>
            </div>
            <div class="row text-center">
                <div class="col">
                    <h6 class="subtitle">
                        Feel free to download our own datasets in order to work with our libraries. Also, it is possible to download other datasets already modelled to our file format. Please, remember to cite the appropriate references when using a specific dataset.
                    </h6>
                </div>
            </div>
            <div class="row text-center mt-5">
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                v-for="dataset in datasets"
                :key="dataset.id">
                    <b-card
                    v-b-modal="dataset.type"
                    :style="{'background-color': dataset.color}">
                        <b-card-text>
                            <font-awesome-icon
                            :icon="['far', dataset.icon]"/>
                            {{ dataset.type }}
                        </b-card-text>
                    </b-card>
                    <b-modal
                    :id="dataset.type"
                    centered>
                        <template slot="modal-title">
                            <font-awesome-icon
                            :icon="['far', dataset.icon]"/>
                            {{ dataset.type }}
                        </template>
                        <template slot="default">
                            <div
                            class="text-left mb-2"
                            v-for="item in dataset.items"
                            :key="item.id">
                                <a :href="item.url">
                                    {{ item.name }}: {{ item.samples }} samples, {{ item.labels }} labels, {{ item.features }} features
                                </a>
                            </div>
                        </template>
                        <template slot="modal-footer">
                            <div></div>
                        </template>
                    </b-modal>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { datasets } from '@/configs/dataset'

export default {
    name: 'TheDataset',
    data () {
        return {
            datasets: datasets
        }
    }
}
</script>

<style lang="scss" scoped>
#dataset {
    padding: 150px 0
}

a {
    color: $black-color;
    transition: $transition;
    &:hover {
        color: $primary-color;
        text-decoration: none;
    }
}

.card {
    background-color: #eaeaea;
    color: $white-color;
    opacity: $opacity;
    transition: $transition;
    &:hover {
        cursor: pointer;
        opacity: 1;
    }
}
</style>
