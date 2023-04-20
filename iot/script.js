const arr = [1, 2, 3, 4, 5];

function EnableDisable(checkedCount) {
  const isChecked = document.getElementById(`option${checkedCount}`).checked;

  if (isChecked) {
    // enabled
    document.getElementById(`option${checkedCount}1`).disabled = false;
    document.getElementById(`option${checkedCount}2`).disabled = false;
  } else {
    // disabled
    document.getElementById(`option${checkedCount}1`).disabled = true;
    document.getElementById(`option${checkedCount}2`).disabled = true;

    // uncheck radio button
    document.getElementById(`option${checkedCount}1`).checked = false;
    document.getElementById(`option${checkedCount}2`).checked = false;
  }
}

function handleSubmit() {
  let content = "";
  arr.forEach(function (item, index) {
    const count = index + 1;
    const isChecked = document.getElementById(`option${count}`).checked;

    if (isChecked) {
      let option_value = "";
     
      // select value from checked radio button
      if (document.getElementById(`option${count}1`).checked) {
        option_value = document.getElementById(`option${count}1`).value;
      } else if (document.getElementById(`option${count}2`).checked) {
        option_value = document.getElementById(`option${count}2`).value;
      }

      content += `option${count} is checked & ${
        option_value !== ""
          ? `${option_value} selected`
          : "option value not selected."
      } <br />`;

    } else {
      let option_value = "";
      
      // select value from checked radio button
      if (document.getElementById(`option${count}1`).checked) {
        option_value = document.getElementById(`option${count}1`).value;
      } else if (document.getElementById(`option${count}2`).checked) {
        option_value = document.getElementById(`option${count}2`).value;
      }

      content += `option${count} is not checked & ${
        option_value !== ""
          ? `${option_value} selected`
          : "option value not selected."
      } <br />`;
    }
  });

  // reset html content
  document.getElementById("result").innerHTML = "";

  // set html content
  document.getElementById("result").innerHTML = content;
}

let htmlContent = "";

arr.forEach(function (item, index) {
  const count = index + 1;
  htmlContent += `
        <input type="checkbox" onclick="EnableDisable(${count})" id="option${count}" name="option${count}" value="option${count}" />
        <label for="option${count}"> Light ${count}</label>
        <input type="radio" id="option${count}1" name="option${count}1" value="option${count}1" disabled="disabled" />
        <label for="option${count}">on</label>
        <input type="radio" id="option${count}2" name="option${count}1" value="option${count}2" disabled="disabled" />
        <label for="option${count}">off</label><br />
    `;
});

htmlContent += `<input type="button" value="SEND" onClick="handleSubmit()" />`;

// console.log(htmlContent);

// reset html content
document.getElementById("main").innerHTML = "";

// set html content
document.getElementById("main").innerHTML = htmlContent;
