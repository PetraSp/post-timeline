import { AbstractControl } from '@angular/forms';

export const uniquePhone = (list: string[]) => {
    return ( control: AbstractControl ) => {
            if (list.includes(control.value)) {
                return {
                    phone: { valid: false }
                };
            }
            return null;
    };
};

