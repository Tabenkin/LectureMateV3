<?php
	
	$files = scandir("./css");

	foreach($files as $file)
	{
		if( $file == "." || $file == ".." || $file == "loadCSS.php")
		{
			continue;
		}
		echo "<link rel='stylesheet' type='text/css' href='css/$file' />";

	}


?>