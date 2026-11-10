[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$dir = "C:\Users\heitor_moraes.EDU_FIESC\Documents\projeto-YBA-main\projeto-YBA\ferramentas\fandom"
foreach ($f in (Get-ChildItem "$dir\*.txt")) {
  $t = [IO.File]::ReadAllText($f.FullName)
  $m = [regex]::Matches($t, '(?i)(chance of[^.]{0,80}|obtained[^.]{0,60}chance[^.]{0,40}|\d+(\.\d+)?% chance[^.]{0,60}|rarity[^.{0,60}])')
  Write-Output ("== " + $f.Name)
  $m | Select-Object -First 4 | ForEach-Object { Write-Output ("   " + ($_.Value -replace '\s+',' ')) }
}
