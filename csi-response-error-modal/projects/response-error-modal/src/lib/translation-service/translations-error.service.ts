import {Inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateLoader } from '@ngx-translate/core';
import {CsiHttpService} from '@csi/csi-http-handler';
import {ErrorServiceConfig} from '../error-config-interface/error-config.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class TranslationsErrorService implements TranslateLoader {

  private getTranslationsByLangUrl = this.errorServiceConfig.CSI_PMS_RMS_MASTERDATA;

  module = '/errmsg';

  constructor(private csiHttpService: CsiHttpService,
              private httpClient: HttpClient,
              @Inject('errorServiceConfig') private errorServiceConfig: ErrorServiceConfig) {}

  getTranslation(lang: string): Observable<any> {
    // const headers = new HttpHeaders().set('x-group', '1');
    return this.csiHttpService.getAll(this.getTranslationsByLangUrl  + '/amd-masterdata/translations/' + lang + this.module);
  }

}
