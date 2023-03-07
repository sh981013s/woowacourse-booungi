import Component from '../core/Component';
import IRestaurantInput from '../interfaces/IRestaurantInput';
import { IComponentPropState } from '../interfaces/IComponent';
import imagePaths from '../constants/imagePaths';

class ListContainer extends Component<IComponentPropState> {
  template() {
    const { restaurantList } = this.$props;

    return `<ul class="restaurant-list">
    ${restaurantList
      .map((restaurant: IRestaurantInput) => {
        const { category, name, distance, description } = restaurant;
        return `<li class="restaurant">
      <div class="restaurant__category">
        <img src=${imagePaths.mainListIconImage[category]} alt=${category} class="category-icon"/>
      </div>
      <div class="restaurant__info">
        <h3 class="restaurant__name text-subtitle">${name}</h3>
            <span class="restaurant__distance text-body">캠퍼스부터 ${distance}분 이내</span>
        <p class="restaurant__description text-body">${description}</p>
      </div>
    </li>`;
      })
      .join('')}
    </ul>`;
  }

  setEvent(): void {}
}

export default ListContainer;
