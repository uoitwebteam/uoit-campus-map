/**
 * The `MapControlsCtrl` provides an interface between the map component
 * and the map control filter dropdowns.
 * 
 * It is not responsible for much actual map logic, but instead for
 * accepting user input and turning it into queries whose results
 * are assigned back to the controller. The `MapCtrl` takes care of
 * turning the returned values into map-usable data, whereas this controller
 * simply makes it available.
 *
 * The controller is made up of:
 * - constructor
 * - 3 methods for loading query results (location, category, collection)
 * - 3 methods for updating dropdown contents
 * - utility methods for setting active collection and showing all collections
 */
class MapControlsCtrl {
	static get $inject(){
		return ['$mapApi', '$tourApi', '$timeout', '$window'];
	}
	/**
	 * Initialize controller dependencies.
	 * @param  {Object} $mapApi  Map $resource service
	 * @param  {Object} $tourApi Tour $resource service
	 * @param  {Object} $timeout Angular's setTimeout() wrapper
	 * @param  {Object} $window  Angular's window wrapper
	 */
	constructor($mapApi, $tourApi, $timeout, $window) {
    this.FeatureResource = $mapApi.feature;
    this.CollectionResource = $mapApi.collection;
    this.CategoryResource = $mapApi.category;
    this.LocationResource = $tourApi.location;
    this.$timeout = $timeout;
    this.$window = $window;
	}
	/**
	 * Initializes the controls (show all map elements)
	 */
	$onInit() {
		// this.loadLocations().then(locations => {
		// 	this.location = locations[1];
		// 	this.updateLocation();
		// 	angular.element(this.$window).triggerHandler('resize');
		// });
		this.showAll();//.then(() => angular.element(this.$window).triggerHandler('resize'));
	}
	/**
	 * Load location list from server.
	 * @return {Promise} Resolves to list of locations
	 */
	loadLocations() {
		return this.LocationResource.query().$promise.then(locations => {
			this.locations = locations;
			return locations;
		});
	}
	/**
	 * Load category list from server.
	 * @return {Promise} Resolves to list of categories
	 */
	loadCategories() {
		return this.CategoryResource.query().$promise.then(categories => {
			this.categories = categories;
			return categories;
		});
	}
	/**
	 * Load collection list from server using the `_id` of the currently
	 * selected category and location (extracted directly from the
	 * controller / `this`) to filter by.
	 * @return {Promise} Resolves to list of collections
	 */
	loadCollections() {
		const { location: { _id: location }, category: { _id: category } } = this;
		return this.CollectionResource.query({
			filter: { location, category }
		}).$promise.then(collections => {
			this.collections = collections;
			return collections;
		});
	}
	/**
	 * After selecting a location, loads categories and sets category
	 * to first item in list; kicks off category update.
	 */
	updateLocation() {
		this.loadCategories().then(categories => {
			this.category = categories[0];
			this.updateCategory();
		});
	}
	/**
	 * After selecting a category, loads collections and sets collection
	 * to first item in list; kicks off collection update.
	 */
	updateCategory() {
		this.loadCollections().then(collections => {
			this.collection = collections[0];
			this.updateCollection();
		});
	}
	/**
	 * After selecting a collection, extracts all relevant filter
	 * properties from controller and uses `setCollection()` to
	 * send the data to the view.
	 */
	updateCollection() {
		const { location, category, collection } = this;
		this.setCollection({
			location,
			category,
			collection
		});
	}
	/**
	 * Sends current data to view.
	 * @param {[type]}  options.location   [description]
	 * @param {[type]}  options.category   [description]
	 * @param {[type]}  options.collection [description]
	 * @param {Boolean} showAll            [description]
	 */
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