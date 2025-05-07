namespace SpriteKind {
    export const npc = SpriteKind.create()
    export const npc1 = SpriteKind.create()
    export const npc2 = SpriteKind.create()
    export const npc3 = SpriteKind.create()
    export const lantern = SpriteKind.create()
    export const darkLantern = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile80`, function (sprite, location) {
    if (level == 12) {
        tiles.setCurrentTilemap(maps[11])
        level = 11
        tiles.placeOnTile(mySprite, tiles.getTileLocation(22, 3))
    } else if (level == 11) {
        tiles.setCurrentTilemap(maps[10])
        level = 10
        tiles.placeOnTile(mySprite, tiles.getTileLocation(22, 3))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile77`, function (sprite, location) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    if (level == 0) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 26))
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
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door for house 3`, function (sprite, location) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`Dirt3`, function (sprite, location) {
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
        Enemy1 = sprites.create(assets.image`tunnel worm`, SpriteKind.Enemy)
        tiles.placeOnTile(Enemy1, tiles.getTileLocation(28, 54))
        Enemy2 = sprites.create(assets.image`tunnel worm2`, SpriteKind.Enemy)
        tiles.placeOnTile(Enemy2, tiles.getTileLocation(32, 54))
        Enemy3 = sprites.create(assets.image`tall monster`, SpriteKind.Enemy)
        tiles.placeOnTile(Enemy3, tiles.getTileLocation(43, 51))
        Enemy4 = sprites.create(assets.image`kind monster`, SpriteKind.Enemy)
        tiles.placeOnTile(Enemy4, tiles.getTileLocation(57, 45))
        Enemy5 = sprites.create(assets.image`tall monster`, SpriteKind.Enemy)
        tiles.placeOnTile(Enemy5, tiles.getTileLocation(27, 60))
        Enemy6 = sprites.create(assets.image`tall monster`, SpriteKind.Enemy)
        tiles.placeOnTile(Enemy6, tiles.getTileLocation(49, 51))
        Enemy7 = sprites.create(assets.image`tall monster`, SpriteKind.Enemy)
        tiles.placeOnTile(Enemy7, tiles.getTileLocation(46, 55))
        Enemy8 = sprites.create(assets.image`tall monster`, SpriteKind.Enemy)
        tiles.placeOnTile(Enemy8, tiles.getTileLocation(54, 39))
        Enemy9 = sprites.create(assets.image`tall monster`, SpriteKind.Enemy)
        tiles.placeOnTile(Enemy9, tiles.getTileLocation(68, 39))
    }
})
function lantern_on_type1 (x_tile: number, y_tile: number, lantern_sprite: Sprite) {
    tiles.placeOnTile(lantern_sprite, tiles.getTileLocation(x_tile, y_tile))
    multilights.addLightSource(
    lantern_sprite,
    2,
    30,
    4
    )
}
function lantern_on_type2 (x_tile: number, y_tile: number, lantern_sprite: Sprite) {
    tiles.placeOnTile(lantern_sprite, tiles.getTileLocation(x_tile, y_tile))
    multilights.addLightSource(
    lantern_sprite,
    10,
    5,
    10
    )
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`LightTile`, function (sprite, location) {
    if (level == 10) {
        multilights.removeLightSource(mySprite)
        multilights.addLightSource(
        mySprite,
        2,
        30,
        2.5
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (controller.up.isPressed()) {
        mySprite.vy = -75
    }
    if (controller.down.isPressed()) {
        mySprite.vy = 75
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile73`, function (sprite, location) {
    if (level == 5) {
        tiles.setCurrentTilemap(maps[6])
        level = 6
        mySprite.setScale(2, ScaleAnchor.Top)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 13))
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door for house 2`, function (sprite, location) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile74`, function (sprite, location) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door for house 0`, function (sprite, location) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`TunnelTileDown`, function (sprite, location) {
    if (controller.up.isPressed()) {
        mySprite.vy = -75
    }
    if (controller.down.isPressed()) {
        mySprite.vy = 75
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    if (level == 0) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(46, 8))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    if (level == 0) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 26))
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc1, function (sprite, otherSprite) {
    if (otherSprite == mysprite_4) {
        timer.throttle("action", 5000, function () {
            mysprite_4.sayText("I'm a cute little guy!", 5000, false)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`LightTileoff`, function (sprite, location) {
    if (level == 10) {
        multilights.removeLightSource(mySprite)
        multilights.addLightSource(
        mySprite,
        2,
        13,
        2.5
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door for house 1`, function (sprite, location) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile75`, function (sprite, location) {
    if (level == 6) {
        tiles.setCurrentTilemap(maps[5])
        level = 5
        mySprite.setScale(2, ScaleAnchor.Top)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 13))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Up in the maze`, function (sprite, location) {
    if (level == 10) {
        tiles.setCurrentTilemap(maps[11])
        level = 11
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 20))
    } else if (level == 11) {
        tiles.setCurrentTilemap(maps[12])
        level = 12
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 20))
    } else if (level == 12) {
        tiles.setCurrentTilemap(maps[16])
        level = 16
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 20))
    } else if (level == 16) {
        tiles.setCurrentTilemap(maps[17])
        level = 17
        tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 44))
        lantern1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.lantern)
        lantern2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.lantern)
        lantern3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.lantern)
        lantern4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.lantern)
        lantern5 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.lantern)
        lantern6 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.lantern)
        lantern7 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.lantern)
        lantern8 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.lantern)
        lantern9 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.lantern)
        lantern10 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.lantern)
        lantern11 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.lantern)
        lantern_on_type1(4, 42, lantern1)
        lantern_on_type1(22, 45, lantern2)
        lantern_on_type1(31, 43, lantern3)
        lantern_on_type1(43, 45, lantern4)
        lantern_on_type1(45, 32, lantern5)
        lantern_on_type1(40, 28, lantern6)
        lantern_on_type1(29, 22, lantern7)
        lantern_on_type1(39, 14, lantern8)
        lantern_on_type1(30, 6, lantern9)
        lantern_on_type1(43, 4, lantern10)
        lantern_on_type1(24, 15, lantern11)
        l1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.darkLantern)
        l2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.darkLantern)
        l3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.darkLantern)
        l4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.darkLantern)
        l5 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.darkLantern)
        l6 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.darkLantern)
        l7 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.darkLantern)
        l8 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.darkLantern)
        l9 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.darkLantern)
        lantern_on_type2(9, 45, l1)
        lantern_on_type2(17, 39, l2)
        lantern_on_type2(11, 36, l3)
        lantern_on_type2(26, 31, l4)
        lantern_on_type2(21, 27, l5)
        lantern_on_type2(6, 27, l6)
        lantern_on_type2(13, 24, l7)
        lantern_on_type2(12, 17, l8)
        lantern_on_type2(2, 16, l9)
    } else if (level == 17) {
        tiles.setCurrentTilemap(maps[0])
        level = 0
        tiles.placeOnTile(mySprite, tiles.getTileLocation(79, 44))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`storedoor1`, function (sprite, location) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile69`, function (sprite, location) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    if (controller.up.isPressed()) {
        mySprite.vy = -75
    }
    if (controller.down.isPressed()) {
        mySprite.vy = 75
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
let NPC9: Sprite = null
let NPC8: Sprite = null
let l9: Sprite = null
let l8: Sprite = null
let l7: Sprite = null
let l6: Sprite = null
let l5: Sprite = null
let l4: Sprite = null
let l3: Sprite = null
let l2: Sprite = null
let l1: Sprite = null
let lantern11: Sprite = null
let lantern10: Sprite = null
let lantern9: Sprite = null
let lantern8: Sprite = null
let lantern7: Sprite = null
let lantern6: Sprite = null
let lantern5: Sprite = null
let lantern4: Sprite = null
let lantern3: Sprite = null
let lantern2: Sprite = null
let lantern1: Sprite = null
let mysprite_4: Sprite = null
let NPC10: Sprite = null
let Enemy9: Sprite = null
let Enemy8: Sprite = null
let Enemy7: Sprite = null
let Enemy6: Sprite = null
let Enemy5: Sprite = null
let Enemy4: Sprite = null
let Enemy3: Sprite = null
let Enemy2: Sprite = null
let Enemy1: Sprite = null
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
tilemap`Store0`,
tilemap`Maze boss level`,
tilemap`Ultimate Maze`
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
music.setVolume(20)
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
    if (level != 10) {
        sprites.destroyAllSpritesOfKind(SpriteKind.npc2)
    }
})
forever(function () {
    mySprite.sayText(level)
})
