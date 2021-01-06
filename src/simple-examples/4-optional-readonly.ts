interface PhoneNumber {
  countryCode: string,
  num: string,
  extension?: string,
}

interface ContactToCall {
  readonly num: string,
  readonly name: string,
}
