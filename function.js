$(function() {
  /** 
   * https://codingmania.net/table/109.html
   * テーブルのデータ・行を抽出・表示
   */
$("ul.mod_koumokulist li a").click(function() {
  var ramen = $(this).attr("class");
  $("tbody tr").css("display", "none");
  $("tbody tr.title,tr#" + ramen).show();

  return false;
});
  // display all
  $("li.mod_LabelAll a").click(function() {
    $("tbody tr").show();

    return false;
  });
});