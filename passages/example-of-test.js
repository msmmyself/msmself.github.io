   
    // 评分示例逻辑，可根据需要添加更多的规则和逻辑
    var age = document.getElementById('age').value;
    if (age >= 18 && age <= 35) {
        score += 10; // 假设我们想给18至35岁的用户加分
    }
    
    var browser = document.getElementById('browser').value;
    if (browser === 'chrome') {
        score += 5; // 如果用户使用 Chrome 浏览器加 5 分
    }
    
    // 检查多个复选框，每个选中项加分
    var interests = document.getElementsByName('interest');
    for (var i = 0; i < interests.length; i++) {
        if(interests[i].checked) {
            score += 2; // 如果用户有选中的兴趣，每个加 2 分
        }
    }
    
    // 可以在这里处理分数，比如显示在页面上或者发送到服务器
    alert("您的分数是：" + score);