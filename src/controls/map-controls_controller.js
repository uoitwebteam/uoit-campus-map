class MapControlsCtrl {
	static get $inject(){
		return ['$mapApi', '$tourApi', '$timeout', '$window'];
	}
	constructor($mapApi, $tourApi, $timeout, $window) {
    this.FeatureResource = $mapApi.feature;
    this.CollectionResource = $mapApi.collection;
    this.CategoryResource = $mapApi.category;
    this.LocationResource = $tourApi.location;
    this.$timeout = $timeout;
    this.$window = $window;
	}
	$onInit() {
		// this.loadLocations().then(locations => {
		// 	this.location = locations[1];
		// 	this.updateLocation();
		// 	angular.element(this.$window).triggerHandler('resize');
		// });
		this.showAll();//.then(() => angular.element(this.$window).triggerHandler('resize'));
	}
	loadLocations() {
		return this.LocationResource.query().$promise.then(locations => {
			this.locations = locations;
			return locations;
		});
	}
	loadCategories() {
		return this.CategoryResource.query().$promise.then(categories => {
			this.categories = categories;
			return categories;
		});
	}
	loadCollections() {
		const { location: { _id: location }, category: { _id: category } } = this;
		return this.CollectionResource.query({
			filter: { location, category }
		}).$promise.then(collections => {
			this.collections = collections;
			return collections;
		});
	}
	updateLocation() {
		this.loadCategories().then(categories => {
			this.category = categories[0];
			this.updateCategory();
		});
	}
	updateCategory() {
		this.loadCollections().then(collections => {
			this.collection = collections[0];
			this.updateCollection();
		});
	}
	updateCollection() {
		const { location, category, collection } = this;
		this.setCollection({
			location,
			category,
			collection
		});
	}
	setCollection({ location, category, collection }, showAll = false) {
		this.$ngModel.$setViewValue({
			location,
			category,
			collection,
			showAll
		});
	}
	showAll() {
		return this.FeatureResource.query({}).$promise.then(features => {
			this.setCollection({
				collection: {
					type: 'FeatureCollection',
					features
				}
			}, true);
			return features;
		});
	}
}

export default MapControlsCtrl;