<!DOCTYPE html>

<html lang="pl">

<head>

    <meta charset="UTF-8">
	
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	
    <title>Kalkulator by Antoś1812</title>
	
    <style>
	
        body 
		{
            display: flex;
            flex-direction: column; /* Ustawienie układu kolumnowego */
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #b0cadf;
            font-family: Arial, sans-serif;
        }
		
		

        #title 
		{
            font-size: 50px;
            margin-bottom: 35px; /* Odstęp między nagłówkiem a kalkulatorem */
            text-align: center;
            color: black;
        }

        #calculator 
		{
            width: 460px;
            padding: 30px;
            background-color: gray;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        }

        #display 
		{
            width: 100%;
            height: 50px;
            text-align: right;
            margin-bottom: 10px;
            font-size: 40px;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 5px;
            background-image: linear-gradient(white, #e5e5e5);
            border: 3px solid #636363;
        }

        .button 
		{
            width: 70px;
            height: 70px;
            margin: 5px;
            font-size: 24px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .button:hover 
		{
            background-color: #0056b3;
        }

        .operator 
		{
            background-color: #28a745;
        }

        .operator:hover 
		{
            background-color: #218838;
        }

        .clear 
		{
            background-color: #dc3545;
        }

        .clear:hover 
		{
            background-color: #c82333;
        }
		
		
		
		
    </style>
	
	<style>	
	 #ThemeButtonD 
	{
      position: absolute;
      top: 20px;
      right: 20px;
      width: 48px;
      height: 60px; 
      font-size: 15px; 
      color: white;		
      border: none;
      border-radius: 25px; 
      background-color: #2f2f30; 
      cursor: pointer;
    }

.themeB 
    {
       width: 100%;
       height: 100%;
       background: none;
       border: none;
       color: inherit;
       font-size: inherit;
       cursor: pointer;
    }

	</style>
	
	<style>	
	 #ThemeButtonW
	{
      position: absolute;
      top: 20px;
      right: 80px;
      width: 48px;
      height: 60px; 
      font-size: 15px; 
      color: black;		
      border: none;
      border-radius: 25px; 
      background-color: #e0e7ed; 
      cursor: pointer;
    }

.themeB1 
    {
       width: 100%;
       height: 100%;
       background: none;
       border: none;
       color: inherit;
       font-size: inherit;
       cursor: pointer;
    }

	</style>
	
	
	<style>	
	 #ThemeButtonDef
	{
      position: absolute;
      top: 90px;
      right: 20px;
      width: 48px;
      height: 60px; 
      font-size: 15px; 
      color: white;		
      border: none;
      border-radius: 25px; 
      background-color: #799fbd; 
      cursor: pointer;
    }

.themeBdeafult
    {
       width: 100%;
       height: 100%;
       background: none;
       border: none;
       color: inherit;
       font-size: inherit;
       cursor: pointer;
    }

	</style>
	
</head>



<body>

<h1 id="title">Kalkulator</h1> <!-- Nagłówek nad kalkulatorem -->


<div id="ThemeButtonD"> 
    <button class="themeB" onclick="changeTheme()">Dark</button>
</div>

<div id="ThemeButtonW"> 
    <button class="themeB1" onclick="changeTheme1()">White</button>
</div>

<div id="ThemeButtonDef"> 
    <button class="themeBdeafult" onclick="changeThemeDeafult()">Def.</button>
</div>


<div id="calculator">
    <input type="text" id="display" disabled>
    <div>
        <button class="button" onclick="appendToDisplay('7')">7</button>
        <button class="button" onclick="appendToDisplay('8')">8</button>
        <button class="button" onclick="appendToDisplay('9')">9</button>
        <button class="button operator" onclick="setOperator('/')">/</button>
    </div>
    <div>
        <button class="button" onclick="appendToDisplay('4')">4</button>
        <button class="button" onclick="appendToDisplay('5')">5</button>
        <button class="button" onclick="appendToDisplay('6')">6</button>
        <button class="button operator" onclick="setOperator('*')">*</button>
    </div>
    <div>
        <button class="button" onclick="appendToDisplay('1')">1</button>
        <button class="button" onclick="appendToDisplay('2')">2</button>
        <button class="button" onclick="appendToDisplay('3')">3</button>
        <button class="button operator" onclick="setOperator('-')">-</button>
    </div>
    <div>
        <button class="button clear" onclick="clearDisplay()">C</button>
        <button class="button" onclick="appendToDisplay('0')">0</button>
        <button class="button operator" onclick="calculate()">=</button>
        <button class="button operator" onclick="setOperator('+')">+</button>
    </div>
</div>

<script>

    let currentInput = '';
    let previousInput = '';
    let operator = '';

    function appendToDisplay(value) 
	{
        currentInput += value;
        updateDisplay();
    }

    function setOperator(op) 
	{
        if (currentInput === '') return;
        if (previousInput !== '') 
		{
            calculate();
        }
        operator = op;
        previousInput = currentInput;
        currentInput = '';
    }

    function calculate() 
	{
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        switch (operator) 
		{
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }

        currentInput = result;
        operator = '';
        previousInput = '';
        updateDisplay();
    }

    function clearDisplay() 
	{
        currentInput = '';
        previousInput = '';
        operator = '';
        updateDisplay();
    }

    function updateDisplay() 
	{
        document.getElementById('display').value = currentInput;
    }
	
	function changeTheme()
	{
	   const body = document.body;
	   
	   if(body.style.backgroundColor === '#555a5e')
	   {
	      body.style.backgroundColor = '#b0cadf';
	   } else 
	   {
	      body.style.backgroundColor = '#555a5e';
	   }	
	}
	
	function changeTheme1()
	{
	   const body = document.body;
	   
	   if(body.style.backgroundColor === '#555a5e', body.style.backgroundColor === '#b0cadf')
	   {
	      body.style.backgroundColor = '#b0cadf';
	   } else 
	   {
	      body.style.backgroundColor = 'white';
	   }	  	
	}
	
	function changeThemeDeafult()
	{
	   const body = document.body;
	   
	   if(body.style.backgroundColor === '#555a5e', body.style.backgroundColor === 'white')
	   {
	      body.style.backgroundColor = '#b0cadf';
	   } else 
	   {
	      body.style.backgroundColor = '#b0cadf';
	   }	  	
	}
	
</script>



<p>  Kalkulator by Antoś1812 </p>
             <p>*</p>
             <p>*</p>
             <p>*</p>
             <p>*</p>
			 <a href="https://github.com/Antos1812" target="_blank">GitHub</a>



</body>


</html>
