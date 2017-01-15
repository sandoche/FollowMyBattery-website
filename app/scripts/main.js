var root = null;
var useHash = true;
var router = new Navigo(root, useHash);

var showTermsAndConditions = function showTermsAndConditions() {
  swal({
    title: "Privacy",
    text: "<p>Follow my battery requires the permission to read contacts from the user's phone. This is needed in order for the user to choose one of his contact directly from the app. Follow my battery saves the contact informations (contact name and contact number) chosen by the user in the SharedPreferences of the user's phone. These informations will be later used to send an SMS to the contact chosen by the user when the battery of the user will reach the threshold previously selected by the user.<br>Follow my battery does not use user's contacts for other purposes. Follow my battery does not transfer user's contacts to the cloud. Follow my battery does not save user's contacts to the cloud.<br><br></p><p>Follow my battery requires the permission to send sms. This operation could be charged by the user's mobile provider. Follow my battery cannot be held responsible if the user was charged by his mobile provider during this operation. </p>",
    html: true
  });
}

router
  .on('/privacy', function () {
    showTermsAndConditions();
  })
  .resolve();
