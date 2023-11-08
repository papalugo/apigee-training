 if (context.flow == "PROXY_REQ_FLOW") {
    try {
        var date = context.getVariable("apigee.date");
        var time = context.getVariable("apigee.time").substring(0,5);
        var datetime = date + 'T' + time;
    
        var weatherBody = JSON.parse(context.getVariable("calloutResponseTemp.content"));
    
        context.setVariable("apigee.datetime", ""+date + " "+time);
        context.setVariable("apigee.weather", weatherBody);
        
        var arrayTime = weatherBody.hourly.time;
        var arrayTemperature = weatherBody.hourly.temperature_2m;
        var idxFound = arrayTime.findIndex((dt) => (dt >= datetime)) || -1;
        var temperature = arrayTemperature[idxFound] || null;
        
        print("arrayTime.......: " + arrayTime);
        print("arrayTemperature: " + arrayTemperature);    
        
        if (temperature !== null) {
            context.setVariable("apigee.temperature", temperature);
            context.setVariable("apigee.temperatureUnit", weatherBody.hourly_units.temperature_2m);
        } else {
            throw new Error("Error found temperature by: " + datetime);
        }
        
    } catch(error) {
        throw new Error("Error read temperature: " + error);
    }
}