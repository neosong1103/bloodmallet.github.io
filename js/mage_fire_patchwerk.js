Highcharts.chart('mage_fire_patchwerk', 
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
                134544,
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
                13929,
                0,
                5831,
                6758,
                8000,
                5355,
                5495,
                5938,
                4059,
                5600,
                7423,
                6543,
                6266,
                7407,
                5187,
                7133,
                6656,
                6408,
                8186,
                5194,
                6361,
                6227,
                8373,
                4954,
                5217,
                0,
                3986,
                5292,
                7020,
                5496,
                6092,
                6177,
                7047,
                4657,
                6766,
                0,
                3833,
                4968,
                0,
                4028,
                3699,
                1727,
                2078,
                4370,
                2545,
                2693,
                2766,
                3391,
                1020,
                887
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                11066,
                0,
                8440,
                7770,
                5362,
                6798,
                7495,
                6557,
                7697,
                7533,
                6361,
                4661,
                5351,
                6260,
                7005,
                6424,
                4468,
                3972,
                6220,
                7541,
                6884,
                5518,
                5300,
                4738,
                6100,
                6511,
                5663,
                8834,
                3611,
                6628,
                6097,
                5910,
                3249,
                5376,
                3461,
                0,
                4277,
                4791,
                0,
                3335,
                4105,
                4400,
                4421,
                4157,
                3834,
                2793,
                2519,
                3174,
                3939,
                1232
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                9427,
                0,
                3416,
                7227,
                6269,
                6891,
                5387,
                5680,
                5313,
                6326,
                5423,
                6593,
                5920,
                4015,
                5617,
                5993,
                7327,
                7459,
                6585,
                4968,
                5728,
                3341,
                7831,
                5585,
                3353,
                3475,
                4857,
                5659,
                3685,
                6662,
                5350,
                5691,
                4412,
                3464,
                3863,
                0,
                3267,
                4700,
                0,
                2322,
                1737,
                2551,
                4294,
                4989,
                1786,
                4451,
                3337,
                1774,
                0,
                2475
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                9689,
                0,
                4258,
                4688,
                5993,
                4854,
                6015,
                4058,
                6171,
                4476,
                6168,
                6510,
                4946,
                6705,
                4621,
                3998,
                3901,
                5489,
                6410,
                3983,
                2892,
                5645,
                4442,
                4903,
                3545,
                6896,
                4881,
                4690,
                5073,
                5484,
                5577,
                5220,
                3599,
                4744,
                2448,
                0,
                3382,
                3000,
                0,
                2850,
                3544,
                1699,
                2513,
                5898,
                3885,
                3257,
                2816,
                1034,
                764,
                355
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                7630,
                0,
                4822,
                6070,
                3618,
                4349,
                5236,
                5288,
                3552,
                6187,
                3611,
                4080,
                4522,
                4997,
                5348,
                5989,
                6205,
                3545,
                63224,
                5265,
                4902,
                3151,
                5800,
                3700,
                3753,
                3011,
                6203,
                4798,
                3616,
                5782,
                3952,
                5341,
                6089,
                4002,
                3478,
                6267,
                5361,
                3947,
                4268,
                3572,
                3985,
                3234,
                3154,
                2183,
                1901,
                1642,
                2286,
                2967,
                3162,
                56
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                104472,
                0,
                2448,
                70478,
                5807,
                4513,
                3647,
                5528,
                6135,
                3662,
                6125,
                65975,
                5473,
                4914,
                5094,
                3981,
                3804,
                4465,
                0,
                5691,
                4504,
                3678,
                5845,
                2976,
                6079,
                61598,
                54511,
                5007,
                4266,
                1695,
                4983,
                3865,
                1631,
                2559,
                4433,
                3457,
                1803,
                2700,
                4680,
                3202,
                2402,
                4916,
                1579,
                3245,
                3501,
                1616,
                2413,
                3405,
                1414,
                1349
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                88982,
                0,
                65262,
                66957,
                64133,
                62636,
                62470,
                61021,
                59466,
                0,
                60830,
                58971,
                60363,
                59145,
                59452,
                59472,
                0,
                56502,
                56447,
                57577,
                46898,
                57144,
                54720,
                0,
                0,
                44940,
                51799,
                46236,
                43944,
                43609,
                49252,
                50077,
                50367,
                62140,
                48644,
                45901,
                56339,
                43820,
                41380,
                41728,
                41176,
                34155,
                41171,
                41978,
                38544,
                33589,
                32988,
                23993
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-09-01 03:45:18"
    },
    title: {
        text: "Mage - Fire - Patchwerk"
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
            "Tarnished Sentinel Medallion",
            "Kil'jaeden's Burning Wish",
            "Unstable Arcanocrystal",
            "Terror From Below",
            "Stat Stick (Mastery)",
            "Whispers in the Dark",
            "Dreadstone of Endless Shadows",
            "Stat Stick (Haste)",
            "Erratic Metronome",
            "Horn of Valor",
            "Stat Stick (Versatility)",
            "Charm of the Rising Tide",
            "Obelisk of the Void",
            "Padawsen's Unlucky Charm",
            "Stormsinger Fulmination Charge",
            "Eyasu's Mulligan",
            "Stat Stick (Crit)",
            "Chrono Shard",
            "Tome of Unraveling Sanity",
            "Infernal Writ",
            "PVP Badge of Dominance",
            "Naraxas' Spiked Tongue",
            "Star Gate",
            "Fury of the Burning Sky",
            "Moonlit Prism",
            "Astral Alchemist Stone",
            "Spectral Thurible",
            "Portable Manacracker",
            "PVP Insignia of Dominance",
            "Deteriorated Construct Core",
            "Bough of Corruption",
            "Twisting Wind",
            "Devilsaur Shock-Baton",
            "Oakheart's Gnarled Root",
            "Swarming Plaguehive",
            "Darkmoon Deck: Hellfire",
            "Aran's Relaxing Ruby",
            "Icon of Rot",
            "Infernal Alchemist Stone",
            "Toe Knee's Promise",
            "Wriggling Sinew",
            "Pharameres Forbidden Grimoire",
            "Mrrgria's Favor",
            "Reality Breacher",
            "Caged Horror",
            "Corrupted Starlight",
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
                    text: "mean at 81837",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 81837.82,
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