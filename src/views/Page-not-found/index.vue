<template>
  <section class="page_404">
      <div class="m-auto">
          <div class="four_zero_four_bg">
              <h1 class="text-center text-heading-2 text-primary-color">404</h1>
              <p class="text-5xl text-neutral-0 !mb-6">Page not found</p>
          </div>
          <div class="flex">
              <a-button @click="handleDirectHome" type="primary" class="text-center m-auto" style="font-family: 'Inter', sans-serif !important;">Go to Home</a-button>
          </div>
      </div>
  </section>
</template>
<script>
import router from "@/router";
import { ROOT_ROUTE } from "@/router";
export default {
  name: 'PageNotFound',
  setup() {
      const handleDirectHome = () => {
          router.push({
              name: `${ROOT_ROUTE}`
          })
      }
    return { handleDirectHome }
  }
}
</script>
<style lang="scss">

.page_404 {
  background: #0C0F11;
  font-family: 'Arvo', serif;
  height: 100vh;
  display: flex;
    width: 100vw;
}

.page_404 img {
  width: 100%;
}


.four_zero_four_bg h1 {
  font-size: 80px;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;
}
.contant_box_404 {
  margin-top: -50px;
}
</style>
