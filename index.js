document.getElementById('submitButton').addEventListener('click', function()
{
    var x = document.getElementById("newListItem").value;
    //get value from newListItem   
    //call addItem
    addItem(x);
});

document.getElementById('setListColorButton').addEventListener('click', function()
{
    var newcolor=document.getElementById("newListColor").value;
    //get value from newListColor
    //call updateListColor
    updateListColor(newcolor);
});


function addItem(newItemValue)
{
    var list = document.getElementById("itemCollection");// = get itemCollection
    var newItem = document.createElement('li');
    newItem.appendChild(document.createTextNode(newItemValue));
    list.appendChild(newItem);
}

function updateListColor(newColor)
{
    var y = document.getElementById("itemCollection");
    //get itemCollection
    //set style color with newColor
    y.style.color=newColor;
}
