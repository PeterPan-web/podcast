let db = uniCloud.database({
  throwOnNotFound: false,
})
exports.main = async (event, context) => {
  //event为客户端上传的参数
  console.log('event : ', event)
  if (event.api === 'buildbulletin') {
    return await db.collection('bulletin').add({
      content: event.content,
      // userId
    })
  }
  //获取留言
  if (event.api === 'getBulletin') {
    return await db.collection('bulletin').get()
  }
  //返回数据给客户端
  return event
};
