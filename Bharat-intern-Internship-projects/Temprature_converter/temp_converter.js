function calctemp(){
const inp_temp = document.getElementById('temp').value;

    const unit = document.getElementById('temp_inp');
    // const valueTemp=temp_inp.options[tempSelected.selectedIndex].value;

    const celtoFar = (cel) => {
        let fahrenheit = ((cel*9/5)+32).toFixed(3);
        return fahrenheit;
    }

    const fartocel = (far) => {
        let celcius = ((far - 32) * 5 / 9).toFixed(3);
        return celcius;
    }

    if (valueTemp == 'cel'){
        document.getElementById("res").innerHTML = celtoFar(inp_temp)+"&#176; Fahrenheit";
    }
    else{
        document.getElementById("res").innerHTML= fartocel(inp_temp)+"&#176; Celcius";
    }
}   