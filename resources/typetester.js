// フォントサイズ変更
$('.typeface__fontsize').on('input', function() {
  const fontSize = $(this).val();
  console.log(fontSize);
  $(this).nextAll('textarea').css('font-size', fontSize + 'px') 
// ↑場所によってtextareaに当たるように変更する
});
// font-weightとfont-styleでスタイルを変更
$('#dmsans .typeface__select').change(function() {
  var property = $(this).find('option:selected').val();
  var weightStyle = property.split('-');
  $('#dmsans textarea').css({'font-weight':weightStyle[0], 'font-style':weightStyle[1]})
});
// --dmsansのOpenType機能を変更
$('#dmsans .typeface__check').click(function() {
  var checked = $('#dmsans .typeface__check:checked').map(function() {
    return $(this).val();
  }).get();
  features = checked.join('\', \'');
  features = '\'' + features + '\'';
  $('#dmsans textarea').css('font-feature-settings', features)
});

// font-familyでスタイルを変更
$('#goodday .typeface__select').change(function() {
  var style = $(this).find('option:selected').val();
  $('#goodday textarea').css('font-family', style)
});
// #gooddayのOpenType機能を変更
$('#goodday .typeface__check').click(function() {
  var checked = $('#goodday .typeface__check:checked').map(function() {
    return $(this).val();
  }).get();
  features = checked.join('\', \'');
  features = '\'' + features + '\'';
  $('#goodday textarea').css('font-feature-settings', features)
});

// スライダーでバリアブルフォントを調整
$('#modern .typeface__slider').on('input', function() {
  const weight = $(this).val();
// 複数軸の場合, const italic = $(#italic).val();のようにそれぞれ定義する
  $('#modern textarea').css('font-variation-settings', `'wght' ${weight}`)
// 複数軸の場合、$('#modern textarea').css('font-variation-settings', `'wght' ${weight}, 'ital' ${italic}`) のように書く
});
