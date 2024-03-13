import { FormControl } from '@angular/forms';

export interface SpeechToNotionFormModel {
  audioFile: FormControl<string>;
  documentName: FormControl<string>;
}
