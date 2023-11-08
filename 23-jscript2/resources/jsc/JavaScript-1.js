if (context.flow == "PROXY_REQ_FLOW") {
    var id = context.getVariable("request.queryparam.id");
    context.setVariable("id", id);
}

if (context.flow == "TARGET_REQ_FLOW") {
    var url1 = "https://634eebdd4af5fdff3a6a719a.mockapi.io/api/users/"+context.getVariable("id");
    context.setVariable("target.url", url1);
}