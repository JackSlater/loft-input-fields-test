import { userFormFieldsData } from '../utils/userFormFieldsData';

// mocks
const getUserData = () => ({
    name: 'User',
    gender: 'male',
    sub: '2020-03-04T13:04Z',
    comment: 'User comment for text area',
});

const getUserFormFields = () => userFormFieldsData;

export {
    getUserData,
    getUserFormFields,
};
