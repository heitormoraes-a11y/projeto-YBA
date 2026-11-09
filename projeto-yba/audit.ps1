[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
# Stands faltantes confirmados: Crazy Diamond Requiem, Chili Pepper AU, Shadow The World
# Buscar detalhes dos que ainda faltam por search com termos especificos YBA
$pares = @(
  @("Tusk Act 1", "Tusk Act 1"),
  @("Tusk Act 2", "Tusk Act 2"),
  @("Tusk Act 3", "Tusk Act 3"),
  @("Whitesnake Variant", "Whitesnake C-Moon"),
  @("Cream variant", "Cream Sticky"),
  @("Sunlight", "Hamon Overdrive"),
  @("Star Platinum Skin", "Star Platinum OVA")
)
foreach ($n in $pares) {
  $q = $n[1]
  $enc = [uri]::EscapeDataString($q)
  $url = "https://your-bizarre-adventure.fandom.com/api.php?action=query&list=search&srsearch=$enc&srlimit=3&format=json&formatversion=2"
  try {
    $r = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 20
    $j = $r.Content | ConvertFrom-Json
    $titulos = $j.query.search | ForEach-Object { $_.title } | Select-Object -First 3
    Write-Output "$($n[0]) => $($titulos -join '; ')"
  } catch { Write-Output "$($n[0]) => ERRO" }
  Start-Sleep -Milliseconds 200
}
# categoria completa sem limite, em duas passadas
$cont = ""
for ($i = 0; $i -lt 3; $i++) {
  $url = "https://your-bizarre-adventure.fandom.com/api.php?action=query&list=categorymembers&cmtitle=Category:Stands&cmlimit=500&format=json&formatversion=2$cont"
  $r = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 30
  $j = $r.Content | ConvertFrom-Json
  $j.query.categorymembers | ForEach-Object { Write-Output ("MEMBER: " + $_.title) }
  if ($j.continue) { $cont = "&cmcontinue=" + [uri]::EscapeDataString($j.continue.cmcontinue) } else { break }
}
