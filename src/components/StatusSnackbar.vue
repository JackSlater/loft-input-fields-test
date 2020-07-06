<template>
    <v-snackbar
        v-model="show"
        bottom
        :color="message.status"
        timeout="2500"
    >
        {{ message.text }}

        <template v-slot:action="{ attrs }">
            <v-btn
                dark
                text
                v-bind="attrs"
                @click="$emit('close')"
            >
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
export default {
    name: 'StatusSnackbar',
    props: {
        show: {
            type: Boolean,
            required: true,
            default: false,
        },
        message: {
            type: Object,
            required: true,
        },
    },
};
</script>
