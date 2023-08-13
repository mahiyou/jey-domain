<template>
  <div class="map-container">
    <GeneralHeader>
      <template v-slot:title>
        <p>ما اینجا هستیم!</p>
      </template>
    </GeneralHeader>
    <div class="map-style">
      <l-map
        ref="map"
        v-model:zoom="zoom"
        :center="[32.70882364395225, 51.660616993904114]"
        :useGlobalLeaflet="false">
        <l-marker :lat-lng="coordinates"></l-marker>
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap">
        </l-tile-layer>
      </l-map>
    </div>
  </div>
</template>

<script lang="ts" >
import { defineComponent } from "vue";
import GeneralHeader from "@/components/GeneralHeader.vue";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import type L from "leaflet";
export default defineComponent({
  data() {
    return {
      zoom: 20,
      coordinates: [32.70882364395225, 51.660616993904114,] as L.LatLngExpression,
    };
  },
  components: {
    GeneralHeader,
    LMap,
    LTileLayer,
    LMarker,
  },
});
</script>
<style lang="scss">
  .map-container{
    .map-style{
      height: 400px; 
      width: 100%;
      @media (max-width: 960px) {
        height: 250px;
      }
    }
  }
</style>
