param([string]$Titulo)
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$enc = [uri]::EscapeDataString($Titulo)
$url = "https://your-bizarre-adventure.fandom.com/api.php?action=parse&page=$enc&prop=wikitext&format=json&formatversion=2"
$r = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 30
$j = $r.Content | ConvertFrom-Json
if ($j.parse) { $j.parse.wikitext } else { "PAGINA NAO ENCONTRADA" }
