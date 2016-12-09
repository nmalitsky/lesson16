'use strict';

pokemonApp.component('pokemonDetail', {
    	controller: function pokemonDetailCtrl($routeParams, PokemonsService) {

		this.pokemonLoaded = false;
		this.pokemon = PokemonsService.get({
		        pokemonId: $routeParams['pokemonId']
		}, function(successResult) {
	        	// ����!
	        	this.notfoundError = false;
	        	this.pokemonLoaded = true;

	        	this.activeTab = 1;
	    	}, function(errorResult) {
	        	// �� ����..
	        	this.notfoundError = true;
	        	this.pokemonLoaded = true;
	        	this.disableControlTab = true;
		});

		this.pokemon.$promise.then(function(result) {
			//this.pokemonLoaded = true;
		});

		this.deletePokemon = function(pokemonId) {
		        this.pokemon.$delete({
	        	    	pokemonId: pokemonId
		        }, function(successResult) {
		            	// ����!
		            	this.deletionSuccess = true;
			}, function(errorResult) {
		            	// �� ����..
				this.deletionError = true;
	        	});

		}

	},
	templateUrl: './src/PokemonDetail/PokemonDetail.html'
});