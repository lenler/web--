let hd='heimachegnxvyaun'
// slice(从哪开始截取)
console.log(hd.slice(0));
// substr(截取位置) 已经被废弃
console.log(hd.substr(0));
// substring(截取位置)
console.log(hd.substring(0));

// slice(从哪开始截取,到哪停止)
console.log(hd.slice(0,3));
// substr(截取位置，到哪停止) 已经被废弃
console.log(hd.substr(0,3));
// substring(截取位置，截取个数)
console.log(hd.substring(0,3));


// slice(负数)从后面开始算
console.log(hd.slice(-3,-1));
// substr(负数没有意义) 已经被废弃
console.log(hd.substr(-1));
// substring(截取位置，截取个数)
console.log(hd.substring(-3,6));
