import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'csi-response-error-modal',
  templateUrl: './csi-response-error-modal.html',
  styleUrls: ['./csi-response-error-modal.css']
})
export class CsiResponseErrorModalComponent implements OnInit {
  isCustom = false;
  customError: any;
  code: string;
  message: string;
  errorDescription: string;
  hasError: boolean;

  constructor(  public bsModalRef: BsModalRef,
                public translatorService: TranslateService,
                public translate: TranslateService ) {

                  translate.addLangs(['en', 'ar']);
                  translate.setDefaultLang('en');
                  translate.use('en');
  }

  ngOnInit() {
    if (this.isCustom) {

      this.code = this.customError.code;
      this.errorDescription = this.customError.message;

    } else {

      if (this.translatorService.instant(this.code) === this.code) {
          this.errorDescription = this.message;
          this.hasError = true;
      } else {
        this.errorDescription = this.translatorService.instant(this.code);
        this.hasError = false;
      }

    }
  }
}
