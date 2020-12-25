<template>
  <div>
    <!-- <PageLoader :show="true" :time="1000" /> -->
    <app-layout>
      <template #header>
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
          Dashboard
        </h2>
      </template>

      <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <welcome />
          </div>
        </div>
      </div>
    </app-layout>
  </div>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import Welcome from "@/Jetstream/Welcome";
export default {
  components: {
    AppLayout,
    Welcome
  },
  created() {
    this.$toasted.global.successM({
      message:
        "view app.js file to customize this. (coming from dashboard.vue file)",
    });
  },
};
</script>
