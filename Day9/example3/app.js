$(document).ready(function() {
    var todos = [];
    var numtodos = 0;
    var currEdit = -1;
    
    var rows = Handlebars.compile($("#todoRow").html());
    var uline = Handlebars.compile($("#todoRowEnd").html());
    var newtoDo = Handlebars.compile($("#newtodo").html());
    var todo = Handlebars.compile($("#todo").html());

    var noToDo = $("#notodo");

    $("#add").on('click', function() {
        noToDo.hide();
        $(".container").append(rows());
        $(".container > .row:last-of-type").append(newtoDo);
    });

    $(".container").on("blur", "input:text", function(e) {
        var currElem = $(this);
        var parent = currElem.parent();
        var grandparent = parent.parent();
        var text = currElem.val().trim();
        if (grandparent.hasClass("myRow")) {
        	if (!text){
        		text = todos[currEdit].title;
        	}
            parent.append($("<p>").text(text));
            todos[currEdit].title = text;
            currElem.remove();
        } else {
            parent.remove();
            if (text) {
                var mytodo = {
                	id: numtodos++,
                    completed: false,
                    title: this.value
                };
                todos.push(mytodo);

                //$(".container > .row:last-of-type").append(todo(mytodo));
                //$(".container").append(uline());
                grandparent.append(todo(mytodo));
                grandparent.append(uline());
            }
        }
        console.log(todos);
    });

    function findThis(myText) {
        var arrIdx = -1;
        for (var i = todos.length - 1; i > -1; i--) {
            if (myText === todos[i].title) {
                arrIdx = i;
                break;
            }
        }
        return arrIdx;
    }

    $(".container").on("click", "input:checkbox", function(e) {
    	var parent = $(this).parent();
        var textBox = parent.siblings().find("p").first();
        var myText = textBox.text();
        var done = todos[arrIdx].completed = this.checked;
        var arrIdx = findThis(myText);

        if (arrIdx < 0) {
            console.log("Error");
            return;
        }
        
        if (done) {
            textBox.html("<p><s>" + myText + "</s></p>");
            parent.siblings().find("button").first().addClass("disabled");

        } else {
            textBox.html("<p>" + myText + "</p>");
            parent.siblings().find("button").first().removeClass("disabled");
        }
        console.log(todos);
    });

    $(".container").on("click", "button", function(e) {
        var title = $(this).parent().parent().siblings().find("p").first();
        var parent = title.parent();
        var grandparent = parent.parent();
        var contents = title.text();
        currEdit = findThis(contents);
        if ($(this).html() === "Edit") {
            title.remove();
            parent.append("<input type='text' class='form-control' value='" + contents + "'/>");
        } else {
        	grandparent.next().remove();
        	grandparent.remove();
        	if(currEdit > 0){
        		todos.splice(currEdit, 1);
        	} else {
        		todos.shift();
        	}
        	currEdit = -1; 
        	if(!todos.length){
        		noToDo.show();
        	}
        }
        console.log(todos);
    });
});
