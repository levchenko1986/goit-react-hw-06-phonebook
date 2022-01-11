import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addContact = createAction("contact/add", (text, number) => {
  return {
    payload: {
      id: nanoid(),
      name: text,
      phone: number,
    },
  };
});

export const deleteContact = createAction("contact/delete");

export const changeFilter = createAction("contact/changeFilter");

export default { addContact, deleteContact, changeFilter };
