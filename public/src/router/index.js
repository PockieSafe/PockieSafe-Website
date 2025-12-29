import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Stokvel from "../views/StokvelView.vue";
import FlexrandView from "../views/FlexrandView.vue";
import SecurityView from "../views/SecurityView.vue";
import FaqView from "../views/FaqView.vue";
import NotFound from "../views/NotFound.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";
import TermsandConditions from "../views/TermsandConditions.vue";
import ContactView from "../views/ContactView.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/stokvel", name: "stokvel", component: Stokvel },
  { path: "/flexrand", name: "flexrand", component: FlexrandView },
  { path: "/security", name: "security", component: SecurityView },
  { path: "/faq", name: "faq", component: FaqView },
  { path: "/privacypolicy", name: "privacypolicy", component: PrivacyPolicy },
  { path: "/terms", name: "termsandconditions", component: TermsandConditions },
  { path: "/contact", name: "contactview", component: ContactView },
  {
    path: "/cards",
    name: "cards",
    component: () => import("../views/CardView.vue"),
  },
  { path: "*", name: "notfound", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,

  // tries to control window scroll
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { selector: to.hash };
    return { x: 0, y: 0 };
  },
});

// ✅ HARD RESET SCROLL AFTER ROUTE CHANGE + AFTER DOM UPDATE
router.afterEach(() => {
  Vue.nextTick(() => {
    window.scrollTo(0, 0);
    const el = document.scrollingElement || document.documentElement || document.body;
    if (el) el.scrollTop = 0;

    const app = document.getElementById("app");
    if (app) app.scrollTop = 0;
  });
});

export default router;
