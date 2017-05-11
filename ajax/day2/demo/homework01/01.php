<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="message.css">
	<script src="jquery-3.2.1.js"></script>
</head>
<body>
	<div class="header">留言板</div>
	<div class="content">
		<ul id="father">
			<?php
				require_once("connect.php");
				$sql = 'select message from content ORDER BY id DESC;';
				// $result = $dbh -> exec($sql);
				// echo "<li>".print_r($result)."</li>";
				foreach($dbh -> query($sql) as $row){
					echo "<li>".$row["message"]."</li>";
				}

			?>
			<li>第三条</li>
			<li>第二条</li>
			<li>第一条</li>
		</ul>
	</div>
	<div class="message">
		<div>
			<!-- <form action="submit.php" method="get"> -->
				<textarea name="message" id="text"></textarea>
				<input type="submit" id="btn">
			<!-- </form> -->
		</div>
	</div>
</body>
<script>

	$("#btn").click(function(){
		var xhr = new XMLHttpRequest();
		
		xhr.onreadystatechange  = function(){
			if(xhr.readyState == 4){
		
				var str = "<li>"+$("textarea").val()+"</li>";
				$("#father").prepend(str);
				}
		}
		var  str1 =$("textarea").val();
		$("#btn").html("");
		xhr.open("get","submit.php?message="+str1,true);
		xhr.send(null);
			
		
		
	})

	
</script>
</html>