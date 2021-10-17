import "@fortawesome/fontawesome-free/css/all.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

function formatNumber(n, c, d, t) {
  var ca = isNaN((c = Math.abs(c))) ? 2 : 0, // change 0 to c if wanna show decimals
    da = d === undefined ? "." : d,
    ta = t === undefined ? "," : t,
    sa = n < 0 ? "-" : "",
    i = String(parseInt((n = Math.abs(Number(n) || 0).toFixed(c)))),
    j = (j = i.length) > 3 ? j % 3 : 0;
  return (
    sa +
    (j ? i.substr(0, j) + ta : "") +
    i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + ta) +
    (ca
      ? da +
        Math.abs(n - i)
          .toFixed(ca)
          .slice(2)
      : "")
  );
}

// Allow the formatNumber function to be used as a filter
Vue.filter("formatCurrency", function(value) {
  return formatNumber(value, 2, ".", ",");
});

export default new Vuetify({
  icons: {
    iconfont: "fa" || "md",
  },
  theme: {
    themes: {
      dark: {
        background: "#EEEEEE",
      },
    },
  },
});
