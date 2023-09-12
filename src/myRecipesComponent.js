
function MyRecipesComponents({label, image, calories, cuisine, ingredients}) {
    return (
        <div>
            <div className="container">
            <h2> {label}</h2>
            </div>

            <div className="container">
            <img src ={image} />
            </div>

<ul className="container list">
    {ingredients.map((ingredient, index) => (
        <li key={index}> {ingredient}</li>
    ))}

</ul>

            <div className="container">
            <p>{calories.toFixed()} calories</p>
            </div>

            <div className="container">
            <p> <em>{cuisine} cuisine </em> </p>
            </div>
        </div>
    )
}

export default MyRecipesComponents;