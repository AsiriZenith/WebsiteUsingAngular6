import { Injectable } from '@angular/core';
import { configuration } from '../configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config = configuration;

  constructor() { }

  getConfig(){
    return this.config
  }
}
