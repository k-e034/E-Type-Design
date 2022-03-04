$('.typeface__fontsize').on('input', function() {
  var fontSize = $(this).val();
  $('.text').css('font-size', fontSize + 'px')
  $('.display').html(fontSize + 'px');
});
$('#goodday .typeface__select').change(function() {
  var style = $(this).find('option:selected').val();
  $('#goodday textarea').css('font-family',style)});
$('#goodday .typeface__check').click(function() {
  var checked = $('#goodday .typeface__check:checked').map(function() {
    return $(this).val();
  }).get();
  features = checked.join('\', \'');
  features = '\'' + features + '\'';
  $('#goodday textarea').css('font-feature-settings', features)
});
