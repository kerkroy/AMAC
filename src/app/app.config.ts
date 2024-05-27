import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ExempleImplementationRepository } from './exemple/datas/repositories/exemple.repository';
import { ExempleRepository } from './exemple/services/exempleRepositoryImplement';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    { provide: ExempleRepository, useFactory: () => new ExempleImplementationRepository() }
  ]
};
