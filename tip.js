let people=document.getElementById("input1").value;
let people1=document.querySelector("#input1");
let sero=document.querySelector(".zero")
let person=document.querySelector(".output1");
let person1=document.querySelector(".output2");
let log,log1,gol;
let custom=document.querySelector("#input3")
let Button=Array.from(document.getElementsByClassName("button"));
let mot=document.querySelector(".tom");
window.addEventListener('load',()=> {
    sero.style.display='none';
    custom.style.display='none';
});
people1.addEventListener('input',update);
function update(e){
    log1=e.target.value;
}
custom.addEventListener('input',ctm);
function ctm(e){
    gol=e.target.value
}
let calc=document.querySelector("#input2");
calc.addEventListener('input',updateValue)
 function updateValue(e){
     log=e.target.value;
 }
function getChecked(val){
    if(val=="0"){
        sero.style.display="inline";
    }
}
mot.addEventListener('click',()=>{
    
})
Button.map(button=>button.addEventListener('click',(event)=>{
    switch(event.target.innerText){
        case "5%":
            numb=0.05*log;
            person.innerText="$ " +numb.toFixed(2);
            person1.innerText="$ "+(numb*log1).toFixed(2);
            people1.addEventListener("keypress",(event)=>{
                if(event.keyCode==13){
                    person.innerText="$ " +numb.toFixed(2);
                    person1.innerText="$ "+(numb*log1).toFixed(2);
                }
                
            })
            calc.addEventListener("keypress",(event)=>{
                if(event.keyCode==13){
                    person.innerText="$ " +numb.toFixed(2);
                    person1.innerText="$ "+(numb*log1).toFixed(2);
                }
            })
            if(log==null){
                random=document.getElementById("input2").setAttribute('value',"Error!!");
                person.innerText="_____"
                
            }
            if(log1==null){
                person1.innerText="_____"
            }
            break;
        case "RESET":
            document.getElementById("input1").setAttribute('value',' ');
            document.getElementById("input2").setAttribute('value',' ');    
            
            person.innerText="";
            person1.innerText="";
            break;
        case "10%":
            numb=0.1*log;
            person.innerText="$ " +numb.toFixed(2);
            person1.innerText="$ "+(numb*log1).toFixed(2);
            people1.addEventListener("keypress",(event)=>{
                if(event.keyCode==13){
                    person.innerText="$ " +numb.toFixed(2);
                    person1.innerText="$ "+(numb*log1).toFixed(2);
                }
                
            })
            calc.addEventListener("keypress",(event)=>{
                if(event.keyCode==13){
                    person.innerText="$ " +numb.toFixed(2);
                    person1.innerText="$ "+(numb*log1).toFixed(2);
                }
            })
            
            if(log==null){
                random=document.getElementById("input2").setAttribute('value',"Error!!");
                person.innerText="_____"
                
            }
            if(log1==null){
                person1.innerText="_____"
            }
            break;
        case "15%":
                numb=0.15*log;
                person.innerText="$ " +numb.toFixed(2);
                person1.innerText="$ "+(numb*log1).toFixed(2);
                people1.addEventListener("keypress",(event)=>{
                    if(event.keyCode==13){
                        person.innerText="$ " +numb.toFixed(2);
                        person1.innerText="$ "+(numb*log1).toFixed(2);
                    }
                    
                })
                calc.addEventListener("keypress",(event)=>{
                    if(event.keyCode==13){
                        person.innerText="$ " +numb.toFixed(2);
                        person1.innerText="$ "+(numb*log1).toFixed(2);
                    }
                })
                if(log==null){
                    random=document.getElementById("input2").setAttribute('value',"Error!!");
                    person.innerText="_____"
                    
                }
                if(log1==null){
                    person1.innerText="_____"
                }
                break;
        case "20%":
                    numb=0.2*log;
                    person.innerText="$ " +numb.toFixed(2);
                    person1.innerText="$ "+(numb*log1).toFixed(2);
                    people1.addEventListener("keypress",(event)=>{
                        if(event.keyCode==13){
                            person.innerText="$ " +numb.toFixed(2);
                            person1.innerText="$ "+numb*log1
                        }
                        
                    })
                    calc.addEventListener("keypress",(event)=>{
                        if(event.keyCode==13){
                            person.innerText="$ " +numb.toFixed(2);
                            person1.innerText="$ "+(numb*log1).toFixed(2);
                        }
                    })
                    if(log==null){
                        random=document.getElementById("input2").setAttribute('value',"Error!!");
                        person.innerText="_____"
                        
                    }
                    if(log1==null){
                        person1.innerText="_____"
                    }
                    break;
        case "25%":
            numb=0.25*log;
            person.innerText="$ " +numb.toFixed(2);
            person1.innerText="$ "+numb*log1
            people1.addEventListener("keypress",(event)=>{
                if(event.keyCode==13){
                    person.innerText="$ " +numb.toFixed(2);
                    person1.innerText="$ "+(numb*log1).toFixed(2);
                }
                
            })
            calc.addEventListener("keypress",(event)=>{
                if(event.keyCode==13){
                    person.innerText="$ " +numb.toFixed(2);
                    person1.innerText="$ "+(numb*log1).toFixed(2);
                }
            })
            if(log==null){
                random=document.getElementById("input2").setAttribute('value',"Error!!");
                person.innerText="_____"
                
            }
            if(log1==null){
                person1.innerText="_____"
            }
            break;
        case "50%":
            numb=0.5*log;
            person.innerText="$ " +numb.toFixed(2);
            person1.innerText="$ "+(numb*log1).toFixed(2);
            people1.addEventListener("keypress",(event)=>{
                if(event.keyCode==13){
                    person.innerText="$ " +numb.toFixed(2);
                    person1.innerText="$ "+(numb*log1).toFixed(2);
                }
                
            })
            calc.addEventListener("keypress",(event)=>{
                if(event.keyCode==13){
                    person.innerText="$ " +numb.toFixed(2);
                    person1.innerText="$ "+(numb*log1).toFixed(2);
                }
            })
            if(log==null){
                random=document.getElementById("input2").setAttribute('value',"Error!!");
                person.innerText="_____"
                
            }
            if(log1==null){
                person1.innerText="_____"
            }
            break;
        case "Custom":
            custom.style.display='block';
            mot.style.display="none"
            custom.addEventListener("keypress",(event)=>{
                
                
                numb=gol*log*0.01;
                if(event.keyCode==13){
                    event.preventDefault();
                    person.innerText="$ " +numb.toFixed(2);
                    person1.innerText="$ "+(numb*log1).toFixed(2);
                    people1.addEventListener("keypress",(event)=>{
                        if(event.keyCode==13){
                            person1.innerText="$ "+(numb*log1).toFixed(2);
                        }
                    })
                    
                    if(log==null){
                        random=document.getElementById("input2").setAttribute('value',"Error!!");
                        person.innerText="____"
                        
                    }
                    if(log1==null){
                        person1.innerText="____";
                    }
                            }})
                
                
                        break;
            
    }
}))


