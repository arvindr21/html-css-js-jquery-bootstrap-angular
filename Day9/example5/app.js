$(document).ready(function() {
    var todos = [];
    var numTodos = 0;

    var noToDo = $("#notodo");

    var addNew = Handlebars.compile($("#addNew").html());
    var todo = Handlebars.compile($("#todo").html());
    var ul = $('ul');

    $("#add").on('click', function() {
        noToDo.hide();
        ul.prepend(addNew());
    });

    ul.on("blur", "input:text", function(e) {
        var me = $(this);
        var prev = me.prev();
        var inTxt = me.val().trim();
        if (!prev.text()) {
            if (inTxt) {
                var myTodo = {
                    id: numTodos++,
                    desc: inTxt,
                    done: false
                };
                todos.push(myTodo);
                ul.prepend(todo(myTodo));
            }
            me.parent().parent().remove();
        } else if(inTxt){
        	var id = me.parent().siblings().first().text();
        	var idx = findObj(parseInt(id));
        	var desc = me.prev();
        	todos[idx].desc = inTxt;
        	desc.html(inTxt).show();
        	me.hide();
        } else {
        	me.hide().prev().show();
        }

    });

    ul.on("click", "input:checkbox", function(e) {
        var me = $(this);
        var parent = me.parent();
        var isDone = this.checked;
        var id = parent.prev().text();
        var idx = findObj(parseInt(id));
        var desc = parent.next().find("h4");

        todos[idx].done = isDone;

        if (isDone) {
            desc.html("<s>" + todos[idx].desc + "</s>");
            parent.siblings().find(".editIt").addClass("disabled");
        } else {
            desc.html(todos[idx].desc);
            parent.siblings().find(".editIt").removeClass("disabled");
        }
    });

    ul.on("click", "button.editIt", function(e) {
        var me = $(this);
        var parent = me.parent();
        var id = parent.siblings().first().text();
        var idx = findObj(parseInt(id));
        var desc = parent.prev().find("h4");
        desc.hide();
        desc.next().val(desc.text()).show();
    });
    ul.on("click", "button.deleteIt", function(e) {
        var me = $(this);
        var parent = me.parent();
        var id = parent.siblings().first().text();
        var idx = findObj(parseInt(id));

        if (idx > 0) {
            todos.splice(idx, 1);
        } else {
            todos.shift();
        }
        parent.parent().remove();
    });

    function findObj(id) {
        var len = todos.length;
        for (i = 0; i < len; i++) {
            if (id === todos[i].id) {
                return i;
            }
        }
        return -1;
    }
});
