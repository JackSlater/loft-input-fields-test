import {
    VTextField, VSelect, VCheckbox, VFileInput, VTextarea,
} from 'vuetify/lib';
import DatepickerField from '../components/DatepickerField/DatepickerField';

export const componentsTypesBindings = {
    string: {
        component: VTextField,
        defaultProps: {
            type: 'text',
        },
    },
    select: {
        component: VSelect,
        defaultProps: {
            solo: true,
        },
    },
    date: {
        component: DatepickerField,
    },
    bool: {
        component: VCheckbox,
    },
    file: {
        component: VFileInput,
        defaultProps: {
            'small-chips': true,
            multiple: true,
        },
    },
    textarea: {
        component: VTextarea,
    },
};
