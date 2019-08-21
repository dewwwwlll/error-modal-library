import {Injectable} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap';
import {CsiResponseErrorModalComponent} from '../csi-response-error-modal.component';
import {ErrorDto} from '../error-dto/error-dto';

@Injectable({
  providedIn: 'root'
})
export class ResponseErrorModalService {

  constructor(private modalService: BsModalService) { }

  getCustomErrorDescription(error: any) {
    const initialState = new ErrorDto(error.error.code, error.error.message);
    this.modalService.show(CsiResponseErrorModalComponent, {initialState});
  }

  showCustomError(error: any) {
    const initialState = {customError: new ErrorDto(error.code, error.message), isCustom: true};
    this.modalService.show(CsiResponseErrorModalComponent, {initialState});
  }

}
