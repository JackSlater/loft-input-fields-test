import { createTextValidator, validateSubcriptionField } from '../validators';

describe('Validators', () => {
    test('createTextValidator should return function', () => {
        const validator = createTextValidator(0, 1);

        expect(validator).toBeInstanceOf(Function);
    });

    test('createTextValidator: created validator should validate given value correctly', () => {
        const [min, max] = [2, 5];
        const validator = createTextValidator(min, max);

        expect(validator({}).status).toBe('error');
        expect(validator('1').status).toBe('error');
        expect(validator('123456').status).toBe('error');
        expect(validator('123').status).toBe('ok');
    });

    test('validateSubcriptionField should validate correctly', () => {
        expect(validateSubcriptionField(new Date()).status).toBe('ok');
        expect(validateSubcriptionField('').status).toBe('error');
    });
});
