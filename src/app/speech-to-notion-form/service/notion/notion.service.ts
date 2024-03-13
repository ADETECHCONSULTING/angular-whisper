import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotionCreatePageRequest } from '../../model/notion-request.model';
import { NotionCreatePageResponse } from '../../model/notion-response.model';

@Injectable({
  providedIn: 'root',
})
export class NotionService {
  private baseUrl = 'https://api.notion.sh';

  constructor(private httpClient: HttpClient) {}

  createDocumentInNotion(
    document: NotionCreatePageRequest
  ): Observable<NotionCreatePageResponse> {
    return this.httpClient.post<NotionCreatePageResponse>(
      this.baseUrl + '/create-page',
      document
    );
  }
}
