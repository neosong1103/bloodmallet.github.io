Highcharts.chart('paladin_retribution_patchwerk', 
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
                37526,
                38291,
                244472,
                35781,
                240493,
                230826,
                31354,
                0,
                34048,
                187452,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                17725,
                15785,
                0,
                16665,
                0,
                0,
                13791,
                13246,
                12901,
                0,
                11849,
                15168,
                6452,
                13183,
                14529,
                14688,
                12343,
                9364,
                12168,
                10567,
                13920,
                10392,
                11434,
                9655,
                11115,
                8791,
                12451,
                13533,
                11358,
                11020,
                13831,
                10725,
                11966,
                8988,
                11329,
                10041,
                11471,
                12867,
                9257,
                10318,
                12177,
                10054,
                7478,
                5046,
                0,
                7071,
                2659,
                6081,
                6036,
                4722,
                6904,
                4640,
                2654,
                4559,
                1485,
                2490
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                15692,
                17545,
                0,
                13348,
                0,
                0,
                161288,
                14391,
                14294,
                0,
                10753,
                13461,
                7964,
                12191,
                10528,
                15310,
                9960,
                12900,
                9323,
                11808,
                11182,
                13314,
                11310,
                12554,
                13950,
                11030,
                8112,
                8433,
                11162,
                9118,
                7218,
                10909,
                11625,
                9644,
                12178,
                11756,
                10298,
                9842,
                10506,
                6937,
                8994,
                10349,
                5470,
                9709,
                0,
                4747,
                5654,
                2610,
                5408,
                4151,
                11329,
                4248,
                3447,
                2989,
                5145,
                4407
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                14963,
                12729,
                0,
                15174,
                0,
                0,
                0,
                13603,
                11719,
                0,
                12376,
                13642,
                3973,
                7963,
                10927,
                11125,
                10531,
                10151,
                10139,
                10266,
                8434,
                10687,
                9801,
                9818,
                8913,
                9981,
                10854,
                13839,
                5334,
                10581,
                10402,
                9235,
                10090,
                8566,
                7985,
                9500,
                9741,
                10830,
                11386,
                7963,
                11291,
                11576,
                7283,
                5184,
                0,
                4964,
                3051,
                1854,
                3781,
                2178,
                8407,
                6452,
                2294,
                6479,
                3043,
                1200
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                12561,
                12310,
                0,
                11447,
                0,
                0,
                0,
                11821,
                13655,
                0,
                7907,
                11619,
                6369,
                13635,
                8781,
                13216,
                11199,
                9662,
                9358,
                8740,
                9457,
                8348,
                9616,
                8271,
                13552,
                8701,
                7664,
                8673,
                8220,
                10259,
                10380,
                9781,
                9629,
                7158,
                10401,
                9896,
                10146,
                8590,
                7365,
                4380,
                5919,
                4701,
                7001,
                4778,
                0,
                4479,
                2842,
                5393,
                1353,
                3833,
                7627,
                2877,
                1703,
                1346,
                3798,
                2959
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                160459,
                158436,
                0,
                149922,
                0,
                0,
                0,
                11683,
                105747,
                0,
                9731,
                12633,
                4628,
                5823,
                7903,
                11995,
                5731,
                7307,
                9505,
                7338,
                7288,
                8544,
                8004,
                8148,
                7569,
                6373,
                6728,
                8674,
                10604,
                6881,
                6460,
                7518,
                6811,
                6969,
                8305,
                7743,
                9360,
                8002,
                10145,
                7117,
                9501,
                7403,
                6889,
                4448,
                0,
                5445,
                4047,
                2929,
                2283,
                2232,
                5259,
                4356,
                3682,
                3234,
                3413,
                2773
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
                10938,
                0,
                0,
                10432,
                8630,
                4644,
                9398,
                8480,
                8908,
                8958,
                8762,
                4846,
                6941,
                7874,
                7034,
                7374,
                8691,
                7016,
                8009,
                8364,
                7272,
                3861,
                8123,
                10543,
                8492,
                9195,
                6837,
                10680,
                6198,
                6082,
                8071,
                4869,
                6899,
                6651,
                8851,
                4083,
                5130,
                7592,
                2266,
                2125,
                2278,
                5959,
                3563,
                7002,
                2765,
                2263,
                1511,
                2289,
                3124
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
                129025,
                0,
                0,
                4484,
                8084,
                3978,
                7171,
                7288,
                8013,
                8564,
                8672,
                105290,
                8590,
                5658,
                6692,
                7061,
                6381,
                8128,
                97203,
                4541,
                6101,
                8805,
                3734,
                5253,
                4889,
                5571,
                4110,
                5361,
                81174,
                7868,
                6574,
                7475,
                6612,
                6736,
                6451,
                5553,
                4660,
                7140,
                5116,
                3837,
                3573,
                2535,
                2837,
                6867,
                3978,
                310,
                1003,
                2006,
                313
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
                111712,
                89965,
                133585,
                102216,
                100887,
                85757,
                100325,
                97054,
                0,
                95480,
                95665,
                93782,
                94186,
                92488,
                82606,
                0,
                89144,
                81108,
                87978,
                87359,
                82229,
                83887,
                76544,
                87343,
                72432,
                0,
                68110,
                63780,
                64002,
                73913,
                62571,
                63270,
                75076,
                69255,
                92819,
                65796,
                70466,
                55756,
                52500,
                52794,
                15763,
                38404,
                49947,
                34598,
                33389,
                27858
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2018-04-02 15:36 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/7d779968338362996c1eca6d04269bb42ff808ab\" target=\"blank\">7d77996</a>",
        useHTML: true
    },
    title: {
        text: "Paladin - Retribution - Patchwerk",
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
            "<a href=\"http://www.wowhead.com/item=154176\">Khaz'goroths Courage +20</a>",
            "<a href=\"http://www.wowhead.com/item=154176\">Khaz'goroths Courage +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154176\">Khaz'goroths Courage +10</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=151964\">Seeping Scourgewing</a>",
            "<a href=\"http://www.wowhead.com/item=154176\">Khaz'goroths Courage</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=142167\">Eye of Command</a>",
            "<a href=\"http://www.wowhead.com/item=151190\">Specter of Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=147011\">Vial of Ceaseless Toxins</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
            "<a href=\"http://www.wowhead.com/item=140796\">Entwined Elemental Foci</a>",
            "<a href=\"http://www.wowhead.com/item=141535\">Ettin Fingernail</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=140806\">Convergence of Fates</a>",
            "<a href=\"http://www.wowhead.com/item=133644\">Memento of Angerboda</a>",
            "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
            "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
            "<a href=\"http://www.wowhead.com/item=133647\">Gift of Radiance</a>",
            "<a href=\"http://www.wowhead.com/item=137459\">Chaos Talisman</a>",
            "<a href=\"http://www.wowhead.com/item=147009\">Infernal Cinders</a>",
            "<a href=\"http://www.wowhead.com/item=142669\">PVP Badge of Victory</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=137312\">Nightmare Egg Shell</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=142784\">PVP Insignia of Victory</a>",
            "<a href=\"http://www.wowhead.com/item=144482\">Fel-Oiled Infernal Machine</a>",
            "<a href=\"http://www.wowhead.com/item=152093\">Gorshalach's Legacy</a>",
            "<a href=\"http://www.wowhead.com/item=142159\">Bloodstained Handkerchief</a>",
            "<a href=\"http://www.wowhead.com/item=140799\">Might of Krosus</a>",
            "<a href=\"http://www.wowhead.com/item=140790\">Claw of the Crystalline Scorpid</a>",
            "<a href=\"http://www.wowhead.com/item=137539\">Faulty Countermeasure</a>",
            "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
            "<a href=\"http://www.wowhead.com/item=139328\">Ursoc's Rending Paw</a>",
            "<a href=\"http://www.wowhead.com/item=147012\">Umbral Moonglaives</a>",
            "<a href=\"http://www.wowhead.com/item=139325\">Spontaneous Appendages</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=137406\">Terrorbound Nexus</a>",
            "<a href=\"http://www.wowhead.com/item=139334\">Nature's Call</a>",
            "<a href=\"http://www.wowhead.com/item=137439\">Tiny Oozeling in a Jar</a>",
            "<a href=\"http://www.wowhead.com/item=137357\">Mark of Dargrul</a>",
            "<a href=\"http://www.wowhead.com/item=137486\">Windscar Whetstone</a>",
            "<a href=\"http://www.wowhead.com/item=140808\">Draught of Souls</a>",
            "<a href=\"http://www.wowhead.com/item=136715\">Spiked Counterweight</a>",
            "<a href=\"http://www.wowhead.com/item=137369\">Giant Ornamental Pearl</a>",
            "<a href=\"http://www.wowhead.com/item=140034\">Impact Tremor</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=139320\">Ravaged Seed Pod</a>"
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
                    text: 'mean: ' + Intl.NumberFormat().format(146504),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 146504.01785714287,
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