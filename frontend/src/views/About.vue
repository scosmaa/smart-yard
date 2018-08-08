<template>
  <div>
    <b-button primary @click="editEvent">Aggiungi</b-button>
    <b-table hover :items="items" :hide="fields">
      <template slot="name" slot-scope="data">
        {{data.monday[0]}} {{data.monday[1]}}
      </template>
    </b-table>
    <b-modal ref="myModalRef" hide-footer title="Schedulazione Attività">
      <b-form>
        <b-form-group id="exampleInputGroup3"
                    label="Food:"
                    label-for="exampleInput3">
        <b-form-select id="exampleInputGroup3" v-model="selected" :options="options" class="mb-3" />
      </b-form-group>
      <b-form-group id="exampleGroup4">
        <b-form-checkbox-group id="exampleChecks">
          <b-form-checkbox value="mon">Lunedì</b-form-checkbox>
          <b-form-checkbox value="tue">Martedì</b-form-checkbox>
          <b-form-checkbox value="wed">Mercoledì</b-form-checkbox>
          <b-form-checkbox value="thu">Giovedì</b-form-checkbox>
          <b-form-checkbox value="fri">Venerdì</b-form-checkbox>
          <b-form-checkbox value="sat">Sabato</b-form-checkbox>
          <b-form-checkbox value="sun">Domenica</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-form-group id="exampleInputGroup4"
                    label="Orario"
                    label-for="exampleInput4">
        <vue-timepicker v-model="form.startTime" format="HH:mm"></vue-timepicker> - 
        <vue-timepicker v-model="form.stopTime" format="HH:mm"></vue-timepicker>
      </b-form-group>
      </b-form>
    </b-modal>
      </div>
</template>
<script>
  import VueTimepicker from 'vue2-timepicker'
  import Vue from 'vue';

  Vue.use(VueTimepicker)

  const items = [{
      ora: '00:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
    {
      ora: '01:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
    {
      ora: '02:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
    {
      ora: '03:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
    {
      ora: '04:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
    {
      ora: '05:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
    {
      ora: '06:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
    {
      ora: '07:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
    {
      ora: '08:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
    {
      ora: '09:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
    {
      ora: '10:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
    {
      ora: '11:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
    {
      ora: '12:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
    {
      ora: '13:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
    {
      ora: '14:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
    {
      ora: '15:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
    {
      ora: '16:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
    {
      ora: '17:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
    {
      ora: '18:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
    {
      ora: '19:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
    {
      ora: '20:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
    {
      ora: '21:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
    {
      ora: '22:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
    {
      ora: '23:00',
      monday: [1, 2],
      thuesday: 'Dickerson',
      last_name: 'Macdonald'
    },
  ]

  export default {
    components: { VueTimepicker },
    methods: {
      editEvent(evt) {
        this.$refs.myModalRef.show();
      },
      hideModal(evt) {
        this.$refs.myModalRef.hide();
      }
    },
    data() {
      return {
        form: {
          checked: [],
          startTime: null,
          stopTime: null
        },
        selected: null,
        options: [],
        items: items,
        fields: [{
            key: 'ora',
            label: 'Ora'
          },
          {
            key: 'monday',
            label: '<span title="Lunedì">Lunedì</span>'
          },
          {
            key: 'tuesday',
            label: 'Martedì'
          },
          {
            key: 'wednesday',
            label: 'Mercoledì'
          },
          {
            key: 'thursday',
            label: 'Giovedy'
          },
          {
            key: 'friday',
            label: 'Venerdì'
          },
          {
            key: 'saturday',
            label: 'Sabato'
          },
          {
            key: 'sunday',
            label: 'Domenica'
          },

        ],
      }
    },
    mounted: function mounted() {
      this.$socket.emit('get_config');
    },
    sockets: {
    config: function config(val) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)', val);
      this.configuration = val.relays;
      this.configuration.map((item) => this.options.push({value: item, text: item.description}))
    },
  },
  }
</script>