<template>
    <v-row align="center">
        <v-col cols="9">
            <v-text-field
                label="Subscription"
                name="sub"
                type="text"
                :value="formattedFullDate"
                readonly
            />
        </v-col>
        <v-col cols="3">
            <DatepickerDialog
                :initial-date="dateFromCurrentFullDate"
                :initial-time="timeFormCurrentFullDate"
                @change="onFullDateChange"
            />
        </v-col>
    </v-row>
</template>

<script>
import DatepickerDialog from './DatepickerDialog';

export default {
    name: 'DatepickerField',
    components: {
        DatepickerDialog,
    },
    props: {
        value: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            fullDate: this.value,
        };
    },
    computed: {
        parsedFullDate() {
            const date = new Date(this.fullDate);
            return date.toString() !== 'Invalid Date' ? date : new Date();
        },

        formattedFullDate() {
            return this.fullDate !== ''
                ? this.parsedFullDate.toLocaleString('ru-RU', { hour12: false })
                : '';
        },

        dateInISOFormat() {
            return this.parsedFullDate.toISOString();
        },

        /**
         * @return {string}
         */
        timeFormCurrentFullDate() {
            return this.parsedFullDate.toLocaleTimeString('ru-RU', {
                hour12: false,
                hour: 'numeric',
                minute: 'numeric',
            });
        },

        /**
         * @return {string}
         */
        dateFromCurrentFullDate() {
            const indexOfTimeStart = this.dateInISOFormat.indexOf('T');
            return indexOfTimeStart !== -1
                ? this.dateInISOFormat.slice(0, indexOfTimeStart)
                : '';
        },
    },
    methods: {
        onFullDateChange(date) {
            this.fullDate = date;
            this.$emit('change', this.dateInISOFormat);
        },
    },
};
</script>
