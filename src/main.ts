import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ExempleDashboardComponent } from './app/exemple/ui/exempleDashboard/exempleDashboard.component';

bootstrapApplication(ExempleDashboardComponent, appConfig)
  .catch((err) => console.error(err));
