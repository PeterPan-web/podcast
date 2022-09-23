let db = uniCloud.database({
  throwOnNotFound: false,
})
exports.main = async (event, context) => {
  //event为客户端上传的参数
  console.log('event : ', event)
  //获取留言
  if (event.api === 'getTopCard') {
    return await db.collection('TopCard').get()
  }
  //返回数据给客户端
  return event
};
