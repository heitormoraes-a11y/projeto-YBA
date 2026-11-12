$base = "C:\Users\heitor_moraes.EDU_FIESC\Documents\projeto-YBA-main\projeto-YBA\jogo"
$refs = Select-String -Path "$base\js\dados.js" -Pattern 'img:\s*"([^"]+)"' -AllMatches | ForEach-Object { $_.Matches } | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
foreach ($r in $refs) {
  if (-not (Test-Path (Join-Path $base $r))) { Write-Output "FALTA: $r" }
}
Write-Output "verificado"
