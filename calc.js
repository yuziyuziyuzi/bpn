(function() {
  'use strict';

    var max = [];          //朝の最大血圧
    var min = [];          //朝の最低血圧   
    var pulse = [];        //脈拍
    var nightmax = [];     //夜の最大血圧
    var nightmin = [];     //夜の最低血圧
    var nightpulse = [];   //夜の脈拍
    var lastmax = 0;
    var lastmin = 0;
    var lastpulse = 0;
    var lastnightmax = 0;
    var lastnightmin = 0;
    var lastpulse2 = 0;

    max = document.getElementsByClassName("max");                         //クラスを代入
    min = document.getElementsByClassName("min");
    pulse = document.getElementsByClassName("pulse");
    nightmax = document.getElementsByClassName("nightmax");
    nightmin = document.getElementsByClassName("nightmin");
    nightpulse = document.getElementsByClassName("nightpulse");
    lastmax = document.getElementById("lastmax");

  let btn = document.getElementById('exchange');                        //idを変数に入れる処理
  let day = document.getElementById('day');
  let cookiebtn = document.getElementById('cookie');

  /*-----------------------------------------------------------------------------------*/
  
  btn.onclick = function(){　　　　　//ボタン押したら平均を出す関数呼び出し
    maxmax(max,"lastmax");
    maxmax(min,"lastmin");
    maxmax(pulse,"lastpulse"); 
    maxmax(nightmax,"lastnightmax");
    maxmax(nightmin,"lastnightmin");
    maxmax(nightpulse,"lastpulse2");
  }

  function maxmax(data, output){                                          //☆平均出す関数

    var num = 0;
    var sum = 0;
    var answer = 0;
     for(var i = 0; i < data.length; i++){
                                                                         // insNaNは非数かどうか見分ける
        if(!isNaN(data[i].value)&& data[i].value.length >0 ){
   
          sum += (parseInt( data[i].value));                               //valeueで入力した値を取ってる parseIntは文字列を数値に変換するのだ！！
          num++;

        }

      }

    answer = sum/num;                                                       //平均出して代入
    document.getElementById( output ).value = answer;                       //平均した値を参照する

   
  }

  /*-------------------------------------------------------------------*/

  var daymax = [];
  daymax = document.getElementsByClassName("day1");                     //クラスの値を渡す

  day.onclick = function()                                              //日にち入力ボタン押したら今日の日にちを自動出力
  {
    daymaxx();                                                          //関数処理
  }

  /*-------------------------------------------------------------------*/

  function daymaxx()                                                     //☆日にちを自動出力する関数　　　　　　　　　関数前にはfunction記載しておくことエラーでる
  {

    var today  = new Date();　                                            //ここではミリ秒で値を取得
    var month  = today.getMonth()+1;                                      //現在の月の数字を取得＋1は0から開始のため
    var date　 = today.getDate();                                         //現在の日を取得ここは＋１いらない
  
    daymax[0].value =  month + "/" + date;                                //ここではmonthとdateは値　"/" を入れ＋することで文字列を合体さしている。

    document.cookie = `name=${daymax[0].value}`;                          // cookieに値を保存     バッククォート使用 シフト＋＠  
  

    for(var i = 1; i < daymax.length; i++ )
    {

      today.setDate(today.getDate() + 1);                                  //  これはtodayに１足している　　これをそのまま代入するとミリ秒単位ででる。
      month   = today.getMonth()+1;
       date    = today.getDate();
      daymax[i].value =  month + "/" + date;                                

    }
 
  }
    /*-------------------------------------------------------------------*/

  var cookiebox;                                                          // クッキーの値取得する変数
  var cookieabc = [];

　                                                                        //cookieの値を読みだして日にちのところに保存する
  cookiebox = document.cookie;　                                          // 1 cookieの値を変数に入れる

  cookieabc   = cookiebox.split('=');                                     //cookieの値を分ける  //２ cookieをばらして日にち情報を取得する
 　daymax[0].value　= cookieabc[1];                                       //3エディットボックスに反映  cookieの値を反映する


  var get3 = [];                                                            //変数宣言
  get3 = document.getElementsByClassName("day1")                            //エディットボックスの値を取得する day1はエディットボックス左上のこと

 dayget();         
 cookiecool();                                                        //関数呼ぶ 

  get3[0].onchange = function()                                             // onchangeで日にち箇所にデータを入れるとイベント発生する 
  {
    alert("!");  // これはテスト用
    document.cookie = `name=${daymax[0].value}`;                            // cookieに値を保存     バッククォート使用 シフト＋＠  

    dayget();                                                              //関数呼ぶ
    
    cookiecool();
    
  }

  /*------------------------------------------------------------------------------------*/
  function dayget()                                                       //この関数は入力した日にちから+された値がでる
  { 
  
    var newget1 = new Date(get3[0].value);                                  //☆　ここは３回覚えていない注意点　valueはエディットボックスに入力した値を取る
                                                                          //概要　違う年（2001年）を取得してしまうため、今の年にしたい。
                                                                           //➀今日の日付情報を取得する。new　Date()で取得する
    var today  =  new Date()
                                                                           //➁　➀のデータから年を取得する。getfullyear()で取得する。
    var yearget = today.getFullYear()
                                                                            //⓷　➁をnewget1の年に反映する。
      newget1.setFullYear(yearget)

                                                                            //setfullyear入れる。
                                                                            //for文で入力した日にちの続きを出力したい。↓
    for(var i = 1; i < get3.length; i++ )                                     //ここで+1してるのは1からスタートしてるため
    {
                                                                              
      newget1.setDate(newget1.getDate() + 1);                                   //  これはtodayに１足している　　これをそのまま代入するとミリ秒単位ででる
      var month  = newget1.getMonth()+1;                                        //現在の月の数字を取得＋1は0から開始のため
      var date　 = newget1.getDate();                                           //現在の日を取得ここは＋１いらない
      get3[i].value =  month + "/" + date;                                      //ここではmonthとdateは値　"/" を入れ＋することで文字列を合体さしている。
    }

  }

  /*-----------------------------------------------------------------------------------*/

    cookiebtn.onclick = function(){                                                      　//cookieに保存ボタン押した時の処理
      cookiecool();
    }
  
  function cookiecool(){
      var a = "";                                                                       //なにも表示さしたくないので０ではなく””を代入
    for(var i = 0; i <= 11; i++)
     {

      a += max[i].value+','+min[i].value+','+pulse[i].value+','+nightmax[i].value+','+nightmin[i].value+','+nightpulse[i].value+',';      //入力データを+で文字を連結している。
     }     

      document.cookie  = `cookie=${a}`;                                                   //血圧データを入力したときにcookieを保存

  }

})();