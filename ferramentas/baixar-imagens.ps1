[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$base = "C:\Users\heitor_moraes.EDU_FIESC\Documents\projeto-YBA-main\projeto-YBA\jogo"
$downloads = @(
  @("img/stands/starplatinum.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/4/44/SP_New_Pose_FIXED.png"),
  @("img/stands/sptw.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/8/81/SPTW_New_Pose_FIXED.png"),
  @("img/stands/theworld.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/9/99/TW_New_Pose.png"),
  @("img/stands/twau.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/1/10/TWAU_YBA.png"),
  @("img/stands/ger.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/6/69/CurrentGERRequiem.png.png"),
  @("img/stands/geb.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/d/dc/GE_Current_model.png"),
  @("img/stands/kingcrimson.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/4/4b/King_Crimson_Remodel_2022.png"),
  @("img/stands/kcr.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/b/b6/KcrRemodel.png"),
  @("img/stands/scr.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/e/e1/Scr_new.png"),
  @("img/stands/madeinheaven.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/e/eb/NEW_MIH_IMAGE_PAGE.png"),
  @("img/stands/d4clt.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/a/aa/D4clt.png"),
  @("img/stands/cmoon.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/9/98/C-moon4.png"),
  @("img/stands/tusk4.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/3/3a/NEW_TA4_IMAGE_PAGE.png"),
  @("img/stands/crazycd.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/4/4f/Crazy_Diamond_New_Pose.png"),
  @("img/stands/cream.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/4/4b/Cream_Remodel_YBA1.png"),
  @("img/stands/purplehaze.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/d/d5/Purple_Haze_Clean_Image.png"),
  @("img/stands/d4c.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/f/f3/NEW_D4C_IMAGE_PAGE.png"),
  @("img/stands/whitesnake.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/1/1b/Whitesnakeee.png"),
  @("img/stands/anubis.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/5/58/New-and-clean-anubis.png"),
  @("img/stands/stickyfingers.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/7/77/New_SF_Curr_vers.png"),
  @("img/stands/aerosmith.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/0/05/Aerosmith_Alone.png"),
  @("img/stands/sixpistols.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/7/72/SixPistolsRemodel.png"),
  @("img/stands/killerqueen.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/3/34/Killer_Queen_Remodel_YBA.png"),
  @("img/stands/kqbtd.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/8/89/NEW_KQ_BTD_IMAGE_PAGE.png"),
  @("img/stands/thehand.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/9/94/The_Hand_Clean_Image.png"),
  @("img/stands/whitealbum.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/2/23/WA_Current.png"),
  @("img/stands/magiciansred.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/6/64/MR_remodel_v2.png"),
  @("img/stands/softwet.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/f/f4/NEW_S%26W_IMAGE_PAGE.png"),
  @("img/stands/rhcp.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/8/83/RHCP_Damage_Buff.png"),
  @("img/stands/stonefree.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/9/92/Stone_Free_New_Pose.png"),
  @("img/stands/scarymonsters.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/5/59/Scary_Monsters_1.png"),
  @("img/stands/beachboy.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/2/2c/Beach_Boy_Model_YBA1.png"),
  @("img/stands/tusk1.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/c/c8/NEW_TA1_IMAGE_PAGE.png"),
  @("img/stands/tusk2.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/b/b2/NEW_TA2_IMAGE_PAGE.png"),
  @("img/stands/tusk3.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/6/62/NEW_TA3_IMAGE_PAGE.png"),
  @("img/stands/hermitpurple.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/1/16/755.png"),
  @("img/specs/hamon.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/f/f6/Jotaro_Part_3_New_Image.png"),
  @("img/specs/vampirism.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/c/ce/New_DIO.png"),
  @("img/bosses/boss-dio.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/c/ce/New_DIO.png"),
  @("img/bosses/boss-had.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/4/4b/HeavenAscendedDIO_new.png"),
  @("img/bosses/boss-kars.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/1/13/Kars_-_Updated%2C_Max_Graphics.png"),
  @("img/bosses/boss-pucci.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/3/3c/NewPucc.JPG"),
  @("img/bosses/boss-doppio.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/7/7d/DoppioNew.JPG"),
  @("img/itens/item-arrow.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/9/9c/New_mysterious_arrow_.png"),
  @("img/itens/item-requiem.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/c/c6/Requiem_Arrow.png"),
  @("img/itens/item-roka.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/4/48/Rokakaka.png"),
  @("img/itens/item-diario.png", "https://static.wikia.nocookie.net/your-bizarre-adventure/images/4/43/Dio_Diary.jpg")
)
$falhas = @()
foreach ($d in $downloads) {
  $dest = Join-Path $base $d[0]
  $dir = Split-Path $dest
  New-Item -ItemType Directory -Force $dir | Out-Null
  curl.exe -sS -L -o $dest -A "Mozilla/5.0" ($d[1] + "/revision/latest/scale-to-width-down/300")
  if ((Test-Path $dest) -and ((Get-Item $dest).Length -gt 1000)) { Write-Output ("ok: " + $d[0]) }
  else { $falhas += $d[0]; Write-Output ("FALHOU: " + $d[0]) }
  Start-Sleep -Milliseconds 200
}
Write-Output "== FALHAS: $($falhas.Count)"
