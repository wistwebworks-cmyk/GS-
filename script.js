
  // Codes and usernames
  const codes = {
    
  "gs_initA_Cnit" : "Nit", 
  "gs_initA_lsd" : "Jimmy",
  "gs_initA_minhuzz" : "Minhaj",
  "gs_initA_mahdihh" : "Mahdi",
  "gs_initPA_tasin" : "Tasin",
  "gs_initA_printer" : "Pranto",
  "gs_initA_araf" : "Araf",
  "gs_initA_VCbota" : "Ahnaf",
  "gs_initA_said" : "Said",
  "gs_initA_fatin" : "Fatin",
  "gs_initA_vodka" : "Abid",


    
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
        window.location.href = "fain.html?user=" + encodeURIComponent(username);
    } else {
      message.style.color = "red";
      message.innerHTML = "Invalid Code";
    }
  }
