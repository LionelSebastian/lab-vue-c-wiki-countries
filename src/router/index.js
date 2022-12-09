import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "list",
    component: () => import("../components/CountriesList.vue"),
    children: [
      {
        path: "/:alpha3Code",
        name: "details-list",
        component: () => import("../components/CountryDetails.vue"),
      },
    ],
   },
   {   
   path: "/:alpha3Code/details",
   name: "country-details",
   component: () => import("../pages/details.vue"),}
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;