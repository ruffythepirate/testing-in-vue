<template>
  <div>
  <h2>hey ho ha hi new rendered content...</h2>
  {{message}}
  What is the mather
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello from vue-loader!'
    }
  }
}
</script>

<style>
.message {
  color: blue;
}
</style>
