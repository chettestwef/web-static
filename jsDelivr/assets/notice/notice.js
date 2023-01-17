  //看啥看，不许看！

  Swal.fire({
    icon: 'error',
    confirmButtonText: '好的',
    confirmButtonColor: '#FF6666',
    title:'服务器公告',
    html:
    '<strong style="color:FF6666;font-size:25px">本站状态：一级故障</strong><br>' +
    '<strong><font color="#00CCFF">日期：2023/01/17 21:39</strong>' +
    '</br></br>因<b style="color:FF6666">网站静态资源服务器</b>受到攻击, ' +
    '导致部分静态资源<b style="color:FF6666">无法加载</b>，<b style="color:FF6666">网站可能会</b>出现<b style="color:FF6666">显示错误</b>问题 ' +
    '</br></br>您可以通过下方链接查看我们所有<b>服务</b>的<b>运行状态</b></font>',
    footer: '<a style="color:#00CCFF" target="_blank" href="https://status.oneoc.xyz">服务状态检测系统</a>'
  })
  
  
  
  
    // 提醒类型： success,error,warning.info,question
  
