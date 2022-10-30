let csv = "";

function generateCSV() {
  csv = "Account address,Show boosts\n";

  for (var i = 0; i < accounts.length; i++) {
    csv += accounts[i] + ",true\n";
  }

  let download = new Blob([csv], { type: "text/plain" });
  let link = document.getElementById("downloadlink");
  link.href = window.URL.createObjectURL(download);
  link.download = "fedifinder_following_accounts.csv";
}
