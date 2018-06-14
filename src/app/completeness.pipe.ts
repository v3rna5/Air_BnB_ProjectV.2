// import {Pipe, PipeTransform} from '@angular/core';
// import {Property} from './models/property.model';
//
// @Pipe({
//   name: "completeness",
//   pure: false
//
// })
//
// export class CompletenessPipe implements PipeTransform {
//   transform(input: Property[], desiredCompleteness) {
//     var output: Property[] = [];
//     if(desiredCompleteness === "inactiveProperties") {
//       for (var i = 0; i < input.length; i++) {
//         if (input[i].done === false) {
//           output.push(input[i]);
//         }
//       }
//       return output;
//     } else if (desiredCompleteness === "activeProperties") {
//       for (var i = 0; i < input.length; i++) {
//         if (input[i].done === true) {
//           output.push(input[i]);
//         }
//       }
//       return output;
//     } else {
//       return input;
//     }
//   }
// }
