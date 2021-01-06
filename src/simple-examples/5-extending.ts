interface Contact {
  name: string,
  phone: string,
  address?: string,
}

interface Social extends Contact {
  discord?: string,
  github?: string,
}

function call(c: Contact) {
  console.log('calling', c.phone);
}

const jack: Social = {
  name: 'Jacek',
  phone: '+44 2392 846428',
  github: 'jacekkopecky',
}

call(jack);
