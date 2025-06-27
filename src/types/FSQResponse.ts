export type FSQResponse = {
  fsq_place_id: string,
  hours: FSQResponseHours,
  location: FSQResponseAddress,
  name: string,
  price: number,
  rating: number,
  tastes: Array<string>
}

export type FSQResponseHours = {
  display: string,
  is_local_holiday: boolean,
  open_now: boolean,
  regular: {
    close: string,
    day: number,
    open: string
  }[]
}

export type FSQResponseAddress = {
  address: string,
  locality: string,
  region: string,
  postcode: string,
  country: string,
  formatted_address: string
}
