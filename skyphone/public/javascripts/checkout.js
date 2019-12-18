var stripe = Stripe('pk_test_sLUcNPNyj6g0hn6iDBuKtAEx00iGU6fB3R');

var $form = $('#checkout-form'); 

$form.submit(function(event){
    $form.find('button').prop('disabled',true);
    stripe.card.createToken({
        number: $('#card-number').val(),
        cvc: $('card-cvc').val(), 
       exp_month: $('card-expiry-month').val(),
       exp_year: $('card-expiry-year').val(),
       name: $('#card-name').val()
    }, stripeResponseHandler);
    return false;
});

function stripeResponseHandler(status, response) {
    if (response.error) {
        $form.find('.payment-errors').text(response.error.message);
        $form.find('button').prop('disable',false);
    } else {
        var token = response.id;
        $form.append($('<input type="hidden" name="stripeToken" />').val(token));
        $form.get(0).submit();
    }
};