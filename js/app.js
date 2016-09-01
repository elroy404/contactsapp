$(document).ready(function(){
  var contactsEntry;
  var counter = 0;
  var addressCounter = 0;
  var addressBook = [];
  var contactBook = [];

  $("#add-button").click(function(){
    counter += 1;
    var addFirstName = $("#first-name").val();
    var addLastName = $("#last-name").val();
    var addStreetAdd = $("#street-address").val();
    var addCity = $("#city").val();
    var addState = $("#state").val();
    var addPhoneNum = $("#phone-num").val();

    var phoneFormat = addPhoneNum.split("");


    for(var i = 0; i <= phoneFormat.length; i++){
      if(i && (i % 3 == 0)){
        phoneFormat.splice(i,0, "-");
      }
    }

    console.log(phoneFormat);


    addressBook.push(
      {
        firstName: addFirstName,
        lastName: addLastName,
        phoneNum: addPhoneNum,
        streetAdd: addStreetAdd,
        city: addCity,
        state: addState
      });

    var contacts = "<li class=\"contact-name\">"+
                    "<span class=\"entry\" id=\"" + counter + "\">" +
                    addFirstName + " " + addLastName +
                    "</span></li>";

    $(".rolodex ul").append(contacts);

  });

  $(".entries").on("click",".contact-name",function(){
    contactsEntry = $(this).find(".entry").text();
    findAddress();

    var displayAddress =
          "<h2 id=\"side-name\">" + addressBook[addressCounter].firstName + " " + addressBook[addressCounter].lastName + "</h2>"+
          "<div id=\"side-first-name\">First name: " + addressBook[addressCounter].firstName + "</div>"+
          "<div id=\"side-last-name\">Last name: " + addressBook[addressCounter].lastName +"</div>"+
          "<div id=\"side-phone-num\">Phone Number: " + addressBook[addressCounter].phoneNum + "</div>"+
          "<div id=\"side-address\">Addresses:"+
          "<ul class=\"\"><li>"+
          addressBook[addressCounter].streetAdd + ", " + addressBook[addressCounter].city + ", " + addressBook[addressCounter].state +
          "</li></ul></div>";


    $(".side-container").prepend(displayAddress);

  });



  function findAddress(){
    for(var i = 0;i<addressBook.length;i++){
      var combineName = addressBook[i].firstName + " " + addressBook[i].lastName;
      if(contactsEntry == combineName){
        addressCounter = i;
        console.log(addressCounter);
      }
    }
  }



});
