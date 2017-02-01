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
    return ['$mapApi', '$tourApi'];
  }

  /**
   * Initialize controller dependencies.
   * 
   * @param  {Object} $mapApi  Map $resource service
   * @param  {Object} $tourApi Tour $resource service
   * @param  {Object} $window  Angular's window wrapper
   */
  constructor($mapApi, $tourApi) {
    this.FeatureResource = $mapApi.feature;
    this.CollectionResource = $mapApi.collection;
    this.CategoryResource = $mapApi.category;
    this.LocationResource = $tourApi.location;

    this.location = [];
    this.category = [];
    this.collection = [];
  }

  /**
   * Initializes the controls (show all map elements)
   */
  $onInit() {
    this.loadLocations().then(locations => {
			this.location = locations[1];
			this.updateLocation();
			// this.showAll();
			// angular.element(this.$window).triggerHandler('resize');
    });
  }

  /**
   * Load location list from server.
   * 
   * @return {Promise} Resolves to list of locations
   */
  loadLocations() {
    return this.LocationResource.query().$promise.then(locations => {
      this.locations = locations;
      return locations;
    });
  }

  /**
   * After selecting a location, loads categories and sets category
   * to first item in list; kicks off category update.
   */
  updateLocation() {
    this.loadCategories().then(categories => {
      this.category = [...categories];
      this.updateCategory();
    });
  }

  /**
   * Load category list from server.
   * 
   * @return {Promise} Resolves to list of categories
   */
  loadCategories() {
    return this.CategoryResource.query().$promise.then(categories => {
      this.categories = categories;
      return categories;
    });
  }

  /**
   * After selecting a category, loads collections and sets collection
   * to first item in list; kicks off collection update.
   */
  updateCategory() {
    this.loadFeatures()
    	.then(() => this.updateFeatures())
    	.then(() => this.loadCollections())
    	.then(collections => {
	      this.collection = [...collections];
    //   this.updateCollection();
	    });
  }

  /**
   * Load feature list from server using the `_id`s of the currently
   * selected categories to filter by.
   *
   * @todo Update this doc to describe array of categories
   * 
   * @return {Promise} Resolves to list of collections
   */
  loadFeatures() {
    return this.FeatureResource.query({
      filter: {
      	'properties.category': {
      		$in: [...this.category.map(category => category._id)]
      	}
      }
    }).$promise.then(features => {
      this.features = features;
      console.log('FEATURES:', features)
      return features;
    });
  }

  updateFeatures() {
  	const { location, category, features } = this;
    this.setMapData({
    	location,
    	category,
      collection: {
        type: 'FeatureCollection',
        features
      }
    });
  }

  /**
   * Load collection list from server using the `_id` of the currently
   * selected category and location (extracted directly from the
   * controller / `this`) to filter by.
   *
   * @todo Update this doc to describe array of categories
   * 
   * @return {Promise} Resolves to list of collections
   */
  loadCollections() {
    return this.CollectionResource.query({
      filter: {
      	location:this.location._id,
      	category: {
      		$in: [...this.category.map(category => category._id)]
      	}
      }
    }).$promise.then(collections => {
      this.collections = collections;
      return collections;
    });
  }

  /**
   * After selecting a collection, extracts all relevant filter
   * properties from controller and uses `setMapData()` to
   * send the data to the view.
   */
  updateCollection() {
    const { location, category, collection } = this;
    this.setMapData({
      location,
      category,
      collection
    }, true);
  }

  /**
   * Sends current data to view for rendering in selection dropdowns.
   *
   * In order for the map to properly render the selected collection, the
   * `options.collection` param passed to this method must at least _look_
   * like a valid `FeatureCollection` (i.e. it can be a "true" collection,
   * or an object with a `type` property of `FeatureCollection` and a `features`
   * property containing an array of `Feature` objects).
   *
   * @example
   * // "true" collection
   * const feature = this.CollectionResource.get('featureId');
   * this.setMapData({ feature });
   * 
   * // mock collection
   * const features = this.FeatureResource.query();
   * this.setMapData({
   *   collection: {
   *     type: 'FeatureCollection',
   *     features
   *   }
   * }, true);
   * 
   * @param {Object}  resources
   * @param {Object}  resources.location    Currently selected location `$resource`
   * @param {Object}  resources.category    Currently selected category `$resource`
   * @param {Object}  resources.collection  Currently selected collection `$resource`
   * @param {Boolean} [showAll=false]       Whether to show all features
   */
  setMapData({ location, category, collection }, isCollection = false) {
    this.$ngModel.$setViewValue({
      location,
      category,
      collection,
      isCollection
    });
  }

  // toggle(item, list) {
  //   const idx = list.indexOf(item);
  //   if (idx > -1) {
  //     list.splice(idx, 1);
  //   } else {
  //     list.push(item);
  //   }
  // }

  // exists(item, list) {
  //   return list.indexOf(item) > -1;
  // }

  isIndeterminate(selected, items) {
    return (this[selected] && this[items]) && (this[selected].length !== 0 &&
        this[selected].length !== items.length);
  }

  isChecked(selected, items) {
    return (this[selected] && this[items]) && (this[selected].length === this[items].length);
  }

  toggleAll(selected, items) {
    if (this[selected].length === this[items].length) {
    	console.log('deselected all');
      this[selected] = [];
    } else if (this[selected].length >= 0) {
    	console.log('selected all');
      this[selected] = [...this[items]];
    }
    const { location, category, collection } = this;
    this.setMapData({
      location,
      category,
      collection
    }, true);
  }
}

export default MapControlsCtrl;