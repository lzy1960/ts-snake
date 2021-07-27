class Snake {
  // 蛇头
  head: HTMLElement
  // 蛇的身体(包括蛇头)
  bodies: HTMLCollection
  // 获取蛇的容器
  element: HTMLElement

  constructor() {
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake>div')
    this.bodies = this.element.getElementsByTagName('div')
  }

  // 获取蛇头的坐标
  get X () {
    return this.head.offsetLeft
  }

  get Y () {
    return this.head.offsetTop
  }

  set X (value: number) {
    if (this.X === value) {
      return
    }

    // 检查是否撞墙
    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了')
    }

    // 掉头处理
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      console.log('水平方向掉头了')
      if (value > this.X) {
        value = this.X - 10
      } else {
        value = this.X + 10
      }
    }

    this.moveBody()

    this.head.style.left = value + 'px'

    this.checkHeadBody()
  }

  set Y (value: number) {
    if (this.Y === value) {
      return
    }

    // 检查是否撞墙
    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了')
    }

    // 掉头处理
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      console.log('水平方向掉头了')
      if (value > this.Y) {
        value = this.Y - 10
      } else {
        value = this.Y + 10
      }
    }

    this.moveBody()

    this.head.style.top = value + 'px'

    this.checkHeadBody()
  }

  // 蛇添加身体(添加一个div)
  addBody () {
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }

  // 蛇身体移动的方法
  moveBody () {
    // 将后面的身体设置为前面身体的位置(从后往前)
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      // 将值设置到当前身体
      (this.bodies[i] as HTMLElement).style.left = x + 'px';
      (this.bodies[i] as HTMLElement).style.top = y + 'px';
    }
  }

  // 检查头和身体是否相撞
  checkHeadBody () {
    // 获取所有的身体，检查是否和蛇头的坐标相同
    for (let i = 1; i < this.bodies.length; i++) {
      const body = this.bodies[i] as HTMLElement
      if (body.offsetLeft == this.X && body.offsetTop === this.Y) {
        throw new Error('撞到了身体')
      }
    }
  }
}

export default Snake