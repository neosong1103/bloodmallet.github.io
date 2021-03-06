/******************************************************************************
 * Script to include charts from bloodmallet.com.
 * Linking back to bloodmallet.com as the origin is appreciated.
 * Please consider supporting the project via Patreon or Paypal.
 *
 * https://www.patreon.com/bloodmallet
 * https://www.paypal.me/bloodmallet
 *
 * Requirements:
 *    - Highcharts license on your end (if you're a commercial website)
 *    - include Highcharts scripts before this script
 *
 * The script collects all elements with the class 'bloodmallet_chart'
 *
 * Minimal example of a patchwerk trinket chart for elemental shamans:
 * <div id="unique-id" class="bloodmallet_chart" data-wow-class="shaman" data-wow-spec="elemental"></div>
 *
 * For more information read the wiki at https://github.com/Bloodmallet/bloodmallet.github.io/wiki/How-to-import-charts-or-data
 *
 */

function bloodmallet_chart_import() {

  /**
     *  Adjust the 'default_' variables to your liking if you host this script yourself.
     *
     */

  /**
   * Variable determines how many bars are visible
   */
  const default_data_entries = 7;

  /**
   * Options:
   *  wowhead - default
   *  wowdb
   */
  const default_tooltip_engine = "wowhead";

  /**
   * Options:
   *  highcharts - default
   *  highcharts_old
   */
  const default_chart_engine = "highcharts";

  const bar_colors = [
    "#7cb5ec",
    "#d9d9df",
    "#90ed7d",
    "#f7a35c",
    "#8085e9",
    "#f15c80",
    "#e4d354",
    "#2b908f",
    "#f45b5b",
    "#91e8e1"
  ];

  const default_background_color = "#343a40";
  const default_font_color = "#f8f9fa";
  const default_axis_color = "#828282";

  const font_size = "1.1rem";

  /**
   * options:
   *  patchwerk - default
   *  hecticaddcleave
   */
  const default_fight_style = "patchwerk";

  /**
   * options:
   *   trinkets - default
   *   azerite_items_chest
   *   azerite_items_head
   *   azerite_items_shoulders
   *   azerite_traits_itemlevel
   *   azerite_traits_stacking
   */
  const default_data_type = "trinkets";

  const default_azerite_tier = "all"

  /******************************************************************************
   * Actual code starts here.
   * The toggles you want are all above this section.
   */

  var dev_mode = false;

  var empty_chart = {
    chart: {
      type: "bar",
      backgroundColor: default_background_color,
      style: {
        fontFamily: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\""
      }
    },
    colors: bar_colors,
    legend: {
      align: "right",
      backgroundColor: default_background_color,
      borderColor: default_axis_color,
      borderWidth: 1,
      floating: false,
      itemMarginBottom: 3,
      itemMarginTop: 3,
      layout: 'horizontal',
      reversed: true,
      shadow: false,
      verticalAlign: "bottom",
      x: 0,
      y: 0,
      itemStyle: {
        color: default_font_color,
      },
      itemHoverStyle: {
        color: default_font_color,
      }
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: false,
        },
      },
      series: {
        stacking: "normal",
        borderColor: default_background_color,
        events: {
          legendItemClick: function () { return false; }
        },
        style: {
          textOutline: false,
          fontSize: font_size,
        }
      }
    },
    series: [
      {
        color: default_font_color,
        data: [
          1,
          1,
          3,
          1,
          3
        ],
        name: "b main",
        showInLegend: false
      },
      {
        color: default_background_color,
        data: [
          0,
          0,
          0,
          1,
          0
        ],
        name: "b's emptiness",
        showInLegend: false
      }, {
        color: default_font_color,
        data: [
          0,
          0,
          0,
          1,
          0
        ],
        name: "b's finishing touch",
        showInLegend: false
      }
    ],
    title: {
      text: "Loading data...", //"Title placeholder",
      useHTML: true,
      style: {
        color: default_font_color,
        fontSize: font_size
      }
    },
    subtitle: {
      text: "...from <a href=\"https://bloodmallet.com\">bloodmallet</a>",
      useHTML: true,
      style: {
        color: default_font_color,
        fontSize: font_size
      }
    },
    tooltip: {
      formatter: function () {
        let s = '<div style="margin: -4px -7px -7px -7px; padding: 3px 3px 6px 3px; background-color:';
        s += default_background_color;
        s += '"><div style=\"margin-left: 9px; margin-right: 9px; margin-bottom: 6px; font-weight: 700;\">';
        s += this.x;
        s += '</div>';
        let cumulative_amount = 0;
        for (var i = this.points.length - 1; i >= 0; i--) {
          cumulative_amount += this.points[i].y;
          if (this.points[i].y !== 0) {
            s += '<div><span style=\"margin-left: 9px; border-left: 9px solid ' +
              this.points[i].series.color + ';' +
              ' padding-left: 4px;\">' +
              this.points[i].series.name +
              '</span>:&nbsp;&nbsp;' +
              Intl.NumberFormat().format(cumulative_amount) +
              "</div>";
          }
        }
        s += '</div>';
        return s;
      },
      headerFormat: "<b>{point.x}</b>",
      shared: true,
      backgroundColor: default_background_color,
      borderColor: default_axis_color,
      style: {
        color: default_font_color,
        fontSize: font_size,
      },
      useHTML: true,
      // adding this as a potential tooltip positioning fix. changes tooltip position to be inside the bar rather than at the end
      positioner: function (boxWidth, boxHeight, point) {
        return {
          x: point.plotX,
          y: point.plotY
        };
      }
    },
    xAxis: {
      categories: [
        "",
        "",
        "",
        "",
        "",
      ],
      labels: {
        useHTML: true,
        style: {
          color: default_font_color,
          fontSize: font_size,
        }
      },
      gridLineWidth: 0,
      gridLineColor: default_axis_color,
      lineColor: default_axis_color,
      tickColor: default_axis_color
    },
    yAxis: {
      labels: {
        //enabled: true,
        style: {
          color: default_axis_color
        },
      },
      min: 0,
      stackLabels: {
        enabled: true,
        formatter: function () {
          return Intl.NumberFormat().format(this.total);
        },
        style: {
          color: default_font_color,
          textOutline: false,
          fontSize: font_size,
          fontWeight: "normal"
        }
      },
      title: {
        text: "\u0394 Damage per second",
        style: {
          color: default_axis_color
        }
      },
      gridLineWidth: 1,
      gridLineColor: default_axis_color
    }
  };

  var path_to_data = "https://bloodmallet.com/json/";

  /**
   * Scheme
   *  {
   *    [data_type]: {
   *      [fight_style]: {
   *        [wow_class]: {
   *          [wow_spec]: data
   *        }
   *      }
   *    }
   *  }
   */
  var loaded_data = {};

  /**
   *
   * Functions
   *
   */

  this.init_charts = new function () {
    if (dev_mode) {
      console.log("init_charts");
    }
    // scan for divs / what data is wanted
    let chart_list = document.querySelectorAll("div.bloodmallet_chart");

    // check for unique IDs
    let tmp_id_list = [];
    for (const html_element of chart_list) {
      if (tmp_id_list.indexOf(html_element.id) > -1) {
        console.error(`Multiple Elements use the same ID ('${html_element.id}'). Aborting bloodmallet_chart_import.js.`);
        return;
      } else {
        tmp_id_list.push(html_element.id);
      }
    }


    for (const html_element of chart_list) {
      let html_id = undefined;
      try {
        html_id = html_element.id;
      } catch (error) {
        console.log("No bloodmallet_chart was found.");
        return;
      }

      if (html_element) {

        var state = {
          data_entries: default_data_entries,
          data_type: default_data_type,
          azerite_tier: default_azerite_tier,
          fight_style: default_fight_style,
          background_color: default_background_color,
          font_color: default_font_color,
          axis_color: default_axis_color,
          tooltip_engine: default_tooltip_engine,
          chart_engine: default_chart_engine,
          wow_class: undefined,
          wow_spec: undefined
        };

        // optional input
        if (html_element.getAttribute("data-entries")) {
          state.data_entries = html_element.getAttribute("data-entries");
        }
        if (html_element.getAttribute("data-fight-style")) {
          state.fight_style = html_element.getAttribute("data-fight-style");
        }
        if (html_element.getAttribute("data-type")) {
          state.data_type = html_element.getAttribute("data-type");
        }
        if (html_element.getAttribute("data-azerite-tier")) {
          state.azerite_tier = html_element.getAttribute("data-azerite-tier");
        }
        if (html_element.getAttribute("data-background-color")) {
          state.background_color = html_element.getAttribute("data-background-color");
        }
        if (html_element.getAttribute("data-font-color")) {
          state.font_color = html_element.getAttribute("data-font-color");
        }
        if (html_element.getAttribute("data-axis-color")) {
          state.axis_color = html_element.getAttribute("data-axis-color");
        }
        if (html_element.getAttribute("data-tooltip-engine")) {
          state.tooltip_engine = html_element.getAttribute("data-tooltip-engine");
        }
        if (html_element.getAttribute("data-chart-engine")) {
          state.chart_engine = html_element.getAttribute("data-chart-engine");
        }

        // preparing necessary input to load data
        let requirements = true;
        if (!html_element.getAttribute("data-wow-class")) {
          console.log("Required 'data-wow-class' attribute wasn't found in " + html_id + ".")
          requirements = false;
        }
        state.wow_class = html_element.getAttribute("data-wow-class");
        if (!html_element.getAttribute("data-wow-spec")) {
          console.log("Required 'data-wow-spec' attribute wasn't found in " + html_id + ".")
          requirements = false;
        }
        state.wow_spec = html_element.getAttribute("data-wow-spec");

        let styled_chart = update_chart_style(state);

        // create new chart without data
        let new_chart = false;
        if (state.chart_engine == "highcharts") {
          try {
            new_chart = Highcharts.chart(html_id, styled_chart);
          } catch (error) {
            console.log("When trying to create a highcharts chart the following error occured. Did you include the necessary Highcharts scripts?");
            console.log(error);
            return;
          }
        } else if (state.chart_engine == "highcharts_old") {
          try {
            tmp_styled_chart = styled_chart;
            tmp_styled_chart["chart"]["renderTo"] = html_id;
            new_chart = new Highcharts.Chart(tmp_styled_chart);
          } catch (error) {
            console.log("When trying to create a highcharts_old chart the following error occured. Did you include the necessary Highcharts scripts?");
            console.log(error);
            return;
          }
        }
        // save new chart for later
        let key_value = {};
        key_value[html_id] = new_chart;

        if (requirements) {
          load_data(state);
        } else {
          requirements_error(new_chart);
        }

        setTimeout(update_chart, 2000, state, html_element, new_chart, 0);
      }
    }
  }

  /**
   *
   * @param {string} data_type what kind of data will be looked for
   * @param {string} wow_class wow class name
   * @param {string} wow_spec wow spec name
   * @param {string} fight_style simc baseline fight style
   */
  async function load_data(state) {
    if (dev_mode) {
      console.log("load_data");
    }

    let data_type = state.data_type;
    let fight_style = state.fight_style;
    let wow_class = state.wow_class;
    let wow_spec = state.wow_spec;

    // early exit if the data is already present
    try {
      if (loaded_data[data_type][fight_style][wow_class][wow_spec]) {
        return;
      }
    } catch (error) {
      if (dev_mode) {
        console.log("Data needs to be loaded.");
      }
    }

    let data_group = data_type;

    // partial fix to link to get data
    if (data_group.indexOf("azerite") > -1) {
      data_group = "azerite_traits";
    }

    let data_name = wow_class;
    data_name += "_" + wow_spec;
    if (data_type.indexOf("azerite_items") > -1) {
      data_name += data_type.replace("azerite_items", "");
    }
    data_name += "_" + fight_style;
    data_name += ".json";

    if (dev_mode) {
      console.log(`Fetching data from: ${path_to_data + data_group}/${data_name}`);
    }

    fetch(path_to_data + data_group + "/" + data_name)
      .then(function (response) {
        if (response.status !== 200) {
          console.warn('Problem occured when fetching data from bloodmallet.com. Status Code: ' +
            response.status);
          return false;
        }
        response.json().then(function (json) {

          if (!loaded_data[data_type]) {
            loaded_data[data_type] = {};
          }
          if (!loaded_data[data_type][fight_style]) {
            loaded_data[data_type][fight_style] = {};
          }
          if (!loaded_data[data_type][fight_style][wow_class]) {
            loaded_data[data_type][fight_style][wow_class] = {};
          }

          loaded_data[data_type][fight_style][wow_class][wow_spec] = json;
          if (dev_mode) {
            console.log(json);
            console.log("Load and save finished.");
          }
        });
      }).catch(function (err) {
        console.error('Fetching data from bloodmallet.com encountered an error, ', err);
      });
  }

  /**
   * Update a chart with data from bloodmallet.com
   */
  function update_chart(state, html_element, chart, count) {
    if (dev_mode) {
      console.log("update_charts");
    }

    let data_type = state.data_type;
    let fight_style = state.fight_style;
    let wow_class = state.wow_class;
    let wow_spec = state.wow_spec;
    let data_entries = state.data_entries;
    let chart_engine = state.chart_engine;

    try {
      var spec_data = loaded_data[data_type][fight_style][wow_class][wow_spec];
    } catch (error) {
      console.warn("Data for ", data_type, fight_style, wow_class, wow_spec, " wasn't loaded yet. Either chart setup is wrong, connection to bloodmallet.com is slow or failed.");
      if (count < 10) {
        setTimeout(update_chart, 100, state, html_element, chart, count + 1);
      }
      return;
    }
    const data = spec_data;

    // Azerite Trait stacking uses the second sorted data key list
    let dps_ordered_keys;
    let baseline_dps;
    if (data_type.indexOf("azerite_traits") > -1) {

      if (data_type === "azerite_traits_stacking") {

        if (state.azerite_tier === "all") {
          dps_ordered_keys = data["sorted_data_keys_2"].slice(0, data_entries);
        } else if (state.azerite_tier === "1") {
          dps_ordered_keys = data["sorted_azerite_tier_1_trait_stacking"].slice(0, data_entries);
        } else if (state.azerite_tier === "2") {
          dps_ordered_keys = data["sorted_azerite_tier_2_trait_stacking"].slice(0, data_entries);
        }
        baseline_dps = data["data"]["baseline"][data["simulated_steps"][0]];

      } else if (data_type === "azerite_traits_itemlevel") {

        if (state.azerite_tier === "all") {
          dps_ordered_keys = data["sorted_data_keys"].slice(0, data_entries);
        } else if (state.azerite_tier === "1") {
          dps_ordered_keys = data["sorted_azerite_tier_1_itemlevel"].slice(0, data_entries);
        } else if (state.azerite_tier === "2") {
          dps_ordered_keys = data["sorted_azerite_tier_2_itemlevel"].slice(0, data_entries);
        }
        baseline_dps = data["data"]["baseline"][data["simulated_steps"][data["simulated_steps"].length - 1]];

      } else {
        console.log("Chart found, but unknown data-type detected.")
        return;
      }

    } else {
      dps_ordered_keys = data["sorted_data_keys"].slice(0, data_entries);
      if (data_type === "races") {
        baseline_dps = 0;
      } else {
        baseline_dps = data["data"]["baseline"][data["simulated_steps"][data["simulated_steps"].length - 1]];
      }
    }

    if (dev_mode) {
      console.log(dps_ordered_keys);
      console.log("Baseline dps: " + baseline_dps);
    }


    // set title and subtitle
    chart.setTitle({
      text: data["title"]
    }, {
        text: data["subtitle"]
      },
      false
    );

    // clear initial data
    while (chart.series[0]) {
      chart.series[0].remove(false);
    }

    // update categories
    category_list = [];

    for (let dps_key of dps_ordered_keys) {
      category_list.push(get_category_name(state, dps_key, data));
    }

    if (dev_mode) {
      console.log(category_list);
    }

    // rewrite the trinket names
    if (chart_engine == "highcharts") {
      chart.update({
        xAxis: {
          categories: category_list
        }
      }, false);
    } else if (chart_engine == "highcharts_old") {
      chart.xAxis[0].setCategories(category_list, false);
    }

    if (data_type == "azerite_traits_stacking") {
      let base_ilevel = data["simulated_steps"][0].replace("1_", "");
      var simulated_steps = [];
      simulated_steps.push("3_" + base_ilevel);
      simulated_steps.push("2_" + base_ilevel);
      simulated_steps.push("1_" + base_ilevel);
    } else {
      var simulated_steps = data["simulated_steps"];
    }
    if (dev_mode) {
      console.log("simulated_steps: " + simulated_steps);
    }

    if (simulated_steps) {
      for (let itemlevel_position in simulated_steps) {

        let itemlevel = simulated_steps[itemlevel_position];
        var dps_array = [];

        for (let dps_key of dps_ordered_keys) {

          let dps_key_values = data["data"][dps_key];

          // check for zero dps values and don't change them
          if (Number(dps_key_values[itemlevel]) > 0) {

            // if lowest itemlevel is looked at, substract baseline
            if (itemlevel_position == simulated_steps.length - 1) {

              if (itemlevel in dps_key_values) {
                dps_array.push(dps_key_values[itemlevel] - baseline_dps);
              } else {
                dps_array.push(0);
              }

            } else { // else substract lower itemlevel value of same item

              // if lower itemlevel is zero we have to assume that this item needs to be compared now to the baseline
              if (dps_key_values[simulated_steps[String(Number(itemlevel_position) + 1)]] == 0 || !(simulated_steps[String(Number(itemlevel_position) + 1)] in dps_key_values)) {

                dps_array.push(dps_key_values[itemlevel] - baseline_dps);

              } else { // standard case, next itemlevel is not zero and can be used to substract from the current value

                dps_array.push(dps_key_values[itemlevel] - dps_key_values[simulated_steps[String(Number(itemlevel_position) + 1)]]);
              }

            }

          } else {
            if (itemlevel in dps_key_values) {
              dps_array.push(dps_key_values[itemlevel]);
            } else {
              dps_array.push(0);
            }
          }
        }

        chart.addSeries({
          data: dps_array,
          name: itemlevel,
          showInLegend: true
        }, false);

      }
    } else { // race simulations
      var dps_array = [];

      for (let dps_key of dps_ordered_keys) {

        let dps_key_values = data["data"][dps_key];

        dps_array.push(dps_key_values);

      }

      chart.addSeries({
        data: dps_array,
        name: "Race",
        showInLegend: true
      }, false);

    }

    html_element.style.height = 200 + dps_ordered_keys.length * 30 + "px";
    if (chart_engine == "highcharts") {
      chart.setSize(html_element.style.width, html_element.style.height);
    }
    chart.redraw();
    if (chart_engine == "highcharts_old") {
      chart.reflow();
    }

    // add wowdb tooltips, they don't check dynamically
    if (state.tooltip_engine == "wowdb") {
      readd_wowdb_tooltips();
    }
  }

  /**
   * Function to help catch defered loaded jQuery.
   */
  function readd_wowdb_tooltips() {
    if (dev_mode) {
      console.log("readd_wowdb_tooltips");
    }
    try {
      CurseTips['wowdb-tooltip'].watchElements(document.getElementsByTagName('a'));
    } catch (error) {
      setTimeout(readd_wowdb_tooltips, 200);
    }
  }

  /**
   *
   * @param {string} key name of the div/chart
   * @param {json} data loaded data from bloodmallet.com for this chart
   */
  function get_category_name(state, key, data) {
    if (dev_mode) {
      console.log("get_category_name");
      console.log(key);
      console.log(data);
    }

    // start constructing links
    // wowhead, wowdb, or plain text if no matching origin is provided

    // fallback
    if (state.tooltip_engine != "wowhead" && state.tooltip_engine != "wowdb") {
      return key;
    }

    // races don't have links/tooltips
    if (state.data_type === "races") {
      return key;
    }

    // wowhead
    if (state.tooltip_engine == "wowhead") {
      let link = "<a href=\"https://www.wowhead.com/";
      try {
        let item_id = data["item_ids"][key];
        link += "item=" + item_id;
      } catch (error) {
        if (dev_mode) {
          console.log(error);
          console.log("We're probably looking at a spell.");
        }
      }

      // if it's an item try to add azerite ids and itemlevel
      if (link.indexOf("item") > -1) {
        if (data.hasOwnProperty("class_id") && data.hasOwnProperty("used_azerite_traits_per_item")) {
          link += "/azerite-powers=";
          link += data["class_id"];
          for (const trait of data["used_azerite_traits_per_item"][key]) {
            link += ":" + trait["id"];
          }
        }
        let ilvl = data["simulated_steps"][data["simulated_steps"].length - 1];
        // fix special case of azerite items "1_340"
        if (typeof ilvl === 'string') {
          if (ilvl.indexOf("_") > -1) {
            ilvl = ilvl.split("_")[1];
          }
        }
        link += "&ilvl=" + ilvl;
      }

      try {
        let spell_id = data["spell_ids"][key];
        link += "spell=" + spell_id;
      } catch (error) {
        if (dev_mode) {
          console.log(error);
          console.log("We're probably looking at an item.");
        }
      }

      link += "\">" + key + "</a>";

      return link;
    }

    if (state.tooltip_engine == "wowdb") {
      let element_string = "<a href=\"";
      let link = "http://www.wowdb.com/";
      try {
        let item_id = data["item_ids"][key];
        link += "items/" + item_id;
      } catch (error) {
        if (dev_mode) {
          console.log(error);
          console.log("We're probably looking at a spell.");
        }
      }

      // if it's an item try to add azerite ids and itemlevel
      if (link.indexOf("items") > -1) {
        let ilvl = data["simulated_steps"][data["simulated_steps"].length - 1];
        // fix special case of azerite items "1_340"
        if (typeof ilvl === 'string') {
          if (ilvl.indexOf("_") > -1) {
            ilvl = ilvl.split("_")[1];
          }
        }
        link += "?itemLevel=" + ilvl;
        if (data.hasOwnProperty("class_id") && data.hasOwnProperty("used_azerite_traits_per_item")) {
          link += "&azerite=";
          link += data["class_id"] + ":0";
          for (const trait of data["used_azerite_traits_per_item"][key]) {
            link += ":" + trait["id"];
          }
        }
      }

      try {
        let spell_id = data["spell_ids"][key];
        link += "spells/" + spell_id;
      } catch (error) {
        if (dev_mode) {
          console.log(error);
          console.log("We're probably looking at an item.");
        }
      }

      element_string += link;

      element_string += "\" data-tooltip-href=\"";
      element_string += link + "\">" + key + "</a>";

      return element_string;
    }

  }

  /**
   * Function to update title and subtitle on init error.
   * @param {int} id
   */
  function requirements_error(chart) {
    chart.setTitle({ text: "Wrong chart setup" }, { text: "Missing 'data-wow-class' or 'data-wow-spec'. See <a href=\"https://github.com/Bloodmallet/bloodmallet.github.io/wiki/How-to-import-charts-or-data\">wiki</a>" });
  }

  /**
   * Updates the style of the chart
   */
  function update_chart_style(state) {
    if (dev_mode) {
      console.log("update_chart_style");
    }
    if (state.chart_engine == "highcharts" || state.chart_engine == "highcharts_old") {

      let background_color = state.background_color;
      let axis_color = state.axis_color;
      let font_color = state.font_color;

      let styled_chart = empty_chart;
      // TODO: https://scotch.io/bar-talk/copying-objects-in-javascript
      // step 1: JSON.parse(JSON.stringify(obj))
      // step 2: get functions with Object.assign({}, obj)

      styled_chart.chart.backgroundColor = background_color;

      styled_chart.legend.backgroundColor = background_color;
      styled_chart.legend.borderColor = axis_color;
      styled_chart.legend.itemStyle.color = font_color;
      styled_chart.legend.itemHoverStyle.color = font_color;

      styled_chart.title.style.color = font_color;
      styled_chart.subtitle.style.color = font_color;

      styled_chart.tooltip.formatter = function () {
        let s = '<div style="margin: -4px -7px -7px -7px; padding: 3px 3px 6px 3px; background-color:';
        if (state.chart_engine === "highcharts_old") {
          s = '<div style="margin: -7px; padding: 3px 3px 6px 3px; background-color:';
        }
        s += background_color;
        s += '"><div style=\"margin-left: 9px; margin-right: 9px; margin-bottom: 6px; font-weight: 700;\">';
        s += this.x;
        s += '</div>';
        let cumulative_amount = 0;
        for (var i = this.points.length - 1; i >= 0; i--) {
          cumulative_amount += this.points[i].y;
          if (this.points[i].y !== 0) {
            s += '<div><span style=\"margin-left: 9px; border-left: 9px solid ' +
              this.points[i].series.color + ';' +
              ' padding-left: 4px;\">' +
              this.points[i].series.name +
              '</span>:&nbsp;&nbsp;' +
              Intl.NumberFormat().format(cumulative_amount) +
              "</div>";
          }
        }
        s += '</div>';
        return s;
      };
      styled_chart.tooltip.backgroundColor = background_color;
      styled_chart.tooltip.borderColor = axis_color;
      styled_chart.tooltip.style.color = font_color;

      styled_chart.xAxis.labels.style.color = font_color;
      styled_chart.xAxis.gridLineColor = axis_color;
      styled_chart.xAxis.lineColor = axis_color;
      styled_chart.xAxis.tickColor = axis_color;

      styled_chart.yAxis.labels.style.color = axis_color;
      styled_chart.yAxis.stackLabels.style.color = font_color;
      styled_chart.yAxis.gridLineColor = axis_color;
      styled_chart.yAxis.lineColor = axis_color;
      styled_chart.yAxis.tickColor = axis_color;
      styled_chart.yAxis.title.style.color = axis_color;

      return styled_chart;
    }
  }

}
// Load data on document load
document.addEventListener("DOMContentLoaded", function () {
  bloodmallet_chart_import();
});
