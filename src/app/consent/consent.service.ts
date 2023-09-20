import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Bundle, Consent, Patient } from 'fhir/r4';
import { Observable } from 'rxjs';
import { BackendService } from '../backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class ConsentService extends BaseService {

  public static CONSENT_PATH = '/Consent';

  // constructor(protected backendService: BackendService) { 
  //   super();
  // }

  url(): string {
    return this.backendService.url + ConsentService.CONSENT_PATH;
  }

  index(): Observable<Bundle<Consent>> {
    let b = this.http.get<Bundle<Consent>>(this.url(), { headers: this.headers() });
    return b;
  }
}
