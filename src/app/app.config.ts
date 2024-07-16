import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule, provideStore } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import reducers from './shared/state/reducers';
import effects from './shared/state/effects';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      StoreModule.forRoot(reducers),
      EffectsModule.forRoot(effects),
      StoreDevtoolsModule.instrument({ maxAge: 25 }),
    ),
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptorsFromDi( 
      )
    ),
    provideAnimationsAsync()
   ]
};
