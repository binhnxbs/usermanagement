function createNewProfile(data) {

  var ss = SpreadsheetApp.openById(IDDBSYS);
  var ws = ss.getSheetByName("Profiles");
  var date = Utilities.formatDate(new Date(), "GMT+07:00", "dd-MM-yyyy");
  var dateTime = Utilities.formatDate(new Date(), "GMT+07:00", "dd-MM-yyyy HH:mm:ss");
  
  
  
}
