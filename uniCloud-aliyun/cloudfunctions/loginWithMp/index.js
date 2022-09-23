let jwt = require('jsonwebtoken')

let db = uniCloud.database({
  throwOnNotFound: false,
})

let appId = 'wxde9c57ec86ea1fb2'
let appSecret = 'ce5f6ff6003c36e19589fcf5c185c0d7'
let jwtSecret = 'qazwsxedcrfv'

exports.main = async (event, context) => {
  //event为客户端上传的参数
  //登录页面
  if (event.api === 'loginWithMp') {
    let wxRes = await uniCloud.httpclient.request(
      `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret =${appSecret}&js.code=${event.code}&grant_type=authorization_code`, {
        dataType: 'json',
      });
    let userId = wxRes.data.openid
    if (!userId) {
      throw Error(wxRes.data.errmsg)
    }
    let user = await db.collection('user').doc(userId).get()
    //生成token
    let token = 'Bearer' + jwt.sign({
      userId
    }, jwtSecret)
    if (user.data[0]) {
      return {
        user: user.data[0],
        token
      }
    } else {
      let data = {
        _id: userId,
        createdAt: Date.now()
      }
      await db.collection('user').add(data)
      return {
        user: data,
        token
      }
    }
  }
  登录失败获取报错
  if (!event.token) {
    throw Error('未登录')
  }
  登录成功获取userid
  let auth = jwt.verify(event.token.replace('Bearer', ''), jwtSecret)
  let userId = auth.userId;


  //返回数据给客户端
  return event
};
