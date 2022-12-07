export type Restaurant = {
  name: string
}

export type RestaurantList = Restaurant[];

export type DataShape = {
  filterText: string,
  restaurantList: Restaurant[],
  showNewForm: boolean
}