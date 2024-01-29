const colors = ["red", "blue", "green"]

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors; i++){
        const option = document.createElement("option") 
        option.textContent = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener(
        "onchange",
        function(e){
            e.target.parent.backgroundColor = e.target.value
    })
    return dropDown
}

function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    subItem.textContent = subItemValue
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}

//add button - when clicked createSubItem called SubItem and put it after list div
document.getElementById("add").addEventListener(
    "click", 
    function(e){
        const subItem = createSubItem(e)
        document.getElementById("list").appendChild(subItem)
})
