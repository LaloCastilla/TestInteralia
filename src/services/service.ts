import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class Service {

  private _jsonURL = '/src/app/services/edit.json';

  constructor(private httpClient:HttpClient){

  }

  getForms(){
    // Intenté simular el request hacia mis arhivos locales pero no hubo exito.
    return this.httpClient.get(this._jsonURL).toPromise()
      .then((data)=>{
      return data;
      })
      .catch(reason => {
        console.log(reason);
        return null;
      });
  }



}
