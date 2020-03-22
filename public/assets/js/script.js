const log = console.log;

$(() => {
    $(".start-btn").click(event => {
        window.location.href = `${window.location.href}list`;
    });

    // UPDATES TASKS FROM COMPLETION TO TRUE
    $(".uncompleted-task-icon").click(event => {
        let id = event.target.id;

        $.ajax({
            method: "PUT",
            url: `/list/${id}`

        }).then(() => {
            location.reload();
        });
    });

    // THIS DELETES A COMPLETED TASK FROM THE DB
    $('i.delete-task-icon').click(event => {
        let id = event.target.id;
        $.ajax({
            method: "DELETE",
            url: `/list/delete/${id}`

        }).then(() => {
            location.reload();
        });

    });


});