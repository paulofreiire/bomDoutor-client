<template>
  <v-app>
    <v-container>
      <v-layout row wrap>
        <v-layout column>
        <v-flex lg6>
          <patients />
        </v-flex>
        <v-flex lg6>
          <history />
        </v-flex>
        </v-layout>
        <v-flex lg6>
          <consultation title="Consulta"/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Patients from '../components/Patients.vue';
import History from '../components/History.vue';
import Consultation from '../components/Consultation.vue';

export default {
  name: 'Home',
  components: {
    History,
    Patients,
    Consultation,
  },
};
</script>
