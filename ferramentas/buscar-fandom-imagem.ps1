param([string]$Titulo)
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$enc = [uri]::EscapeDataString($Titulo)
$url = "https://your-bizarre-adventure.fandom.com/api.php?action=query&titles=$enc&prop=pageimages&pithumbsize=400&format=json&formatversion=2"
$r = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 30
$j = $r.Content | ConvertFrom-Json
if ($j.query.pages[0].thumbnail) { $j.query.pages[0].thumbnail.source } else { "SEM IMAGEM" }
