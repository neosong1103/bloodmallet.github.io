Highcharts.chart('hunter_survival_patchwerk', 
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
                146071,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                6782,
                11490,
                6780,
                8390,
                9485,
                7805,
                4305,
                8609,
                10976,
                9400,
                6514,
                7672,
                8361,
                8864,
                8920,
                7317,
                6622,
                6775,
                7157,
                7885,
                8716,
                8648,
                9534,
                0,
                7283,
                8181,
                8943,
                6886,
                6043,
                6988,
                5058,
                0,
                5150,
                0,
                8033,
                3851,
                10174,
                4397,
                3464,
                3164,
                2500,
                4710,
                2387,
                2961,
                2312,
                0,
                678,
                1225,
                1338
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                6258,
                8314,
                8135,
                8305,
                7192,
                7100,
                4563,
                7246,
                7761,
                5521,
                9195,
                8544,
                6054,
                7264,
                9942,
                5952,
                7712,
                5622,
                8030,
                6479,
                7030,
                8519,
                3574,
                6027,
                6177,
                6822,
                6558,
                7689,
                5322,
                6205,
                6576,
                0,
                3655,
                0,
                6926,
                3839,
                5000,
                2312,
                3415,
                1752,
                5141,
                236,
                1914,
                2981,
                824,
                168,
                2661,
                3085,
                2143
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                5962,
                9680,
                7155,
                5927,
                7438,
                7434,
                3403,
                5725,
                8444,
                6274,
                5755,
                5383,
                6775,
                6199,
                6535,
                7292,
                5633,
                7703,
                5325,
                5835,
                8097,
                5911,
                4811,
                7432,
                6150,
                7820,
                8644,
                7517,
                6029,
                4334,
                6514,
                0,
                5043,
                0,
                3524,
                5274,
                6442,
                3972,
                3859,
                598,
                1254,
                4689,
                3579,
                2576,
                2004,
                1770,
                3918,
                2621,
                0
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                3173,
                8222,
                5292,
                7409,
                5461,
                5171,
                3806,
                6669,
                7225,
                5928,
                6943,
                6856,
                5376,
                4825,
                6675,
                6374,
                6730,
                5630,
                5002,
                6807,
                4980,
                7181,
                5258,
                4572,
                4724,
                5627,
                4840,
                6061,
                4275,
                5684,
                4216,
                0,
                5299,
                0,
                5401,
                4255,
                4400,
                3630,
                3104,
                4305,
                2328,
                4014,
                945,
                2006,
                1938,
                1949,
                804,
                1607,
                3721
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                4941,
                82033,
                6016,
                6046,
                4768,
                6142,
                3417,
                5464,
                6432,
                6993,
                4277,
                5582,
                4772,
                7145,
                6760,
                6036,
                4885,
                5038,
                6579,
                4606,
                5820,
                4875,
                5662,
                5487,
                5775,
                4896,
                5343,
                5577,
                4524,
                3578,
                5355,
                5591,
                3026,
                5720,
                2827,
                1255,
                6604,
                3240,
                2449,
                1260,
                2864,
                0,
                2082,
                1436,
                3206,
                510,
                1722,
                2223,
                1478
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                4917,
                0,
                5762,
                80573,
                6612,
                4950,
                3814,
                4293,
                67584,
                4120,
                4822,
                3749,
                5812,
                4096,
                5977,
                3639,
                70996,
                5165,
                4210,
                5493,
                5302,
                4826,
                2943,
                69241,
                3650,
                5377,
                3951,
                5067,
                3527,
                62066,
                4535,
                3731,
                55698,
                4875,
                5611,
                3878,
                3471,
                2214,
                2274,
                2076,
                2187,
                2803,
                1629,
                2018,
                448,
                0,
                1497,
                1192,
                1119
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                91237,
                0,
                77553,
                0,
                75682,
                73138,
                86981,
                70870,
                0,
                69010,
                68349,
                67067,
                67055,
                65433,
                58637,
                66606,
                0,
                65769,
                65268,
                62990,
                54212,
                53748,
                61021,
                0,
                58693,
                53691,
                53439,
                52882,
                60016,
                0,
                50645,
                69086,
                0,
                64513,
                40363,
                46127,
                27284,
                42431,
                41760,
                45335,
                41792,
                37888,
                40651,
                35799,
                36147,
                42114,
                33327,
                32274,
                29087
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-09-01 03:26:37"
    },
    title: {
        text: "Hunter - Survival - Patchwerk"
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
            "Convergence of Fates",
            "Specter of Betrayal",
            "Bloodthirsty Instinct",
            "Cradle of Anguish",
            "Eye of Command",
            "Chaos Talisman",
            "Unstable Arcanocrystal",
            "Stat Stick (Haste)",
            "Vial of Ceaseless Toxins",
            "Stat Stick (Versatility)",
            "PVP Badge of Conquest",
            "Stat Stick (Crit)",
            "Entwined Elemental Foci",
            "Chrono Shard",
            "Six-Feather Fan",
            "Memento of Angerboda",
            "Engine of Eradication",
            "Thrice-Accursed Compass",
            "Stat Stick (Mastery)",
            "Nightmare Egg Shell",
            "Nightblooming Frond",
            "Tirathon's Betrayal",
            "Horn of Valor",
            "Astral Alchemist Stone",
            "Gift of Radiance",
            "Tempered Egg of Serpentrix",
            "Bloodstained Handkerchief",
            "Arcanogolem Digit",
            "PVP Insignia of Conquest",
            "Infernal Cinders",
            "Splinters of Agronax",
            "Darkmoon Deck: Dominion",
            "Umbral Moonglaives",
            "Infernal Alchemist Stone",
            "Void Stalker's Contract",
            "The Devilsaur's Bite",
            "Draught of Souls",
            "Faulty Countermeasure",
            "Spontaneous Appendages",
            "Nature's Call",
            "Spiked Counterweight",
            "Terrorbound Nexus",
            "Toe Knee's Promise",
            "Mark of Dargrul",
            "Ravaged Seed Pod",
            "Ley Spark",
            "Giant Ornamental Pearl",
            "Tiny Oozeling in a Jar",
            "Windscar Whetstone"
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
                    text: "mean at 87438",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 87438.9,
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