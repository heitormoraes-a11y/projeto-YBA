[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
foreach ($q in @("Paragon skin obtainable","White Album obtainment arrow","Magician's Red obtainment","Red Hot Chili Pepper obtainment percent","Metallica obtainment percent","Stone Free obtainment percent","Six Pistols obtainment arrow percent","Gold Experience Requiem obtainment","King Crimson Requiem obtainment","Chariot Requiem obtainment")) {
  $enc = [uri]::EscapeDataString($q)
  $url = "https://your-bizarre-adventure.fandom.com/api.php?action=query&list=search&srsearch=$enc&srlimit=2&format=json&formatversion=2"
  $r = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 20
  $t = ($r.Content | ConvertFrom-Json).query.search | ForEach-Object { $_.title }
  Write-Output ("$q => " + ($t -join "; "))
  Start-Sleep -Milliseconds 150
}
