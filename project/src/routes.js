
import Foo from "./components/Foo.vue";
import Bar from "./components/Bar.vue";
import App from "./App.vue";

export const routes = [
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar },
  { path: "/", component: App }
];
  