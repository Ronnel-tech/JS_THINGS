export function createStudentForm() {
  const app = document.getElementById("root");
  app.innerHTML = `
    <h1>Student Information</h1>
    <section aria-labelledby="savedStudentHeading">
      <h2 id="savedStudentHeading">Saved Student Information</h2>
      <dl>
        <dt>Name</dt><dd id="saved-name"></dd>
        <dt>Age</dt><dd id="saved-age"></dd>
        <dt>Address</dt><dd id="saved-address"></dd>
        <dt>Section</dt><dd id="saved-section"></dd>
        <dt>Year Level</dt><dd id="saved-yearLevel"></dd>
      </dl>
    </section>
    <h2 id="editStudentHeading">Edit Student Information</h2>
    <form id="studentForm" aria-labelledby="editStudentHeading">
      <p><label>Name <input name="name" type="text"></label></p>
      <p><label>Age <input name="age" type="number" min="0"></label></p>
      <p><label>Address <input name="address" type="text"></label></p>
      <p><label>Section <input name="section" type="text"></label></p>
      <p><label>Year Level <input name="yearLevel" type="text"></label></p>
      <button id="studentBtn" type="submit">Save Student</button>
      <p id="studentStatus" role="status"></p>
    </form>
  `;

  return document.getElementById("studentForm");
}

export function render(form, student) {
  for (const [field, value] of Object.entries(student)) {
    form.elements.namedItem(field).value = value;
    document.getElementById(`saved-${field}`).textContent = value === "" ? "—" : value;
  }
}
