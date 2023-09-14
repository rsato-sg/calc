const parse = () => {
//計算式の分解
//const str =  'a b c';
const e = document.getElementById("word");
let word = e.value.trim(); // 前後のスペースを削除
let words = word.split(/ +/);

//console.log(word);
            //一個前の文字が一個以上(スペースが一個以上)

    //分解したい要素の数があっているかの確認
    //要素が三つあることを確認
    //["10", "+", "11"]
    if (words.length === 3) {

      //数値の文字列を数値型に変換
      //parseFloat 引数が文字列の場合は文字列を数値として解析し、その結果を１０進数で返す。
      //parseInt にすると小数点は無視される
      const num1 = parseInt(words[0]);

      const operator = words[1];

      //数値の文字列を数値型に変換
      const num2 = parseInt(words[2]);
      
      //演算記号の処理をどうするか
      switch (operator) {
          case '+':
              return add(num1, num2);
          case '-':
              return subtract(num1, num2);
          case '*':
              return multiply(num1, num2);
          case '/':
            if (num2 !== 0) {
              return divide(num1, num2);
            } 
            else {
              return "0で割ることはできません";
            }
          default:
              return null;    
      }
    }
    else {
      return null;
    }   
};

      //演算記号の処理をどうするか
      const add = (a, b) => {
      return a + b;
      };

      const subtract = (a, b) => {
      return a - b;
      };

      const multiply = (a, b) => {
      return a * b;
      };

      const divide = (a, b) => {
      return a / b;
      };

//実際の計算を行って結果を表示

//計算ボタンを押したとき
  //HTMLの要素に.addEventlisner
    //どのようなイベントなのか(文字列でクリック)
      //イベントに対する関数
      const wordBtn = document.getElementById("button");

      const calculate = () => {
        const wordText = document.getElementById("word");
        const resultElm = document.getElementById("result");
      
        let parsed = parse(wordText.value);
        if (parsed !== null) {
          resultElm.innerHTML = parsed;
        }
        else{
          resultElm.innerHTML = "計算式が不正です";
        }
        return false;
      };

//ボタンが押されたら関数呼び出し
wordBtn.addEventListener("click", calculate);

//このようにも書ける
/*const wordBtn = document.getElementById("button");

word.Btn.addEventListner("click", () => {
  const wordText = document.getElementById("word");
  const resultElm = document.getElementById("result");

  let parsed = parse(word.value);
        if (parsed) {
          resultElm.innerHTML = parsed;
        }
        else{
          resultElm.innerHTML = "計算式が不明です";
        }
        return false;
});*/


