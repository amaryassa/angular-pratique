import { AbstractControl, AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

export function isRestrictedNames(restrictedNames: string[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (restrictedNames.includes(control.value)) {
      return { nameIsRestricted: true };
    }
    return null;
  };
}

export function isRestrictedEmails(
  restrictedEmails: string[]
): AsyncValidatorFn {
  return (control: AbstractControl): Promise<any> | Observable<any> => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (restrictedEmails.includes(control.value)) {
          resolve({ emailIsRestricted: true });
        } else {
          resolve(null);
        }
      }, 2500);
    });

    return promise;
  };
}

// export function existingMobileNumberValidator(userService: UserService): AsyncValidatorFn {
//   return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
//     return userService.getUserByMobileNumber(control.value).pipe(map(
//       (users: User[]) => {
//         return (users && users.length > 0) ? { "mobNumExists": true } : null;
//       }
//     ));
//   };
// }
