Highcharts.chart('druid_guardian_beastlord', 
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
                56240,
                62138,
                49889,
                0,
                33126,
                253629,
                251147,
                0,
                237667,
                0,
                0,
                0,
                37693,
                0,
                0,
                0,
                0,
                0,
                38822,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                171921,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                26683,
                18319,
                23565,
                22020,
                17749,
                0,
                0,
                48496,
                0,
                9946,
                47394,
                19962,
                12331,
                14839,
                19565,
                52518,
                19020,
                22827,
                16504,
                21425,
                10103,
                13649,
                11538,
                8915,
                15902,
                18419,
                18793,
                23273,
                19892,
                19838,
                14982,
                9135,
                15202,
                14903,
                9094,
                14099,
                0,
                9847,
                17873,
                43681,
                7775,
                9677,
                11770,
                15838,
                14715,
                8367,
                10411,
                39523,
                6007,
                11924,
                13145,
                9884,
                3682,
                0,
                43842,
                9459,
                41057,
                13000,
                7145,
                19588,
                17116,
                36425,
                9088,
                32319,
                8792,
                4944,
                4962
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                22871,
                29958,
                19991,
                288257,
                213550,
                0,
                0,
                18641,
                0,
                60022,
                15988,
                17240,
                11790,
                17463,
                17065,
                15917,
                15787,
                15676,
                8889,
                13148,
                20067,
                15713,
                20356,
                15864,
                14422,
                6803,
                0,
                10405,
                9255,
                9793,
                11721,
                22291,
                12878,
                10949,
                13028,
                12091,
                0,
                17693,
                10767,
                12244,
                19564,
                12376,
                11919,
                13065,
                11001,
                18803,
                7444,
                13215,
                15427,
                11157,
                6500,
                6321,
                10476,
                0,
                4275,
                13561,
                7215,
                0,
                2778,
                12701,
                1345,
                3206,
                0,
                3306,
                7365,
                511,
                4742
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                21645,
                9487,
                18715,
                0,
                0,
                0,
                0,
                18339,
                0,
                5646,
                21298,
                12050,
                15963,
                16207,
                17742,
                11291,
                11372,
                14584,
                20713,
                12667,
                10089,
                14435,
                10044,
                14099,
                16651,
                14746,
                10597,
                15798,
                14113,
                20302,
                15706,
                8502,
                14644,
                17356,
                12033,
                11966,
                0,
                11080,
                12394,
                3102,
                14864,
                5037,
                12300,
                6862,
                10683,
                1501,
                11205,
                7026,
                12291,
                10813,
                12065,
                5331,
                10086,
                0,
                4104,
                2828,
                5158,
                6335,
                8374,
                0,
                11705,
                4974,
                13199,
                2221,
                0,
                5275,
                4394
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                22940,
                24395,
                14220,
                0,
                0,
                0,
                0,
                8355,
                0,
                9674,
                5707,
                11293,
                9423,
                6983,
                15800,
                13921,
                20915,
                17969,
                1585,
                7388,
                13214,
                10022,
                10760,
                11694,
                10280,
                14437,
                0,
                9120,
                11809,
                17222,
                7549,
                15697,
                11623,
                10080,
                12764,
                8845,
                0,
                9894,
                10014,
                11946,
                4407,
                15374,
                13085,
                5237,
                14110,
                9377,
                9117,
                6675,
                8042,
                12194,
                1180,
                8889,
                7933,
                0,
                3549,
                7465,
                0,
                7909,
                10139,
                29477,
                2915,
                4590,
                1213,
                928,
                7974,
                3332,
                2874
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                189968,
                184680,
                170150,
                0,
                0,
                0,
                0,
                0,
                0,
                15442,
                0,
                11406,
                142159,
                15298,
                17464,
                0,
                7572,
                13401,
                121270,
                19538,
                11204,
                13453,
                10690,
                6942,
                9679,
                10446,
                26977,
                9563,
                3315,
                7293,
                12797,
                6959,
                12508,
                13318,
                9867,
                3903,
                0,
                7486,
                10788,
                0,
                15604,
                9657,
                4268,
                7838,
                4529,
                4192,
                4459,
                0,
                4096,
                9109,
                6554,
                6662,
                2694,
                0,
                0,
                12117,
                0,
                3703,
                689,
                7655,
                1566,
                0,
                8769,
                0,
                8294,
                4733,
                7056
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
                24508,
                0,
                3965,
                23097,
                14621,
                0,
                9113,
                11347,
                17337,
                5750,
                7806,
                0,
                1519,
                12498,
                9936,
                7272,
                12358,
                18645,
                4483,
                383,
                119694,
                11906,
                5975,
                10061,
                13961,
                8487,
                7864,
                4227,
                10974,
                0,
                9498,
                9343,
                14986,
                857,
                10253,
                11376,
                11670,
                10823,
                8599,
                109645,
                12383,
                4099,
                10444,
                7663,
                3932,
                7034,
                10545,
                17226,
                71617,
                16490,
                5904,
                5506,
                0,
                6799,
                12305,
                1072,
                11262,
                0,
                2554,
                0
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
                0,
                0,
                0,
                0,
                6917,
                0,
                9791,
                10216,
                753,
                14268,
                10915,
                0,
                13044,
                6598,
                8990,
                11154,
                8891,
                7682,
                12224,
                0,
                0,
                8094,
                10346,
                3135,
                10752,
                13294,
                5617,
                6707,
                7449,
                0,
                2174,
                7061,
                101898,
                15258,
                3690,
                7734,
                9006,
                7827,
                6028,
                0,
                0,
                15435,
                2069,
                83832,
                13974,
                2882,
                6950,
                0,
                0,
                0,
                6896,
                4320,
                0,
                63173,
                0,
                5497,
                0,
                56588,
                2826,
                1498
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
                142752,
                0,
                134864,
                140246,
                139488,
                0,
                138984,
                118680,
                131186,
                123506,
                114723,
                0,
                118114,
                121911,
                117785,
                115541,
                116272,
                100862,
                110250,
                149658,
                0,
                108540,
                92970,
                107730,
                93024,
                90569,
                98757,
                110009,
                102722,
                0,
                102891,
                90328,
                0,
                86732,
                93517,
                84920,
                86277,
                81407,
                97508,
                0,
                99402,
                84355,
                76620,
                0,
                75898,
                78855,
                103757,
                84080,
                0,
                75513,
                67454,
                70988,
                54602,
                0,
                77451,
                66617,
                67144,
                0,
                57145,
                54825
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2018-04-03 22:47 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/7d779968338362996c1eca6d04269bb42ff808ab\" target=\"blank\">7d77996</a>",
        useHTML: true
    },
    title: {
        text: "Druid - Guardian - Beastlord",
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
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=144249\">Archimonde's Hatred Reborn</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=141537\">Thrice-Accursed Compass</a>",
            "<a href=\"http://www.wowhead.com/item=137459\">Chaos Talisman</a>",
            "<a href=\"http://www.wowhead.com/item=139329\">Bloodthirsty Instinct</a>",
            "<a href=\"http://www.wowhead.com/item=154173\">Aggramar's Conviction</a>",
            "<a href=\"http://www.wowhead.com/item=142167\">Eye of Command</a>",
            "<a href=\"http://www.wowhead.com/item=140794\">Arcanogolem Digit</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=137406\">Terrorbound Nexus</a>",
            "<a href=\"http://www.wowhead.com/item=141585\">Six-Feather Fan</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality</a>",
            "<a href=\"http://www.wowhead.com/item=137312\">Nightmare Egg Shell</a>",
            "<a href=\"http://www.wowhead.com/item=133644\">Memento of Angerboda</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=151190\">Specter of Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=151977\">Diima's Glacial Aegis</a>",
            "<a href=\"http://www.wowhead.com/item=133647\">Gift of Radiance</a>",
            "<a href=\"http://www.wowhead.com/item=142159\">Bloodstained Handkerchief</a>",
            "<a href=\"http://www.wowhead.com/item=142773\">PVP Badge of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=137537\">Tirathon's Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
            "<a href=\"http://www.wowhead.com/item=140806\">Convergence of Fates</a>",
            "<a href=\"http://www.wowhead.com/item=137439\">Tiny Oozeling in a Jar</a>",
            "<a href=\"http://www.wowhead.com/item=137357\">Mark of Dargrul</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=140796\">Entwined Elemental Foci</a>",
            "<a href=\"http://www.wowhead.com/item=137373\">Tempered Egg of Serpentrix</a>",
            "<a href=\"http://www.wowhead.com/item=152093\">Gorshalach's Legacy</a>",
            "<a href=\"http://www.wowhead.com/item=144477\">Splinters of Agronax</a>",
            "<a href=\"http://www.wowhead.com/item=142662\">PVP Insignia of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=147011\">Vial of Ceaseless Toxins</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=140802\">Nightblooming Frond</a>",
            "<a href=\"http://www.wowhead.com/item=139334\">Nature's Call</a>",
            "<a href=\"http://www.wowhead.com/item=151976\">Riftworld Codex</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=147012\">Umbral Moonglaives</a>",
            "<a href=\"http://www.wowhead.com/item=147022\">Feverish Carapace</a>",
            "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
            "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
            "<a href=\"http://www.wowhead.com/item=140026\">The Devilsaur's Bite</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=147023\">Leviathan's Hunger</a>",
            "<a href=\"http://www.wowhead.com/item=151978\">Smoldering Titanguard</a>",
            "<a href=\"http://www.wowhead.com/item=139320\">Ravaged Seed Pod</a>",
            "<a href=\"http://www.wowhead.com/item=139325\">Spontaneous Appendages</a>",
            "<a href=\"http://www.wowhead.com/item=137539\">Faulty Countermeasure</a>",
            "<a href=\"http://www.wowhead.com/item=140808\">Draught of Souls</a>",
            "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
            "<a href=\"http://www.wowhead.com/item=136715\">Spiked Counterweight</a>",
            "<a href=\"http://www.wowhead.com/item=137486\">Windscar Whetstone</a>",
            "<a href=\"http://www.wowhead.com/item=140027\">Ley Spark</a>",
            "<a href=\"http://www.wowhead.com/item=151964\">Seeping Scourgewing</a>",
            "<a href=\"http://www.wowhead.com/item=147009\">Infernal Cinders</a>",
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
                    text: 'mean: ' + Intl.NumberFormat().format(179381),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 179381.05970149254,
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