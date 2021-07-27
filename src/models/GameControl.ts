import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';
// 游戏控制器，控制其他所有的类
class GameControl {
  // 定义三个属性
  snake: Snake
  food: Food
  scorePanel: ScorePanel
  // 创建一个属性，存储蛇移动的方向
  direction: string = ''
  // 是否存活
  isLive: boolean = true

  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel(10, 2)

    this.init()
  }

  // 初始化方法
  init () {
    // 1. 绑定键盘按下的事件
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.run()
  }

  // 创建一个键盘按下的响应函数
  keydownHandler (event: KeyboardEvent) {
    // 先检查event.key是否合法
    this.direction = event.key
  }

  // 创建蛇移动的方法
  run () {
    // 根据方向使蛇的位置改变
    // 获取蛇现在的坐标
    let x = this.snake.X
    let y = this.snake.Y
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        y -= 10
        break

      case 'ArrowDown':
      case 'Down':
        y += 10
        break

      case 'ArrowLeft':
      case 'Left':
        x -= 10
        break

      case 'ArrowRight':
      case 'Right':
        x += 10
        break
    }

    this.checkEat(x, y)

    try {
      this.snake.X = x
      this.snake.Y = y
    } catch (error) {
      alert(error.message)
      this.isLive = false
    }

    // 开启一个定时器调用run
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }

  checkEat (x: number, y: number) {
    if (x === this.food.X && y === this.food.Y) {
      this.food.change()
      this.scorePanel.addScore()
      this.snake.addBody()
    }
  }
}

export default GameControl