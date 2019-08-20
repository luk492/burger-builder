export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const checkValidity = (value, rules) => {
    let isValid = false;

    if(rules.required) {
        isValid = value.trim() !== ''
    }

    if(rules.minLength) {
        isValid = isValid && value.length >= rules.minLength
    }

    if(rules.maxLength) {
        isValid = isValid && value.length <= rules.maxLength
    }

    if(rules.isEmail) {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        isValid = isValid && pattern.test(value)
    }

    if(rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = isValid && pattern.test(value)
    }

    return isValid;
}