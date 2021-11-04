// �t�H���g�T�C�Y�ύX
$('.typeface__fontsize').on('input', function() {
  const fontSize = $(this).val();
  console.log(fontSize);
  $(this).nextAll('textarea').css('font-size', fontSize + 'px') 
// ���ꏊ�ɂ����textarea�ɓ�����悤�ɕύX����
});
// font-weight��font-style�ŃX�^�C����ύX
$('#dmsans .typeface__select').change(function() {
  var property = $(this).find('option:selected').val();
  var weightStyle = property.split('-');
  $('#dmsans textarea').css({'font-weight':weightStyle[0], 'font-style':weightStyle[1]})
});
// --dmsans��OpenType�@�\��ύX
$('#dmsans .typeface__check').click(function() {
  var checked = $('#dmsans .typeface__check:checked').map(function() {
    return $(this).val();
  }).get();
  features = checked.join('\', \'');
  features = '\'' + features + '\'';
  $('#dmsans textarea').css('font-feature-settings', features)
});

// font-family�ŃX�^�C����ύX
$('#koga .typeface__select').change(function() {
  var style = $(this).find('option:selected').val();
  $('#koga textarea').css('font-family', style)
});
// #koga��OpenType�@�\��ύX
$('#koga .typeface__check').click(function() {
  var checked = $('#koga .typeface__check:checked').map(function() {
    return $(this).val();
  }).get();
  features = checked.join('\', \'');
  features = '\'' + features + '\'';
  $('#koga textarea').css('font-feature-settings', features)
});

// �X���C�_�[�Ńo���A�u���t�H���g�𒲐�
$('#modern .typeface__slider').on('input', function() {
  const weight = $(this).val();
// �������̏ꍇ, const italic = $(#italic).val();�̂悤�ɂ��ꂼ���`����
  $('#modern textarea').css('font-variation-settings', `'wght' ${weight}`)
// �������̏ꍇ�A$('#modern textarea').css('font-variation-settings', `'wght' ${weight}, 'ital' ${italic}`) �̂悤�ɏ���
});