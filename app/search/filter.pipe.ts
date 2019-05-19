import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  
  /*transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return null;
    return items.filter(item => item.LOCATION.indexOf(searchText) !== -1 || item.Summary.indexOf(searchText) !== -1);
  }*/
  transform(items: any[], searchText: string): any {
    if (!items || !searchText) {
        return null;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter(test => test.LOCATION.indexOf(searchText)> -1 ||
                            test.DATE.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || 
                            test.SUMMARY.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || 
                            test.DEADLINE.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
    //return items.filter(item => item.title.indexOf(filter.title) !== -1);
}
}