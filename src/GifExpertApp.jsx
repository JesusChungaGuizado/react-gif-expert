import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["hola"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  const onDeleteCategories = () => {
    setCategories([]);
  };
  const onDeleteCategoryActual = () => {
    const eliminarActual = categories.filter((cat) => cat != categories[0]);
    setCategories(eliminarActual);
  };
  return (
    <>
      <h1>Gif EXpert App</h1>
      <AddCategory onNewCategory={onAddCategory} />
      <button onClick={onDeleteCategories}>Eliminar Todo</button>
      <button onClick={onDeleteCategoryActual}>Eliminar Actual</button>
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
