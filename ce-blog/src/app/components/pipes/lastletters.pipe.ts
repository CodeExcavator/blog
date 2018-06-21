import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'lastLetters'})
export class LastLettersPipe implements PipeTransform {
    transform(value: string, length: number): string {

        if (!value){
            return value;
        }
        if(length > 0 && value.length <= length){
            return '';
        }

        return value;
    }
}
