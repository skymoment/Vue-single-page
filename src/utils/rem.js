/**
 * 移动端 rem 布局方案，需配合 sass.scss 方法 px2rem 使用
 * @module knife/utils/rem
 * @author bigfact
 */

/**
 * 布局缩放基数，与 ./sass.scss 文件中 $htmlFontSize 的值一致
 */
const layoutRate = 100

/**
 * 根元素 html font-size 设置方法
 * @param {Number} baseWidth 参照屏幕宽度
 * @param {Number} maxWidth 最大屏幕宽度
 * @param {Number} rate 布局缩放基数
 * @param {Number} maxRate 最大缩放基数
 * @example
 * // sass
 * 占位 @import 'node_modules/knife/utils/rem/sass.scss';
 * body { font-size: px2rem(14); }
 * // css
 * body { font-size: 0.14rem; }
 * // js
 * import px2rem from 'knife/utils/rem'
 * px2rem()
 */
export default function(baseWidth = 375, maxWidth = 768, rate = layoutRate, maxRate = layoutRate) {
  function setHtmlFontSize() {
    let screenWidth = window.innerWidth
    let fontSize = screenWidth < maxWidth ? screenWidth / baseWidth * rate : maxWidth / baseWidth * rate
    // 限制最大为 iphone 6s 屏幕效果
    fontSize > maxRate && (fontSize = maxRate)
    document.documentElement.style.fontSize = fontSize + 'px'
  }
  setHtmlFontSize()
  window.onload = setHtmlFontSize
  window.onresize = setHtmlFontSize
}
