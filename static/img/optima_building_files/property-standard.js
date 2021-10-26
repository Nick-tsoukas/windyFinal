var regex_name = /^['-\w]+\s+['-\w]+$/i;
var regex_email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
var regex_phone = /^(\(\d{3}\)|\d{3})[-\s\.]?\d{3}[-\s\.]?\d{4}$/i;
var regex_blank = /\S+/i;

var $contact_name, $contact_email, $contact_phone;
var $contact_name_group, $contact_email_group, $contact_phone_group;

$(function(){
    $contact_name = $('#contact_name');
    $contact_email = $('#contact_email');
    $contact_phone = $('#contact_phone');

    $contact_name_group = $contact_name.closest('.input-group');
    $contact_email_group = $contact_email.closest('.input-group');
    $contact_phone_group = $contact_phone.closest('.input-group');

    $contact_name.on('blur keyup',isValidName);
    $contact_email.on('blur keyup',isValidEmail);
    $contact_phone.on('blur keyup',isValidPhone);

    $('#submit_button').on('click',isValidForm);
});

function isValidName(){return isValidField(regex_name,$contact_name,$contact_name_group);}
function isValidEmail(){return isValidField(regex_email,$contact_email,$contact_email_group);}
function isValidPhone(){return isValidField(regex_phone,$contact_phone,$contact_phone_group);}

function isValidField(regex,$field,$group){
    var is_valid = true;

    $group.removeClass('invalid');

    if(!regex.test($field.val())){
        $group.addClass('invalid');
        is_valid = false;
    }

    return is_valid;
}

function isValidForm(){
    var is_valid = true;

    if(!isValidField(regex_name,$contact_name,$contact_name_group)) is_valid = false;
    if(!isValidField(regex_email,$contact_email,$contact_email_group)) is_valid = false;
    if(!isValidField(regex_phone,$contact_phone,$contact_phone_group)) is_valid = false;

    return is_valid;
}

// _recaptcha_v2_multi relies on this callback method
function recaptchaRenderCb(data) {
  var captchaList = document.querySelectorAll('.g-recaptcha')
  var currCaptcha
  var siteKey

  // Run recaptcha render method for each recaptcha div on the page
  for (var i = 0, len = captchaList.length; i < len; i++) {
    currCaptcha = captchaList[i]
    siteKey = currCaptcha.getAttribute('data-sitekey')
    grecaptcha.render(currCaptcha, {'sitekey' : siteKey})
  }

  // Maintain old functionality
  reCaptchaSuccess('Recaptcha setup was successful')
}

function reCaptchaSuccess(data){
    var $flash = $('#flash');
    var $flash_recaptcha = $('#flash > ul > li.recaptcha');

    if($flash_recaptcha.length) $flash_recaptcha.remove();

    var $flash_list_items = $('#flash > ul > li');

    if(!$flash_list_items.length) $flash.empty();
}