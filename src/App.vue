<template>
  <main>
    <p class="day">
      {{ day }}
    </p>

    <div class="search">
      <input type="search" placeholder="Location..." />
    </div>

    <div class="place">
      <span class="placeName">London</span>
      <span class="weatherDesc"> Sun and Cloud </span>
    </div>

    <div class="weatherImg">
      <img src="" alt="" class="" />
    </div>

    <p class="degree">22°C</p>
  </main>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // Day
      day: "",
      week: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      month: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],

      // Weather
      apiKey: "0e673a07abc8702797b4a49338776416",
    };
  },
  methods: {
    today: function () {
      let d = new Date();
      this.day = `${this.week[d.getDay()]}, ${d.getDate()} ${
        this.month[d.getMonth()]
      }`;
    },
  },

  mounted() {
    this.today();
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: calc(0.5em + 2vw);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #2c3e50;
  background: #04293a;
}
</style>
