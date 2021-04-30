<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>document</title>
</head>
<body>
    
        <?php

        include_once('header.php');



        $sql = "insert into pf_litho(name,email, tel, text) values
                ('채주원', 'cjw0214@nate.com', '010-8537-0609', '안녕하세요 더조은아카데미입니다'),
                ('홍길동', 'cdla123@nate.com', '010-4652-4533', '안녕하세요 더조은아카데미입니다'),
                ('강감찬', 'cdasc23@nate.com', '010-4652-3543', '안녕하세요 더조은아카데미입니다')
                ";
        $result = mysqli_query($conn, $sql);

        echo 'insert 성공';


        include_once('footer.php');

        ?>

</body>
</html>


<!-- juwon1.dothome.co.kr/pf_litho/insert.php -->