<template>
  <main>
    <p class="time">{{ hour12 }} : {{ min }} {{ ampm }}</p>
    <p class="day">{{ dayName }}, {{ ordinal }} {{ monthName }}</p>

    <div class="search">
      <input
        type="search"
        placeholder="Location"
        v-model="query"
        @keypress.enter="fetchWeather"
      />
    </div>
    <div class="content" v-if="weather.current">
      <div class="place">
        <span class="placeName"
          >{{ weather.location.name }}, {{ weather.location.country }}</span
        >
        <span class="weatherDesc"> {{ weather.current.condition.text }}</span>
      </div>

      <div class="weatherImg">
        <img :src="weather.current.condition.icon" alt="" />
      </div>

      <p class="degree">{{ weather.current.temp_c }}°C</p>
    </div>
  </main>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // Time
      hour: "",
      min: "",
      ampm: "",

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
      apiKey: "e46e5bf3e23049e6b20193653220303",
      url: "https://api.weatherapi.com/v1/current.json",
      query: "",
      weather: {},
    };
  },
  methods: {
    // Get weather
    fetchWeather() {
      fetch(`${this.url}?key=${this.apiKey}&q=${this.query}`)
        .then((res) => {
          return res.json();
        })
        .then(this.setResults)
        .catch((err) => {
          console.log(err);
        });
      this.query = "";
    },
    setResults(results) {
      this.weather = results;
    },

    // Get time and date
    today: function () {
      let d = new Date();

      // Time
      this.hour = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
      this.min = d.getMinutes() < 10 ? `0${d.getMinutes()} ` : d.getMinutes();
      this.ampm = d.getHours() >= 12 ? "pm" : "am";

      // Date
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
    hour12() {
      if (this.hour == 0) {
        return this.hour == 12;
      } else if (this.hour > 12) {
        return `0${this.hour - 12}`;
      } else {
        return this.hour;
      }
    },
  },
  mounted() {
    setInterval(() => {
      this.today();
    }, 1000);
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
  width: 400px;
  padding: 20px;
}
.time {
  color: #e0c097;
  text-align: right;
  font-size: 0.7em;
  font-weight: 700;
}
.day {
  margin: 30px 0 20px 0;
  font-size: 0.9em;
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
  text-shadow: 2px 3px rgba(0, 0, 0, 0.1);
  font-size: 1.2em;
}
.weatherDesc {
  margin-top: 10px;
  font-size: 0.9em;
  opacity: 0.7;
}
.weatherImg {
  margin: 20px 0;
}
.weatherImg img {
  width: 100px;
  height: 100px;
}
.degree {
  margin-bottom: 10px;
}
</style>
