<template>
    <div>
      <div class="primary-heading-con">
          <div class="heading">
              <div class="title">Symbols/Tickers</div>
          </div>
      </div>

      <div class="page-content-con">
          <loading v-if="loading"></loading>
          <div v-else>
              <div
                  v-for="ticker in tickers"
                  :key="ticker.symbol"
                  class="ticker"
              >
                  <h5 class="heading is-size-5">{{ticker.displaySymbol}} : <small class="is-size-7">{{ticker.description}}</small></h5>
              </div>
          </div>
      </div>

    </div>
</template>

<script>

import FinnhubApi from "@/api/FinnhubApi";

export default {
    name : "Symbols",
    data () {
        return {
            loading : true,
            tickers : [],
        };
    },
    beforeMount () {
        FinnhubApi.getTickers().then(response => {
            this.tickers = response.data;
        }).finally(() => {
            this.loading = false;
        });
    },
}
</script>

<style lang="scss" scoped>
    @import '../assets/css/_theme';
    .ticker {
        margin-bottom:10px;
        padding-bottom:10px;
        border-bottom:1px solid $white-ter;
    }
</style>
