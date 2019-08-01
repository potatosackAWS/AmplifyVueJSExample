<script>
import { Auth } from 'aws-amplify'
export default {
  name: 'Authentication',
  mounted () {
    this.googleFederatedSignIn()
  },
  methods: {
    googleFederatedSignIn: function () {
      this.federatedSignIn('Google')
    },
    facebookFederatedSignIn: function () {
      this.federatedSignIn('Facebook')
    },
    federatedSignIn: function (provider) {
      Auth.federatedSignIn({ provider: provider })
    }
  }
}
</script>
