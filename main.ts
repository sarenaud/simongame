namespace SpriteKind {
    export const npc = SpriteKind.create()
    export const npc1 = SpriteKind.create()
    export const npc2 = SpriteKind.create()
    export const npc3 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile36, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (level == 0) {
            tiles.setCurrentTilemap(maps[4])
            mySprite.setPosition(175, 40)
            level = 4
            controller.moveSprite(mySprite, 100, 100)
            mySprite.ay = 0
            mySprite.setScale(2, ScaleAnchor.Middle)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc, function (sprite, otherSprite) {
    if (otherSprite == mysprite2) {
        timer.throttle("action", 5000, function () {
            mysprite2.sayText("Hello", 5000, false)
        })
    } else if (otherSprite == mySprite3) {
        timer.throttle("action", 10000, function () {
            mySprite3.sayText("Watch out-", 2000, false)
            timer.after(2000, function () {
                mySprite3.sayText("I wouldn't go down there. . .", 4000, false)
            })
            timer.after(4000, function () {
                mySprite3.sayText("unless you're sure you're ready!", 4000, false)
            })
        })
    }
    if (otherSprite == doorNPC) {
        timer.throttle("action", 5000, function () {
            doorNPC.sayText("DO NOT ENTER", 5000, false)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile23, function (sprite, location) {
    if (controller.up.isPressed()) {
        mySprite.vy = -75
    }
    if (controller.down.isPressed()) {
        mySprite.vy = 75
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile91, function (sprite, location) {
    if (level == 5) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(1080, 345)
        level = 0
        controller.moveSprite(mySprite, 100, 0)
        mysprite2.setPosition(1050, 345)
        mySprite.ay = 1000
        mySprite.setScale(1, ScaleAnchor.Middle)
        spawnOverworldNPCs()
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile41, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (level == 0) {
            tiles.setCurrentTilemap(maps[14])
            mySprite.setPosition(175, 40)
            level = 14
            controller.moveSprite(mySprite, 100, 100)
            mySprite.ay = 0
            mySprite.setScale(2, ScaleAnchor.Middle)
        }
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
scene.onOverlapTile(SpriteKind.Player, myTiles.tile86, function (sprite, location) {
    if (level == 2) {
        tiles.setCurrentTilemap(maps[0])
        level = 0
        controller.moveSprite(mySprite, 100, 0)
        mySprite.setScale(1, ScaleAnchor.Middle)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(35, 7))
        mySprite.ay = 1000
        spawnOverworldNPCs()
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile94, function (sprite, location) {
    if (level == 5) {
        tiles.setCurrentTilemap(maps[6])
        level = 6
        mySprite.setScale(2, ScaleAnchor.Top)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 13))
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile38, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (level == 0) {
            tiles.setCurrentTilemap(maps[10])
            level = 10
            tiles.placeOnTile(mySprite, tiles.getTileLocation(13, 22))
            controller.moveSprite(mySprite, 100, 100)
            mySprite.ay = 0
            multilights.removeLightSource(mySprite)
            multilights.addLightSource(
            mySprite,
            2,
            13,
            2.5
            )
        }
        NPC8 = sprites.create(assets.image`Cute monster`, SpriteKind.npc2)
        tiles.placeOnTile(NPC8, tiles.getTileLocation(5, 18))
        NPC9 = sprites.create(assets.image`Cute monster`, SpriteKind.npc2)
        tiles.placeOnTile(NPC9, tiles.getTileLocation(11, 22))
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile13, function (sprite, location) {
    if (controller.up.isPressed()) {
        mySprite.vy = -75
    }
    if (controller.down.isPressed()) {
        mySprite.vy = 75
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc3, function (sprite, otherSprite) {
    if (otherSprite == NPC10) {
        timer.throttle("action", 6000, function () {
            mysprite_4.sayText("Welcome to my store!", 2000, false)
        })
        timer.after(2000, function () {
            mysprite_4.sayText("There's not much here", 2000, false)
        })
        timer.after(2000, function () {
            mysprite_4.sayText("So take what you want", 2000, false)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile96, function (sprite, location) {
    if (level == 6) {
        tiles.setCurrentTilemap(maps[5])
        level = 5
        mySprite.setScale(2, ScaleAnchor.Top)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 13))
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile100, function (sprite, location) {
    if (level == 7) {
        tiles.setCurrentTilemap(maps[0])
        level = 0
        controller.moveSprite(mySprite, 100, 0)
        mySprite.setScale(1, ScaleAnchor.Middle)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(19, 29))
        mySprite.ay = 1000
        spawnOverworldNPCs()
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile87, function (sprite, location) {
    if (level == 3) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(685, 375)
        level = 0
        controller.moveSprite(mySprite, 100, 0)
        mySprite.setScale(1, ScaleAnchor.Middle)
        mysprite2.setPosition(1050, 345)
        mySprite.ay = 1000
        spawnOverworldNPCs()
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile37, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (level == 0) {
            tiles.setCurrentTilemap(maps[5])
            mySprite.setPosition(175, 40)
            level = 5
            controller.moveSprite(mySprite, 100, 100)
            mySprite.ay = 0
            mySprite.setScale(2, ScaleAnchor.Middle)
            mysprite_4 = sprites.create(assets.image`Cute monster`, SpriteKind.npc1)
            tiles.placeOnTile(mysprite_4, tiles.getTileLocation(11, 7))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile88, function (sprite, location) {
    if (level == 4) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(690, 120)
        level = 0
        controller.moveSprite(mySprite, 100, 0)
        mySprite.setScale(1, ScaleAnchor.Middle)
        mysprite2.setPosition(1050, 345)
        mySprite.ay = 1000
        spawnOverworldNPCs()
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile42, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (level == 0) {
            tiles.setCurrentTilemap(maps[3])
            mySprite.setPosition(175, 40)
            level = 3
            controller.moveSprite(mySprite, 100, 100)
            mySprite.ay = 0
            mySprite.setScale(2, ScaleAnchor.Middle)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc1, function (sprite, otherSprite) {
    if (otherSprite == mysprite_4) {
        timer.throttle("action", 5000, function () {
            mysprite_4.sayText("I'm a cute little guy!", 5000, false)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile35, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (level == 0) {
            tiles.setCurrentTilemap(maps[2])
            mySprite.setPosition(175, 40)
            level = 2
            controller.moveSprite(mySprite, 100, 100)
            mySprite.ay = 0
            mySprite.setScale(2, ScaleAnchor.Middle)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile98, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (level == 0) {
            tiles.setCurrentTilemap(maps[7])
            mySprite.setPosition(140, 350)
            level = 7
            controller.moveSprite(mySprite, 100, 100)
            mySprite.ay = 0
            mySprite.setScale(2, ScaleAnchor.Middle)
            NPC10 = sprites.create(assets.image`cat_maybe`, SpriteKind.npc3)
            tiles.placeOnTile(NPC10, tiles.getTileLocation(3, 2))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile89, function (sprite, location) {
    if (level == 14) {
        tiles.setCurrentTilemap(maps[0])
        level = 0
        controller.moveSprite(mySprite, 100, 0)
        mySprite.setScale(1, ScaleAnchor.Middle)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(23, 29))
        mySprite.ay = 1000
        spawnOverworldNPCs()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc2, function (sprite, otherSprite) {
    if (otherSprite == NPC8) {
        timer.throttle("action", 2000, function () {
            NPC8.sayText("Wrong Way, Dumb-Dumb", 2000, false)
            multilights.removeLightSource(mySprite)
            multilights.addLightSource(
            mySprite,
            2,
            40,
            2.5
            )
        })
        timer.after(2000, function () {
            multilights.removeLightSource(mySprite)
            multilights.addLightSource(
            mySprite,
            2,
            13,
            2.5
            )
        })
    }
    if (otherSprite == NPC9) {
        timer.throttle("action", 4000, function () {
            multilights.removeLightSource(mySprite)
            multilights.addLightSource(
            mySprite,
            2,
            40,
            2.5
            )
            NPC9.sayText("Why are you still trying?", 2000, false)
            timer.after(2000, function () {
                NPC9.sayText("You're lost, idiot!", 2000, false)
            })
            timer.after(4000, function () {
                multilights.removeLightSource(mySprite)
                multilights.addLightSource(
                mySprite,
                2,
                13,
                2.5
                )
            })
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile95, function (sprite, location) {
    if (level == 7) {
        tiles.setCurrentTilemap(maps[8])
        level = 8
        tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 3))
    } else if (level == 8) {
        tiles.setCurrentTilemap(maps[7])
        level = 7
        tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 3))
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile85, function (sprite, location) {
    if (level == 1) {
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
scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    if (controller.up.isPressed()) {
        mySprite.vy = -75
    }
    if (controller.down.isPressed()) {
        mySprite.vy = 75
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile39, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (level == 0) {
            tiles.setCurrentTilemap(maps[1])
            mySprite.setPosition(85, 160)
            level = 1
            controller.moveSprite(mySprite, 100, 100)
            mySprite.ay = 0
            mySprite.setScale(2, ScaleAnchor.Middle)
        }
    }
})
let mysprite_4: Sprite = null
let NPC10: Sprite = null
let NPC9: Sprite = null
let NPC8: Sprite = null
let MySprite_7: Sprite = null
let MySprite6: Sprite = null
let Mysprite_5: Sprite = null
let doorNPC: Sprite = null
let mySprite3: Sprite = null
let mysprite2: Sprite = null
let mySprite: Sprite = null
let level = 0
let maps: tiles.TileMapData[] = []
maps = [
tilemap`overworld`,
tilemap`Character house`,
tilemap`House1`,
tilemap`House2`,
tilemap`House3`,
tilemap`Big House1`,
tilemap`Big House Upper`,
tilemap`Store`,
tilemap`Store lvl2`,
tilemap`Hospital`,
tilemap`maze 1`,
tilemap`maze 2`,
tilemap`maze 3`,
tilemap`Armory`,
tilemap`House0`,
tilemap`Store0`
]
tiles.setCurrentTilemap(maps[1])
level = 1
mySprite = sprites.create(assets.image`character`, SpriteKind.Player)
mySprite.z = 1
tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 2))
if (level == 1) {
    controller.moveSprite(mySprite, 100, 100)
    scene.cameraFollowSprite(mySprite)
    mySprite.setScale(2, ScaleAnchor.Middle)
}
multilights.toggleLighting(true)
multilights.addLightSource(
mySprite,
0,
60,
1
)
forever(function () {
    if (level != 0) {
        sprites.destroyAllSpritesOfKind(SpriteKind.npc)
    }
    if (level != 5) {
        sprites.destroyAllSpritesOfKind(SpriteKind.npc1)
    }
    if (level != 7) {
        sprites.destroyAllSpritesOfKind(SpriteKind.npc3)
    }
})
forever(function () {
	
})
