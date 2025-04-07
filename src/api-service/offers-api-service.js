import ApiService from '../framework/api-service.js';

export default class OffersApiService extends ApiService {
  get items() {
    return this._load({url: 'offers'})
      .then(ApiService.parseResponse);
  }
}
