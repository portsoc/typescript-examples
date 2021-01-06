interface Droid {
  name: string,
  color: string,
}

const droid1: Droid = {
  name: 'C3-PO',
  color: 'golden',
}

const droids: Droid[] = [
  droid1,
  {
    name: 'BB8',
    color: 'orange',
  },
]
