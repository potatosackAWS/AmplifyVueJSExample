<template>
  <section class="call-to-action text-white text-center" v-bind:class="{ hidden: isHidden }">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <h2 class="mb-4">Ready to get started? Sign up now!</h2>
        </div>
        <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
          <div class="form-row">
            <div class="col-12 col-md-3">
              <button @click="signIn" type="submit" class="btn btn-block btn-lg btn-primary">Lets go!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Auth } from 'aws-amplify'
export default {
  name: 'CallToAction',
  data () {
    return {
      isHidden: true
    }
  },
  methods: {
    signIn: function () {
      this.$router.push({ name: 'Authentication' })
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
.call-to-action {
  position: relative;
  background-color: #343a40;
  background-size: cover;
  padding-top: 7rem;
  padding-bottom: 7rem;
}
.call-to-action .overlay {
  position: absolute;
  background-color: #212529;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0.3;
}
</style>
