export type Restaurant = {
  name: string
}

export type DataShape = {
  filterText: string,
  restaurantList: Restaurant[],
  showNewForm: boolean
}