<template>
  <Panel title="Historico" class="panel">
    <v-list>
      <v-list-item
        v-for="consultation in consultations"
        :key="consultation.id"
      >
        <v-layout row justify-space-around>
          <v-flex align-self-baseline>
            <v-list-item-content>
              {{ consultation.patient.name }}
            </v-list-item-content>
          </v-flex>
          <v-list-item-icon
          >
            <v-btn block
                   @click="setConsultation(consultation)">
              VER HISTORICO
            </v-btn>
          </v-list-item-icon>
        </v-layout>
      </v-list-item>
    </v-list>
  </Panel>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';
import Panel from './Panel.vue';

export default {
  components: {
    Panel,
  },
  mounted() {
    this.fetchConsultations();
  },
  computed: {
    ...mapState('patients', [
      'consultations',
    ]),
  },
  methods: {
    ...mapActions('patients', [
      'fetchConsultations',

    ]),
    ...mapMutations('patients', [
      'setConsultations',
      'setConsultation',
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
