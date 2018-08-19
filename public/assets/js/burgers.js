$(function () {
    $(".change-consumed").on("click", function (event) {
        var id = $(this).data("id");
        var newConsumed = $(this).data("newconsumed");

        var newConsumedState = {
            consumed: newConsumed
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newConsumedState
        })
        .then(function () {
            console.log("changed sleep to", newConsumed);
            location.reload()
        })
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#bu").val().trim(),
            consumed: $("[name=consumed]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        })
        .then( function () {
            console.log("create new burger");

            location.reload();
        });
    });
});