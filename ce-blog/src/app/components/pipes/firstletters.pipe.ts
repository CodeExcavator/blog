import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'firstLetters'})
export class FirstLettersPipe implements PipeTransform {
    transform(value: string, length: number): string {

        if (!value){
            return value;
        }
        if(length > 0 && value.length > length){
            return value.substr(0,length) + ' ...';
        }

        return value;
    }
}