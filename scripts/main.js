"use strict";var root=null,useHash=!0,router=new Navigo(root,useHash),showTermsAndConditions=function(){document.body.innerHTML="";var e=document.createElement("div");e.classList.add("privacy"),e.innerHTML="<div class='privacy__container'><div class='privacy__content'><p class='privacy__title'>Follow My Battery - Privacy policy</p><p class='privacy__text'>Follow my battery requires the permission to read contacts from the user's phone. This is needed in order for the user to choose one of his contact directly from the app. Follow my battery saves the contact informations (contact name and contact number) chosen by the user in the SharedPreferences of the user's phone. These informations will be later used to send an SMS to the contact chosen by the user when the battery of the user will reach the threshold previously selected by the user.<br>Follow my battery does not use user's contacts for other purposes. Follow my battery does not transfer user's contacts to the cloud. Follow my battery does not save user's contacts to the cloud.</p><p class='privacy__text'>Follow my battery requires the permission to send sms. This operation could be charged by the user's mobile provider. Follow my battery cannot be held responsible if the user was charged by his mobile provider during this operation. </p></div></div>",document.body.appendChild(e)};router.on("/privacy",function(){showTermsAndConditions()}).resolve();