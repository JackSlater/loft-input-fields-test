<template>
    <v-dialog
        v-model="dialog"
        width="unset"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                small
                block
                v-bind="attrs"
                v-on="on"
            >
                Change
            </v-btn>
        </template>

        <v-card>
            <v-card-title
                class="headline grey lighten-2"
                primary-title
            >
                Choose date
            </v-card-title>

            <v-card-text>
                <div class="d-flex">
                    <v-date-picker
                        v-model="datePicker"
                        class="pa-5"
                        :first-day-of-week="1"
                        locale="ru-ru"
                    />
                    <v-time-picker
                        v-model="timePicker"
                        class="pa-5"
                        format="24hr"
                    />
                </div>
            </v-card-text>

            <v-card-actions>
                <v-spacer />
                <v-btn
                    color="default"
                    text
                    @click="cancel"
                >
                    Cancel
                </v-btn>

                <v-btn
                    color="primary"
                    text
                    @click="saveDate"
                >
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'DatepickerDialog',
    props: {
        initialDate: {
            type: String,
            default: '',
        },
        initialTime: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            dialog: false,
            datePicker: this.initialDate,
            timePicker: this.initialTime,
        };
    },
    computed: {
        fullDate() {
            return `${this.datePicker} ${this.timePicker}`;
        },
    },
    methods: {
        cancel() {
            this.datePicker = this.initialDate;
            this.timePicker = this.initialTime;

            this.dialog = false;
        },
        saveDate() {
            this.$emit('change', this.fullDate);
            this.dialog = false;
        },
    },
};
</script>
