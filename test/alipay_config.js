var config = {
    partner: '2088422209237218' //合作身份者id，以2088开头的16位纯数字
        ,
    key: 'ljtvy7x7kqegsg210wskeqwq31ygvbxm' //安全检验码，以数字和字母组成的32位字符
        ,
    seller_email: '739026413@qq.com' //卖家支付宝帐户 必填
        ,
    host: 'http://alipay.zmfanqiang.com/',
    cacert: 'cacert.pem' //ca证书路径地址，用于curl中ssl校验
        ,
    create_direct_pay_by_user_return_url_site: 'http://www.zmfanqiang.com/account/info',
    transport: 'http' //访问模式,根据自己的服务器是否支持ssl访问，若支持请选择https；若不支持请选择http
        ,
    input_charset: 'utf-8' //字符编码格式 目前支持 gbk 或 utf-8
};
var Alipay = require('alipay').Alipay;
exports.alipay = new Alipay(config);