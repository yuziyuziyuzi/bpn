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

  // HTML要素を変数に格納
  // getElementsByClassName()は配列要素になるので扱い注意
  max = document.getElementsByClassName("max");
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
  // 「平均を出力」ボタンをクリックしたときの処理
  btn.onclick = function(){
    // 各列の平均値を計算する
    maxmax(max,"lastmax");
    maxmax(min,"lastmin");
    maxmax(pulse,"lastpulse"); 
    maxmax(nightmax,"lastnightmax");
    maxmax(nightmin,"lastnightmin");
    maxmax(nightpulse,"lastpulse2");
  }

  // 入力された血圧/心拍数データの平均値を計算する
  // data: HTML要素(配列)
  // output: 平均値を出力するエディットボックス名(id名)
  function maxmax(data, output){

    var num = 0;    // 正常入力データ数
    var sum = 0;    // 合計
    var answer = 0; // 平均値

    // 要素数の分だけ繰り返す
    for(var i = 0; i < data.length; i++){
      // 入力したデータが数字かつ、空白ではないなら計算する
      // ①isNaNで非数かどうか確認
      // ②isNaNは空白だとfalseを返すので、入力した文字列の長さで空白かどうかチェックする
      if(!isNaN(data[i].value) && data[i].value.length > 0 ){
        // ここまでくるなら数値が入力されていると判断できる
        // 合計値に加算する
        sum += (parseInt(data[i].value)); // valueで入力した値を取ってる parseIntは文字列を数値に変換するのだ！！

        // 入力したデータ数として加算
        num++;
      }
    }

    // 平均出して代入
    answer = sum/num;
    
    // 平均値のエディットボックスの値を更新
    document.getElementById( output ).value = answer;
  }

  /*-------------------------------------------------------------------*/
  // 日付関連
  var daymax = [];  // 日付情報格納先

  // 日付情報のエディットボックスのHTML要素を取得
  // getElementsByClassName()は配列要素になるので扱い注意
  daymax = document.getElementsByClassName("day1");

  // 「日にち自動で入力！」ボタンを押したときの処理
  day.onclick = function()
  {
    // 日にち入力ボタン押したら今日の日にちを自動出力
    daymaxx();              // 関数処理
  }

  /*-------------------------------------------------------------------*/
  // 日付自動入力処理
  function daymaxx()       // ☆日にちを自動出力する関数　　　　　　　　　関数前にはfunction記載しておくことエラーでる
  {
    // 処理概要
    // ①ボタンを押した時点の日付情報を一番左上のエディットボックスに設定
    // ②①の情報をcookieに保存
    // ③1日ずつ進めながら、同じ列のエディットボックスをすべて埋めていく

    // ①ボタンを押した時点の日付情報を一番左上のエディットボックスに設定
    // ボタンを押した時点の情報を取得
    var today  = new Date();          // ここではミリ秒で値を取得
    var month  = today.getMonth()+1;  // 現在の月の数字を取得＋1は0から開始のため
    var date   = today.getDate();     // 現在の日を取得ここは＋１いらない
  
    // 一番左上のエディットボックスを更新
    daymax[0].value =  month + "/" + date;  // ここではmonthとdateは値　"/" を入れ＋することで文字列を合体さしている。
    // ①終わり

    // ②①の情報をcookieに保存
    // cookie名はname
    document.cookie = `name=${daymax[0].value};max-age = 3000` // cookieに値を保存しcookieの寿命をmax-ageで設定  バッククォート使用 シフト＋＠  
    // ②終わり
    
    // ③1日ずつ進めながら、同じ列のエディットボックスをすべて埋めていく
    // daymax[0]は一番左上なので、iの初期値は1
    for(var i = 1; i < daymax.length; i++ )
    {
      // 日付情報を1日進める
      today.setDate(today.getDate() + 1);        //  これはtodayに１足している　　これをそのまま代入するとミリ秒単位ででる。

      // エディットボックスに入れる情報を取得
      month           = today.getMonth()+1;      // 月
      date            = today.getDate();         // 日

      // エディットボックス更新
      daymax[i].value = month + "/" + date;
    }
    // ③終わり
  }
  /*-------------------------------------------------------------------*/

  // cookie関係
  var cookiebox;                                                          // クッキーの値取得する変数 文字列である
  var cookieabc = [];


  // cookie処理
  // cookieはセミコロン(;)で区切られている。
  // セミコロン内は「cookie名=データ」という形式になっている。
  // 今は1つしかデータを保存していないので、セミコロンは無視して
  // セミコロン内のデータを分割する処理を行う

  // cookieの値を読みだして日にちのところに保存する
  // 1 cookieの値を変数に入れる
  cookiebox = document.cookie;

  // ２ cookieをばらして日にち情報を取得する
  // cookieabc[0]: cookie名
  // cookieabc[1]: データ

//splitは配列を返す。;で区切る
  var cookiesplit = cookiebox.split(';');

  //このforではcookiesplitを=で分けてnameがある箇所を探して日にちを入れる。
  for(var i  = 0; i < cookiesplit.length; i++)
  {
    cookieabc = cookiesplit[i].split('=');
   // 3 左上のエディットボックスに反映  cookieの値を反映する

    if((cookieabc[0] === "name") || (cookieabc[0] === " name" )){
       daymax[0].value = cookieabc[1];
       dayget();
    }

    // cookieデータの呼び出し血圧場所
    else if((cookieabc[0] === "cookie") || (cookieabc[0] === " cookie" )){

      let cookiecut = cookieabc[1].split(",");

      for(let j = 0; j < max.length; j++){

        max[j].value = cookiecut[6*j];
        min[j].value = cookiecut[6*j+1];
        pulse[j].value = cookiecut[6*j+2];
        nightmax[j].value = cookiecut[6*j+3];
        nightmin[j].value = cookiecut[6*j+4];
        nightpulse[j].value = cookiecut[6*j+5];

      }

    }

  }
  

  // 左上の日付情報が変わったときの処理
  daymax[0].onchange = function() // onchangeで日にち箇所にデータを入れるとイベント発生する
  {
    
    document.cookie = `name=${daymax[0].value}`;  // cookieに値を保存     バッククォート使用 シフト＋＠  

    dayget();                                     // 関数呼ぶ
    
    cookiecool(); 
  }

  /*------------------------------------------------------------------------------------*/
  // 日付情報更新(左上の値に基づいて他のエディットボックスを更新する)
  function dayget()                                                       //この関数は入力した日にちから+された値がでる
  { 
    // 概要
    // 左上の日付情報に基づいてそれ以外の日付を設定していく
    // ●/○日の文字列を用いてDateオブジェクトを設定すると、
    // 意図しない年(2001年)を取得してしまうため、今の年にしたい。

    // 左上の日付情報を取得する
    // エディットボックスの要素.valueを参照することで、エディットボックスの入力情報を取得できる
    var newget1 = new Date(daymax[0].value);  //☆　ここは３回覚えていない注意点　valueはエディットボックスに入力した値を取る
    

    // 処理順
    // ➀今日の日付情報を取得する。new Date()で取得する
    // ➁➀のデータから年を取得する。getfullyear()で取得する。
    // ⓷➁をnewget1の年に反映する。
    // ➀今日の日付情報を取得する。new Date()で取得する
    var today  =  new Date()

    // ➁➀のデータから年を取得する。getfullyear(左上の日付情報)で取得する。
    var yearget = today.getFullYear()

    // ⓷➁をnewget1(左上の日付情報)の年に反映する。
    newget1.setFullYear(yearget)

    // 列内の残りの日付を設定していく
    // daymax[0]は一番左上なので、iの初期値は1
    for(var i = 1; i < daymax.length; i++)        //ここで+1してるのは1からスタートしてるため
    {
      // 日付情報を次の日に進める
      // newget1.getDate()日付を取得して+1することで次の日に設定できる
      newget1.setDate(newget1.getDate() + 1);   // これはtodayに１足している　　これをそのまま代入するとミリ秒単位ででる

      // 設定した日付情報から月と日を取得
      var month = newget1.getMonth()+1;        // 現在の月の数字を取得＋1は0から開始のため
      var date = newget1.getDate();           // 現在の日を取得ここは＋１いらない

      // エディットボックス更新
      // エディットボックスの要素.valueに代入することで、エディットボックスの値を更新できる
      daymax[i].value =  month + "/" + date;      // ここではmonthとdateは値　"/" を入れ＋することで文字列を合体さしている。
    }

  }

  /*-----------------------------------------------------------------------------------*/

  // 「cookie保存」ボタンを押したときの処理
  cookiebtn.onclick = function(){
    cookiecool();
  }
  
  // 血圧・心拍数データをcookieに保存する
  function cookiecool(){
    // for以下で文字列連結しているため、初期値を空文字にして設定
    var a = "";                           //なにも表示さしたくないので０ではなく””を代入

    // データの行数だけループする
    for(var i = 0; i <= 11; i++)
    {
      // 各行のデータをコンマで連結する
      // 変数名は違うが、すべての行に同じクラスのデータを配置しているので、
      // 配列の要素数はすべて同じ
      a += max[i].value+','+min[i].value+','+pulse[i].value+','+nightmax[i].value+','+nightmin[i].value+','+nightpulse[i].value+',';      //入力データを+で文字を連結している。
    }

    // cookieにデータを保存
    // cookieにデータを保存するときは、「cookie名=データ」の形でdocument.cookieに代入する
    // 代入しているが、すでに存在するデータを上書きしない(セミコロンで連結されるようになっている)
    document.cookie = `cookie=${a}`;     // 血圧データを入力したときにcookieを保存
  }

    //for文ですべての配列にクラスを入れる
   
  for(var i = 0;  i < max.length; i++)
  {

    //すべての配列に.onchange入った。。？
    max[i].onchange = function(){
      maxmax(max,"lastmax");
      cookiecool();
    }

    min[i].onchange = function(){
      maxmax(min,"lastmin");
      cookiecool();
    }
    pulse[i].onchange = function(){
      maxmax(pulse,"lastpulse");
      cookiecool();
    }

    nightmax[i].onchange = function(){
      maxmax(nightmax,"lastnightmax");
      cookiecool();
    }

    nightmin[i].onchange = function(){
      maxmax(nightmin,"lastnightmin");
      cookiecool();
    }

    nightpulse[i].onchange =  function(){
      maxmax(nightpulse,"lastpulse2");
      cookiecool();
    }

  }



})();