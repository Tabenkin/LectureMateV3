<?php
	
	printScriptTag("Main");
	printScriptTag("Models");
	printScriptTag("Collections");
	printScriptTag("Views");
	

	function printScriptTag($dir)
	{
		$files = scandir("./js/$dir");

		foreach($files as $file)
		{
			if( $file == "." || $file == ".." )
			{
				continue;
			}

			echo "<script type='text/javascript' src='js/$dir/$file'></script>";
		}

		
	}


?>