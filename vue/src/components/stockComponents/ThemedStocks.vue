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
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "themedStocks",
  data() {
    return {
      themedStocksData: [],
      themedCnt: null,
      gridHeader: ["테마명", "상승", "보합", "하락", "등락률"],
      headers: [
        { text: "테마명", value: "nm" },
        { text: "상승", value: "rc" },
        { text: "보합", value: "sc" },
        { text: "하락", value: "fc" },
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
          //["테마명", "상승", "보합", "하락", "등락률"]
          //   nm ,     rc ,    sc ,   fc ,     cr
          this.themedStocksData = groupList;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {},
};
</script>

<style></style>
