import { useEffect, useState } from "react";
import video from "./video.mp4";
import './App.css';
import MyRecipesComponents from "./MyRecipesComponent";


// ID = 36d99227
//Key = 78632f7aef3a5f69279585d12bcd5784
// https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=36d99227&app_key=78632f7aef3a5f69279585d12bcd5784


function App() {
  const MY_ID = "36d99227";
  const MY_KEY = "78632f7aef3a5f69279585d12bcd5784";

const [mySearch, setMySearch] = useState('');
const [myRecipes, setMyRecipes] = useState([]);
const [wordSubmitted, setWordSubmitted] = useState('vegetables');

  //вызов API
useEffect (() => {
  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setMyRecipes(data.hits);
  }
  getRecipe()
}, [wordSubmitted])


const myRecipeSearch = (e) => {
  setMySearch(e.target.value)
}

const finalSearch = (e) => {
  e.preventDefault()
  setWordSubmitted(mySearch)
}
  return (
    <div className="App">
<div className="container">
<video autoPlay muted loop>
<source src= {video} type="video/mp4" />
        </video>
<h1>FIND A RECIPE!</h1>
</div>

<div className='container'>
     <form onSubmit={finalSearch}>
         <input  className="search" placeholder="Type in an ingredient ..." onChange={myRecipeSearch} value={mySearch} >
          </input>
    </form>
</div>

<div className='container'>
     <button onClick={finalSearch}>
         <img src="https://cdn-icons-png.flaticon.com/128/711/711319.png?uid=R88718202&ga=GA1.1.852061465.1672058781" alt="icon" width="30px" />
      </button>
</div>

{myRecipes.map((element, index) => (
  <MyRecipesComponents key={index}
  label = {element.recipe.label}
  image = {element.recipe.image}
  calories = {element.recipe.calories}
  ingredients = {element.recipe.ingredientLines}
  cuisine = {element.recipe.cuisineType}
  />
))}



    </div>
   
  )
}

export default App;
