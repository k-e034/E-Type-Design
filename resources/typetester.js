$('.typeface_fontsize').on('input', function() {
  var fontSize = $(this).val();
  $('.typeface_area').css('font-size', fontSize + 'px')
  $('.display').html(fontSize + 'px');
});
$('#goodday .typeface_select').change(function() {
  var style = $(this).find('option:selected').val();
  $('#goodday textarea').css('font-family',style)});
$('#goodday .typeface_check').click(function() {
  var checked = $('#goodday .typeface_check:checked').map(function() {
    return $(this).val();
  }).get();
  features = checked.join('\', \'');
  features = '\'' + features + '\'';
  $('#goodday textarea').css('font-feature-settings', features)
});
