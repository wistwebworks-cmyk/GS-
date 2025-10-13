
  // Codes and usernames
  const codes = {
    
  "gs_initA_Cnit12" : "Nit",
  "gs_initA_lsd46" : "Jimmy",
  "gs_initA_minhuzz93" : "Minhaj",
  "gs_initA_mahdihh02" : "Mahdi",
  "gs_initPA_tasin56" : "Tasin",
  "gs_initA_printer78" : "Pranto",
  "gs_initA_araf909" : "Araf",
  "gs_initA_VCbota09" : "Ahnaf",
  "gs_initA_said094" : "Said",
  "gs_initA_fatin033" : "Fatin",
  "gs_initA_vodka356" : "Abid",


    
  };

  function checkCode() {
    let input = document.getElementById("inputField").value.trim();
    let message = document.getElementById("message");

    if (codes[input]) {
      const username = codes[input];
      message.style.color = "lime";
      message.innerHTML = "Access Granted!";

      // Redirect to main.html with username in URL
      alert(`You are logged in as ${username}`);
        // Pass the username to the next page via URL
        localStorage.setItem("username", username);
      window.location.href = "fain.html";
    } else {
      message.style.color = "red";
      message.innerHTML = "Invalid Code";
    }
  }
