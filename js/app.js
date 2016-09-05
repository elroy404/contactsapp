$(document).ready(function(){
  var contactsEntry;
  var counter = 0;
  var addressCounter = 0;
  var addressBook = [];
  var contactBook = [];
  var secondaryNum = false;
  var secondaryAdd = false;

  $("#add-contact-button").click(function(){
    counter += 1;
    var addFirstName = $("#first-name").val();
    var addLastName = $("#last-name").val();
    var addStreetAdd = $("#street-address").val();
    var addCity = $("#city").val();
    var addState = $("#state").val();
    var addPhoneNum = $("#phone-num").val();

    var addPhoneNum2 = $("#phone-num-2").val();;
    var addStreetAdd2 = $("#street-address-2").val();
    var addCity2 = $("#city-2").val();
    var addState2 = $("#state-2").val();

    if(addFirstName&&addFirstName&&addStreetAdd&&addCity&&addState&&addPhoneNum != ""){
      addressBook.push(
        {
          firstName: addFirstName,
          lastName: addLastName,
          phoneNum: [addPhoneNum, addPhoneNum2],
          streetAdd: [addStreetAdd, addStreetAdd2],
          city: [addCity, addCity2],
          state: [addState, addState2],
          newPhone: secondaryNum,
          newAddress: secondaryAdd
        });

        var contacts = "<li class=\"contact-name\">"+
                        "<span class=\"entry\" id=\"" + counter + "\">" +
                        addFirstName + " " + addLastName +
                        "</span></li>";

        $(".rolodex h2").show();
        $(".rolodex ul").append(contacts);
    }

    else{
      alert("please fill out all fields");
    }

    resetForm();
  });

  $(".entries").on("click",".contact-name",function(){
    $(".side-container").empty();
    contactsEntry = $(this).find(".entry").text();
    findAddress();

    var contact = addressBook[addressCounter];

    var sideFormat =
          "<h2 id=\"side-name\"></h2>" +
          "<div id=\"side-first-name\">First name: </div>" +
          "<div id=\"side-last-name\">Last name: </div>" +
          "<div id=\"side-phone-num\">Phone Number: </div>" +
          "<ul class=\"contact-phone-numbers\"></ul></div>" +
          "<div id=\"side-address\">Addresses:" +
          "<ul class=\"contact-address\"><li></li></ul></div>";

    $(".side-container").show();
    $(".side-container").append(sideFormat);

    var contactName = contact.firstName + " " + contact.lastName;
    var fName = contact.firstName;
    var lName = contact.lastName;

    var primaryNumber = "<li>" + contact.phoneNum[0] + "</li>";
    var secondaryNumber = "<li>" + contact.phoneNum[1] + "</li>";
    var primaryAddress = contact.streetAdd[0] + ", " + contact.city[0] + ", " + contact.state[0];
    var secondaryAddress = "<li>" + contact.streetAdd[1] + ", " + contact.city[1] + ", " + contact.state[1] + "</li>";

    $("#side-name").append(contactName);
    $("#side-first-name").append(fName);
    $("#side-last-name").append(lName);
    $(".contact-phone-numbers").append(primaryNumber);
    $(".contact-address li").append(primaryAddress);


    if(contact.newPhone == true){
      $(".contact-phone-numbers").append(secondaryNumber);
    }

    // $("#side-phone-num").append(primar);

    if(contact.newAddress == true){
      $(".contact-address li").append(secondaryAddress);

    }




  });

  $("#add-phone-button").click(function(){
    if(secondaryNum == false){
      $("#phone-num-2").show();
      secondaryNum = true;
      console.log(secondaryNum);
    }
    else{
      hideSecNum();
      console.log(secondaryNum);
    }
  });

  $("#add-address-button").click(function(){
    if(secondaryAdd == false){
      $(".address-2").show();
      secondaryAdd = true;
      console.log(secondaryAdd);
    }
    else{
      hideSecAdd();
      console.log(secondaryAdd);
    }
  });

  //finds contact info from addressBook
  function findAddress(){
    for(var i = 0;i<addressBook.length;i++){
      var combineName = addressBook[i].firstName + " " + addressBook[i].lastName;
      if(contactsEntry == combineName){
        addressCounter = i;
      }
    }
  }

  function hideSecNum(){
    $("#phone-num-2").hide();
    secondaryNum = false;
  }

  function hideSecAdd(){
    $(".address-2").hide();
    secondaryAdd = false;
  }

  function resetForm(){
    $(".form-control").val("");
    secondaryNum = false;
    secondaryAdd = false;
    hideSecNum();
    hideSecAdd();
  }

});



//how to format phone numbers
// var phoneFormat = addPhoneNum.split("");
//
// console.log(phoneFormat);

// var displayAddress =
//       "<h2 id=\"side-name\">" + contact.firstName + " " + contact.lastName + "</h2>"+
//       "<div id=\"side-first-name\">First name: " + contact.firstName + "</div>"+
//       "<div id=\"side-last-name\">Last name: " + contact.lastName +"</div>";
//
// var primaryNumber = "<div id=\"side-phone-num\">Phone Number: " + contact.phoneNum[0] + "</div>";
// var secondaryNumber = "<div id=\"side-phone-num\">Phone Number: " + contact.phoneNum + "</div>";
// var primaryAddress =
//       "<div id=\"side-address\">Addresses:"+
//       "<ul class=\"contact-address\"><li>"+
//       contact.streetAdd[0] + ", " + contact.city[0] + ", " + contact.state[0]  +
//       "</li></ul></div>";
// var secondaryAddress =
//       "<li>" + contact.streetAdd[1] + ", " + contact.city[1] + ", " + contact.state[1] + "</li>";

// $(".side-container").append(primaryNumber);
// $(".side-container").append(primaryAddress);
//
// if(contact.newAddress == true){
//   $(".contact-address").append(secondaryAddress);
// }
//
// if(){
//
// }
