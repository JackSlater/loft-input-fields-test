import { createTextValidator } from './validators';

export const userFormFieldsData = [
    {
        label: 'Name',
        field: 'name',
        type: 'string',
        validator: createTextValidator(3, 40),
    },
    {
        label: 'Gender',
        field: 'gender',
        type: 'select',
        meta: {
            values: [
                {
                    label: 'Male',
                    value: 'male',
                },
                {
                    label: 'Female',
                    value: 'female',
                },
            ],
        },
    },
    {
        label: 'Subscription',
        field: 'sub',
        type: 'date',
    },
    {
        label: 'I agree',
        field: 'agreement',
        type: 'bool',
    },
    {
        label: 'Documents',
        field: 'docs',
        type: 'file',
    },
    {
        label: 'Comment',
        field: 'comment',
        type: 'textarea',
        validator: createTextValidator(1, 200),
    },
];
