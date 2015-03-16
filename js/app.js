function Game() {
	
	// triggered by preload_complete().
	var startGame = function() {
		//
	}
	
	// triggered at object creation.
	// triggers preload_complete().
	var preload = function() {
		var loadQueue = new createjs.LoadQueue();
		loadQueue.addEventListener("fileload", preload_complete);
		loadQueue.loadFile("assets/tile.png");		
	}
	
	// triggered at preload() complete.
	// triggers startGame().
	var preload_complete = function() {
		if( window.console )console.log('preload complete!');
		startGame();
	}
	
	preload();
}

if( window.console )console.log('instantiating global object');
var Game = new Game();
