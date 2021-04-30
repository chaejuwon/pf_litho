<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>select</title>
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/style.css">
    
    <style>
        table {width:1000px;margin:50px auto;text-align:center;}
        table caption {text-align:center;font-size:35px;font-weight:600;color:#c9c;padding:50px 0;}
        table tr th {width:150px;height:40px;border:1px solid #999;background:#ccc;font-size:15px;}
        table tr th:first-child {width:50px;}
        table tr th:last-child {width:500px;}
        table tr td {width:150px;height:40px;border:1px solid #999;font-size:15px;}
        table tr td:first-child {width:50px;}
        table tr td:last-child {width:500px;text-align:left;text-indent:30px;}
        table tfoot {font-size:20px;font-weight:600;}
        table tfoot tr:last-child td:last-child {width:500px;text-align:center;text-indent:0;color:#f0f;font-weight:600;}
        span {display:inline-block;text-align:center;padding:10px 20px;background:#cd9452;border:1px solid #cd9452;transition:all .3s}
        span:hover {background:#fff;}
        span a {display:block;font-size:14px;font-weight:600;line-height:160%;color:#fff;}
        span:hover a {color:#000;}

    </style>
</head>
<body>
            
        <?php

        include_once('header.php');

        $sql = "select * from pf_litho";

        $result = mysqli_query($conn, $sql);

        if( mysqli_num_rows($result) > 0 ){
            echo "<span><a href='javascript:history.go(-1)'>이전으로 돌아가기</a></span>";
            echo "<table>";
            echo "<caption>LITHO 개인정보 저장소</caption>";
            echo "<thead>";
            echo "<tr>";
            echo "<th>No.</th><th>Name</th><th>E-mail</th><th>Tel</th><th>Contents</th>";
            echo "</tr>";
            echo "<thead>";

            echo "<tfoot>";
            echo "<tr>";
            echo "<td colspan='4'>총 합수 :</td><td>" . mysqli_num_rows($result) . "</td>";
            echo "</tr>";
            echo "</tfoot>";

            echo "<tbody>";
            while( $row = mysqli_fetch_array($result) ){
                echo "<tr>";
                echo "<td>" . $row['idx'] . "</td>";
                echo "<td>" . $row['name'] . "</td>";
                echo "<td>" . $row['email'] . "</td>";
                echo "<td>" . $row['tel'] . "</td>";
                echo "<td>" . $row['text'] . "</td>";
                echo "</tr>";
            }
            echo "<tbody>";

            echo "</table>";
        }

        include_once('footer.php');

?>
</body>
</html>


<!-- juwon1.dothome.co.kr/pf_litho/insert.php -->