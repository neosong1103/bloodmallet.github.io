Highcharts.chart('rogue_subtlety_beastlord',
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
                        click: function (event) { var chart = this.series.yAxis; chart.removePlotLine('helperLine'); chart.addPlotLine({ value: this.stackY, color: '#000', width: 2, id: 'helperLine', zIndex: 5, label: { text: this.series.name + ' ' + this.category + ': ' + Intl.NumberFormat().format(this.stackY), align: 'left', verticalAlign: 'bottom', rotation: 0, y: -5 } }); }
                    }
                },
                stacking: "normal"
            },
            series: {
                borderColor: "#151515",
                events: {
                    legendItemClick: function () { return false; }
                }
            }
        },
        series: [
            {
                color: "#fdbf6f",
                data: [
                    87128,
                    84852,
                    84585,
                    0,
                    374967,
                    48749,
                    365389,
                    0,
                    65340,
                    341769,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    266233,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
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
                    40585,
                    46221,
                    27908,
                    35711,
                    0,
                    28804,
                    0,
                    26309,
                    12286,
                    0,
                    26013,
                    22879,
                    31945,
                    27385,
                    21787,
                    20233,
                    22306,
                    21775,
                    18523,
                    32075,
                    37108,
                    5873,
                    18464,
                    25395,
                    22891,
                    30726,
                    22512,
                    20070,
                    19125,
                    0,
                    22981,
                    21498,
                    20533,
                    32141,
                    13686,
                    24085,
                    15210,
                    23613,
                    15451,
                    23277,
                    20746,
                    10520,
                    17875,
                    6773,
                    6147,
                    0,
                    14895,
                    13452,
                    21351,
                    15912,
                    9479,
                    1272,
                    1471,
                    14557,
                    8568,
                    0,
                    0,
                    0,
                    9529,
                    7248
                ],
                name: "980"
            },
            {
                color: "#ff7f00",
                data: [
                    34665,
                    38106,
                    39601,
                    36004,
                    0,
                    289673,
                    0,
                    31443,
                    32931,
                    0,
                    22277,
                    28411,
                    21020,
                    20109,
                    31760,
                    23706,
                    28863,
                    20628,
                    18965,
                    21055,
                    9588,
                    31162,
                    21607,
                    20703,
                    13634,
                    19587,
                    17645,
                    23302,
                    19611,
                    0,
                    21095,
                    21463,
                    19200,
                    15996,
                    20627,
                    17538,
                    28773,
                    9885,
                    19148,
                    20668,
                    15594,
                    0,
                    23284,
                    20649,
                    12336,
                    0,
                    16933,
                    5457,
                    0,
                    0,
                    13127,
                    11816,
                    6351,
                    0,
                    9146,
                    7209,
                    3767,
                    10801,
                    0,
                    4672
                ],
                name: "970"
            },
            {
                color: "#fb9a99",
                data: [
                    32284,
                    28677,
                    30849,
                    29229,
                    0,
                    0,
                    0,
                    28600,
                    14475,
                    0,
                    20375,
                    17802,
                    31448,
                    26772,
                    25361,
                    22887,
                    4840,
                    16794,
                    17965,
                    18936,
                    22377,
                    9919,
                    18969,
                    17358,
                    19456,
                    16674,
                    19718,
                    25956,
                    16864,
                    0,
                    13905,
                    16109,
                    24507,
                    16778,
                    11568,
                    20222,
                    22518,
                    27582,
                    21222,
                    14264,
                    4899,
                    22416,
                    13888,
                    4821,
                    11624,
                    0,
                    5513,
                    11384,
                    12941,
                    3255,
                    0,
                    4661,
                    9668,
                    10363,
                    1775,
                    10049,
                    8153,
                    1586,
                    8222,
                    15322
                ],
                name: "960"
            },
            {
                color: "#e31a1c",
                data: [
                    35933,
                    21993,
                    28388,
                    27796,
                    0,
                    0,
                    0,
                    17993,
                    20730,
                    0,
                    21040,
                    21361,
                    11871,
                    22877,
                    15376,
                    15891,
                    26092,
                    24137,
                    27389,
                    15720,
                    13600,
                    28046,
                    15518,
                    17416,
                    12589,
                    14173,
                    20816,
                    14308,
                    24032,
                    0,
                    18103,
                    11424,
                    5682,
                    19643,
                    10534,
                    6492,
                    7835,
                    8340,
                    12693,
                    18086,
                    24225,
                    274,
                    6350,
                    16375,
                    16808,
                    0,
                    8838,
                    10172,
                    13699,
                    6118,
                    11235,
                    9817,
                    1338,
                    8685,
                    8922,
                    3474,
                    3117,
                    10068,
                    0,
                    7721
                ],
                name: "950"
            },
            {
                color: "#b2df8a",
                data: [
                    324202,
                    315153,
                    278688,
                    21468,
                    0,
                    0,
                    0,
                    21016,
                    198662,
                    0,
                    14031,
                    17647,
                    30271,
                    25224,
                    31852,
                    14256,
                    16441,
                    7670,
                    2618,
                    17147,
                    19708,
                    4697,
                    13271,
                    11999,
                    18554,
                    16619,
                    22716,
                    24820,
                    12900,
                    0,
                    7313,
                    18224,
                    24535,
                    9027,
                    19164,
                    21587,
                    19546,
                    18659,
                    14896,
                    9828,
                    4733,
                    7576,
                    21671,
                    7053,
                    6878,
                    0,
                    1505,
                    10291,
                    0,
                    10236,
                    5251,
                    6353,
                    5553,
                    0,
                    2439,
                    13983,
                    3095,
                    0,
                    1273,
                    7863
                ],
                name: "940"
            },
            {
                color: "#33a02c",
                data: [
                    0,
                    0,
                    0,
                    32594,
                    0,
                    0,
                    0,
                    15608,
                    0,
                    0,
                    8590,
                    18131,
                    9300,
                    8133,
                    9324,
                    14981,
                    8160,
                    18039,
                    26495,
                    19000,
                    16625,
                    18432,
                    9000,
                    13473,
                    24201,
                    6493,
                    9247,
                    0,
                    19468,
                    0,
                    21532,
                    13317,
                    12356,
                    19735,
                    11878,
                    8131,
                    10098,
                    10899,
                    4311,
                    13325,
                    9408,
                    3148,
                    5369,
                    16065,
                    5998,
                    15786,
                    13796,
                    9891,
                    8292,
                    6962,
                    1740,
                    3580,
                    9954,
                    7205,
                    4075,
                    0,
                    6770,
                    0,
                    6799,
                    9280
                ],
                name: "930"
            },
            {
                color: "#a6cee3",
                data: [
                    0,
                    0,
                    0,
                    269591,
                    0,
                    0,
                    0,
                    23274,
                    0,
                    0,
                    17920,
                    8354,
                    196316,
                    22540,
                    16341,
                    18886,
                    17305,
                    197360,
                    11597,
                    14432,
                    12293,
                    12535,
                    13615,
                    11155,
                    3741,
                    15302,
                    14346,
                    21291,
                    12430,
                    0,
                    6731,
                    16123,
                    18282,
                    3682,
                    9720,
                    16872,
                    10101,
                    13030,
                    16371,
                    14770,
                    18095,
                    15164,
                    13809,
                    0,
                    137018,
                    6318,
                    11270,
                    2328,
                    2993,
                    0,
                    6154,
                    6800,
                    2104,
                    8626,
                    13186,
                    0,
                    0,
                    11707,
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
                    186665,
                    0,
                    0,
                    206437,
                    201050,
                    0,
                    168583,
                    168894,
                    188896,
                    182458,
                    0,
                    172494,
                    157562,
                    164433,
                    183034,
                    182788,
                    172152,
                    174238,
                    166616,
                    155005,
                    145508,
                    147673,
                    0,
                    152828,
                    143080,
                    135820,
                    137582,
                    156632,
                    133928,
                    134564,
                    134121,
                    138133,
                    127126,
                    141063,
                    179293,
                    131038,
                    134595,
                    0,
                    170864,
                    103439,
                    109061,
                    111780,
                    116888,
                    102741,
                    98753,
                    98974,
                    86363,
                    77222,
                    57807,
                    53622,
                    39202,
                    56388,
                    6096
                ],
                name: "910"
            }
        ],
        subtitle: {
            text: "UTC 2018-04-03 22:47 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/7d779968338362996c1eca6d04269bb42ff808ab\" target=\"blank\">7d77996</a>",
            useHTML: true
        },
        title: {
            text: "Rogue - Subtlety DfA - Beastlord",
            useHTML: true
        },
        tooltip: {
            backgroundColor: "#eee",
            borderColor: "#bbb",
            formatter: function () { var s = '<div style=\"background-color:#eee; padding:12px;\"><b>' + this.x + '</b>'; var cumulative_amount = 0; for (var i = this.points.length - 1; i >= 0; i--) { cumulative_amount += this.points[i].y; if (this.points[i].y !== 0) { s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name + '</span>: ' + Intl.NumberFormat().format(cumulative_amount); } } s += '</div>'; return s; },
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
                "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
                "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
                "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
                "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
                "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
                "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality</a>",
                "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
                "<a href=\"http://www.wowhead.com/item=142167\">Eye of Command</a>",
                "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
                "<a href=\"http://www.wowhead.com/item=152093\">Gorshalach's Legacy</a>",
                "<a href=\"http://www.wowhead.com/item=140794\">Arcanogolem Digit</a>",
                "<a href=\"http://www.wowhead.com/item=151190\">Specter of Betrayal</a>",
                "<a href=\"http://www.wowhead.com/item=142506,bonus_id=605\">Stat Stick (Mastery)</a>",
                "<a href=\"http://www.wowhead.com/item=147012\">Umbral Moonglaives</a>",
                "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
                "<a href=\"http://www.wowhead.com/item=140806\">Convergence of Fates</a>",
                "<a href=\"http://www.wowhead.com/item=140802\">Nightblooming Frond</a>",
                "<a href=\"http://www.wowhead.com/item=141537\">Thrice-Accursed Compass</a>",
                "<a href=\"http://www.wowhead.com/item=142506,bonus_id=607\">Stat Stick (Versatility)</a>",
                "<a href=\"http://www.wowhead.com/item=142506,bonus_id=603\">Stat Stick (Crit)</a>",
                "<a href=\"http://www.wowhead.com/item=133644\">Memento of Angerboda</a>",
                "<a href=\"http://www.wowhead.com/item=140796\">Entwined Elemental Foci</a>",
                "<a href=\"http://www.wowhead.com/item=133647\">Gift of Radiance</a>",
                "<a href=\"http://www.wowhead.com/item=137459\">Chaos Talisman</a>",
                "<a href=\"http://www.wowhead.com/item=147011\">Vial of Ceaseless Toxins</a>",
                "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
                "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
                "<a href=\"http://www.wowhead.com/item=142773\">PVP Badge of Conquest</a>",
                "<a href=\"http://www.wowhead.com/item=139329\">Bloodthirsty Instinct</a>",
                "<a href=\"http://www.wowhead.com/item=141585\">Six-Feather Fan</a>",
                "<a href=\"http://www.wowhead.com/item=142159\">Bloodstained Handkerchief</a>",
                "<a href=\"http://www.wowhead.com/item=142662\">PVP Insignia of Conquest</a>",
                "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
                "<a href=\"http://www.wowhead.com/item=137537\">Tirathon's Betrayal</a>",
                "<a href=\"http://www.wowhead.com/item=137312\">Nightmare Egg Shell</a>",
                "<a href=\"http://www.wowhead.com/item=142506,bonus_id=604\">Stat Stick (Haste)</a>",
                "<a href=\"http://www.wowhead.com/item=137373\">Tempered Egg of Serpentrix</a>",
                "<a href=\"http://www.wowhead.com/item=137406\">Terrorbound Nexus</a>",
                "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
                "<a href=\"http://www.wowhead.com/item=144477\">Splinters of Agronax</a>",
                "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
                "<a href=\"http://www.wowhead.com/item=151964\">Seeping Scourgewing</a>",
                "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
                "<a href=\"http://www.wowhead.com/item=147009\">Infernal Cinders</a>",
                "<a href=\"http://www.wowhead.com/item=137357\">Mark of Dargrul</a>",
                "<a href=\"http://www.wowhead.com/item=140026\">The Devilsaur's Bite</a>",
                "<a href=\"http://www.wowhead.com/item=139334\">Nature's Call</a>",
                "<a href=\"http://www.wowhead.com/item=139325\">Spontaneous Appendages</a>",
                "<a href=\"http://www.wowhead.com/item=137486\">Windscar Whetstone</a>",
                "<a href=\"http://www.wowhead.com/item=137439\">Tiny Oozeling in a Jar</a>",
                "<a href=\"http://www.wowhead.com/item=137369\">Giant Ornamental Pearl</a>",
                "<a href=\"http://www.wowhead.com/item=137539\">Faulty Countermeasure</a>",
                "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
                "<a href=\"http://www.wowhead.com/item=139320\">Ravaged Seed Pod</a>",
                "<a href=\"http://www.wowhead.com/item=136715\">Spiked Counterweight</a>",
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
                        text: 'mean: ' + Intl.NumberFormat().format(261547),
                        verticalAlign: "bottom",
                        x: 10,
                        y: -23
                    },
                    value: 261547.36666666667,
                    width: 2,
                    zIndex: 2
                }
            ],
            stackLabels: {
                enabled: true,
                formatter: function () { return Intl.NumberFormat().format(this.total); },
                style: {
                    textOutline: false
                }
            },
            title: {
                text: "\u0394 Damage per second"
            }
        }
    });
