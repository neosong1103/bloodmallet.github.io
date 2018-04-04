Highcharts.chart('warrior_fury_patchwerk', 
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
                49664,
                47496,
                46542,
                291973,
                288922,
                280645,
                0,
                40795,
                236741,
                0,
                28783,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                20907,
                19074,
                21691,
                0,
                0,
                0,
                11807,
                16262,
                0,
                7112,
                12645,
                15209,
                15767,
                15743,
                13804,
                13849,
                12082,
                16656,
                11635,
                13764,
                10352,
                12415,
                11499,
                12771,
                8191,
                9433,
                11094,
                17073,
                6795,
                15360,
                10026,
                10989,
                13686,
                9315,
                9734,
                8746,
                8920,
                5440,
                14767,
                7767,
                11984,
                8860,
                15217,
                11044,
                9995,
                10602,
                7867,
                11657,
                5538,
                26970,
                4115,
                0,
                3273,
                6665,
                5113,
                4913
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                19573,
                22390,
                19018,
                0,
                0,
                0,
                11795,
                17005,
                0,
                8296,
                177385,
                15550,
                18740,
                11613,
                11059,
                9466,
                10954,
                13072,
                15570,
                11695,
                13795,
                8273,
                11533,
                9665,
                11956,
                10982,
                8634,
                14274,
                11088,
                12021,
                9903,
                10660,
                9027,
                9974,
                12156,
                10705,
                10091,
                11330,
                5472,
                12407,
                12085,
                13233,
                9006,
                8758,
                6194,
                8435,
                8439,
                9362,
                6403,
                20462,
                6752,
                0,
                5603,
                3348,
                5597,
                5057
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                15750,
                15492,
                15035,
                0,
                0,
                0,
                7881,
                14917,
                0,
                9504,
                0,
                12351,
                14689,
                8778,
                8489,
                9113,
                8713,
                15914,
                12446,
                11636,
                9929,
                9183,
                9232,
                8850,
                10542,
                9873,
                11366,
                13966,
                9399,
                13837,
                10269,
                9304,
                9867,
                11997,
                9992,
                12939,
                9234,
                8969,
                11107,
                9066,
                10947,
                6703,
                11770,
                4992,
                11144,
                6163,
                3074,
                9614,
                7643,
                21062,
                6227,
                0,
                3772,
                5218,
                5618,
                3367
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                17424,
                15729,
                16320,
                0,
                0,
                0,
                9480,
                13500,
                0,
                8556,
                0,
                11070,
                13796,
                11770,
                10017,
                10430,
                10402,
                9680,
                8415,
                8262,
                7417,
                11664,
                7048,
                8402,
                9451,
                8949,
                8490,
                8110,
                7745,
                9642,
                9330,
                9219,
                6657,
                6858,
                7941,
                6046,
                7677,
                7699,
                6839,
                8884,
                9675,
                9389,
                12116,
                9995,
                5985,
                5572,
                5636,
                10516,
                4871,
                16721,
                2430,
                0,
                5603,
                1636,
                5216,
                5132
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                199175,
                195558,
                184400,
                0,
                0,
                0,
                8596,
                135267,
                0,
                8436,
                0,
                11402,
                10971,
                8876,
                10761,
                7255,
                9048,
                13513,
                10294,
                8487,
                12438,
                6188,
                8356,
                10683,
                9586,
                8590,
                8837,
                8479,
                8731,
                9346,
                5791,
                7345,
                7515,
                9603,
                6452,
                7787,
                4925,
                5131,
                4781,
                6254,
                10414,
                5793,
                8671,
                5982,
                5717,
                7541,
                2230,
                7101,
                4877,
                16170,
                4795,
                0,
                2978,
                6124,
                3757,
                445
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
                8561,
                0,
                0,
                5875,
                0,
                11721,
                12934,
                9607,
                5931,
                8325,
                5870,
                8636,
                6203,
                5804,
                6356,
                9612,
                10118,
                4668,
                4804,
                6883,
                7749,
                11446,
                6101,
                9873,
                8241,
                9714,
                8841,
                4626,
                9902,
                7230,
                8277,
                8152,
                6963,
                7247,
                8124,
                6774,
                6923,
                7298,
                5615,
                6879,
                4872,
                10160,
                5721,
                16429,
                5407,
                6319,
                4735,
                2061,
                5038,
                2007
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
                3195,
                0,
                0,
                8118,
                0,
                132549,
                9516,
                116914,
                8564,
                7379,
                9995,
                8546,
                10247,
                10140,
                8260,
                8914,
                7779,
                8922,
                8736,
                7792,
                7675,
                8789,
                6948,
                8600,
                8775,
                104358,
                7747,
                8988,
                5364,
                6608,
                105264,
                4715,
                5561,
                7495,
                7592,
                4772,
                7099,
                3133,
                4898,
                4626,
                4360,
                5603,
                4731,
                16280,
                3302,
                4946,
                2772,
                5387,
                2847,
                2992
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
                189683,
                0,
                0,
                166732,
                0,
                0,
                107063,
                0,
                114192,
                113584,
                111908,
                92393,
                101786,
                104322,
                104261,
                101626,
                102114,
                103226,
                103825,
                103903,
                101991,
                82900,
                107909,
                85284,
                100500,
                0,
                97821,
                99077,
                98452,
                95049,
                0,
                101282,
                94828,
                90879,
                75894,
                90885,
                75505,
                90209,
                89788,
                88198,
                97808,
                68119,
                77763,
                -16552,
                77212,
                96944,
                75776,
                72994,
                68062,
                60618
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2018-04-02 15:36 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/7d779968338362996c1eca6d04269bb42ff808ab\" target=\"blank\">7d77996</a>",
        useHTML: true
    },
    title: {
        text: "Warrior - Fury - Patchwerk",
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
            "<a href=\"http://www.wowhead.com/item=154176\">Khaz'goroths Courage +10</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=140806\">Convergence of Fates</a>",
            "<a href=\"http://www.wowhead.com/item=154176\">Khaz'goroths Courage</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=151964\">Seeping Scourgewing</a>",
            "<a href=\"http://www.wowhead.com/item=151190\">Specter of Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
            "<a href=\"http://www.wowhead.com/item=142167\">Eye of Command</a>",
            "<a href=\"http://www.wowhead.com/item=137459\">Chaos Talisman</a>",
            "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
            "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
            "<a href=\"http://www.wowhead.com/item=147012\">Umbral Moonglaives</a>",
            "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
            "<a href=\"http://www.wowhead.com/item=144482\">Fel-Oiled Infernal Machine</a>",
            "<a href=\"http://www.wowhead.com/item=133647\">Gift of Radiance</a>",
            "<a href=\"http://www.wowhead.com/item=141535\">Ettin Fingernail</a>",
            "<a href=\"http://www.wowhead.com/item=140796\">Entwined Elemental Foci</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=133644\">Memento of Angerboda</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=147011\">Vial of Ceaseless Toxins</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=139328\">Ursoc's Rending Paw</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
            "<a href=\"http://www.wowhead.com/item=137439\">Tiny Oozeling in a Jar</a>",
            "<a href=\"http://www.wowhead.com/item=137312\">Nightmare Egg Shell</a>",
            "<a href=\"http://www.wowhead.com/item=142669\">PVP Badge of Victory</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=152093\">Gorshalach's Legacy</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=139325\">Spontaneous Appendages</a>",
            "<a href=\"http://www.wowhead.com/item=147009\">Infernal Cinders</a>",
            "<a href=\"http://www.wowhead.com/item=142159\">Bloodstained Handkerchief</a>",
            "<a href=\"http://www.wowhead.com/item=137539\">Faulty Countermeasure</a>",
            "<a href=\"http://www.wowhead.com/item=140799\">Might of Krosus</a>",
            "<a href=\"http://www.wowhead.com/item=142784\">PVP Insignia of Victory</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=137406\">Terrorbound Nexus</a>",
            "<a href=\"http://www.wowhead.com/item=139334\">Nature's Call</a>",
            "<a href=\"http://www.wowhead.com/item=140790\">Claw of the Crystalline Scorpid</a>",
            "<a href=\"http://www.wowhead.com/item=137486\">Windscar Whetstone</a>",
            "<a href=\"http://www.wowhead.com/item=140808\">Draught of Souls</a>",
            "<a href=\"http://www.wowhead.com/item=139320\">Ravaged Seed Pod</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=136715\">Spiked Counterweight</a>",
            "<a href=\"http://www.wowhead.com/item=140034\">Impact Tremor</a>",
            "<a href=\"http://www.wowhead.com/item=137357\">Mark of Dargrul</a>",
            "<a href=\"http://www.wowhead.com/item=137369\">Giant Ornamental Pearl</a>"
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
                    text: 'mean: ' + Intl.NumberFormat().format(175815),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 175815.35714285713,
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