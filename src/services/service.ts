import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class Service {

  private _jsonURL = '/src/app/services/edit.json';

  constructor(private httpClient:HttpClient){

  }

  getForms(){

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
