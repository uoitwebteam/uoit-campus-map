class MapControlsCtrl {
	static get $inject(){
		return ['LocationResource', 'CategoryResource', 'CollectionResource', 'FeatureResource', '$timeout'];
	}
	constructor(LocationResource, CategoryResource, CollectionResource, FeatureResource, $timeout) {
    this.FeatureResource = FeatureResource;
    this.CollectionResource = CollectionResource;
    this.CategoryResource = CategoryResource;
    this.LocationResource = LocationResource;
    this.$timeout = $timeout;
	}
	$onInit() {
		this.loadLocations(locations => {
			this.location = locations[1];
			this.updateLocation();
		});
	}
	loadLocations(callback) {
		return this.LocationResource.query().$promise.then(locations => {
			this.locations = locations;
			callback&&callback(locations);
			this.$timeout(
				() => angular.element($window).triggerHandler('resize')
			);
		});
	}
	loadCategories(callback) {
		return this.CategoryResource.query().$promise.then(categories => {
			this.categories = categories;
			callback&&callback(categories);
		});
	}
	loadCollections(callback) {
		const {location, category} = this;
		return this.CollectionResource.query({
			filter: { location: location._id, category: category._id }
		}).$promise.then(collections => {
			this.collections = collections;
			callback&&callback(collections);
		});
	}
	updateLocation() {
		this.loadCategories(categories => {
			this.category = categories[0];
			this.updateCategory();
		});
	}
	updateCategory() {
		this.loadCollections(collections => {
			this.collection = collections[0];
			this.updateCollection();
		});
	}
	updateCollection() {
		const { location, category, collection } = this;
		this.$ngModel.$setViewValue({ location, category, collection });
	}
	showAll() {
		this.FeatureResource.query({}).$promise.then(features => {
			this.$ngModel.$setViewValue({
				showAll: true, 
				collection: { type: 'FeatureCollection', features }
			});
		});
	}
}

export default MapControlsCtrl;