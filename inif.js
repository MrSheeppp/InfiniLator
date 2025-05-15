function Solve(val) { // Dodaje klikniętą wartość do pola wejściowego
   var v = document.getElementById('odp'); // Pobiera pole wejściowe
   v.value += val; // Dodaje kliknięty znak do wartości w polu wejściowym
 }
 function Result() { // Oblicza wynik wyrażenia wpisanego przez użytkownika
   var num1 = document.getElementById('odp').value; // Pobiera wartość z pola wejściowego
   try {
     var num2 = eval(num1.replace('x', '*')); // Zastępuje 'x' przez '*' i oblicza wyrażenie
     document.getElementById('odp').value = num2; // Wyświetla wynik obliczeń
   } catch { // Obsługuje przypadki, gdy wyrażenie jest nieprawidłowe
     document.getElementById('odp').value = 'error'; // Wyświetla "error" w przypadku błędu
   }
 }
 function Clear() { // Czyści pole wejściowe
   var inp = document.getElementById('odp'); // Pobiera pole wejściowe
   inp.value = ''; // Resetuje pole wejściowe do pustego
 }
 function Back() { // Usuwa ostatni znak z pola wejściowego
   var ev = document.getElementById('odp'); // Pobiera pole wejściowe
   ev.value = ev.value.slice(0, -1); // Usuwa ostatni znak
 }
 document.addEventListener('keydown', function (event) { // Dodaje obsługę klawiatury
   const znak = event.znak; // Pobiera naciśnięty klawisz
   const znaki = '0123456789+-*/.%'; // Dozwolone znaki
   if (znaki.includes(znak)) { // Jeśli naciśnięty klawisz jest dozwolony
     Solve(znak === '*' ? 'x' : znak); // Dodaje klawisz do wejścia (zastępuje '*' przez 'x')
   } else if (znak === 'Enter') { // Jeśli naciśnięty klawisz to Enter
     Result(); // Wywołuje funkcję Result
   } else if (znak === 'Backspace') { // Jeśli naciśnięty klawisz to Backspace
     Back(); // Wywołuje funkcję Back
   } else if (znak.toLowerCase() === 'c') { // Jeśli naciśnięty klawisz to 'C'
     Clear(); // Wywołuje funkcję Clear
   }
 });