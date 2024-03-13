import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, effect } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NotionCreatePageResponse } from './model/notion-response.model';
import { SpeechToNotionFormModel } from './model/speech-to-notion-form.model';
import { SpeechToNotionFormService } from './service/speech-to-notion-form.service';

@Component({
  selector: 'app-speech-to-notion-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    FontAwesomeModule,
    NgbAlertModule,
  ],
  templateUrl: './speech-to-notion-form.component.html',
  styleUrls: ['./speech-to-notion-form.component.css'],
})
export class SpeechToNotionFormComponent {
  audioToProcess?: File;
  isGenerating = false;
  linkNotionDoc = 'test';
  flowStatus: 'error' | 'success' | 'idle' = 'idle';

  speechToNotionForm = new FormGroup<SpeechToNotionFormModel>({
    audioFile: new FormControl<string>('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    documentName: new FormControl<string>('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  constructor(private speechToNotionFormService: SpeechToNotionFormService) {
    effect(() => this.onPageCreation());
  }

  private onPageCreation() {
    let notionCreatePageResponseState =
      this.speechToNotionFormService.translateSpeechToText();
    if (notionCreatePageResponseState.status === 'OK') {
      this.onGenerateSuccess(notionCreatePageResponseState.value!);
    } else if (notionCreatePageResponseState.status === 'ERROR') {
      this.onGenerateError(notionCreatePageResponseState.error!);
    }
  }

  onUploadFile(target: EventTarget | null): void {
    if (target === null) {
      return;
    }
    const file = (target as HTMLInputElement).files?.[0];
    if (file) {
      this.audioToProcess = file;
    }
  }

  onGenerate() {
    if (this.audioToProcess) {
      this.isGenerating = true;
      this.speechToNotionFormService.transcript(
        this.audioToProcess,
        this.speechToNotionForm.getRawValue().documentName,
        'test'
      );
    }
  }

  onGenerateError(err: HttpErrorResponse) {
    this.flowStatus = 'error';
    this.isGenerating = false;
    console.error(err);
  }

  onGenerateSuccess(notionPageResponse: NotionCreatePageResponse) {
    this.flowStatus = 'success';
    this.linkNotionDoc = notionPageResponse.url;
    this.isGenerating = false;
  }
}
