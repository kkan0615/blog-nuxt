export interface PriceCardExtraPrices {
  optional: boolean
  content: string
  locales: string
  currency: string
  period: 'month' | 'year'
  price: number
}

export interface PriceCard {
  name: string
  description: string
  startPrice: {
    locales: string
    currency: string
    price: number
  }
  extraPrices: PriceCardExtraPrices[],
  details: string[]
  links?: {
    'title': string
    'link': string
  }[]
}
