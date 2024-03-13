import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, FontAwesomeModule, TranslateModule],
  exports: [FontAwesomeModule, TranslateModule],
})
export class SharedModule {}
