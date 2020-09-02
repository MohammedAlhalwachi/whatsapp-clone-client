import Vue from 'vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { setInteractionMode } from 'vee-validate'
import { required, email, min } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';

setInteractionMode('eager')

extend('required', {
    ...required,
    message: 'This field is required'
});
extend('email', {
    ...email,
    message: 'Please enter a valid email'
});

extend('min', {
    ...min,
    message: '{_field_} must have no less than {length} characters',
});

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
