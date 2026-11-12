[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
foreach ($t in @("Magician's Red","Red Hot Chili Pepper","Stone Free","Six Pistols","Metallica","White Album","Silver Chariot","Star Platinum")) {
  $enc = [uri]::EscapeDataString($t)
  $url = "https://your-bizarre-adventure.fandom.com/api.php?action=parse&page=$enc&prop=wikitext&format=json&formatversion=2"
  $r = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 30
  $j = $r.Content | ConvertFrom-Json
  $wt = $j.parse.wikitext
  Write-Output ("== $t ==")
  $linhas = $wt -split "`n"
  $capturando = $false
  foreach ($l in $linhas) {
    if ($l -match 'Chance') { $capturando = $true }
    if ($capturando) { Write-Output ("   " + $l.Trim()) }
    if ($capturando -and $l -match '^\}\}') { break }
  }
  Start-Sleep -Milliseconds 120
}
