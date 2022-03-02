<template>
  <main>
    <p class="day">{{ dayName }}, {{ ordinal }} {{ monthName }}</p>

    <div class="search">
      <input type="search" placeholder="Location" />
    </div>

    <div class="place">
      <span class="placeName">London</span>
      <span class="weatherDesc"> Windy </span>
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
      dayName: "",
      dayNum: "",
      month: "",
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
      placeName: "",
    };
  },
  methods: {
    today: function () {
      let d = new Date();

      this.dayName = this.week[d.getDay()];
      this.dayNum = d.getDate();
      this.monthName = this.month[d.getMonth()];
    },
  },

  computed: {
    ordinal: function () {
      if (this.dayNum == 1 || this.dayNum == 21 || this.dayNum == 31) {
        return `${this.dayNum}st`;
      } else if (this.dayNum == "2" || this.dayNum == 22) {
        return `${this.dayNum}nd`;
      } else if (this.dayNum == 3 || this.dayNum == 23) {
        return `${this.dayNum}rd`;
      } else {
        return `${this.dayNum}th`;
      }
    },
  },
  mounted() {
    this.today();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-size: calc(0.5em + 1vw);
  cursor: default;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  color: #ff7878;
  background: #cee5d0;
  display: grid;
  place-items: center;
}
main {
  background: #f3f0d7;
  min-height: auto;
  box-shadow: 12px 15px 10px 0px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  width: 350px;
  padding: 20px;
}
.day {
  margin: 30px 0 20px 0;
  font-size: 0.8em;
  opacity: 0.7;
}
input {
  border: none;
  outline: 2px solid #e0c097;
  padding: 10px 15px;
  font-size: 0.7em;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: 0.3s;
  color: rgba(0, 0, 0, 0.4);
  margin-bottom: 10px;
  cursor: initial;
}
input:focus {
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: 0.3s;
}
.place {
  display: grid;
  place-items: center;
  margin-top: 20px;
}
.placeName {
  font-weight: 800;
  text-shadow: 2px 3px rgba(0, 0, 0, 0.2);
  font-size: 1.2em;
}
.weatherDesc {
  font-size: 0.8em;
  opacity: 0.7;
}
</style>
