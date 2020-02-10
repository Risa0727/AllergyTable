$(function() {
  /** 
   * https://codingmania.net/table/109.html
   * テーブルのデータ・行を抽出・表示
   */
  $('[name="menu-category"]').change(function() {
    var category = $('[name="menu-category"]').val();
    console.log(category);
    if (category == 'all') {
      $("tbody tr").show();
    } else {
      $("tbody tr").css("display", "none");
      $("tbody tr." + category).show();
    }
  });
});