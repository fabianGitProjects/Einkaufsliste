// Wähle die DOM-Elemente aus
const addInput = document.getElementById("addItem");
const addItemButton = document.getElementById("addItemButton");
const itemList = document.getElementById("itemList");

// Funktion zum hinzufügen eines Artikels zur Liste
function addArtikel(){

//Erstelle ein neues Listenelement (li)
const li = document.createElement("li");

// Füge den Text des Input-Felds als Text Inhalt des Listenelements hinzu
li.innerText = addInput.value;

//Füge ein löschenButton hinzu, der neben den Listenelement erscheint, der die listen löscht.
const deleteButton = document.createElement("Button");
deleteButton.id="deleteItemButton";
deleteButton.addEventListener("click", () => {li.remove();
});

//Delete-Icon
const deleteButtonIcon = document.createElement("i");
deleteButtonIcon.className = "material-symbols-outlined";
deleteButtonIcon.textContent = "delete";

//Icon hinzufügen
deleteButton.appendChild(deleteButtonIcon);

// DeleteButton der li hinzufügen
li.appendChild(deleteButton);

// Füge das Listenelement zur Liste hinzu
itemList.appendChild(li)

//Setze das Eingabe feld zurück
addInput.value = "";
}

// Füge einen Eventlistener hinzu auf addItemButton

addItemButton.addEventListener("click",() => {
    addArtikel();
});

//Füge einen Event-Listener ebenfalls für das Enter der Tastatur  hinzu.

addInput.addEventListener("keydown",(event) => {
    if(event.key==="Enter"){
        addArtikel();
}
    });
