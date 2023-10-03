/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import '@/assets/main.scss';

// Composables
import { createVuetify } from 'vuetify';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    theme: {
        themes: {
            light: {
                colors: {
                    "on-surface":'#242849',
                    primary: '#4f80ff',
                    secondary: '#ffa200',
                    "on-secondary": '#ffffff',
                    customYellow: '#faa930',
                    background: "#fafbff",
                    "on-background": "#242849"

                },
                
            },
        },
    },
});
