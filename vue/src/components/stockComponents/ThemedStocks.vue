<template>
  <v-card>
    <v-card-title>
      테마주
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="themedStocksData"
      :search="search"
      @click:row="rowClick"
    >
     <template slot="items" slot-scope="props">
        <tr @click="props.expanded = !props.expanded">
          <td>{{ props.item.nm }}</td>
          <td class="text-xs-right pr-5">{{ props.item.rc }}</td>
          <td class="text-xs-right pr-5">{{ props.item.sc }}</td>
          <td class="text-xs-right pr-5">{{ props.item.fc }}</td>
          <td class="text-xs-right pr-5">{{ props.item.cr }}</td>
        </tr>
      </template>
      <template slot="expand" slot-scope="props">
        <ThemedDetail v-bind:testName="props.item.nm"></ThemedDetail>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import ThemedDetail from './ThemedDetail';

export default {
  name: "themedStocks",
  components:{
    ThemedDetail
  },
  data() {
    return {
      themedStocksData: [],
      themedCnt: null,
      headers: [
        { text: "테마명", value: "nm" },
        { text: "상승", value: "rc", class: "success--text" },
        { text: "보합", value: "sc" },
        { text: "하락", value: "fc", class: "red--text" },
        { text: "등락률", value: "cr" },
      ],
      search: "",
    };
  },
  created() {
    this.$http
      .get("/api/themedStocks")
      .then((res) => {
        const data = res.data.data;
        const groupList = data.result.groupList;
        const totCnt = data.result.totCnt;
        if (data) {
          this.themedCnt = totCnt;
          this.themedStocksData = groupList;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    data_class(item) {
      const per = String(item.cr);
      if (per.indexOf("-") > -1) return "success--text";
      else return "red--text";
    },
    rowClick(value) {
      console.log("aaaaaaaaaa");
      console.log(value);
    },
  },
};
</script>

<style>
/* .blue {
  color: aqua;
}
.red {
  color: red;
} */
</style>
