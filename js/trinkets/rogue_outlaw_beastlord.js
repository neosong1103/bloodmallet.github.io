Highcharts.chart('rogue_outlaw_beastlord', 
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
                148767,
                130109,
                117761,
                0,
                67568,
                0,
                374151,
                371115,
                349084,
                67835,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                263296,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                60068,
                60462,
                52254,
                36846,
                26702,
                29464,
                0,
                0,
                0,
                24141,
                31924,
                23007,
                23724,
                22115,
                18373,
                18014,
                24364,
                29104,
                30887,
                26293,
                28577,
                34793,
                15194,
                18946,
                21875,
                16332,
                23765,
                20600,
                23142,
                0,
                18107,
                12839,
                24686,
                7749,
                14827,
                19680,
                13546,
                30428,
                16796,
                9889,
                9012,
                19116,
                12743,
                18179,
                1126,
                0,
                9539,
                15213,
                6184,
                6965,
                0,
                7805,
                12188,
                0,
                9599,
                1237,
                4850,
                3220,
                0,
                9651
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                54143,
                53949,
                46162,
                29799,
                313616,
                22037,
                0,
                0,
                0,
                21206,
                19241,
                32562,
                26303,
                22064,
                17667,
                24012,
                23012,
                13684,
                18941,
                21492,
                21687,
                9060,
                20586,
                28095,
                14705,
                18628,
                18407,
                19948,
                9309,
                0,
                28780,
                22534,
                16376,
                10126,
                21334,
                24560,
                23511,
                4730,
                13522,
                23355,
                21061,
                10920,
                15175,
                11217,
                17153,
                0,
                12087,
                12952,
                9953,
                3397,
                5136,
                9728,
                5684,
                9966,
                5241,
                2702,
                10659,
                8392,
                1392,
                10867
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                49074,
                44561,
                36442,
                32666,
                0,
                17279,
                0,
                0,
                0,
                22815,
                21630,
                26423,
                20707,
                22493,
                29730,
                13939,
                27450,
                16918,
                30868,
                20280,
                22926,
                15496,
                17413,
                5878,
                19723,
                23219,
                15651,
                30416,
                26651,
                0,
                10371,
                21885,
                18138,
                3397,
                14864,
                21282,
                7869,
                16892,
                18505,
                29253,
                20561,
                13593,
                15323,
                16244,
                15646,
                0,
                11740,
                10679,
                16155,
                13735,
                12339,
                0,
                7145,
                13128,
                0,
                12163,
                44,
                8447,
                4885,
                18674
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                53093,
                43468,
                39543,
                27479,
                0,
                10789,
                0,
                0,
                0,
                14213,
                23297,
                17430,
                17856,
                14296,
                13811,
                16027,
                24713,
                22999,
                16350,
                16194,
                1131,
                9077,
                16670,
                17235,
                20662,
                16546,
                19576,
                15498,
                8871,
                0,
                16324,
                3867,
                23018,
                3167,
                7636,
                12064,
                19100,
                13517,
                18541,
                14062,
                14800,
                20930,
                10765,
                8486,
                6438,
                0,
                8760,
                10689,
                2190,
                4882,
                7273,
                7130,
                12594,
                2323,
                8380,
                0,
                0,
                3229,
                0,
                12127
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                473534,
                445354,
                386794,
                18033,
                0,
                15405,
                0,
                0,
                0,
                189077,
                17090,
                20985,
                16788,
                20109,
                17653,
                25362,
                11246,
                7916,
                18667,
                21572,
                22871,
                24527,
                16232,
                23028,
                13953,
                5895,
                11437,
                17881,
                24164,
                0,
                12799,
                21468,
                15912,
                15994,
                16163,
                15793,
                14574,
                13530,
                18397,
                8759,
                18590,
                7536,
                14801,
                25280,
                7789,
                0,
                9062,
                1597,
                14122,
                0,
                6587,
                10347,
                1082,
                10593,
                0,
                11070,
                13986,
                9381,
                9870,
                13579
            ],
            name: "940"
        },
        {
            color: "#33a02c",
            data: [
                0,
                0,
                0,
                31295,
                0,
                22506,
                0,
                0,
                0,
                0,
                25527,
                6934,
                13876,
                10248,
                7302,
                17521,
                16222,
                23130,
                13554,
                7855,
                12902,
                15976,
                15994,
                9382,
                16542,
                30649,
                9455,
                23426,
                5402,
                0,
                12916,
                8491,
                11832,
                12092,
                12056,
                14668,
                4350,
                14795,
                6854,
                10184,
                12222,
                12746,
                10573,
                9480,
                20021,
                12107,
                8939,
                16623,
                7695,
                10869,
                3410,
                8029,
                1332,
                1202,
                8484,
                6249,
                3464,
                0,
                3180,
                126
            ],
            name: "930"
        },
        {
            color: "#a6cee3",
            data: [
                0,
                0,
                0,
                250340,
                0,
                9662,
                0,
                0,
                0,
                0,
                197874,
                25223,
                14209,
                15074,
                20611,
                9784,
                19464,
                3904,
                16161,
                6683,
                14311,
                8809,
                10149,
                7388,
                9144,
                157734,
                13295,
                3349,
                17794,
                0,
                13930,
                21267,
                9970,
                3483,
                12767,
                12100,
                15738,
                9249,
                18113,
                15817,
                13316,
                9221,
                134486,
                7538,
                4977,
                21538,
                11897,
                6539,
                8645,
                5814,
                5068,
                5458,
                3411,
                5520,
                7836,
                7232,
                5818,
                9231,
                0,
                10474
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
                260492,
                0,
                0,
                0,
                0,
                0,
                167444,
                186069,
                181396,
                180835,
                171793,
                143423,
                169660,
                139687,
                159358,
                151214,
                156326,
                161823,
                161975,
                152542,
                0,
                157051,
                137369,
                152365,
                0,
                148479,
                142193,
                131458,
                186277,
                135501,
                114815,
                133584,
                128947,
                117566,
                112643,
                109822,
                124633,
                0,
                112682,
                109503,
                142287,
                101413,
                96027,
                99904,
                103988,
                100642,
                80716,
                80713,
                80898,
                76302,
                78474,
                68720,
                61508,
                88192,
                20455
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2018-04-03 22:47 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/7d779968338362996c1eca6d04269bb42ff808ab\" target=\"blank\">7d77996</a>",
        useHTML: true
    },
    title: {
        text: "Rogue - Outlaw - Beastlord",
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
            "<a href=\"http://www.wowhead.com/item=152093\">Gorshalach's Legacy</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=140806\">Convergence of Fates</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality</a>",
            "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
            "<a href=\"http://www.wowhead.com/item=140794\">Arcanogolem Digit</a>",
            "<a href=\"http://www.wowhead.com/item=137459\">Chaos Talisman</a>",
            "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
            "<a href=\"http://www.wowhead.com/item=139329\">Bloodthirsty Instinct</a>",
            "<a href=\"http://www.wowhead.com/item=142167\">Eye of Command</a>",
            "<a href=\"http://www.wowhead.com/item=140802\">Nightblooming Frond</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
            "<a href=\"http://www.wowhead.com/item=141537\">Thrice-Accursed Compass</a>",
            "<a href=\"http://www.wowhead.com/item=140796\">Entwined Elemental Foci</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=142773\">PVP Badge of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
            "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
            "<a href=\"http://www.wowhead.com/item=133644\">Memento of Angerboda</a>",
            "<a href=\"http://www.wowhead.com/item=151190\">Specter of Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=137312\">Nightmare Egg Shell</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=141585\">Six-Feather Fan</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=142662\">PVP Insignia of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=147011\">Vial of Ceaseless Toxins</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=133647\">Gift of Radiance</a>",
            "<a href=\"http://www.wowhead.com/item=137537\">Tirathon's Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=142159\">Bloodstained Handkerchief</a>",
            "<a href=\"http://www.wowhead.com/item=137373\">Tempered Egg of Serpentrix</a>",
            "<a href=\"http://www.wowhead.com/item=137406\">Terrorbound Nexus</a>",
            "<a href=\"http://www.wowhead.com/item=151964\">Seeping Scourgewing</a>",
            "<a href=\"http://www.wowhead.com/item=144477\">Splinters of Agronax</a>",
            "<a href=\"http://www.wowhead.com/item=147012\">Umbral Moonglaives</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=137357\">Mark of Dargrul</a>",
            "<a href=\"http://www.wowhead.com/item=137439\">Tiny Oozeling in a Jar</a>",
            "<a href=\"http://www.wowhead.com/item=147009\">Infernal Cinders</a>",
            "<a href=\"http://www.wowhead.com/item=139334\">Nature's Call</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=140026\">The Devilsaur's Bite</a>",
            "<a href=\"http://www.wowhead.com/item=137539\">Faulty Countermeasure</a>",
            "<a href=\"http://www.wowhead.com/item=137369\">Giant Ornamental Pearl</a>",
            "<a href=\"http://www.wowhead.com/item=139320\">Ravaged Seed Pod</a>",
            "<a href=\"http://www.wowhead.com/item=136715\">Spiked Counterweight</a>",
            "<a href=\"http://www.wowhead.com/item=139325\">Spontaneous Appendages</a>",
            "<a href=\"http://www.wowhead.com/item=137486\">Windscar Whetstone</a>",
            "<a href=\"http://www.wowhead.com/item=140027\">Ley Spark</a>",
            "<a href=\"http://www.wowhead.com/item=140808\">Draught of Souls</a>"
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
                    text: 'mean: ' + Intl.NumberFormat().format(268249),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 268249.65,
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