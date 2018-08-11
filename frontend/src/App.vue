<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">


      <b-navbar-brand to="/">Smart Yard</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-nav>
        <b-nav-text class="d-md-none">
          <font-awesome-icon icon="thermometer-half" /> {{temperature.toFixed(1)}}°C
          <font-awesome-icon icon="tint" /> {{humidity.toFixed(1)}}%
          <font-awesome-icon v-show="isRaining" icon="umbrella" />
        </b-nav-text>
      </b-navbar-nav>
      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item to="/">Zone</b-nav-item>
          <b-nav-item to="/about">Timer</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto d-none d-md-block">
          <b-nav-text>
            <font-awesome-icon icon="thermometer-half" /> {{temperature.toFixed(1)}}°C
            <font-awesome-icon icon="tint" /> {{humidity.toFixed(1)}}%
            <font-awesome-icon v-show="isRaining" icon="umbrella" />
          </b-nav-text>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  body {
    padding-top: 4.5rem;
}
</style>

<script>
export default {
  data() {
    return {
      temperature: null,
      humidity: null,
      isRaining: false,
    };
  },
  sockets: {
    weather_infos: function change_temperature(val) {
      this.temperature = val.temperature;
      this.humidity = val.humidity;
    },
    rain_status: function rain_status(val) {
      this.isRaining = val;
    },
  },
}
</script>

