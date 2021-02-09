<template>
  <v-container class="mt-10">
    <v-toolbar
      flat
      dense
      dark
      color="blue"
    >
      <v-toolbar-title v-if="isNew">
        NOVA CONSULTA {{ consultation.patient.name }}
      </v-toolbar-title>
      <v-toolbar-title v-if="!isNew">
        {{
          consultation.patient.name + ' ' +
          new Date(consultation.created_at).toLocaleDateString()
        }}
      </v-toolbar-title>

    </v-toolbar>
    <v-col
      cols="12"
      md="12"

    >
      <v-textarea
        solo
        auto-grow
        label="Digite aqui a consulta..."
        rows="20"
        full-width
        :value=consultation.text
        class="d-flex flex-row "
        @input="setText"
      >

      </v-textarea>
      <v-btn
        color="blue-grey"
        class="ma-2 white--text"
        fab
        :disabled="!isNew"
        @click="createConsultation"
      >
        <v-icon dark>
          mdi-content-save-settings
        </v-icon>
      </v-btn>
    </v-col>
  </v-container>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  components: {},
  mounted() {
    this.fetchConsultations();
  },
  computed: {
    ...mapState('patients', [
      'consultations',
      'isNew',
      'consultation',
    ]),

  },
  methods: {
    ...mapActions('patients', [
      'fetchConsultations',
      'createConsultation',
    ]),
    ...mapMutations('patients', [
      'setConsultations',
      'setText',
    ]),
  },

};

</script>

<style scoped>
.area {
  position: relative;
}
</style>
