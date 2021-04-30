<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>테이블생성</title>
</head>
<body>

        <?php

        include_once('header.php');

        $sql = "create table pf_litho(
                idx int(11) auto_increment not null,
                name varchar(10) not null,
                email varchar(50) not null,
                tel varchar(13) not null,
                text varchar(250) not null,
                primary key (idx)
        )";

        $result = mysqli_query($conn, $sql);

        echo '테이블 연결 성공';


        include_once('footer.php');

        ?>

</body>
</html>


<!-- juwon1.dothome.co.kr/pf_litho/create.php -->