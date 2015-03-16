function Game() {
	
	var startGame = function() {
		//
	}
	
	var preload = function() {
		var loadQueue = new createjs.LoadQueue();
		loadQueue.addEventListener("fileload", preload_complete);
		loadQueue.loadFile("assets/tile.png");		
	}
	
	var preload_complete = function() {
		if( window.console )console.log('preload complete!');
		startGame();
	}
	
	preload();
}

if( window.console )console.log('instantiating global object');
var Game = new Game();
