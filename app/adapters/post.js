import DS from 'ember-data';

import AjaxServiceSupport from 'ember-ajax/mixins/ajax-support';

export default DS.RESTAdapter.extend(AjaxServiceSupport);

