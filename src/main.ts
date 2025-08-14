import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';
import {DarkModeService} from './app/services/darkmode.service';

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    // Initialize theme after app bootstrap
    const darkModeService = new DarkModeService();
    darkModeService.initTheme();
  })
  .catch((err) => console.error(err));
