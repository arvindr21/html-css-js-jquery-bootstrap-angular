	$(document).ready(function() {
	    $.ajax({
	        //url: ("http://jsonplaceholder.typicode.com/todos"),
	        url: "http://192.168.3.203:3000/todos",
	        success: function(resp) {
	            // Adding the template
	            var source = $("#todo").html();
	            var template = Handlebars.compile(source);
	            
	            $(resp).each(function(key, value) {
	                //console.log(key,value);
	                addVal(template(value));
	            });
	            $('input[type=checkbox]').click(update);
	        },
	        error: function() {
	            console.log(arguments);
	        }
	    });
	    // to get
	    // $.get(url, succ, err);

	    /* Add Row by Row to the table */
	    function addVal_manHtml(value) {
	        var $num = "<td>" + value.id + "</td>";
	        var $title = "<td>" + value.title + "</td>";
	        var img = value.completed ? "tick.jpg" : "cross.jpg"; // Add precedence () otherwise it will finally take only the single string
	        var $status = "<td><img width=10 height=10 src='" +
	            img + "' alt='" + value.completed + "'/></td>";
	        var chkd = value.completed ? "checked" : "";
	        var update = "<td><input type='checkbox' " + chkd + "/></td>";
	        var $trow = "<tr>" + $num + $title + $status + update + "</tr>";
	        $('table').append($trow);
	    }

	    /* Using the templte */
	    function addVal(row) {
	    	$('#todoList').append(row);
	    }

	    function update() {
	        $(this).parent().prev().html("<img width=10 height=10 src='" +
	            (this.checked ? "tick.jpg" : "cross.jpg") + "' alt='" +
	            this.checked + "'/>");
	    }
	});
