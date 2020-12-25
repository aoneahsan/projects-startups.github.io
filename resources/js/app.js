require("./bootstrap");

require("moment");

import Vue from "vue";

import { InertiaApp } from "@inertiajs/inertia-vue";
import { InertiaForm } from "laravel-jetstream";
import PortalVue from "portal-vue";
import VueLoading from "vue-element-loading";
import VueYoutube from "vue-youtube";
import Toasted from "vue-toasted";
import { InertiaProgress } from '@inertiajs/progress'

// custom global components
import PageLoader from "./GlobalComponents/PageLoader/PageLoader";

Vue.mixin({ methods: { route } });
Vue.use(InertiaApp);
Vue.use(InertiaForm);
Vue.use(PortalVue);
Vue.component("VueLoading", VueLoading); // https://www.npmjs.com/package/vue-element-loading
Vue.use(VueYoutube, { global: true, componentId: "youtube" }); // https://www.npmjs.com/package/vue-youtube
Vue.use(Toasted); // https://www.npmjs.com/package/vue-toasted

// Custom Defined Components
Vue.component("PageLoader", PageLoader);

const app = document.getElementById("app");

// default toasts
Vue.toasted.register("successM", "Request Successfully Completed.", {
    closeOnSwipe: true,
    position: "bottom-right", //['top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left']
    duration: 5000,
    keepOnHover: true,
    fullWidth: false,
    fitToScreen: false,
    // className: "", //Custom css class name of the toast
    // containerClass: "", // Custom css classes for toast container
    iconPack: "fontawesome", // ['material', 'fontawesome', 'mdi', 'custom-class', 'callback']
    icon: "fa-user", // for icons got to   "https://shakee93.github.io/vue-toasted/"
    type: "success",
    theme: "toasted-primary", //['toasted-primary', 'outline', 'bubble']
    // onComplete: () => {},
    singleton: false // Only allows one toast at a time.
});
Vue.toasted.register("warningM", "You are not allowed to do this action.", {
    closeOnSwipe: true,
    position: "bottom-right", //['top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left']
    duration: 5000,
    keepOnHover: true,
    fullWidth: false,
    fitToScreen: false,
    // className: "", //Custom css class name of the toast
    // containerClass: "", // Custom css classes for toast container
    iconPack: "fontawesome", // ['material', 'fontawesome', 'mdi', 'custom-class', 'callback']
    icon: "warning", // for icons got to   "https://shakee93.github.io/vue-toasted/"
    type: "warning",
    theme: "toasted-primary", //['toasted-primary', 'outline', 'bubble']
    // onComplete: () => {},
    singleton: false // Only allows one toast at a time.
});
Vue.toasted.register("errorM", "Oops.. Something Went Wrong..", {
    closeOnSwipe: true,
    position: "bottom-right", //['top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left']
    duration: 5000,
    keepOnHover: true,
    fullWidth: false,
    fitToScreen: false,
    // className: "", //Custom css class name of the toast
    // containerClass: "", // Custom css classes for toast container
    iconPack: "material", // ['material', 'fontawesome', 'mdi', 'custom-class', 'callback']
    icon: "error", // for icons got to   "https://shakee93.github.io/vue-toasted/"
    type: "error",
    theme: "toasted-primary", //['toasted-primary', 'outline', 'bubble']
    // onComplete: () => {},
    singleton: false // Only allows one toast at a time.
});


// Inertia Page Loader Progress bar
InertiaProgress.init()

new Vue({
    render: h =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: name => require(`./Pages/${name}`).default
            }
        })
}).$mount(app);
