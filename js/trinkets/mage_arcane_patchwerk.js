Highcharts.chart('mage_arcane_patchwerk', 
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
                41531,
                0,
                44375,
                273525,
                40914,
                266848,
                259230,
                0,
                214798,
                27419,
                0,
                0,
                0,
                27599,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                21829,
                26687,
                18696,
                0,
                17699,
                0,
                0,
                15738,
                0,
                15397,
                13454,
                19300,
                7011,
                13843,
                13046,
                16342,
                15048,
                11882,
                15891,
                14623,
                13276,
                11825,
                11105,
                10326,
                13959,
                12220,
                7886,
                9633,
                10327,
                10089,
                11641,
                10358,
                9618,
                12779,
                12820,
                14374,
                6957,
                6390,
                9094,
                14201,
                8520,
                10740,
                10944,
                12858,
                9755,
                9173,
                8601,
                10143,
                8847,
                8486,
                7060,
                7935,
                0,
                2315,
                6915,
                4618,
                3638,
                7044,
                5689,
                1983,
                4845
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                16243,
                19977,
                16454,
                0,
                16542,
                0,
                0,
                15397,
                0,
                166066,
                11355,
                15053,
                7865,
                12081,
                13776,
                14210,
                11469,
                13520,
                13163,
                8515,
                9450,
                9038,
                10954,
                10202,
                9089,
                10568,
                11920,
                10236,
                9527,
                10267,
                11367,
                10326,
                10234,
                14915,
                7242,
                10305,
                10180,
                10227,
                8565,
                9682,
                9408,
                8388,
                10954,
                9818,
                8259,
                6852,
                7319,
                12966,
                5737,
                7350,
                8003,
                9153,
                0,
                6962,
                5603,
                5566,
                5567,
                3640,
                1056,
                4474,
                0
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                17929,
                16360,
                18089,
                0,
                13402,
                0,
                0,
                14314,
                0,
                0,
                12739,
                14635,
                4900,
                10620,
                13757,
                9922,
                7944,
                10097,
                14929,
                10093,
                10326,
                11506,
                10549,
                10640,
                11106,
                11429,
                10505,
                10068,
                7632,
                9594,
                8335,
                11630,
                9747,
                10603,
                8387,
                10409,
                7668,
                8946,
                8850,
                11616,
                9571,
                7289,
                10742,
                9093,
                6997,
                9285,
                7284,
                8636,
                7293,
                6161,
                7584,
                3164,
                0,
                5360,
                4008,
                7139,
                4840,
                2907,
                4396,
                666,
                3226
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                12373,
                20302,
                12008,
                0,
                13968,
                0,
                0,
                12434,
                0,
                0,
                9955,
                12677,
                8365,
                5785,
                11982,
                13563,
                12597,
                9207,
                9211,
                9395,
                9343,
                11359,
                7320,
                5842,
                9768,
                6900,
                8727,
                10699,
                12110,
                8759,
                10232,
                6590,
                10394,
                9081,
                9749,
                11325,
                6617,
                6714,
                8096,
                7243,
                6385,
                6444,
                7560,
                9749,
                6889,
                5985,
                6117,
                7818,
                6647,
                6064,
                4064,
                7160,
                0,
                2933,
                5755,
                2589,
                5790,
                5642,
                3586,
                4024,
                2437
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                185007,
                17055,
                181779,
                0,
                170549,
                0,
                0,
                13012,
                0,
                0,
                7779,
                11881,
                5468,
                127494,
                8960,
                8218,
                7090,
                10590,
                10076,
                7194,
                9068,
                7473,
                11151,
                9911,
                6964,
                8949,
                7491,
                10178,
                9578,
                10047,
                6332,
                8017,
                5875,
                8913,
                6016,
                9429,
                8549,
                7740,
                5570,
                10766,
                8027,
                8146,
                9096,
                7447,
                7126,
                3596,
                5284,
                8550,
                5221,
                5439,
                5400,
                6711,
                0,
                4378,
                4734,
                3831,
                4276,
                3424,
                3383,
                1087,
                1656
            ],
            name: "940"
        },
        {
            color: "#33a02c",
            data: [
                0,
                15247,
                0,
                0,
                0,
                0,
                0,
                7907,
                0,
                0,
                9851,
                11720,
                4381,
                0,
                10747,
                10237,
                9405,
                7707,
                11838,
                9423,
                9891,
                5814,
                4511,
                6645,
                6352,
                7547,
                8900,
                7680,
                5073,
                8090,
                8679,
                9196,
                8171,
                7932,
                4973,
                7420,
                5745,
                6376,
                6755,
                5923,
                4648,
                4755,
                8859,
                8495,
                6415,
                7205,
                6711,
                5371,
                7354,
                5319,
                7700,
                4199,
                6098,
                4004,
                3985,
                3860,
                2223,
                3248,
                2848,
                2634,
                0
            ],
            name: "930"
        },
        {
            color: "#a6cee3",
            data: [
                0,
                12686,
                0,
                0,
                0,
                0,
                0,
                137061,
                0,
                0,
                9407,
                113781,
                8543,
                0,
                124553,
                9427,
                124431,
                121264,
                7360,
                8634,
                6721,
                6747,
                6920,
                7566,
                9254,
                6105,
                6437,
                6511,
                7770,
                4704,
                5760,
                4625,
                4753,
                9599,
                6043,
                7822,
                5465,
                5753,
                5771,
                8494,
                6851,
                5365,
                5192,
                5184,
                4589,
                4341,
                5163,
                7605,
                4518,
                2413,
                4579,
                3170,
                5900,
                6577,
                2693,
                6107,
                3839,
                5783,
                1385,
                1631,
                3404
            ],
            name: "920"
        },
        {
            color: "#1f78b4",
            data: [
                0,
                165366,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                131265,
                0,
                152226,
                0,
                0,
                111987,
                0,
                0,
                100694,
                109901,
                104928,
                102475,
                102503,
                102453,
                96340,
                98240,
                100075,
                96486,
                97882,
                97977,
                90491,
                91876,
                93419,
                75662,
                91547,
                74797,
                89064,
                86807,
                86161,
                70821,
                83115,
                84705,
                70117,
                70375,
                81552,
                84391,
                83857,
                65999,
                78488,
                82175,
                76193,
                72262,
                96128,
                66868,
                63528,
                62540,
                63734,
                61336,
                57225,
                56148,
                42095
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2018-04-02 15:36 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/7d779968338362996c1eca6d04269bb42ff808ab\" target=\"blank\">7d77996</a>",
        useHTML: true
    },
    title: {
        text: "Mage - Arcane - Patchwerk",
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
            "<a href=\"http://www.wowhead.com/item=147017\">Tarnished Sentinel Medallion</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +10</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=151969\">Terminus Signaling Beacon</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=147002\">Charm of the Rising Tide</a>",
            "<a href=\"http://www.wowhead.com/item=151971\">Sheath of Asara</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess</a>",
            "<a href=\"http://www.wowhead.com/item=151970\">Vitality Resonator</a>",
            "<a href=\"http://www.wowhead.com/item=147016\">Terror From Below</a>",
            "<a href=\"http://www.wowhead.com/item=151955\">Acrid Catalyst Injector</a>",
            "<a href=\"http://www.wowhead.com/item=151962\">Prototype Personnel Decimator</a>",
            "<a href=\"http://www.wowhead.com/item=147019\">Tome of Unraveling Sanity</a>",
            "<a href=\"http://www.wowhead.com/item=142779\">PVP Badge of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=137541\">Moonlit Prism</a>",
            "<a href=\"http://www.wowhead.com/item=144480\">Dreadstone of Endless Shadows</a>",
            "<a href=\"http://www.wowhead.com/item=140792\">Erratic Metronome</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=141536\">Padawsen's Unlucky Charm</a>",
            "<a href=\"http://www.wowhead.com/item=141584\">Eyasu's Mulligan</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=140809\">Whispers in the Dark</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=137367\">Stormsinger Fulmination Charge</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=137485\">Infernal Writ</a>",
            "<a href=\"http://www.wowhead.com/item=140804\">Star Gate</a>",
            "<a href=\"http://www.wowhead.com/item=147018\">Spectral Thurible</a>",
            "<a href=\"http://www.wowhead.com/item=151310\">Reality Breacher</a>",
            "<a href=\"http://www.wowhead.com/item=137349\">Naraxas' Spiked Tongue</a>",
            "<a href=\"http://www.wowhead.com/item=142668\">PVP Insignia of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=142165\">Deteriorated Construct Core</a>",
            "<a href=\"http://www.wowhead.com/item=140030\">Devilsaur Shock-Baton</a>",
            "<a href=\"http://www.wowhead.com/item=137306\">Oakheart's Gnarled Root</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Bough of Corruption</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Twisting Wind</a>",
            "<a href=\"http://www.wowhead.com/item=140801\">Fury of the Burning Sky</a>",
            "<a href=\"http://www.wowhead.com/item=139321\">Swarming Plaguehive</a>",
            "<a href=\"http://www.wowhead.com/item=137433\">Obelisk of the Void</a>",
            "<a href=\"http://www.wowhead.com/item=137398\">Portable Manacracker</a>",
            "<a href=\"http://www.wowhead.com/item=140798\">Icon of Rot</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=139326\">Wriggling Sinew</a>",
            "<a href=\"http://www.wowhead.com/item=142157\">Aran's Relaxing Ruby</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=140800\">Pharameres Forbidden Grimoire</a>",
            "<a href=\"http://www.wowhead.com/item=136716\">Caged Horror</a>",
            "<a href=\"http://www.wowhead.com/item=133641\">Eye of Skovald</a>",
            "<a href=\"http://www.wowhead.com/item=142160\">Mrrgria's Favor</a>",
            "<a href=\"http://www.wowhead.com/item=137301\">Corrupted Starlight</a>",
            "<a href=\"http://www.wowhead.com/item=137446\">Elementium Bomb Squirrel Generator</a>",
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
                    text: 'mean: ' + Intl.NumberFormat().format(163033),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 163033.0655737705,
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