<template>
    <section id="about-us">
        <div class="container">
            <div class="row text-center">
                <div class="col">
                    <h2 class="title">
                        About Us
                        <hr class="divider">
                    </h2>
                </div>
            </div>
            <div class="row text-center">
                <div class="col">
                    <h6 class="subtitle">
                        This is just a sneak peek of everything that we can offer.
                    </h6>
                </div>
            </div>
            <div class="row text-center mt-3">
                <div class="col">
                    <b-card>
                        <b-card-text>
                            The <span class="text-dark"><b>Biometric & Pattern Recognition Research Group</b></span> (Recogna), formerly the High-Performance Computing Laboratory, was born aiming at fostering the research on <span class="text-dark"><b>computer vision, machine learning, and biometrics</b></span>. Our main vision is not only to seek for state-of-the-art research but also to disseminate the passion for <span class="text-dark"><b>collaborative research and teaching</b></span>. If you share these ideas, Recogna is the right place for you. 
                        </b-card-text>
                    </b-card>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TheAboutUs'
}
</script>

<style lang="scss" scoped>
#about-us {
    background-color: $bg-light-color;
    padding: 200px 0;
}

.card {
    background-color: darken($bg-light-color, 5%);
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);
}
</style>
