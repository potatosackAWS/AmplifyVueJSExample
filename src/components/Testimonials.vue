<template>
  <section class="testimonials text-center bg-dark" v-bind:class="{ hidden: isHidden }">
    <div class="container">
      <h2 class="mb-5">What people are saying...</h2>
      <div class="row">
        <div class="col-lg-4">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img class="img-fluid rounded-circle mb-3" src="img/testimonials-1.jpg" alt="">
            <h5>Margaret E.</h5>
            <p class="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img class="img-fluid rounded-circle mb-3" src="img/testimonials-2.jpg" alt="">
            <h5>Fred S.</h5>
            <p class="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img class="img-fluid rounded-circle mb-3" src="img/testimonials-3.jpg" alt="">
            <h5>Sarah W.</h5>
            <p class="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Auth } from 'aws-amplify'
export default {
  name: 'Testimonials',
  data () {
    return {
      isHidden: true
    }
  },
  mounted () {
    Auth.currentAuthenticatedUser()
      .then(usr => { this.isHidden = true })
      .catch(err => { if (err) this.isHidden = false })
  }
}
</script>

<style scoped>
.hidden { display: none; }
.testimonials {
  padding-top: 7rem;
  padding-bottom: 7rem;
}
.testimonials .testimonial-item {
  max-width: 18rem;
}
.testimonials .testimonial-item img {
  max-width: 12rem;
  -webkit-box-shadow: 0px 5px 5px 0px #adb5bd;
  box-shadow: 0px 5px 5px 0px #adb5bd;
}
</style>
