// 定义食物类Food
class Food {
  // 定义一个属性表示食物对应的元素
  element: HTMLElement

  constructor() {
    this.element = document.getElementById('food')!
  }

  // 获取食物X轴坐标
  get X () {
    return this.element.offsetLeft
  }

  // 获取食物X轴坐标
  get Y () {
    return this.element.offsetTop
  }

  change () {
    // 生成随机的位置
    // 食物的位置最小是0，最大是290
    // 必须是10的倍数
    let top = Math.round(Math.random() * 29) * 10
    let left = Math.round(Math.random() * 29) * 10
    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }
}

export default Food