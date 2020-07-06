const createTextValidator = (minLength, maxLength) => {
    const errors = {
        TYPE_ERROR: 'Invalid value type',
        MIN_LENGTH: `Value length must be more than ${minLength}`,
        MAX_LENGTH: `Value length must be less than ${maxLength}`,
    };

    return (value) => {
        const result = {
            status: 'ok',
        };

        if (typeof value !== 'string') result.error = errors.TYPE_ERROR;
        else if (minLength && value.length < minLength) result.error = errors.MIN_LENGTH;
        else if (maxLength && value.length > maxLength) result.error = errors.MAX_LENGTH;

        if ('error' in result) result.status = 'error';

        return result;
    };
};

const validateSubcriptionField = (value) => (value instanceof Date ? { status: 'ok' } : { status: 'error', error: 'Invalid field value type' });

export {
    createTextValidator,
    validateSubcriptionField,
};
