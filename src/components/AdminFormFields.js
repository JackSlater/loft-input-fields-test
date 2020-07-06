import Vue from 'vue';
import { VForm } from 'vuetify/lib';
import formProps from '../mixins/formProps';
import { componentsTypesBindings } from '../utils/componentsTypesBindings';

export default Vue.extend({
    name: 'AdminFormFields',
    mixins: [formProps], // fields, initialValues
    props: {
        fieldsErrors: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            errors: {},
        };
    },

    render(h) {
        const fieldsOutput = this.fields.map((field) => {
            const {
                label, type, field: name, validator,
            } = field;
            const { component, defaultProps = {} } = componentsTypesBindings[type];

            if (!type || component === undefined) return '';

            const props = {
                label, name, error: this.fieldsErrors.includes(name), ...defaultProps,
            };

            if (type === 'select') {
                try {
                    props.items = field.meta.values.map(({ label: text, value }) => ({ text, value }));
                } catch (e) {
                    return '';
                }
            }

            if (this.initialValues[name]) props.value = this.initialValues[name];

            const onChange = (value) => {
                if (validator) {
                    const { error } = validator(value);

                    if (error) {
                        this.$emit('error', {
                            field: name,
                            error,
                        });

                        return;
                    }
                }

                this.$emit('change', {
                    field: name,
                    value,
                });
            };

            return h(component, {
                props,
                on: {
                    change: onChange,
                },
            });
        });

        return h(VForm, {}, fieldsOutput);
    },
});
