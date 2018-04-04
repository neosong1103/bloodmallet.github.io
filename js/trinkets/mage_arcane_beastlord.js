Highcharts.chart('mage_arcane_beastlord', 
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
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category + ': ' + Intl.NumberFormat().format(this.stackY),                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
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
            color: "#fdbf6f",
            data: [
                74152,
                62598,
                526384,
                71997,
                522358,
                507709,
                58269,
                0,
                56374,
                424120,
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
                0,
                0,
                0
            ],
            name: "1000"
        },
        {
            color: "#cab2d6",
            data: [
                38310,
                38793,
                0,
                45853,
                0,
                0,
                36142,
                51822,
                28977,
                0,
                31017,
                33751,
                42877,
                35807,
                34850,
                9659,
                38700,
                39090,
                35609,
                17272,
                35115,
                18784,
                30816,
                14522,
                20232,
                20294,
                29701,
                17364,
                38669,
                14409,
                25855,
                28728,
                9952,
                40035,
                34188,
                8300,
                3201,
                23713,
                3483,
                26403,
                31491,
                19813,
                14085,
                22059,
                13249,
                8909,
                14022,
                17048,
                0,
                10668,
                7908,
                25106,
                12423,
                6955,
                4180,
                3821,
                13142,
                7313,
                8547,
                0,
                0
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                23929,
                28609,
                0,
                9540,
                0,
                0,
                378254,
                22466,
                29757,
                0,
                24107,
                20195,
                21596,
                16965,
                11041,
                16036,
                25370,
                9233,
                39294,
                31942,
                18181,
                23382,
                24140,
                28983,
                28497,
                22022,
                18403,
                25617,
                17937,
                31244,
                7447,
                10123,
                19047,
                36067,
                19121,
                25308,
                29559,
                14555,
                27097,
                13378,
                18509,
                13092,
                17030,
                21610,
                22276,
                23137,
                21709,
                4703,
                0,
                17605,
                7309,
                349,
                17103,
                7461,
                2234,
                2791,
                3183,
                3294,
                257,
                5619,
                0
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                29440,
                29770,
                0,
                35366,
                0,
                0,
                0,
                15779,
                8603,
                0,
                33653,
                22565,
                23452,
                24505,
                31836,
                17982,
                11995,
                44773,
                11105,
                14508,
                24629,
                12355,
                17923,
                16270,
                14697,
                34156,
                19805,
                23435,
                11897,
                25764,
                39476,
                37041,
                28363,
                4650,
                18100,
                9630,
                15631,
                31597,
                8800,
                21113,
                14373,
                7905,
                6032,
                13530,
                9685,
                15012,
                16223,
                11870,
                0,
                11964,
                7369,
                6336,
                13132,
                11933,
                3984,
                3027,
                4666,
                20410,
                0,
                1562,
                3336
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                32924,
                41261,
                0,
                28660,
                0,
                0,
                0,
                22135,
                18768,
                0,
                18731,
                22207,
                15871,
                18939,
                19360,
                7824,
                17204,
                0,
                27461,
                17033,
                19201,
                26238,
                23320,
                14502,
                23131,
                23915,
                14974,
                17246,
                27013,
                13242,
                19567,
                31360,
                16860,
                21802,
                26606,
                20538,
                19657,
                14171,
                12674,
                15429,
                15617,
                15291,
                23508,
                11462,
                10447,
                24025,
                10555,
                22929,
                0,
                315,
                1910,
                11535,
                5501,
                0,
                8908,
                0,
                6767,
                0,
                10454,
                12041,
                0
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                344861,
                333602,
                0,
                331438,
                0,
                0,
                0,
                36099,
                301607,
                0,
                31759,
                29684,
                26264,
                20815,
                17509,
                12056,
                25241,
                21132,
                17057,
                19013,
                7391,
                12220,
                15223,
                12364,
                18687,
                14952,
                17745,
                17354,
                17611,
                13153,
                16251,
                4905,
                22897,
                4353,
                19173,
                9553,
                12283,
                7146,
                24853,
                15220,
                11226,
                8533,
                1498,
                23817,
                8815,
                11588,
                17167,
                5207,
                0,
                14109,
                10279,
                5654,
                14889,
                10054,
                15493,
                12224,
                14781,
                15391,
                0,
                7981,
                10745
            ],
            name: "940"
        },
        {
            color: "#33a02c",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                13079,
                0,
                0,
                7866,
                4837,
                16614,
                28135,
                23063,
                17857,
                17176,
                21984,
                26563,
                11006,
                29662,
                20251,
                12948,
                12197,
                9772,
                23690,
                7386,
                13483,
                23245,
                24330,
                22773,
                8937,
                7004,
                22219,
                9550,
                20832,
                8418,
                13977,
                4204,
                9951,
                10827,
                14450,
                12142,
                6664,
                23852,
                9702,
                15526,
                0,
                3095,
                1399,
                8722,
                3982,
                2679,
                13338,
                7477,
                4162,
                0,
                0,
                0,
                0,
                2900
            ],
            name: "930"
        },
        {
            color: "#a6cee3",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                299194,
                0,
                0,
                266303,
                23716,
                20434,
                7216,
                263737,
                4237,
                11382,
                4846,
                19437,
                20878,
                5440,
                14673,
                4288,
                28159,
                16258,
                14460,
                19390,
                23543,
                6639,
                13587,
                10310,
                193349,
                9250,
                18725,
                17719,
                14781,
                16681,
                4885,
                13452,
                19898,
                16695,
                8826,
                11648,
                14512,
                1712,
                10119,
                14010,
                23028,
                14385,
                6294,
                3960,
                16038,
                124807,
                0,
                0,
                9748,
                12053,
                17821,
                9715,
                0,
                0
            ],
            name: "920"
        },
        {
            color: "#1f78b4",
            data: [
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
                256360,
                245629,
                249292,
                0,
                300580,
                236043,
                241416,
                193837,
                234680,
                204402,
                214037,
                210898,
                211939,
                204724,
                182231,
                201168,
                184393,
                175619,
                182840,
                175752,
                0,
                194833,
                156727,
                154357,
                184837,
                178711,
                173407,
                183634,
                154285,
                151562,
                181627,
                181662,
                142768,
                159855,
                140514,
                120580,
                140854,
                193107,
                139429,
                153912,
                125581,
                0,
                139614,
                129151,
                124644,
                107445,
                90238,
                92896,
                91333,
                50677
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2018-04-02 15:36 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/7d779968338362996c1eca6d04269bb42ff808ab\" target=\"blank\">7d77996</a>",
        useHTML: true
    },
    title: {
        text: "Mage - Arcane - Beastlord",
        useHTML: true
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<div style=\"background-color:#eee; padding:12px;\"><b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + Intl.NumberFormat().format(cumulative_amount);            }        }        s += '</div>';        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        },
        useHTML: true
    },
    xAxis: {
        categories: [
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +20</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +10</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=151969\">Terminus Signaling Beacon</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=151970\">Vitality Resonator</a>",
            "<a href=\"http://www.wowhead.com/item=142157\">Aran's Relaxing Ruby</a>",
            "<a href=\"http://www.wowhead.com/item=147018\">Spectral Thurible</a>",
            "<a href=\"http://www.wowhead.com/item=147017\">Tarnished Sentinel Medallion</a>",
            "<a href=\"http://www.wowhead.com/item=151955\">Acrid Catalyst Injector</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=147002\">Charm of the Rising Tide</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=142165\">Deteriorated Construct Core</a>",
            "<a href=\"http://www.wowhead.com/item=142779\">PVP Badge of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=137367\">Stormsinger Fulmination Charge</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=140801\">Fury of the Burning Sky</a>",
            "<a href=\"http://www.wowhead.com/item=141536\">Padawsen's Unlucky Charm</a>",
            "<a href=\"http://www.wowhead.com/item=140804\">Star Gate</a>",
            "<a href=\"http://www.wowhead.com/item=141584\">Eyasu's Mulligan</a>",
            "<a href=\"http://www.wowhead.com/item=137485\">Infernal Writ</a>",
            "<a href=\"http://www.wowhead.com/item=151310\">Reality Breacher</a>",
            "<a href=\"http://www.wowhead.com/item=137541\">Moonlit Prism</a>",
            "<a href=\"http://www.wowhead.com/item=147019\">Tome of Unraveling Sanity</a>",
            "<a href=\"http://www.wowhead.com/item=151971\">Sheath of Asara</a>",
            "<a href=\"http://www.wowhead.com/item=144480\">Dreadstone of Endless Shadows</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Twisting Wind</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Bough of Corruption</a>",
            "<a href=\"http://www.wowhead.com/item=140798\">Icon of Rot</a>",
            "<a href=\"http://www.wowhead.com/item=142668\">PVP Insignia of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=140792\">Erratic Metronome</a>",
            "<a href=\"http://www.wowhead.com/item=136716\">Caged Horror</a>",
            "<a href=\"http://www.wowhead.com/item=137301\">Corrupted Starlight</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=133641\">Eye of Skovald</a>",
            "<a href=\"http://www.wowhead.com/item=140809\">Whispers in the Dark</a>",
            "<a href=\"http://www.wowhead.com/item=137398\">Portable Manacracker</a>",
            "<a href=\"http://www.wowhead.com/item=147016\">Terror From Below</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=140030\">Devilsaur Shock-Baton</a>",
            "<a href=\"http://www.wowhead.com/item=138224\">Unstable Horrorslime</a>",
            "<a href=\"http://www.wowhead.com/item=137306\">Oakheart's Gnarled Root</a>",
            "<a href=\"http://www.wowhead.com/item=151962\">Prototype Personnel Decimator</a>",
            "<a href=\"http://www.wowhead.com/item=137446\">Elementium Bomb Squirrel Generator</a>",
            "<a href=\"http://www.wowhead.com/item=139326\">Wriggling Sinew</a>",
            "<a href=\"http://www.wowhead.com/item=137349\">Naraxas' Spiked Tongue</a>",
            "<a href=\"http://www.wowhead.com/item=142160\">Mrrgria's Favor</a>",
            "<a href=\"http://www.wowhead.com/item=137433\">Obelisk of the Void</a>",
            "<a href=\"http://www.wowhead.com/item=137329\">Figurehead of the Naglfar</a>",
            "<a href=\"http://www.wowhead.com/item=139321\">Swarming Plaguehive</a>",
            "<a href=\"http://www.wowhead.com/item=140800\">Pharameres Forbidden Grimoire</a>"
        ],
        labels: {
            useHTML: true
        }
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#0973DA",
                label: {
                    align: "left",
                    rotation: 0,
                    style: {
                        color: "#0973DA"
                    },
                    text: 'mean: ' + Intl.NumberFormat().format(315810),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 315810.37704918033,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: true,
            formatter: function() {          return Intl.NumberFormat().format(this.total);        },
            style: {
                textOutline: false
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});