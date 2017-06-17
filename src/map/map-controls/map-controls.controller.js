/**
 * The `MapControlsCtrl` provides an interface between the map component
 * and the map control filter dropdowns.
 * 
 * It is not responsible for much actual map logic, but instead for
 * accepting user input and turning it into queries whose results
 * are assigned back to the controller. The services take care of
 * turning the returned values into map-usable data, whereas this controller
 * simply makes it available.
 *
 * The controller is made up of:
 * - constructor
 * - 3 methods for loading query results (location, category, collection)
 * - 3 methods for updating dropdown contents
 * - utility methods for setting active collection and showing all collections
 */
export class MapControlsCtrl {
  static get $inject(){
    return ['$mapApi', '$tourApi', '$mapInterface'];
  }

  /**
   * Initialize controller dependencies.
   * 
   * @param  {Object} $mapApi  Map $resource service
   * @param  {Object} $tourApi Tour $resource service
   * @param  {Object} $window  Angular's window wrapper
   */
  constructor($mapApi, $tourApi, $mapInterface) {
    this._FeatureResource = $mapApi.feature;
    this._CollectionResource = $mapApi.collection;
    this._CategoryResource = $mapApi.category;
    this._LocationResource = $tourApi.location;
    this.$mapInterface = $mapInterface;

    /**
     * Holds the user's selected location (by ID).
     * @type {String}
     */
    this.location = '';
    /**
     * Holds the user's selected categories (by ID).
     * @type {Array}
     */
    this.category = [];
    /**
     * Holds the user's selected feature collections (by ID).
     * @type {Array}
     */
    this.collection = [];
  }

  /**
   * Initialize the controls (show all map elements)
   */
  $onInit() {

  	Promise.all([
  		this.loadLocations(),
  		this.loadCategories(), 
  		this.loadCollections()
  	]).then(() => this.loadFeatures(this.filter))
  }

  /**
   * Load location list from server.
   * 
   * @return {Promise} Resolves to list of locations
   */
  async loadLocations() {
  	this.locations = await this._LocationResource.query().$promise;
    this.location = this.locations[1]._id;
  }

  /**
   * Load category list from server.
   * 
   * @return {Promise} Resolves to list of categories
   */
  async loadCategories() {
    this.categories = await this._CategoryResource.query().$promise;
    this.category = this.categories.map(category => this.$mapInterface.addCategory(category) && category._id);
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
  async loadCollections() {
    this.collections = await this._CollectionResource.query().$promise;
    this.collection = this.collections.map(collection => collection._id);
  }

  /**
   * Load feature list from server using the `_id`s of the currently
   * selected categories to filter by.
   *
   * @todo Update this doc to describe array of categories
   * 
   * @return {Promise} Resolves to list of collections
   */
  async loadFeatures(filter) {
  	console.log('Filter to load', filter)
    const features = this.features = await this._FeatureResource.query({ filter }).$promise;
    const location = this.locations.find(location => location._id === this.location);
    const category = this.categories.filter(item => this.category.indexOf(item._id) !== -1);
  	this.onChange({
    	$event: {
        location,
        category,
        collection: {
          type: 'FeatureCollection',
          features
        }
      }
    });
  }

  /**
   * Checks whether the number of selected items is more than zero but
   * less than the total of available items (sets checkbox inputs to "indeterminate").
   * 
   * @param  {String}  selected Name of property that holds selected items
   * @param  {String}  items    Name of property that holds all items
   * @return {Boolean}          Whether checkbox should be indeterminate
   */
  isIndeterminate(selected, items) {
    return (this[selected] && this[items]) && (this[selected].length !== 0 &&
        this[selected].length !== this[items].length);
  }

  /**
   * Utility function for determining whether all items are selected (set
   * 'select all' checkbox to checked if so).
   * 
   * @param  {String}  selected Name of property that holds selected items
   * @param  {String}  items    Name of property that holds all items
   * @return {Boolean}          Whether checkbox should be checked
   */
  isChecked(selected, items) {
    return (this[selected] && this[items]) && (this[selected].length === this[items].length);
  }

  /**
   * Utility function for or selecting or deselecting all items (set all
   * item checkboxes to checked/unchecked).
   * 
   * @param  {String}  selected Name of property that holds selected items
   * @param  {String}  items    Name of property that holds all items
   */
  toggleAll(selected, items) {
    if (this[selected].length === this[items].length) {
      console.log('deselected all');
      this[selected] = [];
    } else if (this[selected].length >= 0) {
      console.log('selected all');
      this[selected] = [...this[items].map(item => item._id || item.id)];
    }
  }
}
