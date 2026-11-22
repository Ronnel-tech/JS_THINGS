import { createStudentForm, render } from "./render.js";
import {
  updateStudentInfo,
  studentInfoReducer,
} from "./StudentProfileState.js";
import { studentStore } from "./studentStore.js";

const store = studentStore(studentInfoReducer);
const form = createStudentForm();
const status = document.getElementById("studentStatus");

// Draw the saved profile on load and whenever the store changes.
render(form, store.getState());
store.subscribe((student) => render(form, student));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = new FormData(form);
  const action = updateStudentInfo(
    fields.get("name"),
    fields.get("age"),
    fields.get("address"),
    fields.get("section"),
    fields.get("yearLevel"),
  );
  store.dispatch(action);
  status.textContent = "Student information saved.";
});

form.addEventListener("input", () => {
  const hasUnsavedChanges = Object.entries(store.getState()).some(([field, value]) => {
    return form.elements.namedItem(field).value !== String(value);
  });
  status.textContent = hasUnsavedChanges ? "Unsaved changes" : "";
});
