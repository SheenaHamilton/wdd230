const scriptureSubmit = document.querySelector("button");
const listItem = document.querySelector("#list");
const scriptureInput = document.querySelector("#favchap");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
    
});

scriptureSubmit.addEventListener("click", () => {

   let inputValue = scriptureInput.value;

   if (inputValue != "" ) {
        displayList(inputValue);
        chaptersArray.push(inputValue);
        setChapterList();
        scriptureInput.value = "";
   }
   scriptureInput.focus()

} );

function displayList(inputValue)
{
    let newListItem = document.createElement("li");
    let newButton = document.createElement("button");

    newListItem.textContent = inputValue;
    newButton.textContent = "❌";

    newListItem.append(newButton);

    listItem.append(newListItem);

    newListItem.addEventListener("click", () => {
        newListItem.remove();
        deleteChapter(newListItem.textContent);
        scriptureInput.focus();
    } )
}
 
function setChapterList()
{
    localStorage.setItem ("MyBOMlist", JSON.stringify(chaptersArray));
}

function getChapterList()
{
    return JSON.parse(localStorage.getItem ("MyBOMlist"));
}

function deleteChapter(chapter)
{
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((chapteritem) => chapteritem != chapter);
    setChapterList();
}