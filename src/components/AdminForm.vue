<template>
    <v-card class="elevation-12">
        <v-toolbar
            color="grey lighten-4"
            flat
        >
            <v-toolbar-title>{{ title }}</v-toolbar-title>
        </v-toolbar>

        <v-card-text>
            <admin-form-fields
                :fields="fields"
                :fields-errors="fieldsErrors"
                :initial-values="initialValues"
                @change="onFieldsChange"
                @error="onError"
            />
        </v-card-text>

        <v-card-actions>
            <v-spacer />
            <v-btn
                color="primary"
                @click="onSave"
            >
                Save
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import AdminFormFields from './AdminFormFields';
import formProps from '../mixins/formProps';

export default {
    name: 'AdminForm',
    components: {
        AdminFormFields,
    },
    inject: ['showMessage'],
    mixins: [formProps], // fields, initialValues
    props: {
        title: {
            type: String,
            default: 'Form',
        },
    },
    data() {
        return {
            formData: {
                ...this.fields.reduce((acc, { field }) => (field !== undefined ? { ...acc, [field]: '' } : acc), {}),
                ...this.initialValues,
            },
            fieldsErrors: [],
        };
    },
    computed: {
        hasErrors() {
            return this.fieldsErrors.length > 0;
        },
    },
    methods: {
        onFieldsChange({ field, value }) {
            this.formData[field] = value;

            const indexOfError = this.fieldsErrors.indexOf(field);
            if (indexOfError !== -1) {
                this.fieldsErrors.splice(indexOfError, 1);
            }
        },

        onError({ field, error }) {
            if (!this.fieldsErrors.includes(field)) {
                this.fieldsErrors.push(field);
            }

            this.showMessage({ status: 'error', text: error });
        },

        onSave() {
            const message = this.hasErrors
                ? { status: 'error', text: 'Cant save data while form has errors' }
                : { status: 'success', text: 'Data successfully saved' };

            this.showMessage(message);
        },
    },
};
</script>
