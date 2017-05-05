<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <style media="screen">
            table,tr,td{
                border: 1px solid red;
            }
            td{
                width: 120px;
                height: 20px;
            }
            .pink{
                background-color: pink;
            }
        </style>
    </head>
    <body>

        <table>


        <?php
            for ($i=0; $i < 20; $i++) {
                ?>

                <tr
                    <?php
                    if ($i % 2 == 0) {
                        echo "class='pink'";
                    }
                ?>
                >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
        <?php
            }
         ?>
         </table>
    </body>
</html>
