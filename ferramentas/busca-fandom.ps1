[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$q = [uri]::EscapeDataString("Arrow stand chances list")
$url = "https://your-bizarre-adventure.fandom.com/api.php?action=query&list=search&srsearch=$q&srlimit=10&format=json&formatversion=2"
$r = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 30
($r.Content | ConvertFrom-Json).query.search | ForEach-Object { $_.title }
