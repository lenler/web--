/* 使用 * as 别名可以批量导入，但是打包时会认为我们要用到这个模块里面的所有内容，
导致打包文件的体积过大，建议使用具名导入，打包是只会打包我们用到的一些文件 */
// 批量导入
import * as api from "./06.2.js"
console.log(api);
console.log(api.site);
// 具名导入(推荐)
