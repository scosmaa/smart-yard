<template>
  <div>
    <b-button primary @click="editEvent">Aggiungi</b-button>
    <b-table hover :items="items" :fields="fields">
      <template slot="mon" slot-scope="data">
        <img :src="'img/' + item.area.type + '.svg'" :title="item.event.startTime + ' - ' + item.event.stopTime" v-for="item in data.value" :key="item.id" width="25px">
      </template>
      <template slot="tue" slot-scope="data">
        <img :src="'img/' + item.area.type + '.svg'" :title="item.event.startTime + ' - ' + item.event.stopTime" v-for="item in data.value" :key="item.id" width="25px">
      </template>
      <template slot="wed" slot-scope="data">
        <img :src="'img/' + item.area.type + '.svg'" :title="item.event.startTime + ' - ' + item.event.stopTime" v-for="item in data.value" :key="item.id" width="25px">
      </template>
      <template slot="thu" slot-scope="data">
        <img :src="'img/' + item.area.type + '.svg'" :title="item.event.startTime + ' - ' + item.event.stopTime" v-for="item in data.value" :key="item.id" width="25px">
      </template>
      <template slot="fri" slot-scope="data">
        <img :src="'img/' + item.area.type + '.svg'" :title="item.event.startTime + ' - ' + item.event.stopTime" v-for="item in data.value" :key="item.id" width="25px">
      </template>
      <template slot="sat" slot-scope="data">
        <img :src="'img/' + item.area.type + '.svg'" :title="item.event.startTime + ' - ' + item.event.stopTime" v-for="item in data.value" :key="item.id" width="25px">
      </template>
      <template slot="sun" slot-scope="data">
        <img :src="'img/' + item.area.type + '.svg'" :title="item.event.startTime + ' - ' + item.event.stopTime" v-for="item in data.value" :key="item.id" width="25px">
      </template>
    </b-table>
    <b-modal ref="myModalRef" title="Schedulazione Attività" @ok="onSubmit">
      <b-form @submit="onSubmit">
        <b-form-group id="exampleInputGroup3" label="Food:" label-for="exampleInput3">
          <b-form-select id="exampleInputGroup3" v-model="form.area" :options="options" class="mb-3" />
        </b-form-group>
        <b-form-group id="exampleGroup4">
          <b-form-checkbox-group id="exampleChecks" v-model="form.days">
            <b-form-checkbox value="mon">Lunedì</b-form-checkbox>
            <b-form-checkbox value="tue">Martedì</b-form-checkbox>
            <b-form-checkbox value="wed">Mercoledì</b-form-checkbox>
            <b-form-checkbox value="thu">Giovedì</b-form-checkbox>
            <b-form-checkbox value="fri">Venerdì</b-form-checkbox>
            <b-form-checkbox value="sat">Sabato</b-form-checkbox>
            <b-form-checkbox value="sun">Domenica</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-form-group id="exampleInputGroup4" label="Orario" label-for="exampleInput4">
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
  const table_labels = [{
            key: 'ora',
            label: 'Ora'
          },
          {
            key: 'mon',
            label: '<span title="Lunedì">Lunedì</span>'
          },
          {
            key: 'tue',
            label: 'Martedì'
          },
          {
            key: 'wed',
            label: 'Mercoledì'
          },
          {
            key: 'thu',
            label: 'Giovedì'
          },
          {
            key: 'fri',
            label: 'Venerdì'
          },
          {
            key: 'sat',
            label: 'Sabato'
          },
          {
            key: 'sun',
            label: 'Domenica'
          },
        ]
  const items = [{
      ora: '00:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    {
      ora: '01:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    {
      ora: '02:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    {
      ora: '03:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    {
      ora: '04:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    {
      ora: '05:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    {
      ora: '06:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    {
      ora: '07:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    {
      ora: '08:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    {
      ora: '09:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    {
      ora: '10:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    {
      ora: '11:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    {
      ora: '12:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    {
      ora: '13:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    {
      ora: '14:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    {
      ora: '15:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    {
      ora: '16:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    {
      ora: '17:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    {
      ora: '18:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    {
      ora: '19:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    {
      ora: '20:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    {
      ora: '21:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    {
      ora: '22:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    {
      ora: '23:00',
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
  ]

  export default {
    components: {
      VueTimepicker
    },
    methods: {
      onSubmit(evt) {
        debugger
        evt.preventDefault();
        alert(JSON.stringify(this.form));
        this.events.push({
          code: this.form.area.code,
          days: this.form.days,
          startTime: this.form.startTime.HH + ':' + this.form.startTime.mm,
          stopTime: this.form.stopTime.HH + ':' + this.form.stopTime.mm
        });
        this._calculateEvents();
        this.$refs.myModalRef.hide();
      },
      editEvent(evt) {
        this.$refs.myModalRef.show();
      },
      hideModal(evt) {
        this.$refs.myModalRef.hide();
      },
      _calculateEvents() {
      // Lista eventi
      debugger
      this.events.map((event) => {
        //Lista Giorni
        event.days.map((day) => {
          var startTime = +event.startTime.replace(':', ''),
            stopTime = +event.stopTime.replace(':', '');
          this.items.map((item) => {
            var currentTime = +item.ora.replace(':', '');
            if(startTime <= currentTime && currentTime < stopTime) {
              item[day].push({
                area: this.dictionary[event.code],
                event: event});
            }
          })
      })
    })
    },
    },
    data() {
      return {
        dictionary: {},
        events: [
          {
            code: 'area1',
            days: ['mon', 'tue'],
            startTime: '07:00',
            stopTime: '11:00'
          },
          {
            code: 'area2',
            days: ['mon', 'tue'],
            startTime: '07:00',
            stopTime: '11:00'
          }
        ],
        form: {
          area: null,
          days: [],
          startTime: {
            HH: '00',
            mm: '00'
          },
          stopTime: {
            HH: '00',
            mm: '00'
          }
        },
        selected: null,
        options: [],
        items: items,
        fields: table_labels,
      }
    },
    
    mounted: function mounted() {
      this.$socket.emit('get_config');
    },
    sockets: {
      config: function config(val) {
        console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)', val);

        this.configuration = val.relays;
        this.configuration.map((item) => this.options.push({
          value: item,
          text: item.description
        }))
        this.configuration.map((item) => this.dictionary[item.code] = item);
        this._calculateEvents();
      },
    },
  }
</script>