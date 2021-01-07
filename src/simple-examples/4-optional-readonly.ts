interface PhoneNumber {
  countryCode: string,
  num: string,
  extension?: string,
}

interface ContactToCall {
  readonly num: string,
  readonly name: string,
}


function callContact(c: ContactToCall) {
  if (c.num == '112') {
    // emergency call
  } else {
    // normal call
  }
}
