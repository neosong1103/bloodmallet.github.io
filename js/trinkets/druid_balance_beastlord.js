Highcharts.chart('druid_balance_beastlord', 
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
                413307,
                408082,
                397884,
                52103,
                49104,
                46894,
                0,
                337654,
                46157,
                0,
                0,
                37403,
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
                0,
                0,
                0,
                17042,
                22408,
                32230,
                28022,
                0,
                24868,
                11488,
                23779,
                22124,
                13595,
                10719,
                22366,
                15858,
                17302,
                21219,
                23406,
                20270,
                13709,
                21295,
                12121,
                9951,
                13634,
                20034,
                12184,
                13735,
                16519,
                15567,
                19172,
                20697,
                10388,
                9706,
                17649,
                10230,
                14996,
                20283,
                6761,
                25429,
                13202,
                14176,
                16352,
                11528,
                13334,
                12109,
                10385,
                8736,
                1348,
                16896,
                18477,
                6335,
                0,
                14094,
                5948,
                4871,
                12081,
                15728,
                0,
                0,
                3187
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                0,
                0,
                0,
                281752,
                20236,
                13661,
                24221,
                0,
                12212,
                5106,
                14941,
                13469,
                17577,
                22367,
                9411,
                16567,
                30102,
                16709,
                12987,
                22350,
                18706,
                12938,
                22103,
                24634,
                15986,
                11848,
                21067,
                20363,
                14324,
                21102,
                6960,
                7308,
                21345,
                9413,
                17105,
                20060,
                16188,
                15229,
                16296,
                14922,
                18800,
                11699,
                11410,
                6867,
                13417,
                13472,
                7744,
                5998,
                12947,
                10215,
                4322,
                3041,
                0,
                4294,
                6242,
                5443,
                5598,
                0,
                9958,
                12263,
                1445
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                0,
                0,
                0,
                0,
                13530,
                15196,
                25692,
                0,
                16211,
                8000,
                16184,
                17887,
                21649,
                26882,
                17948,
                31206,
                10264,
                16047,
                14788,
                23253,
                12351,
                7134,
                7792,
                18336,
                13993,
                11776,
                11325,
                6998,
                16713,
                15576,
                13125,
                15289,
                9813,
                27057,
                14226,
                10793,
                16830,
                10509,
                23240,
                15456,
                10083,
                5693,
                5484,
                22489,
                19941,
                18370,
                5800,
                6033,
                11630,
                10646,
                1221,
                9890,
                0,
                3278,
                26281,
                5139,
                1840,
                10106,
                4756,
                4167,
                4348
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                0,
                0,
                0,
                0,
                23863,
                20395,
                17679,
                0,
                21697,
                21826,
                13464,
                7333,
                6018,
                12798,
                15781,
                14647,
                21008,
                11926,
                5575,
                14824,
                12380,
                21260,
                19524,
                13973,
                12322,
                19895,
                14333,
                17443,
                10788,
                10039,
                18866,
                13624,
                13815,
                10051,
                24541,
                2066,
                5874,
                11889,
                2341,
                6910,
                11904,
                8272,
                11107,
                7562,
                13559,
                9307,
                12146,
                16073,
                0,
                9110,
                13673,
                5429,
                0,
                11149,
                0,
                6674,
                8726,
                7914,
                6966,
                0,
                1526
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                0,
                0,
                0,
                0,
                214958,
                214050,
                19081,
                0,
                208616,
                5250,
                16121,
                178426,
                15023,
                18120,
                11940,
                8120,
                20195,
                11591,
                21039,
                7711,
                12313,
                10513,
                10759,
                13195,
                4391,
                9063,
                16501,
                12638,
                13662,
                10950,
                356,
                5598,
                11151,
                6047,
                3320,
                20240,
                12690,
                13642,
                12823,
                17939,
                18251,
                12674,
                5388,
                4207,
                0,
                2812,
                4883,
                5887,
                2203,
                11703,
                6740,
                3568,
                0,
                0,
                8327,
                15784,
                10563,
                5530,
                6132,
                0,
                2359
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
                19280,
                0,
                0,
                8620,
                7922,
                0,
                11177,
                6063,
                10823,
                13704,
                10347,
                10632,
                11234,
                17817,
                15578,
                9377,
                9019,
                4410,
                15821,
                4305,
                10712,
                14973,
                10453,
                10074,
                12562,
                11353,
                10513,
                14333,
                12462,
                4568,
                10478,
                8344,
                7866,
                13395,
                6084,
                9053,
                15720,
                9192,
                8585,
                5962,
                10064,
                3083,
                19386,
                8444,
                0,
                0,
                8158,
                8796,
                2710,
                1588,
                816,
                9515,
                0,
                11548,
                0
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
                14600,
                0,
                0,
                3726,
                190579,
                0,
                18526,
                16228,
                14186,
                160702,
                14782,
                10452,
                15394,
                11164,
                11962,
                16705,
                16720,
                12261,
                3474,
                14127,
                9650,
                5393,
                4798,
                16170,
                17341,
                13234,
                6473,
                0,
                9451,
                16031,
                11257,
                116861,
                5365,
                8627,
                14283,
                4751,
                116016,
                4979,
                8017,
                4091,
                3974,
                3060,
                343,
                8454,
                9528,
                0,
                10863,
                93219,
                0,
                3109,
                6966,
                0,
                2022,
                2269,
                2830
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
                189564,
                0,
                0,
                242112,
                0,
                0,
                172280,
                156005,
                165993,
                0,
                136130,
                158736,
                144601,
                130339,
                150545,
                147577,
                145498,
                144781,
                161377,
                146452,
                141675,
                143230,
                137167,
                123602,
                128183,
                127017,
                127642,
                128170,
                105598,
                118394,
                111514,
                0,
                120755,
                90607,
                91036,
                115634,
                0,
                114639,
                108854,
                114432,
                105356,
                103926,
                106148,
                69848,
                94710,
                114058,
                118406,
                0,
                87364,
                88978,
                79293,
                79195,
                83805,
                67826,
                62405
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2018-04-02 15:36 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/7d779968338362996c1eca6d04269bb42ff808ab\" target=\"blank\">7d77996</a>",
        useHTML: true
    },
    title: {
        text: "Druid - Balance - Beastlord",
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
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +20</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +15</a>",
            "<a href=\"http://www.wowhead.com/item=147018\">Spectral Thurible</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +10</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=151955\">Acrid Catalyst Injector</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess</a>",
            "<a href=\"http://www.wowhead.com/item=147002\">Charm of the Rising Tide</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=140792\">Erratic Metronome</a>",
            "<a href=\"http://www.wowhead.com/item=151962\">Prototype Personnel Decimator</a>",
            "<a href=\"http://www.wowhead.com/item=140804\">Star Gate</a>",
            "<a href=\"http://www.wowhead.com/item=141584\">Eyasu's Mulligan</a>",
            "<a href=\"http://www.wowhead.com/item=142157\">Aran's Relaxing Ruby</a>",
            "<a href=\"http://www.wowhead.com/item=142165\">Deteriorated Construct Core</a>",
            "<a href=\"http://www.wowhead.com/item=140809\">Whispers in the Dark</a>",
            "<a href=\"http://www.wowhead.com/item=140801\">Fury of the Burning Sky</a>",
            "<a href=\"http://www.wowhead.com/item=144480\">Dreadstone of Endless Shadows</a>",
            "<a href=\"http://www.wowhead.com/item=141536\">Padawsen's Unlucky Charm</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=147017\">Tarnished Sentinel Medallion</a>",
            "<a href=\"http://www.wowhead.com/item=140798\">Icon of Rot</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=147019\">Tome of Unraveling Sanity</a>",
            "<a href=\"http://www.wowhead.com/item=137367\">Stormsinger Fulmination Charge</a>",
            "<a href=\"http://www.wowhead.com/item=137485\">Infernal Writ</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=137433\">Obelisk of the Void</a>",
            "<a href=\"http://www.wowhead.com/item=151310\">Reality Breacher</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=142779\">PVP Badge of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=151971\">Sheath of Asara</a>",
            "<a href=\"http://www.wowhead.com/item=137541\">Moonlit Prism</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Twisting Wind</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Bough of Corruption</a>",
            "<a href=\"http://www.wowhead.com/item=142668\">PVP Insignia of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=151970\">Vitality Resonator</a>",
            "<a href=\"http://www.wowhead.com/item=147016\">Terror From Below</a>",
            "<a href=\"http://www.wowhead.com/item=139321\">Swarming Plaguehive</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=133641\">Eye of Skovald</a>",
            "<a href=\"http://www.wowhead.com/item=136716\">Caged Horror</a>",
            "<a href=\"http://www.wowhead.com/item=137301\">Corrupted Starlight</a>",
            "<a href=\"http://www.wowhead.com/item=137398\">Portable Manacracker</a>",
            "<a href=\"http://www.wowhead.com/item=140030\">Devilsaur Shock-Baton</a>",
            "<a href=\"http://www.wowhead.com/item=138224\">Unstable Horrorslime</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=151969\">Terminus Signaling Beacon</a>",
            "<a href=\"http://www.wowhead.com/item=140800\">Pharameres Forbidden Grimoire</a>",
            "<a href=\"http://www.wowhead.com/item=137446\">Elementium Bomb Squirrel Generator</a>",
            "<a href=\"http://www.wowhead.com/item=142160\">Mrrgria's Favor</a>",
            "<a href=\"http://www.wowhead.com/item=137306\">Oakheart's Gnarled Root</a>",
            "<a href=\"http://www.wowhead.com/item=139326\">Wriggling Sinew</a>",
            "<a href=\"http://www.wowhead.com/item=137349\">Naraxas' Spiked Tongue</a>",
            "<a href=\"http://www.wowhead.com/item=137329\">Figurehead of the Naglfar</a>"
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
                    text: 'mean: ' + Intl.NumberFormat().format(224308),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 224308.1475409836,
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