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
        default: 
        str = Math.floor(space/(60000*60*24)) + '天前'
            break
    }

    return str
}

export default changeTime