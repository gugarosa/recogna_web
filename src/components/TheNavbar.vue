<template>
    <b-navbar
    class="navbar-dark fixed-top"
    toggleable="md">
        <b-navbar-brand>
            <img
            class="mr-1"
            src="../assets/img/logo.png"
            width="45px"
            alt="Recogna">
            <span class="text-white">
                Recogna
            </span>
        </b-navbar-brand>
        <b-navbar-toggle target="collapse"/>
        <b-collapse
        id="collapse"
        is-nav>
            <b-navbar-nav class="ml-auto" v-scroll-spy-active v-scroll-spy-link>
                <b-nav-item>About Us</b-nav-item>
                <b-nav-item>Team</b-nav-item>
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
    padding: 25px 65px;
    transition: $transition;
    &-brand {
        cursor: default;
        font-weight: 500;
    }
}

.nav-link {
    color: $white-color !important;
    font-size: 16px;
    letter-spacing: 1px;
    padding: 10px 10px !important;
    text-transform: uppercase;
    transition: $transition;
    &:hover {
        color: $secondary-color !important;
    }
}

.active {
    .nav-link {
        background-color: $secondary-color !important;
        border-radius: 5px;
    }
}

@media screen and (max-width: $view-sm) {
    .navbar {
        padding: 10px 0 !important;
        &-brand {
            padding: 0px 15px;
        }
        &-nav {
            margin-top: 5px;
        }
        &-toggler {
            margin-right: 15px;
        }
    }

    .nav-link {
        font-size: 14px;
        padding-left: 20px !important;
    }

    .active {
        .nav-link {
            border-radius: 0px;
        }
    }
}
</style>
