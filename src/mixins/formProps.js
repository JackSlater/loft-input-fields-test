export default {
    props: {
        fields: {
            type: Array,
            required: true,
            validator(value) {
                return value.length > 1;
            },
        },
        initialValues: {
            type: Object,
            default: () => ({}),
        },
    },
};
