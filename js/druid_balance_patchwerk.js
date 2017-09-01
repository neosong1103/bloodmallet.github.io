Highcharts.chart('druid_balance_patchwerk', 
{
    chart: {
        type: "bar"
    },
    legend: {
        align: "right",
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: "#CCC",
        borderWidth: 1,
        floating: false,
        reversed: true,
        shadow: false,
        verticalAlign: "bottom",
        x: 0,
        y: 0
    },
    plotOptions: {
        bar: {
            dataLabels: {
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                enabled: false
            },
            point: {
                events: {
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category,                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
                }
            },
            stacking: "normal"
        },
        series: {
            borderColor: "#151515",
            events: {
                legendItemClick: function() { return false; }
            }
        }
    },
    series: [
        {
            color: "#ffeb3b",
            data: [
                136704,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                0,
                9637,
                5067,
                6921,
                5501,
                7966,
                7272,
                5226,
                6900,
                8191,
                6813,
                6026,
                6535,
                7177,
                5387,
                5073,
                6493,
                6153,
                7283,
                5310,
                6744,
                0,
                4521,
                5635,
                4974,
                7270,
                4274,
                4994,
                5433,
                5071,
                5393,
                6236,
                0,
                4433,
                3507,
                5123,
                4356,
                0,
                4701,
                3145,
                3597,
                4999,
                3748,
                2824,
                3096,
                1983,
                2580,
                3222,
                1683,
                0
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                8054,
                3487,
                6402,
                6487,
                5653,
                5302,
                6230,
                6749,
                6857,
                4763,
                7271,
                6286,
                5381,
                6454,
                6733,
                6043,
                5118,
                5005,
                6018,
                6072,
                5149,
                5312,
                4898,
                4345,
                6077,
                5191,
                3854,
                4649,
                4342,
                6858,
                4953,
                0,
                6375,
                4387,
                3643,
                2746,
                0,
                4101,
                2437,
                2891,
                5482,
                2820,
                3678,
                2375,
                2580,
                2613,
                1091,
                951,
                1620
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                6822,
                3320,
                6249,
                5111,
                7224,
                5875,
                5612,
                4701,
                6773,
                6996,
                4431,
                5995,
                5156,
                5048,
                6050,
                5939,
                5852,
                6484,
                4000,
                5864,
                5416,
                4614,
                4737,
                5265,
                6934,
                4788,
                4004,
                4157,
                3318,
                5067,
                6569,
                0,
                5134,
                3752,
                3276,
                3569,
                0,
                3524,
                3308,
                874,
                4177,
                3389,
                2085,
                1902,
                3524,
                2440,
                2505,
                2638,
                1301
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                7835,
                5381,
                5712,
                4761,
                4890,
                5125,
                5593,
                5409,
                6151,
                4779,
                5292,
                4977,
                5431,
                6060,
                3881,
                4878,
                4346,
                4677,
                4965,
                6516,
                4508,
                4281,
                4043,
                3702,
                4090,
                4110,
                2867,
                3576,
                4338,
                5998,
                5093,
                0,
                4925,
                4226,
                3856,
                2067,
                0,
                2462,
                2014,
                3385,
                3476,
                2434,
                2403,
                2134,
                1506,
                1991,
                2150,
                637,
                1160
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                6810,
                4140,
                4459,
                4093,
                5197,
                4937,
                5426,
                5880,
                68398,
                4902,
                4786,
                4193,
                5341,
                3655,
                4578,
                4278,
                5486,
                4814,
                3559,
                3915,
                4233,
                4683,
                3521,
                3484,
                5013,
                3702,
                3186,
                3282,
                4151,
                2819,
                2626,
                5694,
                4242,
                3645,
                2823,
                2491,
                5071,
                2234,
                2370,
                2245,
                4069,
                2235,
                3016,
                3028,
                2405,
                2624,
                957,
                2250,
                226
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                86520,
                3906,
                5437,
                5171,
                70772,
                4004,
                4023,
                3616,
                0,
                4264,
                4213,
                3953,
                4008,
                63630,
                5375,
                4261,
                3312,
                4104,
                3915,
                5036,
                60516,
                2580,
                3789,
                3718,
                3311,
                4781,
                2901,
                3819,
                50793,
                4403,
                5106,
                3940,
                3621,
                2241,
                2105,
                3856,
                3486,
                4041,
                2381,
                2549,
                2589,
                3224,
                1589,
                2063,
                2033,
                1595,
                2047,
                1207,
                1040
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                94794,
                67870,
                70596,
                0,
                64735,
                64654,
                63294,
                0,
                61646,
                60579,
                60557,
                59858,
                0,
                58299,
                57370,
                58404,
                56206,
                59156,
                45676,
                0,
                52854,
                51585,
                52576,
                44308,
                49285,
                54141,
                49575,
                0,
                41410,
                41224,
                61929,
                41168,
                47001,
                46322,
                47345,
                56503,
                43087,
                43969,
                43465,
                33982,
                40681,
                39098,
                37424,
                37317,
                36275,
                34530,
                35003,
                26415
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-09-01 02:29:34"
    },
    title: {
        text: "Druid - Balance - Patchwerk"
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + cumulative_amount;            }        }        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "Kil'jaeden's Burning Wish",
            "Tarnished Sentinel Medallion",
            "Unstable Arcanocrystal",
            "Stat Stick (Mastery)",
            "Whispers in the Dark",
            "Terror From Below",
            "Stormsinger Fulmination Charge",
            "Dreadstone of Endless Shadows",
            "Padawsen's Unlucky Charm",
            "Tome of Unraveling Sanity",
            "Erratic Metronome",
            "Stat Stick (Haste)",
            "Stat Stick (Crit)",
            "Stat Stick (Versatility)",
            "Charm of the Rising Tide",
            "Eyasu's Mulligan",
            "PVP Badge of Dominance",
            "Chrono Shard",
            "Infernal Writ",
            "Naraxas' Spiked Tongue",
            "Star Gate",
            "Astral Alchemist Stone",
            "Moonlit Prism",
            "Horn of Valor",
            "PVP Insignia of Dominance",
            "Deteriorated Construct Core",
            "Obelisk of the Void",
            "Fury of the Burning Sky",
            "Devilsaur Shock-Baton",
            "Spectral Thurible",
            "Twisting Wind",
            "Bough of Corruption",
            "Darkmoon Deck: Hellfire",
            "Portable Manacracker",
            "Swarming Plaguehive",
            "Oakheart's Gnarled Root",
            "Aran's Relaxing Ruby",
            "Infernal Alchemist Stone",
            "Icon of Rot",
            "Caged Horror",
            "Corrupted Starlight",
            "Reality Breacher",
            "Mrrgria's Favor",
            "Pharameres Forbidden Grimoire",
            "Toe Knee's Promise",
            "Wriggling Sinew",
            "Eye of Skovald",
            "Elementium Bomb Squirrel Generator",
            "Unstable Horrorslime",
            "Figurehead of the Naglfar"
        ]
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#1E90FF",
                label: {
                    align: "left",
                    rotation: -90,
                    style: {
                        color: "#1E90FF"
                    },
                    text: "mean at 78698",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 78698.38,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: false,
            formatter: function() {            /* I need to figure out how to get the mean value here,            ** to allow the percent diff to mean as label            ** console.log(this); */            return;          },
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white',
                fontWeight: "bold"
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});