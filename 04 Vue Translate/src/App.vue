<template>
  <main class="container">
    <div class="row py-3">
      <div class="col-10"></div>
      <div class="col-2">
        <select class="form-control" @change="change($event.target.value)">
          <option value="en">English</option>
          <option value="pl">Polish</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-md12">
        <h2>{{ t("title", {}, {locale: lang}) }}</h2>
        <p>{{ text }}</p>
        <button class="btn btn-outline-primary" @click="click()">{{ t("like", {}, {locale: lang}) }}</button>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import axios from "axios";
import {useI18n} from "vue-i18n";

export default defineComponent({
  name: "App",
  setup() {
    const {t, locale} = useI18n();
    return {t, locale};
  },
  data() {
    return {
      text: "",
      lang: "en",
    };
  },
  async mounted() {
    await this.load();
  },
  methods: {
    async load() {
      // axios.defaults.headers["Accept-Language"] = this.lang;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const config: string | any = axios.defaults.headers;
      config["Accept-Language"] = this.lang;
      const response = await axios.get("http://localhost:8000/text");
      this.text = response.data["text"];
    },

    async change(lang: string) {
      this.lang = lang;
      this.load();
    },
    async click() {
      const response = await axios.post("http://localhost:8000/like");
      const temp = response.data["message"];
      if (!temp) {
        console.log("waiting");
      }

      const text: string = this.t("thank_you", {}, {locale: this.lang});
      alert(text);
    },
  },
});
</script>
