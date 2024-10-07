export default function handler(req, res) {
  const inventory = [
    { id: 1, name: 'Toyota Corolla', year: 2020 },
    { id: 2, name: 'Honda Civic', year: 2019 },
  ];

  res.status(200).json(inventory);
}