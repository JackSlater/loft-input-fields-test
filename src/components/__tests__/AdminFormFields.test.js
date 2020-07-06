import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import AdminFormFields from '../AdminFormFields';
import { componentsTypesBindings } from '../../utils/componentsTypesBindings';

Vue.use(Vuetify);

describe('AdminFormFields', () => {
    const fields = [
        {
            label: 'Name',
            field: 'name',
            type: 'string',
        },
        {
            label: 'I agree',
            field: 'agreement',
            type: 'bool',
        },
    ];

    it('should render all fields passed through props', () => {
        const wrapper = mount(AdminFormFields, {
            propsData: { fields },
        });

        const form = wrapper.find('form');

        fields.forEach(({ type }) => {
            expect(
                form.findAllComponents(componentsTypesBindings[type].component).length,
            ).toBeGreaterThan(0);
        });
    });
});
