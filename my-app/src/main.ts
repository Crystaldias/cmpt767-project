import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cWWdCf1FpQnxbf1xzZFBMYl1bRHBPIiBoS35RdURiWXdec3dcRGhbWEZ0');

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);