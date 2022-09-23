let db = uniCloud.database({
  throwOnNotFound: false,
})

exports.main = async (event, context) => {

  //发布留言
  if (event.api === 'publish') {
    return await db.collection('message').add({
      content: event.content,
      userinfo: event.userinfo,
      color: event.color,
      time: event.time,
      public: true,
    })
  }
  //获取留言
  if (event.api === 'getMessages') {
    return await db.collection('message').where({
      public: true
    }).get()
  }
  //获取自己的留言
  // if (event.api === 'getMyMessages') {
  //   return await db.collection('message').where({
  //     userId
  //   }).get()
  // }
  //返回给客户端
  return '新消息提醒'
}
