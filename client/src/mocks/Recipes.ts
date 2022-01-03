export interface Recipe {
  _id: string;
  imageURL: string;
  name: string;
  description: string;
  favourite: boolean;
  tags: Array<string>;
  instruction: Array<string>;
  ingredients: Array<string>;
}

// const recipes: Array<Recipe> = [
//   {
//     _id: '1',
//     imageURL: 'https://images.unsplash.com/photo-1614570218825-c2a3be79b0fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hha3Nob3VrYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
//     name: 'shakshouka',
//     description:
//       'dish of eggs poached in a sauce of tomatoes, olive oil, peppers, onion and garlic.',
//     tags: ['easy', 'breakfast', 'quick'],
//     favourite: true,
//     instruction: [
//       'peel tomato, add a little of tomato sauce and spices',
//       'boil it and then add eggs, put cover on pan for ~5min',
//     ],
//     ingredients: [
//       '1 tomato',
//       'tomato sauce',
//       'fresh basil and oregano',
//       'salt & pepper',
//       '3 eggs',
//       'basil',
//       'optional: cheddar cheese',
//     ],
//   },
//   {
//     _id: '2',
//     imageURL: 'https://images.unsplash.com/photo-1614570218825-c2a3be79b0fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hha3Nob3VrYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
//     name: 'baked salmon',
//     description:
//       'salmon fillets, steaks and even whole fish are excellent cooked over fire.',
//     tags: ['dinner'],
//     favourite: false,
//     instruction: [
//       'pull salmon from fridge 15min. before',
//       'add garlic, salt and pepper',
//       'bake for 25min. in 200deg.',
//       'add herbs after pulling salmon from oven',
//     ],
//     ingredients: [
//       '200g salmon',
//       'lemon juice',
//       'salt & pepper',
//       '1 clove of garlic',
//       'herbs',
//     ],
//   },
// ];

// export default recipes;
