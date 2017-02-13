/**
 * The `MapDetailCtrl` is a small controller with few responsibilties –
 * it is only instantiated by ng-material's `$mdPanel` service as a means
 * to provide data from a clicked feature to a dialog window that will
 * display the data; it also contains transition methods for viewing
 * tour items (e.g. from the dialog's _"Take a tour"_ button).
 *
 * Since feature descriptions can contain HTML, the `$sce` service is used
 * to parse and sanitize the descriptions for rendering. The dialog has access
 * to:
 * - the feature that the user clicked, which can include information about...
 *   - the feature itself (`feature`), which supplies its own `name` and `desc`
 *   property, **or...**
 *   - a linked tour element (`building`), which the feature inherits those
 *   properties from instead
 * - the current campus location (`location`), which will either be north or downtown.
 *
 * The `onGoToBldg()` method simply executes a callback after closing the dialog,
 * passing it the `code` property of the controller's `location` and `building` –
 * this allows the context of the action to come from outside the component (i.e.
 * the codes can be used to transition states in the application.)
 */
class MapDetailCtrl {
	static get $inject() {
		return ['$sce'];
	}

	/**
	 * Initializes the controller's dependencies and extracts relevant information
	 * from data passed in via the `locals` property (when `$mdPanel` initializes
	 * the dialog).
	 *
	 * If the feature's `linked` property is true, the data is extracted from
	 * the building. If not, it is extracted directly from the feature.
	 * 
	 * @param  {Object} $sce Angular's strict contextual escape service
	 */
	constructor($sce) {
  	if (this.feature.getProperty('linked')) {
  		this.building = this.feature.getProperty('building');

  		this.name = this.building.name;
  		this.description = $sce.trustAsHtml(this.building.desc);
  	} else {
  		this.name = this.feature.getProperty('name');
  		this.description = $sce.trustAsHtml(this.feature.getProperty('desc'));
  	}

  	/**
  	 * Property to control the visibility of the description details inside
  	 * the dialog.
  	 * @type {Boolean}
  	 */
		this.detailsShowing = false;
  }

  /**
   * Toggles the value of `detailsShowing` to hide and show the description.
   * @return {Boolean} The visibility of the description _after_ method is run
   */
	showDetails() {
		this.detailsShowing = !this.detailsShowing;
	}

	/**
	 * Closes the dialog, and on completion, extracts the `code` property
	 * from the controller's `location` and `building` (assuming they exist)
	 * and runs a callback with these as the parameters.
	 *
	 * This can, for instance, be used to make a state transition from within
	 * the application (as in the example below). The callback passed to this
	 * method is the same as the one passed into the main map component.
	 * 
	 * @example
	 * // from app controller
	 * const onGotoBldg = ({ location, building }) => {
	 *   $state.go('building', { location, building });
	 * };
	 * // from HTML (map component)
	 * <campus-map on-goto-bldg="$ctrl.onGotoBldg()"></campus-map>
	 * 
	 * @param  {Function} callback The function to be run
	 * @return {Promise}           Status of dialog close
	 */
	gotoBldg() {
		const { location, building } = this;
		return this.close().then(() => {
			this.onGotoBldg({
				location: location.code,
				building: building.code
			});
		});
	}
	
	/**
	 * Closes the dialog using the panel reference stored on
	 * the controller automatically by the `$mdPanel` service.
	 * @return {Promise} Resolves to the status of the panel close
	 */
	close() {
		return this.mdPanelRef.close();
	}
}

export default MapDetailCtrl;