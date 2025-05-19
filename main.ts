namespace SpriteKind {
    export const npc = SpriteKind.create()
    export const npc1 = SpriteKind.create()
    export const npc2 = SpriteKind.create()
    export const npc3 = SpriteKind.create()
    export const lantern = SpriteKind.create()
    export const darkLantern = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Dirt3`, function (sprite, location) {
    if (controller.A.isPressed()) {
        let maps: tiles.TileMapData[] = []
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(1145, 345)
        level = 0
        controller.moveSprite(mySprite, 100, 100)
        mySprite.ay = 1000
        mySprite.setScale(1, ScaleAnchor.Middle)
        mysprite2 = sprites.create(assets.image`bug eye monster`, SpriteKind.npc)
        mysprite2.setPosition(1050, 345)
        mySprite3 = sprites.create(assets.image`bug eye monster`, SpriteKind.npc)
        tiles.placeOnTile(mySprite3, tiles.getTileLocation(20, 31))
        Mysprite_5 = sprites.create(assets.image`bug eye monster`, SpriteKind.npc)
        tiles.placeOnTile(Mysprite_5, tiles.getTileLocation(34, 26))
        MySprite6 = sprites.create(assets.image`bug eye monster`, SpriteKind.npc)
        tiles.placeOnTile(MySprite6, tiles.getTileLocation(3, 21))
        MySprite_7 = sprites.create(assets.image`bug eye monster`, SpriteKind.npc)
        tiles.placeOnTile(MySprite_7, tiles.getTileLocation(42, 18))
        doorNPC = sprites.create(assets.image`doorSprite`, SpriteKind.npc)
        tiles.placeOnTile(doorNPC, tiles.getTileLocation(77, 55))
    }
})
function spawnOverworldNPCs () {
    mysprite2 = sprites.create(assets.image`bug eye monster`, SpriteKind.npc)
    mysprite2.setPosition(1050, 345)
    mySprite3 = sprites.create(assets.image`bug eye monster`, SpriteKind.npc)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(20, 31))
    Mysprite_5 = sprites.create(assets.image`bug eye monster`, SpriteKind.npc)
    tiles.placeOnTile(Mysprite_5, tiles.getTileLocation(34, 26))
    MySprite6 = sprites.create(assets.image`bug eye monster`, SpriteKind.npc)
    tiles.placeOnTile(MySprite6, tiles.getTileLocation(3, 21))
    MySprite_7 = sprites.create(assets.image`bug eye monster`, SpriteKind.npc)
    tiles.placeOnTile(MySprite_7, tiles.getTileLocation(42, 18))
    doorNPC = sprites.create(assets.image`doorSprite`, SpriteKind.npc)
    tiles.placeOnTile(doorNPC, tiles.getTileLocation(77, 55))
}
let doorNPC: Sprite = null
let MySprite_7: Sprite = null
let MySprite6: Sprite = null
let Mysprite_5: Sprite = null
let mySprite3: Sprite = null
let mysprite2: Sprite = null
let mySprite: Sprite = null
let statusbar10: StatusBarSprite = null
let Enemy9: Sprite = null
let statusbar9: StatusBarSprite = null
let Enemy8: Sprite = null
let statusbar8: StatusBarSprite = null
let Enemy7: Sprite = null
let statusbar7: StatusBarSprite = null
let Enemy6: Sprite = null
let statusbar6: StatusBarSprite = null
let Enemy5: Sprite = null
let statusbar5: StatusBarSprite = null
let Enemy4: Sprite = null
let statusbar4: StatusBarSprite = null
let Enemy3: Sprite = null
let statusbar3: StatusBarSprite = null
let Enemy2: Sprite = null
let statusbar2: StatusBarSprite = null
let Enemy1: Sprite = null
let level = 0
if (level == 0) {
    Enemy1 = sprites.create(assets.image`tunnel worm`, SpriteKind.Enemy)
    statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar2.attachToSprite(Enemy1)
    tiles.placeOnTile(Enemy1, tiles.getTileLocation(28, 54))
    Enemy2 = sprites.create(assets.image`tunnel worm2`, SpriteKind.Enemy)
    statusbar3 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar3.attachToSprite(Enemy2)
    tiles.placeOnTile(Enemy2, tiles.getTileLocation(32, 54))
    Enemy3 = sprites.create(assets.image`tall monster`, SpriteKind.Enemy)
    statusbar4 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar4.attachToSprite(Enemy3)
    tiles.placeOnTile(Enemy3, tiles.getTileLocation(43, 51))
    Enemy4 = sprites.create(assets.image`kind monster`, SpriteKind.Enemy)
    statusbar5 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar5.attachToSprite(Enemy4)
    tiles.placeOnTile(Enemy4, tiles.getTileLocation(57, 45))
    Enemy5 = sprites.create(assets.image`tall monster`, SpriteKind.Enemy)
    statusbar6 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar6.attachToSprite(Enemy5)
    tiles.placeOnTile(Enemy5, tiles.getTileLocation(27, 60))
    Enemy6 = sprites.create(assets.image`tall monster`, SpriteKind.Enemy)
    statusbar7 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar7.attachToSprite(Enemy6)
    tiles.placeOnTile(Enemy6, tiles.getTileLocation(49, 51))
    Enemy7 = sprites.create(assets.image`tall monster`, SpriteKind.Enemy)
    statusbar8 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar8.attachToSprite(Enemy7)
    tiles.placeOnTile(Enemy7, tiles.getTileLocation(46, 55))
    Enemy8 = sprites.create(assets.image`tall monster`, SpriteKind.Enemy)
    statusbar9 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar9.attachToSprite(Enemy8)
    tiles.placeOnTile(Enemy8, tiles.getTileLocation(54, 39))
    Enemy9 = sprites.create(assets.image`tall monster`, SpriteKind.Enemy)
    statusbar10 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar10.attachToSprite(Enemy9)
    tiles.placeOnTile(Enemy9, tiles.getTileLocation(68, 39))
}
forever(function () {
    if (level == 0) {
        if (spriteutils.distanceBetween(mySprite, Enemy3) > 30) {
            Enemy3.follow(mySprite)
        } else {
            Enemy3.follow(null)
        }
        if (spriteutils.distanceBetween(mySprite, Enemy4) > 30) {
            Enemy4.follow(mySprite)
        } else {
            Enemy4.follow(null)
        }
        if (spriteutils.distanceBetween(mySprite, Enemy5) > 30) {
            Enemy5.follow(mySprite)
        } else {
            Enemy5.follow(null)
        }
        if (spriteutils.distanceBetween(mySprite, Enemy6) > 30) {
            Enemy6.follow(mySprite)
        } else {
            Enemy6.follow(null)
        }
        if (spriteutils.distanceBetween(mySprite, Enemy7) > 30) {
            Enemy7.follow(mySprite)
        } else {
            Enemy7.follow(null)
        }
        if (spriteutils.distanceBetween(mySprite, Enemy8) < 50) {
            Enemy8.follow(mySprite)
        } else {
            Enemy8.follow(null)
        }
        if (spriteutils.distanceBetween(mySprite, Enemy9) > 30) {
            Enemy9.follow(mySprite)
        } else {
            Enemy9.follow(null)
        }
    }
})
forever(function () {
	
})
