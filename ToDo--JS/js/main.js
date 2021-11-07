// 追加ボタン押下時、未完了のTODOにアイテムを追加

// クリックしたときに作動する関数を定義
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputTxt = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputTxt);

};
// ↑ const onClickAdd = () => { ↑

// 未完了リストから指定の要素を削除 -- 共通化して関数にまとまる(条件が異なる箇所のみ引数として渡す)
const deleteFromImcompleteList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
}

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  //
  // JS上でHTMLのDOMを作成し、差し込んでいく
  //

  // ul生成 (講義でのdiv)
  const ul = document.createElement("ul");
  ul.className = "list";

  // liタグ生成 -- この時点では各要素はバラバラ
  const li = document.createElement("li");
  li.innerText = text;

  // button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(ul.list)を未完了リストから削除
    deleteFromImcompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // TODO内容を取得
    const text = addTarget.firstElementChild.innerText;
    // ul.list以下を初期化
    addTarget.textContent = null;
    console.log(addTarget);

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    // console.log(li);
    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ（ul.list）を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    //li.listタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    console.log(addTarget);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(ul.list)を未完了リストから削除
    deleteFromImcompleteList(deleteButton.parentNode);
  });

  // ulタグの子要素に各要素を設定 --　ここでDOMの階層構造を付与
  ul.appendChild(li);
  ul.appendChild(completeButton);
  ul.appendChild(deleteButton);

  //　未完了リストに追加
  document.getElementById("imcomplete-list").appendChild(ul);
}

// #add-buttonをクリックした際に、onClickAddファンクションを作動
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

/*

*/
