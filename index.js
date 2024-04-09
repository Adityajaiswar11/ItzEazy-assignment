
  const inputs = document.querySelectorAll('.text-input, .select-box, .radio,.radio_two'); //selected multiple class names
  const progressBar = document.getElementById('progress'); //selected progress bar id name

  //inputs is nodelist and using forEach for each element iteration
  inputs.forEach(input => {
    input.addEventListener('input', updateProgressBar); // added event listener for progress
  });

  // function for the update progress bar
  function updateProgressBar() {
    const filledInputs = Array.from(inputs).filter(input => {
      if (input.classList.contains('text-input')) {
        return input.value.length >=3;
      } else if (input.classList.contains('select-box')) {
        return input.value !== '';
      } else if (input.classList.contains('radio')) {
        return input.checked;
      }else if(input.classList.contains('radio_two')){
        return input.checked
      }
    });

    const progressPercent = (filledInputs.length / inputs.length) * 100; // percentage for the progress bar 
    progressBar.style.width = `${progressPercent}%`; //added width for the progress bar
  }