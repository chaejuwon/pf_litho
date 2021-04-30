<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>데이터베이스</title>
    <link rel="stylesheet" href="./css/reset.css">
    <style>
        span {display:inline-block;text-align:center;padding:10px 20px;background:#cd9452;border:1px solid #cd9452;transition:all .3s}
        span:hover {background:#fff;}
        span a {display:block;font-size:14px;font-weight:600;line-height:160%;color:#fff;}
        span:hover a {color:#000;}
    </style>
</head>
<body>
    
    <?php

    include_once('header.php');
    
    $name  = $_POST['name'];
    $email = $_POST['email'];
    $tel   = $_POST['tel'];
    $text  = $_POST['text'];

    $sql = "insert into pf_litho (name, email, tel, text) values ('$name','$email','$tel','$text')";

    $result = mysqli_query($conn, $sql);

    echo "<span><a href='javascript:history.go(-1)'>뒤로가기</a></span>저장이 완료되셨습니다";


    include_once('footer.php');

    ?>


</body>
</html>



<!-- localhost/ph_litho/response.php -->