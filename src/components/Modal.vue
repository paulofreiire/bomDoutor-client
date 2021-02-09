<template>
  <v-row justify="center" class="mt-4">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          CADASTRAR PACIENTE
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Cadastrar Paciente</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Nome Completo"
                  required
                  @input="handleName"
                  :value=patient.name
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="4"
                md="4"
              >
                <template>
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Data de nascimento"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        :value=patient.date
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      ref="picker"
                      v-model="date"
                      :max="new Date().toISOString().substr(0, 10)"
                      min="1900-01-01"
                      @input="handleDate"
                      :value=patient.date
                    ></v-date-picker>
                  </v-menu>
                </template>
              </v-col>
              <v-col
                cols="12"
                sm="4"
                md="4"
              >
                <v-select
                  :items="['Masculino', 'Feminino']"
                  label="Gênero"
                  required
                  @change="handleGender"
                  :value=patient.gender
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="4"
              >
                <v-text-field
                  label="Documento"
                  required
                  @input="handleDocument"
                  :value=patient.document
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="createPatient"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  data: () => ({
    dialog: false,
  }),
  computed: {
    ...mapState('patients', [
      'patient',
    ]),
  },
  methods: {
    ...mapMutations('patients', [
      'handleName',
      'handleDate',
      'handleDocument',
      'handleGender',
    ]),
    ...mapActions('patients', [
      'createPatient',
    ]),
  },
};
</script>
