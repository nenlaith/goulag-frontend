<template>
  <div class="container-wrapper after-header">
    <div class="container">
      <sign-in-component></sign-in-component>
      <sign-up-component></sign-up-component>
      <div class="float-cutter"></div>
    </div>
  </div>
</template>

<script>
import SignInComponent from '../Component/Session/SignInComponent.vue'
import SignUpComponent from '../Component/Session/SignUpComponent.vue'

export default {
  data: {
  },
  components: {
    'sign-in-component': SignInComponent,
    'sign-up-component': SignUpComponent
  }
}
</script>
