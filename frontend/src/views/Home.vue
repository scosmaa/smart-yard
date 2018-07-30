<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="item in configuration" @click="onChangeEventHandler(item)" :key="item.id" class="col-md-2">
        <div class="card">
          <div class="card-header">
            {{item.description}}
          </div>
          <div class="card-body">
            <img :src="'img/' + item.type + '.svg'">
            <toggle-button class="float-right toggle-button"
              :labels="true"
              :width="140"
              :height="45"
              :sync="true"
              :value="item.value"
              @change="onChangeEventHandler(item)"
              />
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
      dictionary: {},
    };
  },

  mounted: function mounted() {
    this.$socket.emit('get_config');
  },

  methods: {
    onChangeEventHandler: function onChangeEventHandler(item) {
      console.log(item.value);
      this.$socket.emit('change_value', {
                code : item.code,
                value : item.value ? 1 : 0
            });
    },
  },

  sockets: {
    config: function config(val) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)', val);
      this.configuration = val.relays;
      this.configuration.map((item) => this.dictionary[item.code] = item);
    },
    value_changed: function value_changed(msg) {
      debugger
      this.dictionary[msg.code].value = msg.value;
    }
  },
};
</script>
