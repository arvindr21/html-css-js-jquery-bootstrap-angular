$(document).ready(function() {
    var content = [{
        prodPicture: "./images/galaxyJ7.jpeg",
        prodName: "Samsung Galaxy J7 (Gold 16GB)",
        prodPrice: 14999,
        prodEMI: 728,
        prodSellers: 19,
        prodOfferPrice: 14900,
        prodFeatures: ["5.5 Inch Display",
            "Dual SIM (LTE + GSM)",
            "13 MP |5 MP Camera",
            "Octa Core Processor"
        ],
        prodShortName: "j7Gold"
    }, {
        prodPicture: "./images/galaxyJ5.jpeg",
        prodName: "Samsung Galaxy J5 (Gold 8GB)",
        prodPrice: 14999,
        prodEMI: 601,
        prodSellers: 32,
        prodOfferPrice: 12299,
        prodFeatures: ["5.5 Inch Display",
            "Dual SIM (LTE + GSM)",
            "13 MP |5 MP Camera",
            "2600 mAh Battery"
        ],
        prodShortName: "j5Gold"
    }, {
        prodPicture: "./images/galaxyJ5White.jpeg",
        prodName: "Samsung Galaxy J5 (White 8GB)",
        prodPrice: 12390,
        prodEMI: 601,
        prodSellers: 33,
        prodOfferPrice: 12000,
        prodFeatures: ["5.5 Inch Display",
            "Dual SIM (LTE + GSM)",
            "13 MP |5 MP Camera",
            "2600 mAh Battery"
        ],
        prodShortName: "j7Gold"
    }, {
        prodPicture: "./images/galaxyJ5Black.jpeg",
        prodName: "Samsung Galaxy J5 (Black 8GB)",
        prodPrice: 12390,
        prodEMI: 601,
        prodSellers: 33,
        prodOfferPrice: 12000,
        prodFeatures: ["5.5 Inch Display",
            "Dual SIM (LTE + GSM)",
            "13 MP |5 MP Camera",
            "2600 mAh Battery"
        ],
        prodShortName: "j7Gold"
    }, {
        prodPicture: "./images/galaxyA8.jpeg",
        prodName: "Samsung Galaxy A8 (Gold 32GB)",
        prodPrice: 31490,
        prodEMI: 1527,
        prodSellers: 33,
        prodOfferPrice: 30190,
        prodFeatures: ["Android v5.1.1 OS",
            "16 MP Primary Camera",
            "5 MP Secondary Camera",
            "5.7 inch Touchscreen"
        ],
        prodShortName: "A8Gold"
    }, {
        prodPicture: "./images/galaxyA7.jpeg",
        prodName: "Samsung Galaxy A7 (Champagne Gold 16GB)",
        prodPrice: 27500,
        prodEMI: 1334,
        prodSellers: 33,
        prodOfferPrice: 22650,
        prodFeatures: ["13 MP Primary Camera",
            "5.5 inch AMOLED Screen",
            "5MP Secondary Camera",
            "Android v4.4 OS"
        ],
        prodShortName: "A7Gold"
    }, {
        prodPicture: "./images/galaxyA7Pearl.jpeg",
        prodName: "Samsung Galaxy A7 (Pearl White 16GB)",
        prodPrice: 25990,
        prodEMI: 1261,
        prodSellers: 32,
        prodOfferPrice: 21799,
        prodFeatures: ["5.5 inch Touchscreen",
            "Android v4.4 OS",
            "13 MP Primary Camera",
            "5MP Secondary Camera"
        ],
        prodShortName: "A7Pearl"
    }, {
        prodPicture: "./images/galaxyA5.jpeg",
        prodName: "Samsung Galaxy A5 (Pearl White 16GB)",
        prodPrice: 25225,
        prodEMI: 1224,
        prodSellers: 45,
        prodOfferPrice: 17999,
        prodFeatures: ["Android v4.4 OS",
            "13 MP Primary Camera",
            "5MP Secondary Camera",
            "Dual Sim (GSM + LTE)"
        ],
        prodShortName: "A5"
    }];

    var prodTemplate = Handlebars.compile($('#prod').html());
    var rowTemplate = Handlebars.compile($("#newRow").html());
    var myProds = $("#prods");
    var lastRow = "";
    $(content).each(function(key, val) {
        if (key % 4 == 0) {
            myProds.append(rowTemplate());
            lastRow = $("#prods > .row:last-child");
        }
        lastRow.append(prodTemplate(val));
    });
});