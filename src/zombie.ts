import { EntityWrapper } from './backporting/EntityWrapper'
import { MoveTransformComponent, MoveTransportDataType } from './components/moveTransport'

const { Transform, GLTFShape } = engine.baseComponents

export function createZombie(): Entity {
  const zombie: Entity = engine.addEntity()

  const zombieE = new EntityWrapper(zombie)

  zombieE.addComponent(Transform, {
    position: { x: 12, y: 1, z: 3 },
    scale: { x: 1, y: 1, z: 1 },
    rotation: { x: 0, y: 0, z: 0, w: 1 }
  })

  //zombieE.getComponent(Transform).position.x = 1

  /*Transform.create(zombie, {
    position: { x: 12, y: 1, z: 3 },
    scale: { x: 1, y: 1, z: 1 },
    rotation: { x: 0, y: 0, z: 0, w: 1 }
  })*/

  const zombeShape: PBGLTFShape = GLTFShape.create(zombie, {
    withCollisions: true,
    isPointerBlocker: true,
    visible: true,
    src: 'models/zombie.glb'
  })

  const moveTransportComponent: MoveTransportDataType = MoveTransformComponent.create(zombie, {
    start: { x: 12, y: 1, z: 3 },
    end: { x: 12, y: 1, z: 13 },
    duration: 10,
    normalizedTime: 0,
    lerpTime: 0,
    speed: 0.02,
    hasFinished: false,
    interpolationType: 15
  })

  //const moveTransportComponent2 = MoveTransformComponent.getFrom(zombie)
  //I can directly assign it here
  moveTransportComponent.speed = 2

  return zombie
}
