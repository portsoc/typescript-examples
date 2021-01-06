export interface Contact {
  name: string,
  phone: string,
  address?: string,
}

export function call(c: Contact) {
  console.log('calling', c.phone);
}
