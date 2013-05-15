'use strict';

var app = angular.module('app', []);

app.directive('treeView', function($compile) {
		return {
			restrict : 'E',
			scope : {
				localNodes : '=model',
				localClick : '&click',
				localLevels: '=level'
			},
			compile : function (tElement, tAttrs, transclude) {

				function RenderTemplate(collection, level, max) {
					var text = '';

					text += '<div style="padding-left:15px" ng-repeat="n in ' + collection + '" ng-show="localLevels >= ' + level + '">';
					text += '<label><input type=checkbox ng-model=n.checked ng-click=localClick({node:n})>{{n.name}}</label>'; 
					if (level < max)
						text += RenderTemplate('n.children', level + 1, max);
					text += '</div>';
					
					return text;
				}

				try
				{
					var text = '<div>';
					text += RenderTemplate('localNodes', 1, tAttrs.maxlevels);
					text += '</div>';
					tElement.html(text);
				}
				catch(err)
				{
					element.html('<b>ERROR!!!</b> - ' + err);
				}
			}
		};
	});

