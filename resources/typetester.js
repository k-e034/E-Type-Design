$('.typeface_fontsize').on('input', function() {
  const fontSize = $(this).val();
  console.log(fontSize);
  $(this).nextAll('textarea').css('font-size', fontSize + 'px')
});
$('#goodday .typeface_select').change(function() {
  var property = $(this).find('option:selected').val();
  var weightStyle = property.split('-');
  $('#goodday textarea').css({'font-weight':weightStyle[0], 'font-style':weightStyle[1]})
});
$('#goodday .typeface_check').click(function() {
  var checked = $('#goodday .typeface_check:checked').map(function() {
    return $(this).val();
  }).get();
  features = checked.join('\', \'');
  features = '\'' + features + '\'';
  $('#goodday textarea').css('font-feature-settings', features)
});
