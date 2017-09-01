Highcharts.chart('warlock_demonology_beastlord', 
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
                0,
                182790,
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
                21306,
                0,
                11078,
                5933,
                9180,
                13339,
                10444,
                7593,
                10579,
                13457,
                9526,
                6445,
                10862,
                12190,
                5954,
                9666,
                6743,
                3691,
                11005,
                5506,
                4524,
                4389,
                12112,
                5147,
                10240,
                7047,
                5329,
                7481,
                10428,
                4803,
                0,
                6013,
                4540,
                1032,
                5228,
                7529,
                8682,
                0,
                0,
                6491,
                2369,
                6564,
                3221,
                5242,
                6513,
                3172,
                5356,
                1114,
                0,
                2753
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                11537,
                0,
                1632,
                11656,
                7348,
                6027,
                10409,
                8641,
                6324,
                7044,
                11557,
                12497,
                11761,
                3687,
                8923,
                4696,
                13424,
                9702,
                4008,
                10013,
                10701,
                8941,
                3526,
                5981,
                11977,
                9349,
                3718,
                8663,
                5664,
                8725,
                4299,
                4228,
                6394,
                8902,
                4148,
                5187,
                5475,
                0,
                0,
                2684,
                4023,
                3312,
                2684,
                8640,
                8433,
                0,
                2577,
                3326,
                5665,
                2476
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                14401,
                0,
                4664,
                3462,
                7627,
                11507,
                5739,
                8813,
                8775,
                6510,
                6527,
                11460,
                7747,
                9006,
                8573,
                8408,
                10826,
                8906,
                9174,
                8256,
                5121,
                7307,
                8819,
                7105,
                2539,
                10640,
                10292,
                7069,
                9988,
                4990,
                6226,
                8101,
                1918,
                7302,
                12600,
                3998,
                2153,
                0,
                0,
                286,
                4607,
                4903,
                6865,
                3113,
                1919,
                4074,
                6559,
                916,
                1160,
                2185
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                13488,
                0,
                9217,
                9679,
                3607,
                5849,
                9211,
                8220,
                10237,
                12014,
                5376,
                2305,
                12256,
                286,
                6352,
                7207,
                6295,
                5377,
                3539,
                5676,
                2243,
                3827,
                1740,
                8537,
                6599,
                6224,
                4157,
                4307,
                8593,
                6326,
                5800,
                3735,
                8837,
                4918,
                269,
                5975,
                7528,
                0,
                0,
                6999,
                1152,
                1467,
                2658,
                2782,
                5049,
                5861,
                0,
                2352,
                4696,
                0
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                12250,
                0,
                3569,
                3272,
                8225,
                11366,
                7921,
                1924,
                4878,
                0,
                10191,
                8761,
                8337,
                6597,
                4689,
                4881,
                7099,
                6576,
                6005,
                937,
                13135,
                12593,
                7090,
                3459,
                78233,
                5388,
                3656,
                1489,
                3467,
                5693,
                5595,
                6151,
                3876,
                2010,
                3803,
                1098,
                3694,
                7911,
                8033,
                6876,
                5867,
                5658,
                1403,
                6648,
                11777,
                778,
                0,
                1042,
                0,
                2315
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                148303,
                0,
                6413,
                8494,
                113894,
                0,
                4498,
                13642,
                7100,
                11031,
                6189,
                4846,
                3469,
                11271,
                6152,
                5804,
                11138,
                8381,
                9006,
                8324,
                4443,
                2047,
                5978,
                7808,
                0,
                4449,
                7344,
                3390,
                4446,
                4121,
                78803,
                5074,
                70686,
                5073,
                69485,
                3430,
                3690,
                3746,
                7869,
                5207,
                0,
                904,
                3463,
                5967,
                0,
                2990,
                7075,
                1671,
                5768,
                0
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                134321,
                121080,
                0,
                95134,
                92557,
                89505,
                89629,
                86952,
                86281,
                83959,
                72972,
                78754,
                81018,
                80944,
                66022,
                77787,
                75173,
                76301,
                74129,
                73662,
                71263,
                71825,
                0,
                60501,
                67925,
                69693,
                59233,
                66075,
                0,
                66129,
                0,
                66910,
                0,
                67017,
                61022,
                79627,
                67284,
                50748,
                61178,
                55042,
                52722,
                40093,
                39380,
                47851,
                42837,
                45577,
                42338,
                35329
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-09-01 15:03:08"
    },
    title: {
        text: "Warlock - Demonology - Beastlord"
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
            "Spectral Thurible",
            "Kil'jaeden's Burning Wish",
            "Unstable Arcanocrystal",
            "Whispers in the Dark",
            "Charm of the Rising Tide",
            "Chrono Shard",
            "Stat Stick (Haste)",
            "Erratic Metronome",
            "Aran's Relaxing Ruby",
            "Icon of Rot",
            "Fury of the Burning Sky",
            "Dreadstone of Endless Shadows",
            "Star Gate",
            "Stat Stick (Mastery)",
            "Eyasu's Mulligan",
            "Padawsen's Unlucky Charm",
            "Deteriorated Construct Core",
            "Toe Knee's Promise",
            "Obelisk of the Void",
            "Stat Stick (Crit)",
            "Stormsinger Fulmination Charge",
            "Stat Stick (Versatility)",
            "PVP Badge of Dominance",
            "Infernal Writ",
            "Tome of Unraveling Sanity",
            "Twisting Wind",
            "Moonlit Prism",
            "Eye of Skovald",
            "Bough of Corruption",
            "Corrupted Starlight",
            "Astral Alchemist Stone",
            "PVP Insignia of Dominance",
            "Tarnished Sentinel Medallion",
            "Horn of Valor",
            "Terror From Below",
            "Caged Horror",
            "Swarming Plaguehive",
            "Darkmoon Deck: Hellfire",
            "Infernal Alchemist Stone",
            "Elementium Bomb Squirrel Generator",
            "Unstable Horrorslime",
            "Devilsaur Shock-Baton",
            "Oakheart's Gnarled Root",
            "Portable Manacracker",
            "Reality Breacher",
            "Pharameres Forbidden Grimoire",
            "Mrrgria's Favor",
            "Wriggling Sinew",
            "Naraxas' Spiked Tongue",
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
                    text: "mean at 109310",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 109310.98,
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