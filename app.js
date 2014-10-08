(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function() {
	this.products = gems;
	});

	var gems = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: ' ... this thing fucking rocks! ... ',
		canPurchase: false,
		soldOUt: true,
		images: ["http://placekitten.com/200/200"]
	},
	
	{
		name: 'Dodecahedron2',
		price: 12.95,
		description: ' ... Wow! this thing fucking rocks! ... ',
		canPurchase: true,
		soldOUt: false,
		images: ["http://placekitten.com/200/200"]
	}
	];

})();
