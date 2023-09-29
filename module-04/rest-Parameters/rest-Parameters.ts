export{ };
// Example 01 

function sumNumber(... numbers: number[]){
  let total = 0;
  numbers.forEach((numbers) => (total += numbers));
  return total;
};

console.log(sumNumber(10, 20, 20))

// Example 02

function fair(phrase: string, ... fruits: string[]){
  return phrase + fruits;
}

console.log(
  fair(
    'list of fruits to grow ',
    '🍌',
    '🍉',
    '🍇',
    '🍊'
  )
)

// Example 03 

class Products {
  public displayProduct(... products: string[]){
    for (const product of products) {
      console.log(product);
    }
  }
}

const departamentComputing: Products = new Products();

console.log('my Produscts: ')

departamentComputing.displayProduct(
  'mouse',
  'webcam',
  'headseat'
);

