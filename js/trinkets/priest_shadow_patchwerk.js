Highcharts.chart('priest_shadow_patchwerk', 
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
                316619,
                313582,
                305646,
                41232,
                260316,
                39091,
                0,
                36948,
                0,
                30155,
                0,
                0,
                0,
                0,
                0,
                29046,
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
                16819,
                0,
                15992,
                7223,
                16378,
                14387,
                13164,
                17574,
                14310,
                15646,
                13309,
                15516,
                11889,
                12221,
                12060,
                12860,
                13117,
                11557,
                9543,
                13342,
                10757,
                11467,
                9498,
                13659,
                10571,
                11190,
                8171,
                9408,
                12566,
                13317,
                8503,
                9436,
                9071,
                10421,
                9200,
                12133,
                7199,
                11375,
                10295,
                11234,
                8402,
                11455,
                7145,
                10694,
                8236,
                11474,
                6576,
                4222,
                5110,
                7306,
                5865,
                6626,
                0,
                3473,
                6924,
                6210,
                2825,
                2701
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                0,
                0,
                0,
                16256,
                0,
                14733,
                8968,
                11843,
                12684,
                184229,
                16912,
                13019,
                9886,
                13849,
                14752,
                8885,
                10294,
                12045,
                10013,
                8287,
                11985,
                15510,
                9404,
                11979,
                10383,
                9729,
                10889,
                10215,
                11306,
                10367,
                12885,
                7884,
                11695,
                9132,
                9973,
                6508,
                7944,
                7942,
                10395,
                9944,
                12788,
                12113,
                9338,
                8048,
                10611,
                6506,
                4329,
                8049,
                9552,
                4894,
                6920,
                6368,
                7040,
                7853,
                7427,
                0,
                6295,
                7020,
                5173,
                3783,
                1715
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                0,
                0,
                0,
                13805,
                0,
                16611,
                8629,
                15037,
                12365,
                0,
                17735,
                12643,
                12955,
                13972,
                10573,
                10489,
                10174,
                11285,
                9807,
                11145,
                9503,
                9043,
                11467,
                8137,
                9203,
                10572,
                6847,
                9224,
                7561,
                8072,
                8625,
                10099,
                13349,
                11210,
                5084,
                8892,
                10580,
                8599,
                8448,
                4858,
                9155,
                10439,
                12300,
                7137,
                9671,
                4956,
                7155,
                4142,
                10684,
                8012,
                6422,
                7034,
                5861,
                6219,
                673,
                0,
                9664,
                4365,
                5576,
                3763,
                2853
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                0,
                0,
                0,
                12118,
                0,
                12639,
                6270,
                11857,
                10549,
                0,
                15028,
                11651,
                10138,
                12648,
                11624,
                9615,
                12434,
                10552,
                12093,
                8878,
                9460,
                9286,
                9810,
                11214,
                9309,
                9859,
                8365,
                5780,
                10662,
                9232,
                9373,
                8597,
                8196,
                8150,
                6717,
                6324,
                6533,
                8420,
                7830,
                5908,
                11157,
                9727,
                9031,
                7940,
                8386,
                6231,
                9057,
                7899,
                9184,
                4203,
                4476,
                5913,
                7279,
                745,
                5315,
                0,
                4621,
                5193,
                4561,
                2168,
                2054
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                0,
                0,
                0,
                160545,
                0,
                155638,
                7291,
                148459,
                11926,
                0,
                15491,
                8654,
                9764,
                8282,
                15558,
                119567,
                5561,
                9031,
                7481,
                9477,
                9614,
                9160,
                7728,
                8194,
                8873,
                6560,
                6002,
                8907,
                7038,
                4708,
                6533,
                8789,
                9454,
                10621,
                7525,
                5700,
                7104,
                7003,
                6502,
                6565,
                7227,
                7480,
                9335,
                7861,
                9431,
                4358,
                6412,
                6755,
                5341,
                6134,
                5785,
                2818,
                3938,
                6269,
                2816,
                0,
                5164,
                5566,
                5376,
                5536,
                4411
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
                7770,
                0,
                8016,
                0,
                11948,
                11808,
                6761,
                8938,
                7075,
                0,
                9307,
                7813,
                6577,
                8280,
                5806,
                9834,
                8154,
                8224,
                5610,
                9016,
                8997,
                7528,
                9207,
                7557,
                5886,
                7712,
                10795,
                2849,
                5782,
                4936,
                4933,
                6897,
                8552,
                5364,
                8826,
                7203,
                6729,
                7039,
                6374,
                5287,
                3990,
                6817,
                8942,
                858,
                4151,
                5771,
                3773,
                6007,
                7772,
                6244,
                5541,
                3213,
                5118,
                261,
                2828
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
                6861,
                0,
                160861,
                0,
                124760,
                9154,
                134099,
                9412,
                9361,
                0,
                9945,
                6631,
                7257,
                7470,
                7733,
                8428,
                8140,
                8620,
                5163,
                4083,
                7004,
                6980,
                4302,
                6166,
                8940,
                7040,
                6803,
                8528,
                4284,
                6499,
                95346,
                4551,
                5014,
                5715,
                7006,
                8577,
                7498,
                2504,
                7964,
                5842,
                5082,
                4041,
                4281,
                3853,
                4791,
                4216,
                76428,
                1308,
                2276,
                8164,
                1370,
                5777,
                2528,
                5231,
                3873
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
                187727,
                0,
                0,
                0,
                0,
                124957,
                0,
                113280,
                105981,
                0,
                115834,
                113774,
                117047,
                112347,
                110396,
                104199,
                105242,
                98838,
                105278,
                105416,
                96588,
                98617,
                95038,
                98921,
                90622,
                88463,
                76762,
                87214,
                95392,
                96067,
                0,
                89815,
                81294,
                94003,
                69337,
                69070,
                69108,
                84270,
                66111,
                86267,
                78707,
                78914,
                62864,
                85955,
                79573,
                78875,
                0,
                76306,
                76595,
                94993,
                68364,
                65355,
                67392,
                70117,
                56393
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2018-04-02 15:36 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/7d779968338362996c1eca6d04269bb42ff808ab\" target=\"blank\">7d77996</a>",
        useHTML: true
    },
    title: {
        text: "Priest - Shadow - Patchwerk",
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
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +15</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +10</a>",
            "<a href=\"http://www.wowhead.com/item=151955\">Acrid Catalyst Injector</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=151971\">Sheath of Asara</a>",
            "<a href=\"http://www.wowhead.com/item=147016\">Terror From Below</a>",
            "<a href=\"http://www.wowhead.com/item=151962\">Prototype Personnel Decimator</a>",
            "<a href=\"http://www.wowhead.com/item=147017\">Tarnished Sentinel Medallion</a>",
            "<a href=\"http://www.wowhead.com/item=147019\">Tome of Unraveling Sanity</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess</a>",
            "<a href=\"http://www.wowhead.com/item=140792\">Erratic Metronome</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=141536\">Padawsen's Unlucky Charm</a>",
            "<a href=\"http://www.wowhead.com/item=144480\">Dreadstone of Endless Shadows</a>",
            "<a href=\"http://www.wowhead.com/item=147018\">Spectral Thurible</a>",
            "<a href=\"http://www.wowhead.com/item=137485\">Infernal Writ</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=140798\">Icon of Rot</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=137306\">Oakheart's Gnarled Root</a>",
            "<a href=\"http://www.wowhead.com/item=147002\">Charm of the Rising Tide</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=140030\">Devilsaur Shock-Baton</a>",
            "<a href=\"http://www.wowhead.com/item=142779\">PVP Badge of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=137367\">Stormsinger Fulmination Charge</a>",
            "<a href=\"http://www.wowhead.com/item=151310\">Reality Breacher</a>",
            "<a href=\"http://www.wowhead.com/item=141584\">Eyasu's Mulligan</a>",
            "<a href=\"http://www.wowhead.com/item=137541\">Moonlit Prism</a>",
            "<a href=\"http://www.wowhead.com/item=137433\">Obelisk of the Void</a>",
            "<a href=\"http://www.wowhead.com/item=151970\">Vitality Resonator</a>",
            "<a href=\"http://www.wowhead.com/item=142668\">PVP Insignia of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=140809\">Whispers in the Dark</a>",
            "<a href=\"http://www.wowhead.com/item=139321\">Swarming Plaguehive</a>",
            "<a href=\"http://www.wowhead.com/item=140804\">Star Gate</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Twisting Wind</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Bough of Corruption</a>",
            "<a href=\"http://www.wowhead.com/item=137349\">Naraxas' Spiked Tongue</a>",
            "<a href=\"http://www.wowhead.com/item=142165\">Deteriorated Construct Core</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=140801\">Fury of the Burning Sky</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=137398\">Portable Manacracker</a>",
            "<a href=\"http://www.wowhead.com/item=140800\">Pharameres Forbidden Grimoire</a>",
            "<a href=\"http://www.wowhead.com/item=139326\">Wriggling Sinew</a>",
            "<a href=\"http://www.wowhead.com/item=133641\">Eye of Skovald</a>",
            "<a href=\"http://www.wowhead.com/item=151969\">Terminus Signaling Beacon</a>",
            "<a href=\"http://www.wowhead.com/item=142160\">Mrrgria's Favor</a>",
            "<a href=\"http://www.wowhead.com/item=137446\">Elementium Bomb Squirrel Generator</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=142157\">Aran's Relaxing Ruby</a>",
            "<a href=\"http://www.wowhead.com/item=136716\">Caged Horror</a>",
            "<a href=\"http://www.wowhead.com/item=137301\">Corrupted Starlight</a>",
            "<a href=\"http://www.wowhead.com/item=138224\">Unstable Horrorslime</a>",
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
                    text: 'mean: ' + Intl.NumberFormat().format(165953),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 165953.65573770492,
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