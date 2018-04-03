$(document).ready(function() {
    $(".image-display").click(function(){
        var url = $(this).attr("src");
       $("#modal-id").attr("src",url);
        $("#exampleModalLong").modal('show');
    })
});