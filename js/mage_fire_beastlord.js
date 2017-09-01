Highcharts.chart('mage_fire_beastlord', 
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
                0,
                262631,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                16287,
                24225,
                0,
                12168,
                17390,
                31872,
                26628,
                11868,
                14092,
                7395,
                14814,
                9020,
                17490,
                15919,
                11667,
                6712,
                10554,
                18429,
                22205,
                5498,
                0,
                0,
                15058,
                10701,
                11431,
                16040,
                0,
                15994,
                1326,
                2535,
                7124,
                13727,
                11524,
                16101,
                0,
                6859,
                5639,
                0,
                3754,
                6370,
                3545,
                4690,
                3943,
                5108,
                7361,
                11439,
                9726,
                4108,
                3597,
                0
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                26970,
                14574,
                0,
                21580,
                14863,
                0,
                3882,
                14684,
                17682,
                17466,
                3620,
                5793,
                11573,
                4610,
                12545,
                16984,
                11842,
                4694,
                8419,
                10932,
                18314,
                14608,
                3596,
                12143,
                10685,
                6743,
                11216,
                7260,
                4803,
                8730,
                20115,
                13611,
                7919,
                0,
                0,
                12795,
                10596,
                0,
                1608,
                10471,
                0,
                1868,
                2629,
                2122,
                3622,
                2944,
                0,
                2563,
                0,
                0
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                14672,
                23294,
                0,
                17615,
                19771,
                17236,
                16983,
                1380,
                10142,
                2775,
                16092,
                15282,
                8718,
                15508,
                10152,
                3380,
                18765,
                11149,
                5184,
                16589,
                12379,
                0,
                10927,
                6951,
                7756,
                14899,
                15584,
                3844,
                11876,
                11519,
                6208,
                1745,
                4019,
                17693,
                0,
                6399,
                6546,
                0,
                13172,
                8813,
                3242,
                4361,
                3006,
                9239,
                844,
                1828,
                7164,
                713,
                4793,
                2743
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                14814,
                17072,
                0,
                14505,
                12185,
                16909,
                27611,
                24063,
                5048,
                12180,
                2498,
                10586,
                8564,
                9895,
                9814,
                16487,
                1250,
                11504,
                10926,
                2242,
                1531,
                17929,
                4156,
                10707,
                5970,
                2446,
                8481,
                13541,
                3614,
                9544,
                2287,
                10719,
                10822,
                12173,
                0,
                0,
                8764,
                0,
                0,
                3318,
                1730,
                1841,
                6905,
                962,
                5859,
                3242,
                0,
                0,
                4965,
                483
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                17604,
                13871,
                0,
                7077,
                10237,
                15799,
                0,
                1953,
                11708,
                9775,
                13807,
                6576,
                6189,
                6097,
                10562,
                4008,
                22615,
                792,
                13062,
                11384,
                10950,
                7715,
                7567,
                6692,
                6742,
                8742,
                3227,
                2031,
                0,
                7248,
                7627,
                92411,
                10340,
                7315,
                15837,
                9151,
                0,
                15669,
                12379,
                8258,
                2640,
                3190,
                8721,
                2071,
                5616,
                6968,
                3175,
                0,
                4256,
                596
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                195894,
                20023,
                0,
                14812,
                16406,
                8730,
                10239,
                9675,
                7083,
                2105,
                7715,
                7459,
                10377,
                10030,
                14340,
                109078,
                3340,
                5770,
                92881,
                5602,
                104457,
                13657,
                14354,
                7875,
                15539,
                2728,
                5980,
                7321,
                314,
                15045,
                6246,
                0,
                2175,
                4600,
                7427,
                1806,
                81343,
                1760,
                0,
                14362,
                1251,
                11573,
                0,
                6886,
                4537,
                4863,
                2127,
                5154,
                2367,
                239
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                163298,
                0,
                131075,
                122754,
                123841,
                111268,
                117188,
                114905,
                112842,
                104156,
                107224,
                94182,
                94823,
                87665,
                0,
                85833,
                101570,
                0,
                100429,
                0,
                94411,
                88254,
                88430,
                85316,
                91766,
                100184,
                92007,
                116812,
                79400,
                83641,
                0,
                84194,
                70048,
                97738,
                77681,
                0,
                93973,
                78158,
                52120,
                83374,
                65042,
                65641,
                58408,
                54368,
                47312,
                48493,
                35019,
                27373,
                30087
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-09-01 13:30:58"
    },
    title: {
        text: "Mage - Fire - Beastlord"
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
            "Toe Knee's Promise",
            "Kil'jaeden's Burning Wish",
            "Fury of the Burning Sky",
            "Star Gate",
            "Aran's Relaxing Ruby",
            "Deteriorated Construct Core",
            "Icon of Rot",
            "Horn of Valor",
            "PVP Badge of Dominance",
            "Whispers in the Dark",
            "Stat Stick (Versatility)",
            "Dreadstone of Endless Shadows",
            "Obelisk of the Void",
            "Twisting Wind",
            "Tarnished Sentinel Medallion",
            "Bough of Corruption",
            "Chrono Shard",
            "Charm of the Rising Tide",
            "Padawsen's Unlucky Charm",
            "Astral Alchemist Stone",
            "Moonlit Prism",
            "Stat Stick (Mastery)",
            "Stat Stick (Crit)",
            "PVP Insignia of Dominance",
            "Infernal Writ",
            "Erratic Metronome",
            "Stormsinger Fulmination Charge",
            "Unstable Arcanocrystal",
            "Stat Stick (Haste)",
            "Eyasu's Mulligan",
            "Tome of Unraveling Sanity",
            "Eye of Skovald",
            "Portable Manacracker",
            "Infernal Alchemist Stone",
            "Corrupted Starlight",
            "Terror From Below",
            "Darkmoon Deck: Hellfire",
            "Caged Horror",
            "Reality Breacher",
            "Unstable Horrorslime",
            "Oakheart's Gnarled Root",
            "Elementium Bomb Squirrel Generator",
            "Wriggling Sinew",
            "Devilsaur Shock-Baton",
            "Swarming Plaguehive",
            "Mrrgria's Favor",
            "Naraxas' Spiked Tongue",
            "Figurehead of the Naglfar",
            "Pharameres Forbidden Grimoire"
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
                    text: "mean at 141409",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 141409.34,
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