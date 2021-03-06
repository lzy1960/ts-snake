// 记分牌类
class ScorePanel {
  score: number = 0
  level: number = 1
  scoreElement: HTMLElement
  levelElement: HTMLElement
  maxLevel: number
  upScore: number

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreElement = document.getElementById('score')!
    this.levelElement = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  // 加分
  addScore () {
    this.score++
    this.scoreElement.innerHTML = this.score + ''
    // 判断分数
    if (!(this.score % this.upScore)) {
      this.levelUp()
    }
  }
  // 提升等级
  levelUp () {
    if (this.level < this.maxLevel) {
      this.level++
    }
    this.levelElement.innerHTML = this.level + ''
  }
}

export default ScorePanel