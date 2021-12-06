import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any  ) : any {

    if(!args ){
      return value;
    }else{
      args=args.toLocaleLowerCase();
    }
    

    // console.log("value in pipe",value);
    // console.log("argument", args, typeof args);
    
    return value.filter((note:any) =>{
      return note.title.toLocaleLowerCase().includes(args) | note.description.toLocaleLowerCase().includes(args);
      
    })
    //return null;
  }

}
