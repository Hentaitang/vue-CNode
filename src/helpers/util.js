let changeTime = function(value){
    let dataTime = typeof value === 'object' ? value : new Date(value)
    let now = Date.now()
    let lastTime = dataTime.getTime()
    let space = now - lastTime
    let str = ''
    
    switch(true){
        case space < 60000:
            str = '刚刚'
            break
        case space < 60000*60:
            str = Math.floor(space/60000) + '分钟前'
            break
        case space < 60000*60*24:
            str = Math.floor(space/(60000*60)) + '小时前'
            break
        case space < 60000*60*24*30: 
            str = Math.floor(space/(60000*60*24)) + '天前'
            break
        case space < 60000*60*24*30*12: 
            str = Math.floor(space/(60000*60*24*30)) + '月前'
            break
        default:
            str = Math.floor(space/(60000*60*24*30*12)) + '年前'
    }

    return str
}

let tabChange = function(value){
    if(value.good){
        return '精华'
    }else if(value.top){
        return '置顶'
    }else if(value.tab === 'ask'){
        return '问答'
    }else if(value.tab === 'share'){
        return '分享'
    }else{
        return '招聘'
    }
}

let needChange = function(value){
    if(value.tab === 'ask'){
        return '问答'
    }else if(value.tab === 'share'){
        return '分享'
    }else{
        return '招聘'
    }
}

export default {
    tabChange,
    changeTime,
    needChange
}