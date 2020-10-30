import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@mdi/font/css/materialdesignicons.css"
Vue.use(Vuetify);
const vuetify = new Vuetify({
  icons: {
    iconfont: "mdi",
    values:{}
  },
  theme: {
    themes: {
      light: {
        primary: "#41796b",
        secondary: "#2b2b2b",
        ternary: "#3b3b3b",
        error: "#b71c1c",
        text: "#FFFFFF"
      }
    }
  }
});

export default vuetify;
