import {createApp} from "vue";
import App from "./App.vue";

import en from "./translations/en.json";
import pl from "./translations/pl.json";
import {createI18n} from "vue-i18n";

const i18n = createI18n({
  messages: {
    en: en,
    pl: pl,
  },
  fallbackLocale: "en",
});

const app = createApp(App);
app.use(i18n);
app.mount("#app");
