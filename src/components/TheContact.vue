<template>
    <section id="contact">
        <div class="container">
            <div class="row text-center">
                <div class="col">
                    <h2 class="title">
                        Contact
                        <hr class="divider">
                    </h2>
                </div>
            </div>
            <div class="row text-center">
                <div class="col">
                    <h6 class="subtitle">
                        Want to contact us? Just fill out the following form.
                    </h6>
                </div>
            </div>
            <div class="row text-center mt-3">
                <div class="col col-sm-10 offset-sm-1 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                    <form method="POST" action="https://formspree.io/recogna@fc.unesp.br">
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <font-awesome-icon
                                        :icon="['far', 'user-circle']"/>
                                    </div>
                                </div>
                                <input type="text" class="form-control" name="Name" placeholder="Name" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <font-awesome-icon
                                        :icon="['far', 'envelope']"/>
                                    </div>
                                </div>
                                <input type="text" class="form-control" name="Email" placeholder="E-mail" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <font-awesome-icon
                                        :icon="['far', 'pen']"/>
                                    </div>
                                </div>
                                <input type="text" class="form-control" name="Subject" placeholder="Subject" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" rows="4" name="Message" placeholder="Input your message" required></textarea>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TheContact'
}
</script>

<style lang="scss" scoped>
#contact {
    background-color: $bg-light-color;
    padding: 150px 0
}

textarea {
    resize: none;
}

.btn-primary {
    background-color: rgba($primary-color, 0.8);
    border-color: rgba($primary-color, 0.8);
    &:hover {
        background-color: rgba($primary-color, 0.9) !important;
        border-color: rgba($primary-color, 0.9) !important;
    }
    &:active {
        background-color: $primary-color !important;
        border-color: $primary-color !important;
    }
}
</style>
