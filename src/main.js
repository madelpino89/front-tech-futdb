import { createApp } from "vue";
import PrimeVue from "primevue/config";
import "primeflex/primeflex.min.css";
import Aura from "@primevue/themes/aura";
import App from "./App.vue";
import router from "./router";

//import "primeflex/primeflex.scss";
import "primeflex/themes/primeone-light.css";
import "primeicons/primeicons.css";
import "./assets/styles.css";

// ---------------------------------------------------------------------------
// Import components from PrimeVue
// ---------------------------------------------------------------------------
import Button from "primevue/button";
import Tag from "primevue/tag";
import Rating from "primevue/rating";
import Image from "primevue/image";
import DataView from "primevue/dataview";
import Avatar from "primevue/avatar";
import Dialog from "primevue/dialog";
import Badge from "primevue/badge";
import Message from "primevue/message";
import Divider from "primevue/divider";
import ScrollPanel from "primevue/scrollpanel";
import TabMenu from "primevue/tabmenu";
import Panel from "primevue/panel";
import Paginator from "primevue/paginator";
import i18n from './i18n';

const app = createApp(App).use(i18n);
app.use(PrimeVue, { theme: { preset: Aura } });
app.use(router);
app.mount("#app");
app.component("Button", Button);
app.component("Tag", Tag);
app.component("Rating", Rating);
app.component("Image", Image);
app.component("DataView", DataView);
app.component("Avatar", Avatar);
app.component("Dialog", Dialog);
app.component("Badge", Badge);
app.component("Message", Message);
app.component("Divider", Divider);
app.component("ScrollPanel", ScrollPanel);
app.component("TabMenu", TabMenu);
app.component("Panel", Panel);
app.component("Paginator", Paginator);
