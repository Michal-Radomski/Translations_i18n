<template>
  <main class="container">
    <div class="row py-3">
      <div class="col-10"></div>
      <div class="col-2">
        <select class="form-control">
          <option value="en">English</option>
          <option value="pl">Polish</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-md12">
        <h2>This text is translated in the frontend:</h2>
        <p>This is translated in the backend:</p>
        <button class="btn btn-outline-primary">Like</button>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "App",
});
</script>
