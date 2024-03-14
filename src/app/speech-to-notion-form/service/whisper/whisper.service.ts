import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WhisperResponse } from '../../model/whisper.model';

@Injectable({
  providedIn: 'root',
})
export class WhisperService {
  private baseUrl = 'https://api.openai.com/v1/audio';
  constructor(private httpClient: HttpClient) {}

  transcriptAudioToWhisper(audioFile: File): Observable<WhisperResponse> {
    const formData = new FormData();
    formData.append('file', audioFile);
    formData.append('model', 'whisper-1');
    formData.append('response_format', 'json');

    //header for the API key "Authorization: Bearer $OPENAI_API_KEY"
    const header = new HttpHeaders({
      Authorization:
        'Bearer $OPENAI_API_KEY' /* replace $OPENAI_API_KEY with your API key */,
    });

    return this.httpClient.post<WhisperResponse>(
      this.baseUrl + '/transcriptions',
      formData,
      { headers: header }
    );
  }
}
