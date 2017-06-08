import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserServices{
	private _url: string = "localhost:8888/api/v1/users";

	constructor(private _http: Http){}

	getUserService(){
		return this._http.get(this._url)
				.map( (response: Response) => response.json());
	}
}