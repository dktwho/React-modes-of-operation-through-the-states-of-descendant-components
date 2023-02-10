import { nanoid } from 'nanoid'

function id() {
  return nanoid()
}
const initProds = [
	{id: id(), name: 'prod1', cost: 'cost1', catg: 'catg1'},
	{id: id(), name: 'prod2', cost: 'cost2', catg: 'catg2'},
	{id: id(), name: 'prod3', cost: 'cost3', catg: 'catg3'},
];

export { initProds, id}
