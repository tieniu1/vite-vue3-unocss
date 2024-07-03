export function checkInView(element) {
  const rect = element.value?.$el?.getBoundingClientRect()
  const isInView =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  console.log(isInView) // 输出元素是否在视窗内
}
