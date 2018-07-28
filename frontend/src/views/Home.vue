<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="item in configuration" :key="item.id" class="col-md-3">
        <div class="card">
          <div class="card-header">
            {{item.description}}
          </div>
          <div class="card-body">
            <img src="../assets/logo.svg">
            <toggle-button class="float-right toggle-button" :labels="true" :width="140" :height="45" @change="onChangeEventHandler"/>
          </div>
        </div>
      </div>
    </div>
    <div class="home">
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    margin-bottom: 10px;
    .v-switch-label {
      right: 15px
    }
    .toggle-button {
      font-size: 20px;
    }
  }
</style>


<script>
// @ is an alias to /src
import ToggleButton from 'vue-js-toggle-button/src/Button'

export default {
  name: 'home',
  components: {
    ToggleButton,
  },

  data() {
    return {
      configuration: [],
    };
  },

  mounted: function mounted() {
    this.$socket.emit('get_config');
  },

  sockets: {
    config: function config(val) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)', val);
      this.configuration = [
        {
            "type" : "insalata",
            "code" : "area1",
            "description" : "Area 1",
            "pin_id": 4,
            "direction": "out"
        },
        {
            "type" : "zucchine",
            "code" : "area2",         
            "description" : "Area 2",
            "pin_id": 17,
            "direction": "out"
        },
        {
            "type" : "pomodori",
            "code" : "area3",
            "description" : "Area 3",
            "pin_id": 27,
            "direction": "out"
        },
        {
            "type" : "cetrioli",         
            "code" : "area4",         
            "description" : "Area 4",
            "pin_id": 17,
            "direction": "out"
        }
    ]
    },
  },
};
</script>
