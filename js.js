   function area(first,second){
    const res=0.5*first*second;
    return res;
   }

   function area2(first,second){
    const res=first*second;
    return res;
   }

document.getElementById('triangle-button').addEventListener('click',function(){
    const firstInput =document.getElementById('firstInput');
//get value from 1st input field
const firstInputString= firstInput.value ;
//console.log(firstInput.value);
 const firstInputValue=parseInt(firstInputString);

 const secondInput =document.getElementById('secondInput');
 const secondInputString= secondInput.value ;
 //console.log(firstInput.value);
  const secondInputValue=parseInt(secondInputString);
  if(firstInputValue!==null || secondInputValue!==""){
   const Area= area(firstInputValue, secondInputValue);

 const answercontainer=document.getElementById('Answerfield');
 const ans=document.createElement('p');
 const are=document.createElement('p');
 const type=document.createElement('p');

 const Button=document.createElement('button');
 Button.style.backgroundColor = '#1090D8';

 ans.innerText=Area;
 Button.innerText= 'Convert to m2';
 are.innerText="1.Triangle";
 type.innerText="cm2";
 Answerfield.appendChild(are);
 Answerfield.appendChild(ans);
 Answerfield.appendChild(type);
 Answerfield.appendChild(Button);
 
 //console.log(Area);
 firstInput.value='';
 secondInput.value='';
}else{
    alert('Empty input!!');
   
   

}
})

//rectengular backend part
document.getElementById('rectbutton').addEventListener('click',function(){

const recfirstInput =document.getElementById('recfirstInput');
//get value from 1st input field
const firstInputString= recfirstInput.value ;
//console.log(firstInput.value);
 const firstInputValue=parseInt(firstInputString);

 const recsecondInput =document.getElementById('recsecondInput');
 const secondInputString= recsecondInput.value ;
 //console.log(firstInput.value);
  const secondInputValue=parseInt(secondInputString);
  if(firstInputValue!==null || secondInputValue!==""){
    const Area= area2(firstInputValue, secondInputValue);

 const answercontainer=document.getElementById('Answerfield');
 const ans=document.createElement('p');
 const are=document.createElement('p');
 const type=document.createElement('p');

 const Button=document.createElement('button');
 Button.style.backgroundColor = '#1090D8';

 ans.innerText=Area;
 Button.innerText= 'Convert to m2';
 are.innerText="2.Rectangle";
 type.innerText="cm2";
 Answerfield.appendChild(are);
 Answerfield.appendChild(ans);
 Answerfield.appendChild(type);
 Answerfield.appendChild(Button);
 
 console.log(Area);
 recfirstInput.value='';
 recsecondInput.value='';
}else{
    alert('Empty input!!');
   
}
})
   
  //parallelogram backend part    

  document.getElementById('parbutton').addEventListener('click',function(){

    const firstInput =document.getElementById('parfirstInput');
    //get value from 1st input field
    const firstInputString= firstInput.value ;
    //console.log(firstInput.value);
     const firstInputValue=parseInt(firstInputString);
    
     const secondInput =document.getElementById('parsecondInput');
     const secondInputString= secondInput.value ;
     //console.log(firstInput.value);
      const secondInputValue=parseInt(secondInputString);
      if(firstInputValue!==null || secondInputValue!==""){
        const Area= area2(firstInputValue, secondInputValue);
        const answercontainer=document.getElementById('Answerfield');
 const ans=document.createElement('p');
 const are=document.createElement('p');
 const type=document.createElement('p');

 const Button=document.createElement('button');
 Button.style.backgroundColor = '#1090D8';

 ans.innerText=Area;
 Button.innerText= 'Convert to m2';
 are.innerText="3.Parallelogram";
 type.innerText="cm2";
 Answerfield.appendChild(are);
 Answerfield.appendChild(ans);
 Answerfield.appendChild(type);
 Answerfield.appendChild(Button);
 
 //console.log(Area);
 firstInput.value='';
 secondInput.value='';
}else{
    alert('Empty input!!');

  }
})

//rohmbosh backend part 
document.getElementById('rombutton').addEventListener('click',function(){

    const firstInput =document.getElementById('romfirstInput');
    //get value from 1st input field
    const firstInputString= firstInput.value ;
    //console.log(firstInput.value);
     const firstInputValue=parseInt(firstInputString);
    
     const secondInput =document.getElementById('romsecondInput');
     const secondInputString= secondInput.value ;
     //console.log(firstInput.value);
      const secondInputValue=parseInt(secondInputString);
      if(firstInputValue!==null || secondInputValue!==""){
        const Area= area2(firstInputValue, secondInputValue);
        const answercontainer=document.getElementById('Answerfield');
 const ans=document.createElement('p');
 const are=document.createElement('p');
 const type=document.createElement('p');

 const Button=document.createElement('button');
 Button.style.backgroundColor = '#1090D8';

 ans.innerText=Area;
 Button.innerText= 'Convert to m2';
 are.innerText="4.Rhombus";
 type.innerText="cm2";
 Answerfield.appendChild(are);
 Answerfield.appendChild(ans);
 Answerfield.appendChild(type);
 Answerfield.appendChild(Button);
 
 console.log(Area);
 firstInput.value='';
 secondInput.value='';
}else{
    alert('Empty input!!');

  }
})


//Pentagone backend part 
document.getElementById('penbutton').addEventListener('click',function(){

    const firstInput =document.getElementById('penfirstInput');
    //get value from 1st input field
    const firstInputString= firstInput.value ;
    //console.log(firstInput.value);
     const firstInputValue=parseInt(firstInputString);
    
     const secondInput =document.getElementById('pensecondInput');
     const secondInputString= secondInput.value ;
     //console.log(firstInput.value);
      const secondInputValue=parseInt(secondInputString);
      if(firstInputValue!==null || secondInputValue!==""){
        const Area= area(firstInputValue, secondInputValue);
        const answercontainer=document.getElementById('Answerfield');
 const ans=document.createElement('p');
 const are=document.createElement('p');
 const type=document.createElement('p');

 const Button=document.createElement('button');
 Button.style.backgroundColor = '#1090D8';

 ans.innerText=Area;
 Button.innerText= 'Convert to m2';
 are.innerText="5.Pentagone";
 type.innerText="cm2";
 Answerfield.appendChild(are);
 Answerfield.appendChild(ans);
 Answerfield.appendChild(type);
 Answerfield.appendChild(Button);
 
 console.log(Area);
 firstInput.value='';
 secondInput.value='';
}else{
    alert('Empty input!!');

  }
})

//Ellipse backend part 
document.getElementById('ellbutton').addEventListener('click',function(){

    const firstInput =document.getElementById('ellfirstInput');
    //get value from 1st input field
    const firstInputString= firstInput.value ;
    //console.log(firstInput.value);
     const firstInputValue=parseInt(firstInputString);
    
     const secondInput =document.getElementById('ellsecondInput');
     const secondInputString= secondInput.value ;
     //console.log(firstInput.value);
      const secondInputValue=parseInt(secondInputString);
      if(firstInputValue!==null || secondInputValue!==""){
        const Area=3.1416*firstInputValue*secondInputValue;
        const answercontainer=document.getElementById('Answerfield');
 const ans=document.createElement('p');
 const are=document.createElement('p');
 const type=document.createElement('p');

 const Button=document.createElement('button');
 Button.style.backgroundColor = '#1090D8';

 ans.innerText=Area;
 Button.innerText= 'Convert to m2';
 are.innerText="6.Ellipse";
 type.innerText="cm2";
 Answerfield.appendChild(are);
 Answerfield.appendChild(ans);
 Answerfield.appendChild(type);
 Answerfield.appendChild(Button);
 
 console.log(Area);
 firstInput.value='';
 secondInput.value='';
}else{
    alert('Empty input!!');

  }
})

