Highcharts.chart('hunter_marksmanship_patchwerk', 
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
                56325,
                339659,
                335099,
                56399,
                324668,
                50957,
                281313,
                0,
                33941,
                0,
                38348,
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
                28250,
                0,
                0,
                21965,
                0,
                22062,
                0,
                11801,
                14198,
                12226,
                14255,
                15347,
                12228,
                14075,
                11924,
                14390,
                13879,
                14599,
                12955,
                11996,
                13512,
                14395,
                12424,
                13746,
                11913,
                13227,
                10665,
                10510,
                8989,
                10276,
                15248,
                10416,
                7894,
                7366,
                10505,
                8603,
                13049,
                15308,
                7839,
                9791,
                13562,
                9995,
                12919,
                6821,
                9743,
                9044,
                12416,
                7281,
                11622,
                5658,
                7082,
                6734,
                0,
                7027,
                4699,
                13201,
                5388,
                2705,
                1649,
                1175
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                22763,
                0,
                0,
                23261,
                0,
                21161,
                0,
                6919,
                196024,
                18285,
                15783,
                10844,
                13512,
                7887,
                11730,
                10779,
                10486,
                12578,
                11580,
                13828,
                11090,
                8812,
                10339,
                14122,
                13620,
                9375,
                8933,
                12021,
                13496,
                10752,
                13790,
                8772,
                7098,
                10011,
                4463,
                9478,
                12323,
                8375,
                8652,
                5435,
                11332,
                7814,
                11254,
                10021,
                11040,
                6627,
                11094,
                6433,
                8463,
                7279,
                6843,
                4479,
                0,
                5198,
                7279,
                6061,
                5366,
                2770,
                4100,
                2893
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                18492,
                0,
                0,
                21409,
                0,
                17697,
                0,
                9116,
                0,
                14398,
                13645,
                11935,
                11603,
                11863,
                12626,
                10226,
                12857,
                8593,
                9259,
                8157,
                10656,
                13484,
                9999,
                10956,
                9483,
                14213,
                11988,
                9692,
                9565,
                10852,
                12172,
                9150,
                9066,
                5078,
                8769,
                4973,
                12252,
                12917,
                6859,
                7887,
                9841,
                9286,
                12861,
                6107,
                9959,
                5694,
                9607,
                8928,
                10251,
                5155,
                5396,
                7641,
                0,
                3999,
                3858,
                6623,
                3744,
                4332,
                2725,
                1232
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                20143,
                0,
                0,
                17715,
                0,
                18010,
                0,
                7823,
                0,
                13658,
                12829,
                11083,
                11605,
                8925,
                10668,
                11216,
                9619,
                12103,
                10672,
                10625,
                10610,
                8328,
                12246,
                10828,
                12053,
                6048,
                9562,
                9526,
                9513,
                9322,
                11202,
                4673,
                9360,
                8616,
                7035,
                6754,
                9997,
                8997,
                10467,
                8187,
                9261,
                9169,
                5837,
                7971,
                11665,
                5191,
                9927,
                6454,
                6069,
                7195,
                8270,
                3221,
                0,
                5980,
                3854,
                8710,
                3032,
                481,
                41,
                3443
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                197821,
                0,
                0,
                189545,
                0,
                174922,
                0,
                7242,
                0,
                12229,
                129250,
                10068,
                8213,
                7437,
                10617,
                7802,
                7492,
                9586,
                11644,
                8329,
                8897,
                10510,
                8951,
                12935,
                7972,
                11821,
                8636,
                9058,
                6519,
                8399,
                7476,
                11077,
                7127,
                8305,
                7723,
                9394,
                9167,
                8110,
                4768,
                9658,
                7391,
                4902,
                8542,
                6576,
                5677,
                5818,
                7383,
                7001,
                6953,
                2359,
                5074,
                4987,
                0,
                2667,
                2917,
                6641,
                5559,
                2987,
                4335,
                2996
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
                9348,
                0,
                11773,
                0,
                9998,
                10507,
                8641,
                6842,
                10977,
                11474,
                9025,
                4600,
                6330,
                6306,
                6858,
                6693,
                6456,
                7611,
                7393,
                9005,
                5235,
                9986,
                6778,
                10475,
                5542,
                4998,
                5085,
                6128,
                5134,
                8556,
                11327,
                8151,
                3517,
                9916,
                4181,
                7893,
                4601,
                8501,
                6589,
                5168,
                3252,
                6565,
                6750,
                3331,
                3632,
                5038,
                5219,
                3821,
                3621,
                3376,
                2288,
                4768,
                1354
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
                7565,
                0,
                7835,
                0,
                8500,
                7047,
                7065,
                9392,
                7540,
                8088,
                123948,
                8892,
                127435,
                125263,
                7386,
                9203,
                10315,
                5806,
                6368,
                120828,
                8350,
                8059,
                9697,
                10134,
                6929,
                8938,
                7089,
                5509,
                5417,
                5127,
                7075,
                5194,
                8368,
                6905,
                6568,
                7073,
                5527,
                6007,
                5326,
                9818,
                7383,
                5636,
                4030,
                2949,
                3106,
                9206,
                5719,
                5456,
                4560,
                2302,
                2865,
                802,
                4358
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
                200148,
                0,
                148358,
                0,
                126774,
                126709,
                131282,
                123045,
                121164,
                117034,
                0,
                120017,
                0,
                0,
                116376,
                115615,
                103520,
                114227,
                113975,
                0,
                105872,
                102345,
                97661,
                83033,
                105848,
                102747,
                102231,
                99954,
                98593,
                77704,
                73561,
                90565,
                88964,
                70883,
                86106,
                69322,
                86641,
                70752,
                87715,
                66348,
                80122,
                68440,
                85229,
                83763,
                83263,
                95040,
                71958,
                74791,
                57166,
                68783,
                74916,
                68481,
                54459
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2018-04-02 15:36 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/7d779968338362996c1eca6d04269bb42ff808ab\" target=\"blank\">7d77996</a>",
        useHTML: true
    },
    title: {
        text: "Hunter - Marksmanship - Patchwerk",
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
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +10</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=147017\">Tarnished Sentinel Medallion</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality</a>",
            "<a href=\"http://www.wowhead.com/item=139329\">Bloodthirsty Instinct</a>",
            "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
            "<a href=\"http://www.wowhead.com/item=140806\">Convergence of Fates</a>",
            "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=147016\">Terror From Below</a>",
            "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=151962\">Prototype Personnel Decimator</a>",
            "<a href=\"http://www.wowhead.com/item=151969\">Terminus Signaling Beacon</a>",
            "<a href=\"http://www.wowhead.com/item=141537\">Thrice-Accursed Compass</a>",
            "<a href=\"http://www.wowhead.com/item=140796\">Entwined Elemental Foci</a>",
            "<a href=\"http://www.wowhead.com/item=147019\">Tome of Unraveling Sanity</a>",
            "<a href=\"http://www.wowhead.com/item=137367\">Stormsinger Fulmination Charge</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=142773\">PVP Badge of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=141585\">Six-Feather Fan</a>",
            "<a href=\"http://www.wowhead.com/item=137433\">Obelisk of the Void</a>",
            "<a href=\"http://www.wowhead.com/item=137541\">Moonlit Prism</a>",
            "<a href=\"http://www.wowhead.com/item=137349\">Naraxas' Spiked Tongue</a>",
            "<a href=\"http://www.wowhead.com/item=140026\">The Devilsaur's Bite</a>",
            "<a href=\"http://www.wowhead.com/item=140801\">Fury of the Burning Sky</a>",
            "<a href=\"http://www.wowhead.com/item=137537\">Tirathon's Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=140802\">Nightblooming Frond</a>",
            "<a href=\"http://www.wowhead.com/item=142662\">PVP Insignia of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
            "<a href=\"http://www.wowhead.com/item=147018\">Spectral Thurible</a>",
            "<a href=\"http://www.wowhead.com/item=137373\">Tempered Egg of Serpentrix</a>",
            "<a href=\"http://www.wowhead.com/item=140798\">Icon of Rot</a>",
            "<a href=\"http://www.wowhead.com/item=142165\">Deteriorated Construct Core</a>",
            "<a href=\"http://www.wowhead.com/item=142157\">Aran's Relaxing Ruby</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Twisting Wind</a>",
            "<a href=\"http://www.wowhead.com/item=137306\">Oakheart's Gnarled Root</a>",
            "<a href=\"http://www.wowhead.com/item=144477\">Splinters of Agronax</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=142160\">Mrrgria's Favor</a>",
            "<a href=\"http://www.wowhead.com/item=136716\">Caged Horror</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=133641\">Eye of Skovald</a>",
            "<a href=\"http://www.wowhead.com/item=137301\">Corrupted Starlight</a>",
            "<a href=\"http://www.wowhead.com/item=140794\">Arcanogolem Digit</a>",
            "<a href=\"http://www.wowhead.com/item=137446\">Elementium Bomb Squirrel Generator</a>",
            "<a href=\"http://www.wowhead.com/item=140027\">Ley Spark</a>",
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
                    text: 'mean: ' + Intl.NumberFormat().format(176973),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 176973.83333333334,
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