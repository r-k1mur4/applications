// 追加ボタンをクリックしたときの処理
document.getElementById("addButton").addEventListener("click", function () {
  // メモ入力用のinputエリアの値を取得する
  var memo = document.getElementById("memo").value;

  // メモ一覧を表示するためのdivエリアを取得する
  var memoList = document.getElementById("memoList");

  // 新しいメモを作成する
  var newMemo = document.createElement("p");
  newMemo.innerText = memo;

  // メモ一覧に新しいメモを追加する
  memoList.appendChild(newMemo);

  // メモ入力用のinputエリアを空にする
  document.getElementById("memo").value = "";
});
