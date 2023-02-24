/* VARIABLES */
var input=document.querySelector(".in");
var button=document.querySelector(".btn")
var content=document.querySelector(".content");
/*******************/
// array of object
var data=[
    {id:1, name:"product1", type:"computers"},
    {id:2, name:"product2", type:"keyboard"},
    {id:3, name:"product3", type:"laptop"},
];

function show_data(item)
{
    content.innerHTML="";
    item.forEach(function(item){

        content.innerHTML+=
        `
        <div onclick="del_data(${item.id})">
            ${item.name}
        </div>    
        `
    })
    // console.log(item); //هيعمل مصفوفة علي بعضها 
}

show_data(data);

/********************/
function add_data(){
  if(input.value=="")alert("You Should Enter Product");
  
  var last;
  if (data.length>1)
  {
    last=data.length-1;
  }
  else{
    last=0;
  }
  data.push({id:++last,name:input.value, id:++last});
  var added=data[data.length-1];
  content.innerHTML+="<div>"+added.name+"</div>";
  input.value="";
    console.log(data);
}
button.onclick=add_data;
/*********************/
function del_data(id){
    var e=data.map(function(it){
        return it.id;
    }).indexOf(id);
    data.splice(e,1);
    show_data(data);

}