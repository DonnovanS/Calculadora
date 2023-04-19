let teclas = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "*", "/", "0", ".", "="];

function renderGUI() {
  // container
  const divCalc = document.createElement("div");
  divCalc.setAttribute("id", "calculadora");
  divCalc.setAttribute("style", "width:60%; margin:auto;");
  document.body.appendChild(divCalc);

  // calc display
  const calcDis = document.createElement("div");
  calcDis.setAttribute("id", "calcDis");
  divCalc.appendChild(calcDis);

  // calc display input

  const calcDisInput = document.createElement("input");
  calcDisInput.setAttribute("id", "calcDisInput");
  calcDisInput.setAttribute("type", "text");
  calcDisInput.setAttribute("value", "0");
  calcDisInput.setAttribute("disabled", "true");
  calcDisInput.setAttribute("class", "form-control text-end form-control-lg");
  calcDisInput.setAttribute("style","margin-bottom: 10px; height: 80px; font-size: 2rem;");
  calcDis.appendChild(calcDisInput);

  // calc buttons container
  const calcButtons = document.createElement("div");
  calcButtons.setAttribute("id", "teclas");
  divCalc.appendChild(calcButtons);

  for (let i=0;i<teclas.length;i++){
    if (i%4==0){
      const divFila = document.createElement("div");
      divFila.setAttribute("class", "row");
      calcButtons.appendChild(divFila);
    }
    let boton = document.createElement("button");
    boton.setAttribute("id", "boton"+teclas[i]);
    boton.setAttribute("class","btn btn-danger col-3 border-dark")
    boton.innerHTML=teclas[i]
    boton.addEventListener("click",function(){
      procesarEvento(boton)
    });

    calcButtons.lastChild.appendChild(boton);
  }
}
function procesarEvento(boton) {
    let calcDisInput = document.getElementById("calcDisInput");

  if (calcDisInput.value == "0") {
    calcDisInput.value = "";
  }

  if (boton.innerHTML != "=") {
    calcDisInput.value += boton.innerHTML;
  } else {
    try {
      let resultado = math.evaluate(calcDisInput.value);
      calcDisInput.value=resultado;

      if (resultado === undefined) {
        calcDisInput.value = "Digite un valor";
      } else {
        calcDisInput.value = resultado;
      }
    } catch (error) {
      calcDisInput.value = 'Function Error';
    }
  }
  
}

renderGUI();