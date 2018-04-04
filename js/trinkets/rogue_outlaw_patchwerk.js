Highcharts.chart('rogue_outlaw_patchwerk', 
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
                73303,
                69341,
                63360,
                0,
                42816,
                243133,
                238964,
                35428,
                229455,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                172605,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                28467,
                26997,
                29253,
                17774,
                20858,
                0,
                0,
                13116,
                0,
                17708,
                17342,
                22473,
                15818,
                11605,
                14295,
                14158,
                16913,
                18636,
                14338,
                13090,
                12163,
                13405,
                13828,
                12436,
                14836,
                13478,
                12697,
                13265,
                11970,
                14545,
                15110,
                16766,
                0,
                15239,
                14348,
                13990,
                14561,
                15391,
                4099,
                8483,
                11221,
                13252,
                10385,
                10765,
                6488,
                0,
                7953,
                7505,
                7644,
                5543,
                1751,
                5974,
                5957,
                12868,
                3008,
                5905,
                1954,
                5557,
                1391,
                3366
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                31017,
                27439,
                21799,
                15095,
                14442,
                0,
                0,
                185391,
                0,
                15931,
                20884,
                15936,
                14343,
                14984,
                15307,
                11508,
                15604,
                14894,
                14110,
                14809,
                13232,
                14720,
                12355,
                15653,
                10711,
                12309,
                13471,
                12705,
                14571,
                14793,
                11882,
                13552,
                0,
                12548,
                13095,
                14024,
                9629,
                10473,
                4572,
                12379,
                13169,
                12461,
                9401,
                7683,
                9930,
                0,
                4932,
                3714,
                5555,
                6218,
                5494,
                4575,
                6067,
                13187,
                3686,
                3630,
                7804,
                1849,
                1619,
                4275
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                23756,
                24450,
                20705,
                10457,
                18732,
                0,
                0,
                0,
                0,
                14283,
                16163,
                16140,
                14721,
                13392,
                11788,
                11483,
                13909,
                13347,
                13304,
                9995,
                12160,
                10627,
                13592,
                11294,
                12019,
                13196,
                10990,
                11086,
                8979,
                14501,
                11062,
                11911,
                0,
                13062,
                13678,
                13514,
                11122,
                9410,
                5972,
                8823,
                9507,
                10486,
                8008,
                9977,
                8663,
                0,
                8019,
                8708,
                5803,
                4324,
                4162,
                2908,
                5202,
                9150,
                6053,
                2467,
                1869,
                6102,
                1382,
                2848
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                20165,
                24318,
                21087,
                12256,
                14916,
                0,
                0,
                0,
                0,
                12424,
                16724,
                15031,
                10314,
                11331,
                10834,
                14160,
                13899,
                14226,
                10961,
                12952,
                13566,
                10625,
                10881,
                9327,
                10873,
                11979,
                12126,
                10665,
                12754,
                10456,
                10939,
                11985,
                0,
                11116,
                9673,
                11104,
                8906,
                9439,
                5736,
                11268,
                7376,
                10254,
                10016,
                8235,
                6885,
                0,
                6000,
                3203,
                4112,
                4690,
                1937,
                3881,
                4811,
                9797,
                2650,
                3815,
                3632,
                1289,
                2450,
                2426
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                236797,
                223179,
                208616,
                13055,
                149546,
                0,
                0,
                0,
                0,
                11320,
                11971,
                13044,
                10874,
                10440,
                13244,
                9485,
                13201,
                12301,
                9153,
                7900,
                9966,
                10871,
                9773,
                8405,
                11634,
                11033,
                10126,
                8836,
                7942,
                10545,
                8769,
                11319,
                0,
                11942,
                12983,
                9877,
                7677,
                9140,
                7466,
                6914,
                7375,
                6754,
                6313,
                7929,
                6840,
                0,
                7380,
                7936,
                6147,
                3777,
                3790,
                5395,
                1744,
                8313,
                5594,
                2163,
                1209,
                3497,
                328,
                1042
            ],
            name: "940"
        },
        {
            color: "#33a02c",
            data: [
                0,
                0,
                0,
                8132,
                0,
                0,
                0,
                0,
                0,
                14306,
                12463,
                11882,
                10464,
                8536,
                7720,
                9902,
                11709,
                9803,
                8066,
                11602,
                8398,
                6912,
                7262,
                9642,
                5946,
                7666,
                9421,
                10754,
                9953,
                10604,
                8147,
                11492,
                0,
                8039,
                8091,
                9466,
                8038,
                8141,
                3471,
                6087,
                6183,
                10450,
                8113,
                6498,
                5152,
                8233,
                2872,
                2198,
                4989,
                3866,
                133,
                2793,
                5711,
                8920,
                915,
                2184,
                2544,
                1998,
                1597,
                3824
            ],
            name: "930"
        },
        {
            color: "#a6cee3",
            data: [
                0,
                0,
                0,
                9437,
                0,
                0,
                0,
                0,
                0,
                141020,
                10668,
                9441,
                10415,
                9650,
                10483,
                6704,
                8230,
                10281,
                10520,
                8724,
                8611,
                118151,
                9674,
                8981,
                11037,
                6490,
                7932,
                4340,
                8269,
                6897,
                10741,
                6060,
                0,
                7300,
                8489,
                9286,
                7198,
                6481,
                4091,
                7933,
                9195,
                6820,
                96200,
                89707,
                6116,
                5597,
                5843,
                5551,
                1698,
                5878,
                4610,
                2043,
                1178,
                5862,
                4172,
                1222,
                3438,
                1547,
                558,
                2392
            ],
            name: "920"
        },
        {
            color: "#1f78b4",
            data: [
                0,
                0,
                0,
                182657,
                0,
                0,
                0,
                0,
                0,
                0,
                117793,
                110006,
                122259,
                123016,
                117922,
                122388,
                103488,
                99895,
                110825,
                108285,
                107452,
                0,
                103981,
                105195,
                103700,
                104435,
                103524,
                107123,
                101484,
                92005,
                97124,
                89916,
                0,
                89009,
                85465,
                82845,
                96078,
                89780,
                122805,
                96029,
                90979,
                82995,
                0,
                0,
                83999,
                106960,
                65803,
                65680,
                58450,
                58457,
                65109,
                58791,
                54362,
                15594,
                50972,
                51951,
                50492,
                46837,
                56932,
                37182
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2018-04-02 15:36 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/7d779968338362996c1eca6d04269bb42ff808ab\" target=\"blank\">7d77996</a>",
        useHTML: true
    },
    title: {
        text: "Rogue - Outlaw - Patchwerk",
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
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +15</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +10</a>",
            "<a href=\"http://www.wowhead.com/item=140806\">Convergence of Fates</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=151964\">Seeping Scourgewing</a>",
            "<a href=\"http://www.wowhead.com/item=140802\">Nightblooming Frond</a>",
            "<a href=\"http://www.wowhead.com/item=151190\">Specter of Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=137459\">Chaos Talisman</a>",
            "<a href=\"http://www.wowhead.com/item=142167\">Eye of Command</a>",
            "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
            "<a href=\"http://www.wowhead.com/item=139329\">Bloodthirsty Instinct</a>",
            "<a href=\"http://www.wowhead.com/item=147011\">Vial of Ceaseless Toxins</a>",
            "<a href=\"http://www.wowhead.com/item=141585\">Six-Feather Fan</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=142773\">PVP Badge of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
            "<a href=\"http://www.wowhead.com/item=140796\">Entwined Elemental Foci</a>",
            "<a href=\"http://www.wowhead.com/item=141537\">Thrice-Accursed Compass</a>",
            "<a href=\"http://www.wowhead.com/item=133644\">Memento of Angerboda</a>",
            "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=137312\">Nightmare Egg Shell</a>",
            "<a href=\"http://www.wowhead.com/item=137537\">Tirathon's Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=140794\">Arcanogolem Digit</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=142159\">Bloodstained Handkerchief</a>",
            "<a href=\"http://www.wowhead.com/item=137373\">Tempered Egg of Serpentrix</a>",
            "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=133647\">Gift of Radiance</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=142662\">PVP Insignia of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=147009\">Infernal Cinders</a>",
            "<a href=\"http://www.wowhead.com/item=144477\">Splinters of Agronax</a>",
            "<a href=\"http://www.wowhead.com/item=152093\">Gorshalach's Legacy</a>",
            "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
            "<a href=\"http://www.wowhead.com/item=147012\">Umbral Moonglaives</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=140026\">The Devilsaur's Bite</a>",
            "<a href=\"http://www.wowhead.com/item=137539\">Faulty Countermeasure</a>",
            "<a href=\"http://www.wowhead.com/item=139325\">Spontaneous Appendages</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=139334\">Nature's Call</a>",
            "<a href=\"http://www.wowhead.com/item=136715\">Spiked Counterweight</a>",
            "<a href=\"http://www.wowhead.com/item=137406\">Terrorbound Nexus</a>",
            "<a href=\"http://www.wowhead.com/item=140808\">Draught of Souls</a>",
            "<a href=\"http://www.wowhead.com/item=137357\">Mark of Dargrul</a>",
            "<a href=\"http://www.wowhead.com/item=137369\">Giant Ornamental Pearl</a>",
            "<a href=\"http://www.wowhead.com/item=139320\">Ravaged Seed Pod</a>",
            "<a href=\"http://www.wowhead.com/item=137439\">Tiny Oozeling in a Jar</a>",
            "<a href=\"http://www.wowhead.com/item=140027\">Ley Spark</a>",
            "<a href=\"http://www.wowhead.com/item=137486\">Windscar Whetstone</a>"
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
                    text: 'mean: ' + Intl.NumberFormat().format(172780),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 172780.71666666667,
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