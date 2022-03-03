(function () {
  "use strict";
  var e = {
      4506: function (e, t, r) {
        var n = r(9242),
          a = r(3396),
          u = r(7139);
        const i = { class: "time" },
          o = { class: "day" },
          s = { class: "search" },
          h = { key: 0, class: "content" },
          c = { class: "place" },
          d = { class: "placeName" },
          l = { class: "weatherDesc" },
          m = { class: "weatherImg" },
          y = ["src"],
          f = { class: "degree" };
        function p(e, t, r, p, w, v) {
          return (
            (0, a.wg)(),
            (0, a.iD)("main", null, [
              (0, a._)(
                "p",
                i,
                (0, u.zw)(v.hour12) +
                  " : " +
                  (0, u.zw)(w.min) +
                  " " +
                  (0, u.zw)(w.ampm),
                1
              ),
              (0, a._)(
                "p",
                o,
                (0, u.zw)(w.dayName) +
                  ", " +
                  (0, u.zw)(v.ordinal) +
                  " " +
                  (0, u.zw)(e.monthName),
                1
              ),
              (0, a._)("div", s, [
                (0, a.wy)(
                  (0, a._)(
                    "input",
                    {
                      type: "search",
                      placeholder: "Location",
                      "onUpdate:modelValue":
                        t[0] || (t[0] = (e) => (w.query = e)),
                      onKeypress:
                        t[1] ||
                        (t[1] = (0, n.D2)(
                          (...e) => v.fetchWeather && v.fetchWeather(...e),
                          ["enter"]
                        )),
                    },
                    null,
                    544
                  ),
                  [[n.nr, w.query]]
                ),
              ]),
              w.weather.current
                ? ((0, a.wg)(),
                  (0, a.iD)("div", h, [
                    (0, a._)("div", c, [
                      (0, a._)(
                        "span",
                        d,
                        (0, u.zw)(w.weather.location.name) +
                          ", " +
                          (0, u.zw)(w.weather.location.country),
                        1
                      ),
                      (0, a._)(
                        "span",
                        l,
                        (0, u.zw)(w.weather.current.condition.text),
                        1
                      ),
                    ]),
                    (0, a._)("div", m, [
                      (0, a._)(
                        "img",
                        { src: w.weather.current.condition.icon, alt: "" },
                        null,
                        8,
                        y
                      ),
                    ]),
                    (0, a._)(
                      "p",
                      f,
                      (0, u.zw)(w.weather.current.temp_c) + "°C",
                      1
                    ),
                  ]))
                : (0, a.kq)("", !0),
            ])
          );
        }
        var w = {
            name: "App",
            data() {
              return {
                hour: "",
                min: "",
                ampm: "",
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
                apiKey: "e46e5bf3e23049e6b20193653220303",
                url: "https://api.weatherapi.com/v1/current.json",
                query: "",
                weather: {},
              };
            },
            methods: {
              fetchWeather() {
                fetch(`${this.url}?key=${this.apiKey}&q=${this.query}`)
                  .then((e) => e.json())
                  .then(this.setResults)
                  .catch((e) => {
                    console.log(e);
                  }),
                  (this.query = "");
              },
              setResults(e) {
                this.weather = e;
              },
              today: function () {
                let e = new Date();
                (this.hour =
                  e.getHours() < 10 ? `0${e.getHours()}` : e.getHours()),
                  (this.min =
                    e.getMinutes() < 10
                      ? `0${e.getMinutes()} `
                      : e.getMinutes()),
                  (this.ampm = e.getHours() >= 12 ? "pm" : "am"),
                  (this.dayName = this.week[e.getDay()]),
                  (this.dayNum = e.getDate()),
                  (this.monthName = this.month[e.getMonth()]);
              },
            },
            computed: {
              ordinal: function () {
                return 1 == this.dayNum ||
                  21 == this.dayNum ||
                  31 == this.dayNum
                  ? `${this.dayNum}st`
                  : "2" == this.dayNum || 22 == this.dayNum
                  ? `${this.dayNum}nd`
                  : 3 == this.dayNum || 23 == this.dayNum
                  ? `${this.dayNum}rd`
                  : `${this.dayNum}th`;
              },
              hour12() {
                return 0 == this.hour
                  ? 12 == this.hour
                  : this.hour > 12
                  ? "0" + (this.hour - 12)
                  : this.hour;
              },
            },
            mounted() {
              setInterval(() => {
                this.today();
              }, 1e3);
            },
          },
          v = r(89);
        const g = (0, v.Z)(w, [["render", p]]);
        var b = g;
        (0, n.ri)(b).mount("#app");
      },
    },
    t = {};
  function r(n) {
    var a = t[n];
    if (void 0 !== a) return a.exports;
    var u = (t[n] = { exports: {} });
    return e[n](u, u.exports, r), u.exports;
  }
  (r.m = e),
    (function () {
      var e = [];
      r.O = function (t, n, a, u) {
        if (!n) {
          var i = 1 / 0;
          for (c = 0; c < e.length; c++) {
            (n = e[c][0]), (a = e[c][1]), (u = e[c][2]);
            for (var o = !0, s = 0; s < n.length; s++)
              (!1 & u || i >= u) &&
              Object.keys(r.O).every(function (e) {
                return r.O[e](n[s]);
              })
                ? n.splice(s--, 1)
                : ((o = !1), u < i && (i = u));
            if (o) {
              e.splice(c--, 1);
              var h = a();
              void 0 !== h && (t = h);
            }
          }
          return t;
        }
        u = u || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > u; c--) e[c] = e[c - 1];
        e[c] = [n, a, u];
      };
    })(),
    (function () {
      r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return r.d(t, { a: t }), t;
      };
    })(),
    (function () {
      r.d = function (e, t) {
        for (var n in t)
          r.o(t, n) &&
            !r.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      };
    })(),
    (function () {
      r.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      var e = { 143: 0 };
      r.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, n) {
          var a,
            u,
            i = n[0],
            o = n[1],
            s = n[2],
            h = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (a in o) r.o(o, a) && (r.m[a] = o[a]);
            if (s) var c = s(r);
          }
          for (t && t(n); h < i.length; h++)
            (u = i[h]), r.o(e, u) && e[u] && e[u][0](), (e[u] = 0);
          return r.O(c);
        },
        n = (self["webpackChunkweather_app"] =
          self["webpackChunkweather_app"] || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var n = r.O(void 0, [998], function () {
    return r(4506);
  });
  n = r.O(n);
})();
//# sourceMappingURL=app.34b5eea1.js.map
