var style = document.getElementById("style")
var style2 = document.getElementById("style2")

function color(){
    document.getElementById("result").style=(`
    background-color: ${style.value};
    `)
}
function btn(){
    document.getElementById("result2").style=(`
    background-color: ${style2.value};
    `)
}