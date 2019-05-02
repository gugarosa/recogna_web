<template>
    <section id="team">
        <div class="container">
            <div class="row text-center">
                <div class="col">
                    <h2 class="title">
                        Team
                        <hr class="divider">
                    </h2>
                </div>
            </div>
            <div class="row text-center">
                <div class="col">
                    <h6 class="subtitle">
                        This is Recogna's noble team, composed of manifold students and professors from several institutions.
                    </h6>
                </div>
            </div>
            <div class="row text-center mt-5">
                <div class="col">
                    <h6 class="title">
                        Main Researches
                    </h6>
                </div>
            </div>
            <div class="row text-center mt-4">
                <div
                class="col-6 mb-5"
                v-for="research in researches"
                :key=research.id>
                    <a
                    :href=research.url
                    target="_blank">
                        <b-img
                        class="mb-2"
                        :src="getTeamImage(research.img)"
                        width="150px"
                        thumbnail
                        fluid/>
                    </a>
                    <h6>
                        {{ research.name }}
                    </h6>
                </div>
            </div>
            <div class="row text-center">
                <div class="col">
                    <h6 class="title">
                        Collaborators
                    </h6>
                </div>
            </div>
            <div class="row text-center mt-4">
                <div
                class="col-6 col-sm-4 col-lg-2 mb-5"
                v-for="collaborator in collaborators"
                :key=collaborator.id>
                    <a
                    :href=collaborator.url
                    target="_blank">
                        <b-img
                        class="mb-2"
                        :src="getTeamImage(collaborator.img)"
                        width="100px"
                        thumbnail
                        fluid/>
                    </a>
                    <h6>
                        {{ collaborator.name }}
                    </h6>
                </div>
            </div>
            <div class="row text-center">
                <div class="col">
                    <h6 class="title">
                        Students
                    </h6>
                </div>
            </div>
            <div class="row text-center mt-4">
                <div
                class="col-6 col-sm-4 col-lg-2 mb-5"
                v-for="student in students"
                :key=student.id>
                    <a
                    :href=student.url
                    target="_blank">
                        <b-img
                        class="mb-2"
                        :src="getTeamImage(student.img)"
                        width="100px"
                        thumbnail
                        fluid/>
                    </a>
                    <h6 class="mb-0">
                        {{ student.name }}
                    </h6>
                    <span class="small text-muted">
                        {{ student.title }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { collaborators, researches, students } from '@/configs/team'

export default {
    name: 'TheTeam',
    data () {
        return {
            collaborators: collaborators,
            researches: researches,
            students: students
        }
    },
    methods: {
        getTeamImage (image) {
            return require('../assets/img/team/' + image)
        }
    }
}
</script>

<style lang="scss" scoped>
#team {
    padding: 150px 0
}

.img-thumbnail {
    transition: $transition;
    &:hover {
        background-color: $secondary-color;
    }
}
</style>
