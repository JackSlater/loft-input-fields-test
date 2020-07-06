<template>
    <v-row
        align="center"
        justify="center"
    >
        <v-col
            cols="12"
            sm="8"
            md="4"
        >
            <admin-form
                title="User"
                :fields="formFields"
                :initial-values="userData"
            />
        </v-col>

        <status-snackbar
            :show="showSnackbar"
            :message="snackbarMessage"
            @close="closeSnackbar"
        />
    </v-row>
</template>

<script>
import AdminForm from './AdminForm';
import StatusSnackbar from './StatusSnackbar';
import { getUserData, getUserFormFields } from '../api/user';

export default {
    name: 'EditUserPage',
    components: {
        StatusSnackbar,
        AdminForm,
    },
    provide() {
        return {
            showMessage: this.showMessage,
        };
    },
    data: () => ({
        formFields: [],
        userData: {},

        showSnackbar: false,
        snackbarMessage: {},
    }),
    created() {
        this.formFields = getUserFormFields();
        this.userData = getUserData();
    },
    methods: {
        closeSnackbar() {
            this.showSnackbar = false;
        },
        showMessage({ status, text }) {
            this.snackbarMessage = {
                status,
                text,
            };
            this.showSnackbar = true;
        },
    },
};
</script>
