import { useStaticQuery, graphql } from "gatsby"

export const addToDo = (text, prevState) => {
  return [...prevState, {text}]
};

export const removeTodo = (id, prevState) => prevState.filter(it => it.id !== id)
