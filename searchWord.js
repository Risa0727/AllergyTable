/**
 * 検索ワードを含むラーメンを非表示にする機能
 * 課題：
 *  複数の条件で検索できるようにしたい
 *  予測補完機能追加したい
 */
$(function() {
  var searchWord = function() {
    // 変数宣言
    var searchResult,
    searchText = capitalize($(this).val()), 
    targetText,
    targetClass;

    // 配列宣言
    searchResult = [];

    // 検索ボックスに値が入ってる時、
    if (searchText != '') {
      $('thead th').each(function() {
        targetText = $(this).text();
        

        // 検索ワードが一致したら,
        if (targetText.indexOf(searchText) != -1) {
          // クラス名取得
          targetClass = $(this).attr("class");
          console.log('hoge: ' + targetClass);
        }
      });

      $('tbody tr').each(function() {
        $('tbody td').each(function() {
         if ($(this).attr("class") == targetClass) {
           // ターゲットのカラムに”o”が無いか調べる
           if ($(this).text() != "o") {
            $(this).parent().removeClass('hidden');
           } else {
            $(this).parent().addClass('hidden');
           }
         }
        });
      });
    } else {
      // カラになったら全て表示
      $("tbody tr").removeClass('hidden');
    }
  };

  // 先頭のみ大文字に変換
  var capitalize = function(str) {
    if (!str || typeof str !== 'string') return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  // execute
  $('#search-text').on('input', searchWord);
});