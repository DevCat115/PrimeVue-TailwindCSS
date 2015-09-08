import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Lara from "./presets/lara";
import "./style.css";
import App from "./App.vue";
// import "primevue/resources/themes/aura-light-blue/theme.css"; // theme
import "primevue/resources/primevue.min.css"; // core css
import "primeicons/primeicons.css";

import ContextMenu from "primevue/contextmenu";
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";
import Dropdown from "primevue/dropdown";
import RadioButton from "primevue/radiobutton";
import Sidebar from "primevue/sidebar";
import Avatar from "primevue/avatar";

const app = createApp(App);

app.component("ContextMenu", ContextMenu);
app.component("Button", Button);
app.component("Checkbox", Checkbox);
app.component("Dropdown", Dropdown);
app.component("RadioButton", RadioButton);
app.component("Sidebar", Sidebar);
app.component("Avatar", Avatar);

app.use(PrimeVue, {
  unstyled: true,
  pt: Lara,
});
app.mount("#app");
