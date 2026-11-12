[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$paginas = @(
  "Tusk (Act 1)","Tusk (Act 2)","Tusk (Act 3)","Soft & Wet: Go Beyond",
  "Hermit Purple","Crazy Diamond Requiem","Chili Pepper (Alternate Universe)",
  "Shadow The World","The World Over Heaven","Star Platinum","The World",
  "King Crimson","Gold Experience Requiem","Chariot Requiem","Made in Heaven",
  "D4C: Love Train","C-Moon","Crazy Diamond","Cream","Purple Haze","Metallica",
  "Dirty Deeds Done Dirt Cheap","Whitesnake","Anubis","Sticky Fingers",
  "Hierophant Green","Silver Chariot","Aerosmith","Six Pistols","Mr. President",
  "Killer Queen","Killer Queen: Bites the Dust","The Hand","White Album",
  "Magician's Red","Soft & Wet","Red Hot Chili Pepper","Stone Free",
  "Scary Monsters","Beach Boy","Gold Experience","King Crimson Requiem"
)
$saidas = "C:\Users\heitor_moraes.EDU_FIESC\Documents\projeto-YBA-main\projeto-YBA\ferramentas\fandom"
New-Item -ItemType Directory -Force $saidas | Out-Null
foreach ($p in $paginas) {
  $enc = [uri]::EscapeDataString($p)
  $url = "https://your-bizarre-adventure.fandom.com/api.php?action=parse&page=$enc&prop=wikitext&format=json&formatversion=2"
  try {
    $r = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 30
    $j = $r.Content | ConvertFrom-Json
    $arquivo = Join-Path $saidas (($p -replace '[^a-z0-9]','_') + ".txt")
    if ($j.parse) { [IO.File]::WriteAllText($arquivo, $j.parse.wikitext) }
    else { [IO.File]::WriteAllText($arquivo, "NAO ENCONTRADA") }
    Write-Output "ok: $p"
  } catch { Write-Output "ERRO: $p" }
  Start-Sleep -Milliseconds 150
}
