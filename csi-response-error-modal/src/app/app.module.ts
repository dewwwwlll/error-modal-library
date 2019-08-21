import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ResponseErrorModalModule} from '../../projects/response-error-modal/src/lib/response-error-modal.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslationsErrorService} from '../../projects/response-error-modal/src/lib/translation-service/translations-error.service';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ResponseErrorModalModule.forRoot({
      CSI_PMS_RMS_MASTERDATA: 'https://rms.dev.cloudsolutions.lk/csi-pms-rms-masterdata'
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
