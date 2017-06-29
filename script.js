$(document).ready(function() {

    var $form = $("form");

    $form.submit(function(event) {

        event.preventDefault(); 

        var $firstName = $("#firstName").val();
        var $lastName = $("#lastName").val();
        var $description = $("#textArea").val();

        var str = "<div class='newContact'><h1>" + $firstName + $lastName + "</h1><p id='viewDescrip'>Click here for description!</p></div>";

        $("#rightSide").append(str);

        $("#firstName").val("");
        $("#lastName").val("");
        $("#textArea").val("");


        $(document).on("click", "#viewDescrip", function() {

            var $descrip = $("#textArea").val();
            var str = "<p>" + $descrip + "</p>";
            $(this).parent().html(str);

        });

    });

    $("button").click(function() {
        $("#rightSide").html("");
    });

});