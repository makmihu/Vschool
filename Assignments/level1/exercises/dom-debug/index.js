const colors = ["red", "blue", "green"]

document.getElementById("add").addEventListener(
    "click", 
    function(e){
        const subItem = createSubItem(e)
        document.getElementById("list").appendChild(subItem)

    function createSubItem(e){
        const subItem = document.createElement("div")
        var subItemValue = document.getElementById("input")
        subItem.textContent = subItemValue.value
        const dropDown = createDropDown()
        subItem.appendChild(dropDown)
        subItem.setAttribute("class", "subItem")
        return subItem
    }
    function createDropDown(){
        const dropDown = document.createElement("select")
        for(var i = 0; i < colors.length; i++){
            const option = document.createElement("option") 
            option.textContent = colors[i]
            option.value = colors[i]
            dropDown.append(option)
        }
        dropDown.addEventListener("onchange", (e) => {
            e.target.parent.backgroundColor = e.target.value
        })
        return dropDown
    }
})
