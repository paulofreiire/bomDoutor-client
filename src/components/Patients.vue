<template>
  <Panel title="Pacientes" class="panel">
    <v-list>
      <v-list-item
        v-for="patient in patients"
        :key="patient.id"
      >
        <v-layout row justify-space-around>
          <v-flex align-self-baseline>
            <v-list-item-content>
              {{ patient.name }}
            </v-list-item-content>
          </v-flex>
          <v-list-item-icon>
            <v-btn block
                   @click="newConsultation(patient)">
              CONSULTA
            <v-icon color="blue">mdi-plus-circle</v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-layout>
      </v-list-item>
      <modal></modal>
    </v-list>
  </Panel>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';
import Modal from './Modal.vue';
import Panel from './Panel.vue';

export default {
  components: {
    Modal,
    Panel,
  },
  mounted() {
    this.fetchPatients();
  },
  computed: {
    ...mapState('patients', [
      'patients',
    ]),
  },
  methods: {
    ...mapActions('patients', [
      'fetchPatients',
      'createConsultation',
    ]),
    ...mapMutations('patients', [
      'setPatients',
      'newConsultation',
    ]),
  },

};

</script>

<style scoped>
.panel {
  max-height: 400px;
  max-width: 600px;
  overflow-y: auto;
}
</style>
