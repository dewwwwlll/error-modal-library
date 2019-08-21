import {Component, OnInit} from '@angular/core';
import {ResponseErrorModalService} from '../../projects/response-error-modal/src/lib/modal-service/response-error-modal.service';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  customErrorCode: string;
  customErrorDescription: string;

  constructor(private responseErrorModalService: ResponseErrorModalService) {
    console.log('response error 0');
  }

  ngOnInit() {
  }

  openModal() {
    const error = {error: {code: '404', message: 'error description'}};
    this.responseErrorModalService.getCustomErrorDescription(error);
  }

  showCustomError() {
    const error = { code: this.customErrorCode, message: this.customErrorDescription};
    this.responseErrorModalService.showCustomError(error);
  }

}
