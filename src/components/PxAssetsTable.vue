<template>
  <table class="mt-2 overflow-auto">
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th >
          <span class="underline cursor-pointer" @click="changeSortOrder()"
            >Ranking</span> <span class="text-decoration:none" :class="{ up: sortOrder == 1, down: sortOrder == -1 }"></span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th >Cap. de Mercado</th>
        <th >Variación 24hs</th>
        <td class="hidden sm:block">
          <input
            class="
              bg-gray-100
              focus:outline-none
              border-b border-gray-400
              py-2
              px-4
              block
              w-full
              appearance-none
              leading-normal
            "
            id="filter"
            placeholder="Buscar..."
            type="text"
            v-model="filter"
          />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr 
        v-for="a in filteredAssets"
        :key="a.id"
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
      >
        <td >
          <img
            class="w-6 h-6"
            :src="`https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`"
            :alt="a.name"
          />
        </td>
        <td>
          <b># {{ a.rank }}</b>
        </td>
        <td>
          <b>
          <router-link
            class="hover:underline"
            :to="{ name: 'coin-detail', params: { id: a.id } }"
            >{{ a.name }}</router-link
          >
          </b>
          <small class="ml-1 text-gray-500">{{ a.symbol }}</small>
        </td>
        <td>{{ dollar(a.priceUsd) }}</td>
        <td >{{ dollar(a.marketCapUsd) }}</td>
        <td 
          :class="
            a.changePercent24Hr.includes('-')
              ? 'text-red-600'
              : 'text-green-600'
          "
        >
          {{ porcentaje(a.changePercent24Hr) }}
        </td>
        <td class="hidden sm:block">
          <px-button @click="goToCoin(a.id)">
            <span>Detalle</span>
          </px-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { dollarFilter, percentFilter } from "@/filter";
import PxButton from "./PxButton.vue";

export default {
  name: "PxAssetsTable",
  components: { PxButton },
  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      filter: "",
      sortOrder: 1,
    };
  },
  computed: {
    filteredAssets() {
      const allOrder = this.sortOrder === 1 ? -1 : 1;
      return this.assets
        .filter(
          (a) =>
            a.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
            a.name.toLowerCase().includes(this.filter.toLowerCase())
        )
        .sort((a, b) => {
          if (parseInt(a.rank) > parseInt(b.rank)) {
            return this.sortOrder;
          }
          return allOrder;
        });
    },
  },
  methods: {
    dollar(value) {
      return dollarFilter(value);
    },
    porcentaje(value) {
      return percentFilter(value);
    },
    goToCoin(id) {
      this.$router.push({ name: "coin-detail", params: { id } });
    },
    changeSortOrder() {
      this.sortOrder = this.sortOrder === 1 ? -1 : 1;
    },
  },
};
</script>

<style scoped>
table thead{
  color:#6D28D9;
}

.up::before {
  content: "▲";
}

.down::before {
  content: "▼";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
