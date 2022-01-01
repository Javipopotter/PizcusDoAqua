var divisions = [];
for(b = 0; b < document.getElementsByTagName('div').length; b++)
{
    divisions.push(document.getElementsByTagName('div')[b].children);
}
console.log(divisions);
for (a = 0; a < divisions.length; a++)
{
    for(i = 0; i < divisions[a].length; i++)
    {
        divisions[a][i].style.width = (100/divisions[a].length -1).toString() + "%";
        let tag = document.createElement("img");
        divisions[a][i].appendChild(tag);
        tag.src = "Images/UnaPizcaDeAgua.png";
        divisions[a][i].getElementsByTagName('img')[0].width = "225"
        divisions[a][i].getElementsByTagName('img')[0].height = "225"
    }
}
