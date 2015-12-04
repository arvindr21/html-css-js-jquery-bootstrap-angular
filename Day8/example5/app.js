$(document).ready(function() {
    var users = [{
        "_id": "56553089ef6b87347e6aa2d4",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "eyeColor": "green",
        "name": "Miller Ray",
        "gender": "male",
        "company": "SYNKGEN",
        "email": "millerray@synkgen.com",
        "phone": "+1 (946) 454-3162",
        "address": "970 Wythe Place, Fairlee, Washington, 1452",
        "about": "Sit incididunt officia labore officia qui id et esse non elit ad adipisicing non. Excepteur ex aute amet culpa ex incididunt minim nulla aliqua magna deserunt commodo ut veniam. Nostrud nulla Lorem in eiusmod eu minim fugiat.\r\n",
        "registered": "2015-11-16T04:21:20 -06:-30",
        "latitude": -11.537415,
        "longitude": 3.414375
    }, {
        "_id": "56553089ff8dd90ac428cbbe",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "eyeColor": "green",
        "name": "Rowe Burns",
        "gender": "male",
        "company": "ZOLARITY",
        "email": "roweburns@zolarity.com",
        "phone": "+1 (897) 409-3115",
        "address": "685 Mill Road, Waterloo, California, 3536",
        "about": "Aliqua mollit irure do cillum consequat minim eiusmod. Ea non ut ipsum nisi. Ad minim do nostrud et reprehenderit laborum amet ea veniam proident ullamco.\r\n",
        "registered": "2015-09-19T04:57:00 -06:-30",
        "latitude": -41.726008,
        "longitude": 67.213774
    }, {
        "_id": "565530891012794d4c4c2d59",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "eyeColor": "blue",
        "name": "Cole Bell",
        "gender": "male",
        "company": "TUBALUM",
        "email": "colebell@tubalum.com",
        "phone": "+1 (924) 443-2956",
        "address": "746 Borinquen Pl, Rutherford, Federated States Of Micronesia, 4959",
        "about": "Eiusmod cupidatat aute enim tempor cillum deserunt ullamco magna tempor minim culpa exercitation ea sunt. Ullamco non et esse officia esse. Officia ullamco reprehenderit minim do enim mollit. Officia ut ex exercitation quis mollit irure. Labore pariatur commodo est aliqua incididunt culpa officia qui culpa. Dolor proident Lorem occaecat do nostrud amet.\r\n",
        "registered": "2014-10-17T10:37:20 -06:-30",
        "latitude": -85.939143,
        "longitude": 85.117905
    }, {
        "_id": "56553089edb4d938eb8766ee",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "eyeColor": "green",
        "name": "Olga Morse",
        "gender": "female",
        "company": "SLUMBERIA",
        "email": "olgamorse@slumberia.com",
        "phone": "+1 (908) 545-3310",
        "address": "506 Norwood Avenue, Defiance, Michigan, 7161",
        "about": "Officia commodo duis ullamco Lorem reprehenderit ex aliqua excepteur excepteur proident sint consequat est. Velit laborum adipisicing exercitation nostrud incididunt occaecat non sit proident. Lorem qui culpa irure proident tempor officia.\r\n",
        "registered": "2014-01-20T03:23:53 -06:-30",
        "latitude": 71.381222,
        "longitude": 178.720472
    }, {
        "_id": "565530892da5e1d35aea1a4d",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "eyeColor": "blue",
        "name": "Jane Mosley",
        "gender": "female",
        "company": "WRAPTURE",
        "email": "janemosley@wrapture.com",
        "phone": "+1 (926) 494-3832",
        "address": "563 Homecrest Avenue, Garberville, Colorado, 1019",
        "about": "Cillum ut Lorem aliquip voluptate anim ad cillum sint ullamco consectetur consectetur incididunt. Adipisicing irure officia minim nostrud incididunt laborum sunt proident. Aliqua sint ut adipisicing dolor tempor sunt labore exercitation ipsum. Magna Lorem non culpa eiusmod commodo culpa culpa elit aliqua cillum id aute. Aliquip minim sit occaecat nulla laborum nostrud labore. Lorem in aliquip amet labore aute voluptate aliquip excepteur mollit. Veniam amet proident non anim nostrud labore fugiat adipisicing veniam occaecat aute esse amet.\r\n",
        "registered": "2014-02-01T09:58:12 -06:-30",
        "latitude": 48.189561,
        "longitude": 152.024103
    }, {
        "_id": "56553089002931f72eff3a80",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "eyeColor": "green",
        "name": "Gates Mcclain",
        "gender": "male",
        "company": "AQUASURE",
        "email": "gatesmcclain@aquasure.com",
        "phone": "+1 (934) 439-3479",
        "address": "279 Bogart Street, Fivepointville, Oklahoma, 1784",
        "about": "Deserunt mollit adipisicing labore velit eiusmod nisi ex do velit ullamco anim. Officia culpa culpa veniam elit velit occaecat proident eu voluptate mollit sit consequat. Incididunt dolore nostrud sit amet ad est occaecat qui exercitation. Veniam labore mollit non nostrud do. Nisi nulla mollit eiusmod aliquip dolor pariatur. Est occaecat sunt laborum consectetur dolor eu.\r\n",
        "registered": "2015-01-06T04:33:53 -06:-30",
        "latitude": 66.790476,
        "longitude": -128.940625
    }, {
        "_id": "5655308973259ec0d0ac52db",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "eyeColor": "blue",
        "name": "Dominguez Goodman",
        "gender": "male",
        "company": "VERTON",
        "email": "dominguezgoodman@verton.com",
        "phone": "+1 (822) 581-2195",
        "address": "720 Highlawn Avenue, Coultervillle, Guam, 9415",
        "about": "Pariatur occaecat nostrud fugiat anim Lorem magna sunt aliquip sunt eiusmod do exercitation. Cupidatat magna commodo eiusmod in nisi aliquip et cupidatat quis et consectetur. Commodo labore consectetur amet magna ullamco fugiat. Ad qui nisi minim ipsum sint aliquip sint cupidatat nostrud est sunt dolor exercitation. Aliqua laborum eiusmod deserunt aute consequat anim anim.\r\n",
        "registered": "2015-08-26T10:18:01 -06:-30",
        "latitude": 50.90602,
        "longitude": -94.12456
    }, {
        "_id": "5655308910644c0f96060daa",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "eyeColor": "blue",
        "name": "Blankenship Hess",
        "gender": "male",
        "company": "KENGEN",
        "email": "blankenshiphess@kengen.com",
        "phone": "+1 (807) 545-3295",
        "address": "366 Visitation Place, Norvelt, Louisiana, 8529",
        "about": "Reprehenderit officia Lorem minim officia cupidatat ea ex labore cillum excepteur. Velit cupidatat officia velit nulla exercitation aute non et Lorem deserunt exercitation culpa cupidatat. Anim deserunt incididunt veniam ad et ex mollit labore consectetur in et. Velit adipisicing ex duis enim culpa cillum laboris minim enim excepteur velit in est fugiat. Deserunt sint aliqua esse incididunt laboris fugiat esse. Officia dolor dolore ipsum ad ut laborum cupidatat incididunt anim sit occaecat occaecat.\r\n",
        "registered": "2014-02-02T05:49:46 -06:-30",
        "latitude": -2.646255,
        "longitude": 108.358896
    }, {
        "_id": "5655308916bebcc3a17a43bd",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "eyeColor": "green",
        "name": "Flynn Short",
        "gender": "male",
        "company": "NIMON",
        "email": "flynnshort@nimon.com",
        "phone": "+1 (825) 541-2655",
        "address": "669 Madoc Avenue, Juarez, Alabama, 582",
        "about": "Ex sint magna exercitation do nisi veniam sint cupidatat in veniam ut. Excepteur nostrud et ea quis aliqua dolor sunt culpa laboris esse aliqua culpa laborum. Non quis pariatur voluptate sunt nisi in.\r\n",
        "registered": "2015-05-08T10:20:23 -06:-30",
        "latitude": 3.242418,
        "longitude": 119.668585
    }];

    var source = $("#user").html();
    var template = Handlebars.compile(source);

    var row = $("#user-row").html();
    var rowTemplate = Handlebars.compile(row);
    $(users).each(function(key, value) {
    	if ( key % 2 == 0 ){
    		$(".container").append(rowTemplate());
    	}
        addUser(template(value));
    });

    function addUser(html){
    	$(".row:last-of-type").append(html);
    }
});
