import { useState } from "react"

export const AddCategory = ( { onAddCategory } ) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );//Esto obtiene el nuevo valor
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newInputValue = inputValue.trim();
        if( newInputValue.length <= 1 ) return;
        // setCategories( categories => [ inputValue, ...categories ] );//Con la callback puede obtener los elementos que ya tiene almacenados
        onAddCategory( newInputValue );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }//Esto por defecto envia el event
            />
        </form>
    )
}
