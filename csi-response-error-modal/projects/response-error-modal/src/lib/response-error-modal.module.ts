import {ModuleWithProviders, NgModule} from '@angular/core';
import { CsiResponseErrorModalComponent } from './csi-response-error-modal.component';
import {HttpClientModule} from '@angular/common/http';
import {CsiHttpHandlerModule, CsiHttpService} from '@csi/csi-http-handler';
import {ErrorServiceConfig} from './error-config-interface/error-config.interface';
import {TranslationsErrorService} from './translation-service/translations-error.service';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';
import {ModalModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    HttpClientModule,
    CsiHttpHandlerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslationsErrorService
      }
    }),
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [
    CsiResponseErrorModalComponent
  ],
  exports: [CsiResponseErrorModalComponent],
  entryComponents: [CsiResponseErrorModalComponent],
  providers: [
    CsiHttpService,
    TranslationsErrorService
  ]
})
export class ResponseErrorModalModule {

  constructor() {
  }
  static forRoot(errorServiceConfig: ErrorServiceConfig): ModuleWithProviders {
    return {
      ngModule: ResponseErrorModalModule,
      providers: [
        {provide: 'errorServiceConfig', useValue: errorServiceConfig}
      ]
    };
  }
}
