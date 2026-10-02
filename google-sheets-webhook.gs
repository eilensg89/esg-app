/* ESG Experience™ — Google Sheets lead receiver
   1) Create a Google Sheet and open Extensions > Apps Script.
   2) Paste this code.
   3) Deploy as Web App with access for anyone with the link.
   4) Copy the Web App URL into site-config.js > sheetsEndpoint.
*/
function doPost(e) {
  const data = JSON.parse(e.postData.contents || '{}');
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('ESG_LEADS') || ss.insertSheet('ESG_LEADS');
  const headers = ['createdAt','type','name','business','phone','email','service','goal','need','payment','delivery','page','payload'];
  if (sheet.getLastRow() === 0) sheet.appendRow(headers);
  sheet.appendRow([
    data.createdAt || new Date(), data.type || '', data.name || '', data.business || '',
    data.phone || '', data.email || '', data.service || '', data.goal || '', data.need || '',
    data.payment || '', data.delivery || '', data.page || '', JSON.stringify(data)
  ]);
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}
