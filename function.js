$(function() {
  /** 
   * https://codingmania.net/table/109.html
   * テーブルのデータ・行を抽出・表示
   */
  $('[name="menu-category"]').change(function() {
    var category = $('[name="menu-category"]').val();
    // console.log(category);
    if (category == 'all') {
      $("tbody tr").show();
    } else {
      $("tbody tr").css("display", "none");
      $("tbody tr." + category).show();
    }
  });

  /**
   * アレルギー物質検索
   */
  $('[name="allergy-category"]').change(function() {
    var searchCategory = $('[name="allergy-category"]').val();
    var targetText,
        targetClass;

    console.log(searchCategory);
    if (searchCategory == 'noAllergy') {
      // $("tbody tr").show();
      $("tbody tr").removeClass('hidden');
    } else {
      // テーブルヘッダーからターゲットカラムの位置を特定
      $('thead th').each(function() {
        targetText = $(this).text();
        
        if (targetText.indexOf(searchCategory) != -1) {
          targetClass = $(this).attr("class");
          // console.log('カラム: ' + targetClass);
        }
      });
      // テーブル一覧から該当する行を非表示にする
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
      
    }
  });
});