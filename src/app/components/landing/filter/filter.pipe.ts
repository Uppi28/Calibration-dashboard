import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  public newData = [];
  transform(items: any[], searchText: string): any[] {
// console.log(items);
// console.log(searchText);
if (!items) {return []; }
if (!searchText) { return items;
 }
searchText = searchText.toLowerCase();

// console.log('data');
this.newData = items.filter(data => {
  // console.log(data);
  return data.name.toLowerCase().includes(searchText);

});
return this.newData;
// return items.filter( data => {
//       return data.toLowerCase().includes(searchText);
//     });
// console.log(this.newData);
   }
}





