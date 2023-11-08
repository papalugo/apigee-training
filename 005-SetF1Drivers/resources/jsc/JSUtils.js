try {
    var jsonResponseDrivers = JSON.parse(context.getVariable('outputResponseDrivers'));
    var strDrivers = JSON.stringify(jsonResponseDrivers.MRData.DriverTable.Driver);
    print(jsonResponseDrivers);
    print(strDrivers);
    context.setVariable('jsonDrivers', strDrivers);
} catch(error) {
    throw new Error(error);
}