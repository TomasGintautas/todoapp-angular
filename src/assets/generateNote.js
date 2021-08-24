function generateNote(){
  let note = document.createElement("div");

  let form = document.createElement("form");

  let noteHeader = document.createElement("div");
  noteHeader.className = "noteColorHeader";

  let upperNoteHeader = document.createElement("div");
  upperNoteHeader.className = "upperNoteHeader";

  let importance = document.createElement("select");
  importance.name = "Importance";

  let optionOne = document.createElement("option");
  optionOne.value = "Ordinary";
  let optionOneTextNode = document.createTextNode("Ordinary")
  optionOne.appendChild(optionOneTextNode);

  let optionTwo = document.createElement("option");
  optionTwo.value = "Important";
  let optionTwoTextNode = document.createTextNode("Important")
  optionTwo.appendChild(optionTwoTextNode);

  let optionThree = document.createElement("option");
  optionThree.value = "Urgent";
  let optionThreeTextNode = document.createTextNode("Urgent");
  optionThree.appendChild(optionThreeTextNode);

  importance.appendChild(optionOne);
  importance.appendChild(optionTwo);
  importance.appendChild(optionThree);


  let closer = document.createElement("p");
  closer.className = "close";
 // closer.setAttribute("(click)","onDelete()");

  let closerTextNode = document.createTextNode("x")
  closer.appendChild(closerTextNode);

  upperNoteHeader.appendChild(importance);
  upperNoteHeader.appendChild(closer);

  let noteHeaderForm = document.createElement("div");
  noteHeaderForm.className = "deadlineForm";

  let noteHeaderFormLabel = document.createElement("label");
  noteHeaderFormLabel.className = "deadlineLabel";

  let headerFormLabelTextNode = document.createTextNode("Deadline: ")
  noteHeaderFormLabel.appendChild(headerFormLabelTextNode);
  noteHeaderFormLabel.for = "deadline";

  let formDeadlineText = document.createElement("textarea");
  formDeadlineText.cols = 20;
  formDeadlineText.rows = 1;
  formDeadlineText.name = "deadline";
  formDeadlineText.placeholder = "YYYY-mm-dd HH:mm";
  noteHeaderForm.appendChild(noteHeaderFormLabel);
  noteHeaderForm.appendChild(formDeadlineText);

  noteHeader.appendChild(upperNoteHeader);
  noteHeader.appendChild(noteHeaderForm);

  let noteBody = document.createElement("div");
  noteBody.className = "noteColorBody";

  let noteBodyText = document.createElement("textarea");
  noteBodyText.cols = 34;
  noteBodyText.rows = 10;
  noteBodyText.name = "todoitem";
  noteBodyText.placeholder = "Enter your text here.";

  let noteButtons = document.createElement("div");
  noteButtons.className = "noteButtons";

  let saveButton = document.createElement("button");
  saveButton.className = "noteButton";
  saveButton.innerText = "save";
  saveButton.setAttribute("onClick","createToDo(user.id, toDo.id)");

  let updateButton = document.createElement("button");
  updateButton.className = "noteButton";
  updateButton.innerText = "update";
  updateButton.setAttribute("onClick","updateToDo(user.id, toDo.id)");

  noteButtons.appendChild(saveButton);
  noteButtons.appendChild(updateButton);

  noteBody.appendChild(noteBodyText);
  noteBody.appendChild(noteButtons);

  form.appendChild(noteHeader);
  form.appendChild(noteBody);

  note.appendChild(form);

  const grid = document.getElementById("mainGrid");
  grid.appendChild(note);
}
