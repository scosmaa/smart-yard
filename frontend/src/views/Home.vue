<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4">1</div>
      <div class="col-md-4">2</div>
      <div class="col-md-4">3</div>
    </div>
    <div class="home">
      <img src="../assets/logo.svg">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  sockets: {
    connect: function connect(data) {
      console.log('socket connected', data);
    },
    config: function config(val) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)', val);
    },
  },
};
</script>
