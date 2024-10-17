const products = [
    {
        name: 'Injector Assy 8-98160061-3',
    },
    {
        name: 'Injector Assy 8-98246130-0',
    },
    {
        name: 'Injector Assy 8-98246751-0',
    },
    {
        name: 'Injector Assy 8-98247354-0',
    },
    {
        name: 'Injector Assy 1465A041 Triton Pajero 095000-5600',
    },
    {
        name: 'Injector Assy 1465A257 Triton Pajero 095000-9560',
    },
    {
        name: 'Injector Assy 1465A323',
    },
    {
        name: 'Injector Assy 1465A439 Triton Pajero 2.4 295050-1760',
    },
    {
        name: 'Injector Assy 23670-0E020',
    },
    {
        name: 'Injector Assy 23670-0E070',
    },
    {
        name: 'Injector Assy 23670-0L050',
    },
    {
        name: 'Injector Assy 23670-0L070',
    },
    {
        name: 'Injector Assy 23670-0232 23670-E0400',
    },
    {
        name: 'Injector Assy 23670-51030',
    },
    {
        name: 'Injector Assy 23670-51060',
    },
    {
        name: 'Injector Assy 095000-0073',
    },
    {
        name: 'Injector Assy 095000-0640',
    },
    {
        name: 'Injector Assy 095000-1520',
    },
    {
        name: 'Injector Assy 095000-5450',
    },
    {
        name: 'Injector Assy 095000-6250',
    },
    {
        name: 'Injector Assy 095000-6376',
    },

    {
        name: 'Injector Assy 095000-6491',
    },
    {
        name: 'Injector Assy 095000-6593',
    },
    {
        name: 'Injector Assy 295050-0670',
    },
    {
        name: 'Injector Assy 295050-0810',
    },
    {
        name: 'Injector Assy 295050-1020',
    },
    {
        name: 'Injector Assy 295050-1050',
    },
    {
        name: 'Injector Assy 295050-1550 ',
    },
    {
        name: 'Injector Assy 295050-2870 ',
    },
    {
        name: 'Injector Assy 295050-3360',
    },
    {
        name: 'Injector Assy 295900-0641 or 8-98280697-1 ',
    },
    {
        name: 'Injector Assy 12644527 Chevrolet Colorado',
    },
    {
        name: 'Injector Assy 28264952 (28489562)',
    },
    {
        name: 'Injector Assy 0445110307',
    },
    {
        name: 'Injector Assy 0445110603',
    },
    {
        name: 'Injector Assy 0445120006',
    },
    {
        name: 'Injector Assy 0445120048 Canter Sany ',
    },
    {
        name: 'Injector Assy 0445120121',
    },
    {
        name: 'Injector Assy 0445120123',
    },
    {
        name: 'Injector Assy 0445120203',
    },
    {
        name: 'Injector Assy 0445120218 ',
    },
    {
        name: 'Injector Assy 0445120266',
    },

    {
        name: 'Injector Assy 0445120371',
    },
    {
        name: 'Injector Assy 0445120383',
    },
    {
        name: 'Injector Assy 0445120571',
    },
    {
        name: 'Injector Assy 0445124042',
    },
    {
        name: 'Injector Assy CAT 320-0680 2645A747',
    },
    {
        name: 'Injector Assy Cat 320D',
    },
    {
        name: 'Injector Assy CAT 320D',
    },
    {
        name: 'Injector Assy CAT 321-3600 2645A753 ',
    },
    {
        name: 'Injector Assy Cat 2645A746 Itech ',
    },
    {
        name: 'Injector Assy Cummins 4914308 ',
    },
    {
        name: 'Injector Assy Cummins NT855 3047973 ',
    },
    {
        name: 'Injector Assy Delphi 28229873 Itech',
    },
    {
        name: 'Injector Assy Delphi 28236381 Itech',
    },
    {
        name: 'Injector Assy Denso 23670-51060 (6,2)',
    },
    {
        name: 'Injector Assy Ford 2.5 0445110250',
    },
    {
        name: 'Injector Assy Ford 3.0 0445110249',
    },
    {
        name: 'Injector Assy Fuso 6M60 ITech 095000-8920 atau 5450',
    },
    {
        name: 'Injector Assy Fuso Great 6M70 ME356137 0445120058 ',
    },
    {
        name: 'Injector Assy Hilux 23670-0L090 ',
    },
    {
        name: 'Injector Assy Hino Dutro Euro 4 295700-1190 23670-E9301',
    },
    {
        name: 'Injector Assy Isuzu Dmax 3.0 ITECH 4JJ1 8-98011604-5',
    },

    {
        name: 'Injector Assy 095000-6491',
    },
    {
        name: 'Injector Assy IVECO 0445120157 (504255185) ',
    },
    {
        name: 'Injector Assy Kobelco SK130 0445120126 IT',
    },
    {
        name: 'Injector Assy Kobelco SK200 095000-6593 IT',
    },
    {
        name: 'Injector Assy Kobelco SK200-8 095000-6353',
    },
    {
        name: 'Injector Assy Komatsu PC200 0445120231 ',
    },
    {
        name: 'Injector Assy Komatsu PC300 0445120236 ',
    },
    {
        name: 'Injector Assy Nissan CWM 330 095000-6632 ',
    },
    {
        name: 'Injector Assy Sumitomo Sh210 0660 ',
    },
    {
        name: 'Injector Assy Volvo EC210 0445120067',
    },
    {
        name: 'Injector Assy Volvo EC240 0445120066  ',
    },
    {
        name: 'Injector Assy Wechai 0445120266 ',
    },
];

export default products;
