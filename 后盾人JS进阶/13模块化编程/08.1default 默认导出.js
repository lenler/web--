// 可能的报错原因:
// 1. 文件扩展名问题 - 需要添加.js扩展名
// 2. 模块文件可能不存在
// 3. Use类可能未在08.2文件中正确导出
import Use from "./08.2.js"

console.log(Use.render())