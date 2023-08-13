import vuetify from './vuetify';
import router from '../router';
import type { App } from 'vue';
import { createPinia } from 'pinia';


export function registerPlugins (app: App) {
    const pinia = createPinia();
    app.use(vuetify);
    app.use(router);
    app.use(pinia);
}
