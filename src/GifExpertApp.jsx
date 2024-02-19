import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = ( newCategory ) => {
    if( categories.includes( newCategory ) ) return;
    setCategories( [newCategory,...categories] );
  }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory
        // setCategories={ setCategories } 
            onAddCategory = { onAddCategory }// El on es como para indicar que es algo que emite un evento
        />
        {
            categories.map( category => 
                    <GifGrid key={ category } category={ category } />
            )
        }
    </>
  );
};
