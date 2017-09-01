Highcharts.chart('warlock_affliction_beastlord', 
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
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category,                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
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
            color: "#ffeb3b",
            data: [
                0,
                215613,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                19022,
                0,
                1443,
                7131,
                11097,
                11783,
                10312,
                17742,
                14476,
                11677,
                12672,
                5258,
                10707,
                10709,
                11230,
                8978,
                10404,
                8678,
                9824,
                9075,
                8072,
                8043,
                14026,
                7893,
                4705,
                4628,
                8417,
                3056,
                5104,
                5644,
                8533,
                10725,
                6108,
                0,
                0,
                8264,
                6200,
                3569,
                3679,
                6369,
                9685,
                9425,
                1783,
                0,
                4807,
                9738,
                10150,
                0,
                0,
                1746
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                18938,
                0,
                15923,
                20718,
                18115,
                15109,
                15136,
                4144,
                7226,
                7304,
                11089,
                9012,
                8591,
                7534,
                13844,
                9673,
                8222,
                7730,
                9808,
                7188,
                7082,
                14290,
                4094,
                5426,
                8268,
                7984,
                4688,
                11798,
                8250,
                9650,
                10309,
                9123,
                9810,
                7870,
                0,
                9501,
                4693,
                7151,
                766,
                6501,
                671,
                1358,
                8415,
                0,
                12842,
                1009,
                6730,
                7698,
                4765,
                719
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                19137,
                0,
                2649,
                6300,
                11641,
                2365,
                7209,
                10173,
                9234,
                11356,
                12379,
                12379,
                9565,
                6562,
                14390,
                6626,
                10822,
                5039,
                11568,
                7886,
                10374,
                10077,
                7075,
                7247,
                11533,
                9194,
                10547,
                761,
                6003,
                2062,
                989,
                10204,
                6658,
                4657,
                0,
                1661,
                8502,
                5749,
                8788,
                4668,
                6443,
                3546,
                3354,
                0,
                1552,
                0,
                1813,
                1040,
                4061,
                2488
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                17272,
                0,
                6874,
                9049,
                8367,
                14496,
                10239,
                7184,
                8527,
                11161,
                11925,
                897,
                6666,
                10569,
                6953,
                6548,
                2671,
                10214,
                7253,
                7384,
                9761,
                7644,
                9788,
                7963,
                6466,
                3768,
                5979,
                10020,
                9371,
                9173,
                7771,
                7204,
                14613,
                9144,
                0,
                7277,
                5902,
                7560,
                2122,
                4194,
                107,
                7179,
                8401,
                0,
                6826,
                6876,
                8743,
                1285,
                2740,
                2533
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                13744,
                0,
                7704,
                13007,
                10520,
                14774,
                10201,
                3210,
                9904,
                3238,
                9101,
                11091,
                7684,
                7756,
                8014,
                12099,
                8601,
                5692,
                4685,
                7744,
                0,
                84177,
                3282,
                6197,
                4316,
                11639,
                6917,
                8402,
                3495,
                3524,
                736,
                5249,
                5262,
                6473,
                8659,
                7543,
                2374,
                3397,
                3782,
                5964,
                8132,
                4286,
                1764,
                7627,
                6802,
                0,
                2614,
                1536,
                0,
                996
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                173335,
                0,
                14763,
                4853,
                10470,
                6173,
                8240,
                117230,
                105322,
                7524,
                7454,
                7994,
                5903,
                3477,
                10872,
                4166,
                10599,
                8276,
                5738,
                6478,
                13028,
                0,
                84927,
                3837,
                6224,
                2846,
                2910,
                4573,
                6039,
                6918,
                9581,
                9677,
                4356,
                77843,
                7163,
                2665,
                6536,
                0,
                1561,
                303,
                0,
                6424,
                5393,
                3029,
                1200,
                2164,
                2090,
                6371,
                4217,
                4127
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                160522,
                137864,
                120424,
                120737,
                118514,
                0,
                0,
                99324,
                86339,
                102052,
                97953,
                100315,
                79887,
                93535,
                89961,
                95138,
                89404,
                87691,
                84689,
                0,
                0,
                84401,
                80030,
                79499,
                79053,
                79743,
                78790,
                78318,
                76227,
                60266,
                61702,
                0,
                89854,
                65710,
                67323,
                74499,
                79627,
                67002,
                65127,
                52175,
                54970,
                73064,
                44815,
                57670,
                41340,
                54891,
                56661,
                41177
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-09-01 14:51:14"
    },
    title: {
        text: "Warlock - Affliction - Beastlord"
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + cumulative_amount;            }        }        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "Spectral Thurible",
            "Kil'jaeden's Burning Wish",
            "Unstable Arcanocrystal",
            "Whispers in the Dark",
            "Icon of Rot",
            "Fury of the Burning Sky",
            "Aran's Relaxing Ruby",
            "Charm of the Rising Tide",
            "Tarnished Sentinel Medallion",
            "Stat Stick (Haste)",
            "Star Gate",
            "Erratic Metronome",
            "Chrono Shard",
            "Dreadstone of Endless Shadows",
            "Deteriorated Construct Core",
            "Padawsen's Unlucky Charm",
            "Obelisk of the Void",
            "Stat Stick (Mastery)",
            "Stormsinger Fulmination Charge",
            "Moonlit Prism",
            "Stat Stick (Crit)",
            "Tome of Unraveling Sanity",
            "Terror From Below",
            "Corrupted Starlight",
            "Eyasu's Mulligan",
            "Infernal Writ",
            "PVP Badge of Dominance",
            "Caged Horror",
            "Stat Stick (Versatility)",
            "Toe Knee's Promise",
            "Eye of Skovald",
            "Twisting Wind",
            "Bough of Corruption",
            "Astral Alchemist Stone",
            "Darkmoon Deck: Hellfire",
            "PVP Insignia of Dominance",
            "Horn of Valor",
            "Swarming Plaguehive",
            "Unstable Horrorslime",
            "Devilsaur Shock-Baton",
            "Elementium Bomb Squirrel Generator",
            "Mrrgria's Favor",
            "Oakheart's Gnarled Root",
            "Infernal Alchemist Stone",
            "Portable Manacracker",
            "Naraxas' Spiked Tongue",
            "Reality Breacher",
            "Wriggling Sinew",
            "Pharameres Forbidden Grimoire",
            "Figurehead of the Naglfar"
        ]
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#1E90FF",
                label: {
                    align: "left",
                    rotation: -90,
                    style: {
                        color: "#1E90FF"
                    },
                    text: "mean at 127282",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 127282.08,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: false,
            formatter: function() {            /* I need to figure out how to get the mean value here,            ** to allow the percent diff to mean as label            ** console.log(this); */            return;          },
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white',
                fontWeight: "bold"
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});