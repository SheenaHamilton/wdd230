const scriptureSubmit = document.querySelector("button");
const listItem = document.querySelector("#list");
const scriptureInput = document.querySelector("#favchap");

scriptureSubmit.addEventListener("click", () => {

   let inputValue = scriptureInput.value;

   if (inputValue != "" ) {

        scriptureInput.value = "";

        let newListItem = document.createElement("li");
        let newButton = document.createElement("button");

        newListItem.textContent = inputValue;
        newButton.textContent = "❌";

        newListItem.append(newButton);

        listItem.append(newListItem);

        newListItem.addEventListener("click", () => {
            newListItem.remove();
            scriptureInput.focus();
        } )
   }
   scriptureInput.focus()

} );


