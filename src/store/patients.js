import axios from 'axios';

export default {
  namespaced: true,
  state: {
    patients: [],
    consultations: [],
    consultation: {
      text: '',
      patient: {
        name: '',
      },
    },
    isNew: true,
    patient: {
      name: '',
      gender: '',
      dateBirt: '',
      document: '',
    },

  },
  mutations: {
    handleName(state, name) {
      state.patient.name = name;
    },
    handleDate(state, date) {
      state.patient.dateBirt = date;
    },
    handleDocument(state, document) {
      state.patient.document = document;
    },
    handleGender(state, gender) {
      state.patient.gender = gender;
    },
    setPatients(state, patients) {
      state.patients = patients;
    },
    setText(state, text) {
      state.consultation.text = text;
    },
    setConsultations(state, consultations) {
      state.consultations = consultations;
    },
    setConsultation(state, consultation) {
      state.consultation = consultation;
      state.isNew = false;
    },
    newConsultation(state, patient) {
      state.isNew = true;
      state.consultation = {};
      state.consultation.text = '';
      state.consultation.patient = patient;
    },
    createPatient(state) {
      state.patient.name = '';
      state.patient.gender = '';
      state.patient.dateBirt = '';
      state.patient.document = '';
    },
    pushPatient(state, patient) {
      state.patients.unshift(patient);
    },
    pushConsultation(state, consultation) {
      state.consultations.unshift(consultation);
    },
  },
  actions: {
    fetchPatients({ commit }) {
      return axios.get('/patients')
        .then(({ data }) => {
          commit('setPatients', data.patients);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    fetchConsultations({ commit }) {
      return axios.get('/consultations')
        .then(({ data }) => {
          commit('setConsultations', data.consultations);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    createPatient({
      commit,
      state,
    }) {
      return axios.post('/patients', {
        name: state.patient.name,
        dateBirt: state.patient.dateBirt,
        gender: state.patient.gender,
        document: state.patient.document,
      })
        .then(({ data }) => {
          commit('createPatient', data.patient);
          commit('pushPatient', data.patient);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    createConsultation({
      commit,
      state,
    }) {
      return axios.post('/consultations', {
        patient_id: state.consultation.patient.id,
        text: state.consultation.text,
      })
        .then(({ data }) => {
          commit('pushConsultation', data.consultation);
          commit('setConsultation', data.consultation);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  modules: {},
};
