const plane = document.querySelector('.plane');
const force1 = document.getElementById('force1');
const force2 = document.getElementById('force2');
const forceAmount1 = force1.querySelector('.forceAmount');
const forceAmount2 = force2.querySelector('.forceAmount');
const lengthInput = document.querySelector('.plane_length');
const submit = document.querySelector('.submit');
let plane_length;
const mathmatic_result = document.querySelector('.mathmatic_result');

submit.addEventListener('click', () => {
    plane_length = lengthInput.value;
    // adding the resultant
    CreateResultant();
})

function CreateResultant(){
    const forceAmount1Value = Number(forceAmount1.value);
    const forceAmount2Value = Number(forceAmount2.value);

    // remove the previous one (if there's)
    if (document.querySelector('.resultant')){
        document.querySelector('.resultant').remove();
    }
    if (document.getElementById('force1').querySelector('.lengthAmount1')){
        document.getElementById('force1').querySelector('.lengthAmount1').remove();
    }
    if (document.getElementById('force2').querySelector('.lengthAmount2')){
        document.getElementById('force2').querySelector('.lengthAmount2').remove();
    }
    mathmatic_result.textContent = "";

    // create a new one
    let resultantValue = forceAmount1Value + forceAmount2Value;
    let distanceFromForce1;
    let distanceFromForce2;

    /* 
        force1 * distanceToResultant = force2 * distanceToResultant
    */

    distanceFromForce2 = forceAmount1Value;
    distanceFromForce1 = forceAmount2Value;
    let frac;

    if ((distanceFromForce2 === 0 && distanceFromForce1 == 0) || plane_length <= 0){
        console.log('math error!')
    }else{
        if (distanceFromForce2 != 0){
            frac = math.fraction(distanceFromForce1, distanceFromForce2);
    
            let Numerator = frac.d  //force1
            let Denominator = frac.n //force2
            let X = plane_length / (Numerator + Denominator);
            let Y = plane.offsetWidth / (Numerator + Denominator);
        
            let resultantDiv = document.createElement('div');
            resultantDiv.className = 'resultant';
            resultantDiv.style.marginLeft = Y*Denominator + "px";
            resultantDiv.classList.add('heigherIndex');
            plane.appendChild(resultantDiv);
            let forceAmount = document.createElement('input');
            forceAmount.type = "tel";
            forceAmount.disabled = true;
            forceAmount.value = resultantValue;
            forceAmount.className = "forceAmount";
            resultantDiv.appendChild(forceAmount);

            let lengthAmount1 = document.createElement('input');
            lengthAmount1.type = "text";
            lengthAmount1.disabled = true;
            lengthAmount1.value = (X*Denominator).toFixed(2) + " سم";
            lengthAmount1.className = "lengthAmount1";
            force1.appendChild(lengthAmount1);

            let lengthAmount2 = document.createElement('input');
            lengthAmount2.type = "text";
            lengthAmount2.disabled = true;
            lengthAmount2.value = (X*Numerator).toFixed(2) + " سم";
            lengthAmount2.className = "lengthAmount2";
            force2.appendChild(lengthAmount2);

            mathmatic_result.innerHTML = `
            حـ = ${forceAmount1Value} + ${forceAmount2Value} = ${resultantValue} نيوتن<br>
            اتجاة المحصلة هو نفس اتجاة القوتين أ و ب <br>
            بعد المحصلة عن النقطة أ هو ${(X*Denominator).toFixed(2) + " سم"} <br>
            بعد المحصلة عن النقطة ب هو ${(X*Numerator).toFixed(2) + " سم"}
            `;
        }else{
            let resultantDiv = document.createElement('div');
            resultantDiv.className = 'resultant';
            resultantDiv.classList.add('heigherIndex');
            resultantDiv.style.justifySelf = "flex-end"
            plane.appendChild(resultantDiv);
            let forceAmount = document.createElement('input');
            forceAmount.type = "tel";
            forceAmount.disabled = true;
            forceAmount.value = resultantValue;
            forceAmount.className = "forceAmount";
            resultantDiv.appendChild(forceAmount);

            let lengthAmount1 = document.createElement('input');
            lengthAmount1.type = "text";
            lengthAmount1.disabled = true;
            lengthAmount1.value = plane_length + " سم";
            lengthAmount1.className = "lengthAmount1";
            force1.appendChild(lengthAmount1);

            let lengthAmount2 = document.createElement('input');
            lengthAmount2.type = "text";
            lengthAmount2.disabled = true;
            lengthAmount2.value = 0  + " سم";
            lengthAmount2.className = "lengthAmount2";
            force2.appendChild(lengthAmount2);
        }
    }
}