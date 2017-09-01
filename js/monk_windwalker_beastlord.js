Highcharts.chart('monk_windwalker_beastlord', 
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
                332584,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                0,
                20833,
                19405,
                16758,
                15725,
                20450,
                24247,
                13695,
                13740,
                22651,
                21890,
                18464,
                12662,
                11885,
                16352,
                9279,
                10241,
                15664,
                20867,
                16972,
                23540,
                0,
                8133,
                18005,
                13062,
                13783,
                17466,
                15208,
                0,
                17135,
                18306,
                6968,
                0,
                16024,
                4508,
                5104,
                5480,
                11141,
                5228,
                4164,
                7041,
                4481,
                8391,
                0,
                7603,
                0,
                0,
                0,
                0,
                7879
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                11201,
                12338,
                16493,
                21570,
                18938,
                9108,
                13374,
                15420,
                12478,
                10718,
                6233,
                14510,
                6957,
                14663,
                12527,
                0,
                18026,
                10310,
                6501,
                3716,
                10781,
                14496,
                8535,
                9442,
                12764,
                15843,
                7080,
                0,
                11755,
                10588,
                16683,
                0,
                7769,
                6869,
                16392,
                103,
                2565,
                4731,
                9455,
                858,
                4211,
                0,
                10117,
                1969,
                4524,
                3393,
                0,
                4554,
                8453
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                13475,
                16420,
                12365,
                0,
                13026,
                20880,
                206,
                9647,
                15590,
                8726,
                8817,
                9264,
                25576,
                11363,
                11399,
                7267,
                6404,
                12252,
                10708,
                14051,
                18046,
                12750,
                9480,
                20002,
                15093,
                11529,
                15757,
                0,
                14256,
                12681,
                9797,
                0,
                12514,
                8269,
                0,
                15167,
                11717,
                4443,
                6657,
                6265,
                5082,
                5367,
                2033,
                6815,
                0,
                1770,
                760,
                0,
                3439
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                13267,
                14919,
                17353,
                20069,
                12020,
                3687,
                21835,
                18498,
                17662,
                12425,
                16247,
                13194,
                7649,
                11533,
                9322,
                7230,
                14820,
                9567,
                13204,
                14847,
                9472,
                11101,
                7595,
                8410,
                6808,
                5033,
                13333,
                0,
                13506,
                13998,
                12870,
                0,
                20880,
                12799,
                15069,
                6601,
                3165,
                0,
                4792,
                4931,
                3817,
                3899,
                0,
                341,
                2273,
                6987,
                0,
                4112,
                7917
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                15804,
                10856,
                9976,
                15439,
                17219,
                15219,
                11413,
                10165,
                135171,
                12874,
                14109,
                14311,
                11370,
                4854,
                9822,
                0,
                12965,
                10060,
                8142,
                15580,
                170,
                9012,
                9958,
                12331,
                16191,
                12415,
                12786,
                9974,
                2616,
                8675,
                9746,
                14250,
                757,
                8226,
                4110,
                3914,
                2023,
                14682,
                6054,
                7034,
                5459,
                9731,
                12749,
                6296,
                6236,
                0,
                2079,
                0,
                3225
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                12157,
                11146,
                13503,
                144785,
                6252,
                9981,
                12710,
                13530,
                0,
                11589,
                11403,
                133209,
                14126,
                14954,
                12076,
                13443,
                10007,
                15219,
                9213,
                0,
                138932,
                6425,
                5148,
                4904,
                11513,
                17015,
                102394,
                13690,
                10416,
                4914,
                5373,
                8434,
                3882,
                5250,
                96273,
                86160,
                950,
                4410,
                2169,
                400,
                5878,
                0,
                0,
                2497,
                1874,
                2074,
                978,
                7571,
                11235
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                160378,
                135972,
                131288,
                0,
                125247,
                129798,
                134917,
                125778,
                0,
                122513,
                122490,
                0,
                119187,
                118036,
                120950,
                149298,
                102419,
                101882,
                113854,
                106528,
                0,
                115217,
                117971,
                103640,
                93488,
                87443,
                0,
                141488,
                95447,
                93697,
                93259,
                126329,
                87159,
                95602,
                0,
                0,
                85001,
                85437,
                78583,
                71389,
                68677,
                69457,
                73617,
                64684,
                48193,
                39841,
                52033,
                39560,
                -4181
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-09-01 13:41:35"
    },
    title: {
        text: "Monk - Windwalker - Beastlord"
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
            "Kil'jaeden's Burning Wish",
            "Eye of Command",
            "Stat Stick (Crit)",
            "Stat Stick (Mastery)",
            "Engine of Eradication",
            "Arcanogolem Digit",
            "Stat Stick (Versatility)",
            "Thrice-Accursed Compass",
            "PVP Badge of Conquest",
            "Specter of Betrayal",
            "Memento of Angerboda",
            "Chaos Talisman",
            "Cradle of Anguish",
            "Entwined Elemental Foci",
            "Gift of Radiance",
            "Convergence of Fates",
            "Unstable Arcanocrystal",
            "Bloodthirsty Instinct",
            "Chrono Shard",
            "Horn of Valor",
            "Six-Feather Fan",
            "Astral Alchemist Stone",
            "Stat Stick (Haste)",
            "PVP Insignia of Conquest",
            "Nightmare Egg Shell",
            "Tirathon's Betrayal",
            "Nightblooming Frond",
            "Vial of Ceaseless Toxins",
            "Darkmoon Deck: Dominion",
            "Bloodstained Handkerchief",
            "Tempered Egg of Serpentrix",
            "Splinters of Agronax",
            "Infernal Alchemist Stone",
            "Void Stalker's Contract",
            "Terrorbound Nexus",
            "Umbral Moonglaives",
            "Infernal Cinders",
            "Mark of Dargrul",
            "Nature's Call",
            "Tiny Oozeling in a Jar",
            "The Devilsaur's Bite",
            "Giant Ornamental Pearl",
            "Faulty Countermeasure",
            "Windscar Whetstone",
            "Spontaneous Appendages",
            "Toe Knee's Promise",
            "Ravaged Seed Pod",
            "Ley Spark",
            "Spiked Counterweight",
            "Draught of Souls"
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
                    text: "mean at 159179",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 159179.84,
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