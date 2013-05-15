'use strict';

app.controller('TreeCtrl', function ($scope) {
	$scope.nodes = [
		{ name:'Level1 - A', checked:false },
		{ name:'Level1 - B', checked:true , children:[
			{name:'Level2 - A', checked:true},
			{name:'Level2 - B', checked:true},
			{name:'Level2 - C', checked:true, children:[
				{name:'Level3 - A', checked:false},
				{name:'Level3 - B', checked:false, children:[
					{name:'Level4 - A', checked:false}
				]}
			]}
		]}, 
		{ name:'Level1 - C', checked:true },
		{ name:'Level1 - D', checked:true },
		{ name:'Level1 - E', checked:true },
	];
	
	$scope.level = 2;
	$scope.levels = [1,2,3,4];
		
	$scope.clickHandler = function() {
		alert('clicked!');
	};
	
	$scope.myClick = function(node) {
		alert('Clicked [' + node.name + '] state is [' + node.checked + ']');
	};
});