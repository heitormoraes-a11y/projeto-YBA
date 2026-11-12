[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$cont = ""
for ($i = 0; $i -lt 4; $i++) {
  $url = "https://your-bizarre-adventure.fandom.com/api.php?action=query&list=categorymembers&cmtitle=Category:Stands&cmlimit=500&format=json&formatversion=2$cont"
  $r = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 30
  $j = $r.Content | ConvertFrom-Json
  $j.query.categorymembers | ForEach-Object { Write-Output ("MEMBER: " + $_.title) }
  if ($j.continue) { $cont = "&cmcontinue=" + [uri]::EscapeDataString($j.continue.cmcontinue) } else { break }
}
