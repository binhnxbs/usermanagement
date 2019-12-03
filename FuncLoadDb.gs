function loadValueOfCreateNewProfile() {

    var ss = SpreadsheetApp.openById(IDDBSYS);
    var ws = ss.getSheetByName("Entity");
    var query = "select A,G where B ='Active'";
    var url = "https://docs.google.com/spreadsheets/d/" + ss.getId() + "/gviz/tq?gid=" + ws.getSheetId() + "&tqx=out:csv&tq=" + encodeURIComponent(query);
    var options = {
        headers: {
            'Authorization': 'Bearer ' + ScriptApp.getOAuthToken()
        }
    };
    var csv = UrlFetchApp.fetch(url, options);
    var data = Utilities.parseCsv(csv);
  
    //Check log
    Logger.log(data);
  
    return data;

}
