import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WhisperResponse } from '../../model/whisper.model';

@Injectable({
  providedIn: 'root',
})
export class WhisperService {
  private baseUrl = 'https://api.whisper.sh';
  constructor(private httpClient: HttpClient) {}

  transcriptAudioToWhisper(audioFile: File): Observable<WhisperResponse> {
    const formData = new FormData();
    formData.append('file', audioFile);
    formData.append('model', 'whisper-1');
    formData.append('response_format', 'json');
    return this.httpClient.post<WhisperResponse>(
      this.baseUrl + '/transcript',
      formData
    );
  }
}
