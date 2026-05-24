<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>吉村工務店</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:sans-serif;
}

body{
background:#f8fafc;
}

/* ヘッダー */

header{
display:flex;
justify-content:space-between;
padding:20px 40px;
background:white;
box-shadow:0 2px 10px rgba(0,0,0,.05);
}

.logo{
font-size:28px;
font-weight:bold;
}


/* トップ */

.hero{

display:flex;
align-items:center;
justify-content:space-between;
padding:80px 40px;
gap:40px;

}

.hero-text{
flex:1;
}

.hero h1{
font-size:52px;
margin-bottom:20px;
}

.hero p{
margin-bottom:20px;
color:#666;
}

.btn{

background:#ea580c;
color:white;
padding:15px 30px;

text-decoration:none;

border-radius:10px;

display:inline-block;

}

.hero-image{
flex:1;
}

.hero-image img{

width:100%;
border-radius:20px;

}


/* サービス */

.title{

text-align:center;

font-size:40px;

margin:
80px 0 40px;

}


.cards{

display:grid;

grid-template-columns:
repeat(auto-fit,minmax(250px,1fr));

gap:20px;

padding:20px;

}


.card{

background:white;

padding:20px;

border-radius:15px;

box-shadow:
0 5px 15px rgba(0,0,0,.08);

}


.service-img{

width:100%;

border-radius:10px;

margin-bottom:15px;

}


footer{

background:#111827;

color:white;

text-align:center;

padding:30px;

margin-top:80px;

}


</style>
</head>


<body>



<header>

<div class="logo">

吉村工務店

</div>

</header>




<!-- トップ -->

<section class="hero">

<div class="hero-text">

<h1>

住まいの安心を支える<br>

地域密着の吉村工務店

</h1>


<p>

屋根修理・外壁補修・水回り対応

</p>


<a href="#"

class="btn">

無料相談はこちら

</a>


</div>



<div class="hero-image">

<img
src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200">

</div>

</section>




<!-- サービス -->

<h2 class="title">

サービス内容

</h2>


<div class="cards">


<div class="card">

<img
src="repair.jpg"
class="service-img">

<h3>

屋根修理

</h3>

<p>

雨漏り・補修対応

</p>

</div>



<div class="card">

<img
src="repair.jpg"
class="service-img">

<h3>

外壁補修

</h3>

<p>

ひび割れ・塗装

</p>

</div>



<div class="card">

<img
src="repair.jpg"
class="service-img">

<h3>

水回り修理

</h3>

<p>

キッチン・浴室対応

</p>

</div>


</div>



<footer>

© 吉村工務店

</footer>


</body>
</html>
