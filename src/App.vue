<template>
  <div id="app" class="flex flex-col items-center justify-center h-screen gap-5 lg:flex-row">
    <Smartphone/>
    <Login/>
  </div>
</template>

<script>
import Smartphone from '@/components/Smartphone'
import Login from '@/components/Login'

export default {
  name: 'App',
  title: 'Instagram',
  components: {
    Smartphone,
    Login
  }
}
</script>

<style lang="postcss">
#app {
  font-family: 'Montserrat', sans-serif;
  background-color: #FAFAFA;
}
</style>
