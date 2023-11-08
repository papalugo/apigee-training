if (context.flow == "TARGET_REQ_FLOW") {
    var id = context.getVariable("request.header.id");
    var url1 = "https://634eebdd4af5fdff3a6a719a.mockapi.io/api/users/"+id;
    context.setVariable("target.url", url1);
}