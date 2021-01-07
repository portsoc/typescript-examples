export interface Contact {
  name: string,
  phone: string,
  address?: string,
}

function call(c: Contact) {
  console.log('calling', c.phone);
}

interface AddressBookItem {
  name: string,
  phone: string,
}

const nick: AddressBookItem = {
  name: 'Nick',
  phone: '+44 2392 846363',
}

call(nick);
