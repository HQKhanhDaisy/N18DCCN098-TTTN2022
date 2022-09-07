import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'movieFilter' })
export class FilterMoviePipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((item: any)  => {
      if (item.name.toLowerCase().includes(searchText)) {
        return item;
      }
    });
  }
}

@Pipe({ name: 'directorFilter' })
export class FilterDirectorPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((item: any)  => {
      if (item.name.toLowerCase().includes(searchText)) {
        return item;
      }
    });
  }
}
