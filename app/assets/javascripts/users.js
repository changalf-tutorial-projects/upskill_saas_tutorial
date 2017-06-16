/* global $ */
/* global Stripe */

// Document ready
$(document).on('turbolinks:load', function() {
  var theForm = $('#pro_form');
  var submitBtn = $('#form-submit-btn');
  
  // Set Stripe public key
  Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
  
  // When user clicks form submit button,
  submitBtn.click(function(event) {
    // prevent default submission behaviour
    event.preventDefault();
    
    // Collect the credit card fields
    var ccNum = $('#card_number').val(), 
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
        
    // Send card info the Stripe
    Stripe.createToken({
      number: ccNum,
      cvc: ccNum,
      exp_month: expMonth,
      exp_year: expYear
    }, stripeResponseHandler);
  });
  
  // Stripe will return back a card token
  // Inject card token as hidden field into form
  // Submit form to our Rails app
});

